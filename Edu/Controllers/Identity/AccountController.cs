using Edu.Models.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Edu.Controllers.Identity
{
    [ApiController]
    [Authorize]
    [Route("api/account/")]
    public class AccountController : ControllerBase
    {

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
        }

        [Route("register")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Register([FromBody]RegisterModel model)
        {
            User toCreate = new User();
            toCreate.Email = model.email;
            toCreate.UserName = model.userName;
            IdentityResult result = await _userManager.CreateAsync(toCreate, model.password);

            if (!result.Succeeded)
            {
                return BadRequest();
            }

            await LoginUser(await _userManager.FindByEmailAsync(model.email), model.password, false);

            return Ok();
        }


        [Route("login")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Login([FromBody]LoginModel model)
        {
            if (_signInManager.IsSignedIn(User))
            {
                return BadRequest("AlreadyLoggedIn");
            }
            Microsoft.AspNetCore.Identity.SignInResult result = await LoginUser(await _userManager.FindByEmailAsync(model.email), model.password, true);
            if (!result.Succeeded)
            {
                if (result.IsLockedOut)
                {
                    return BadRequest("LockedOut");
                }
                return BadRequest("WrongUserOrPassword");
            }

            return Ok();
        }



        [Route("logout")]
        [HttpPost]
        public async Task<ActionResult> Logout()
        {
            await LogoutUser();
            return Ok();
        }




        #region Helpers
        private async Task<Microsoft.AspNetCore.Identity.SignInResult> LoginUser(User user, string password, bool lockout)
        {
            return await _signInManager.PasswordSignInAsync(user, password, true, lockout);
        }

        private async Task LogoutUser()
        {
            await _signInManager.SignOutAsync();
            return;
        }

        public class RegisterModel
        {
            public string email { get; set; }
            public string userName { get; set; }
            public string password { get; set; }
        }

        public class LoginModel
        {
            public string email { get; set; }
            public string password { get; set; }
        }
        #endregion


    }
}
