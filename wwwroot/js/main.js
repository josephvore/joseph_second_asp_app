

$("#submitButton").click(function () {

    //Setting the variables from form
    if (!$('#assignments').val() || $('#assignments').val() > 100 || $('#assignments').val() < 0) {
        alert('Please Enter a Correct Value on Assignments');
    }
    else {
        let assignments = $("#assignments").val();

        if (!$('#groupProjects').val() || $('#groupProjects').val() > 100 || $('#groupProjects').val() < 0) {
            alert('Please Enter a Correct Value on Group Projects');
        }
        else {
            let groupProjects = $("#groupProjects").val();

            if (!$('#quizzes').val() || $('#quizzes').val() > 100 || $('#quizzes').val() < 0) {
                alert('Please Enter a Correct Value on Quizzes');
            }
            else {
                let quizzes = $("#quizzes").val();

                if (!$('#exams').val() || $('#exams').val() > 100 || $('#exams').val() < 0) {
                    alert('Please Enter a Correct Value on Exams');
                }
                else {
                    let exams = $("#exams").val();

                    if (!$('#intex').val() || $('#intex').val() > 100 || $('#intex').val() < 0) {
                        alert('Please Enter a Correct Value on Intex');
                    }
                    else {
                        let intex = $("#intex").val();

                        //Setting the variables using the weights from the syllabus
                        assignments = assignments * 0.5;
                        groupProjects = groupProjects * 0.1;
                        quizzes = quizzes * 0.1;
                        exams = exams * 0.2;
                        intex = intex * 0.1;

                        //Creating the final grade
                        let finalGrade = assignments + groupProjects + quizzes + exams + intex;

                        let finalLetterGrade;

                        //Determining the final letter grade
                        if (finalGrade >= 93) {
                            finalLetterGrade = "A";
                        }
                        else if (finalGrade >= 90 && finalGrade < 93) {
                            finalLetterGrade = "A-";
                        }
                        else if (finalGrade >= 87 && finalGrade < 90) {
                            finalLetterGrade = "B+";
                        }
                        else if (finalGrade >= 83 && finalGrade < 87) {
                            finalLetterGrade = "B";
                        }
                        else if (finalGrade >= 80 && finalGrade < 83) {
                            finalLetterGrade = "B-";
                        }
                        else if (finalGrade >= 77 && finalGrade < 80) {
                            finalLetterGrade = "C+";
                        }
                        else if (finalGrade >= 73 && finalGrade < 77) {
                            finalLetterGrade = "C";
                        }
                        else if (finalGrade >= 70 && finalGrade < 73) {
                            finalLetterGrade = "C-";
                        }
                        else if (finalGrade >= 67 && finalGrade < 70) {
                            finalLetterGrade = "D+";
                        }
                        else if (finalGrade >= 63 && finalGrade < 67) {
                            finalLetterGrade = "D";
                        }
                        else if (finalGrade >= 60 && finalGrade < 63) {
                            finalLetterGrade = "D-";
                        }
                        else if (finalGrade < 60) {
                            finalLetterGrade = "E";
                        }

                        //Post final number grade and final letter grade
                        alert("Final Number Grade: " + finalGrade + "\n \n" +
                            "Final Letter Grade: " + finalLetterGrade);
                    }
                }
            }
        }
    }
});
    
    //let groupProjects = $("#groupProjects").val();
    //let quizzes = $("#quizzes").val();
    //let exams = $("#exams").val();
    //let intex = $("#intex").val();

    

