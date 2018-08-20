using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Edu.Models;

namespace Edu.Controllers
{
    public class ApiController : Controller
    {
        public ActionResult<string> Index()
        {
            return "somedata";
        }
    }
}
