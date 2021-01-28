using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using joseph_first_asp_app.Models;
using Microsoft.AspNetCore.Mvc;

//Controllers

namespace joseph_first_asp_app.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        // Returns the grade calculator view 
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        // Returns the final grade, or displays errors when present
        [HttpPost]
        public IActionResult GradeCalculator(GradeModel appResponse)
        {
            return View();
        }
    }
}
