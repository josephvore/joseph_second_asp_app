using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


//Model for form that includes validation
namespace joseph_first_asp_app.Models
{
    public class GradeModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public Double assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public Double quizzes { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public Double groupProjects { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public Double intex { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public Double exams { get; set; }
    }
}
