using Edu.Models.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Edu.Controllers.Identity
{
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/account/")]
    public class AccountController : ControllerBase
    {

        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;

        private readonly IConfiguration config;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration config)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.config = config;
        }

        [Route("register")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Register([FromBody]RegisterModel model)
        {
            User toCreate = new User();
            toCreate.Email = model.email;
            toCreate.UserName = model.userName;
            IdentityResult result = await userManager.CreateAsync(toCreate, model.password);

            if (!result.Succeeded)
            {
                return BadRequest();
            }

            User user = await userManager.FindByEmailAsync(model.email);

            await LoginUser(user, model.password, false);

            return Ok(GenerateJwtToken(model.email, user));
        }


        [Route("login")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> Login([FromBody]LoginModel model)
        {
            User user = await userManager.FindByEmailAsync(model.email);
            Microsoft.AspNetCore.Identity.SignInResult result = await LoginUser(user, model.password, true);
            if (!result.Succeeded)
            {
                if (result.IsLockedOut)
                {
                    return BadRequest("LockedOut");
                }
                return BadRequest("WrongUserOrPassword");
            }

            return Ok(GenerateJwtToken(model.email, user));
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
            return await signInManager.CheckPasswordSignInAsync(user, password, lockout);
        }


        private async Task LogoutUser()
        {
            await signInManager.SignOutAsync();
            return;
        }


        private string GenerateJwtToken(string email, User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim("adr", HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString())
            };

            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config.GetValue<string>("Authentication:Secret")));
            SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            DateTime expires = DateTime.Now.AddDays(this.config.GetValue<int>("Authentication:ExpiryTimeInDays"));

            JwtSecurityToken token = new JwtSecurityToken(
                config.GetValue<string>("Authentication:Issuer"),
                config.GetValue<string>("Authentication:Issuer"),
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        public struct RegisterModel
        {
            public string email { get; set; }
            public string userName { get; set; }
            public string password { get; set; }
        }

        public struct LoginModel
        {
            public string email { get; set; }
            public string password { get; set; }
        }
        #endregion
    }
}
