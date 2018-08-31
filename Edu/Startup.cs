using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Edu.DAL.Context;
using Edu.DAL.UnitOfWork;
using Edu.DAL.UnitOfWork.Implementations;
using Edu.DAL.Services;
using Edu.DAL.Services.Implementations;
using Edu.Models.Identity;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace Edu
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;

            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);


            services.AddDbContext<EduContext>(
                (options) =>
                {
                    options.UseMySql(Configuration.GetConnectionString("Development"));
                },
                ServiceLifetime.Scoped
            );


            services.AddIdentity<User, Role>(
                    (options) =>
                    {
                        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5D);
                        options.Password.RequireNonAlphanumeric = false;
                        options.User.RequireUniqueEmail = true;
                    }
                )
                .AddDefaultTokenProviders()
                .AddEntityFrameworkStores<EduContext>();

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();


            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = true;

                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = Configuration.GetValue<string>("Authentication:Issuer"),
                        
                        ValidAudience = Configuration.GetValue<string>("Authentication:Issuer"),
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetValue<string>("Authentication:Secret"))),
                        ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    };


                    cfg.Events = new JwtBearerEvents()
                    {
                        OnTokenValidated = (ctx) =>
                        {
                            Claim ipClaim = ctx.Principal.Claims.FirstOrDefault((claim) => claim.Type == "adr");
                            if (ipClaim == null || ipClaim.Value
                                != ctx.HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString())
                            {
                                ctx.Fail("Wrong IP address!");
                                return Task.CompletedTask;
                            }

                            ctx.Success();

                            return Task.CompletedTask;
                        }
                    };
                });

            services.Add(new ServiceDescriptor(
                        typeof(IUnitOfWork),
                        (service) =>
                        {
                            return new UnitOfWork(service.GetService<EduContext>());
                        },
                        ServiceLifetime.Scoped
                    ));

            services.AddTransient<IHumanService, HumanService>();
            services.AddSingleton<IConfiguration>(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseCookiePolicy();
            }

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "api",
                    template: "api/{controller}/{action}");
            });

            app.UseSpa((spa) =>
            {
                spa.Options.SourcePath = "./";
                //spa.Options.DefaultPage = new PathString("/dist/index.html");
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer("start");
                }
            });


        }

        //private Task CheckIpAddress()
        //{

        //}

    }
}
