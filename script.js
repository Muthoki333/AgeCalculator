// JavaScript source code

function calculateAge() {

    const today = new Date();
    const birthdateinput = document.getElementById("birthdate").value;
    const birthdateParts = birthdateinput.split("-");
    const birthday = birthdateParts[0];
    const birthmonth = birthdateParts[1] - 1;
    const birthyear = birthdateParts[2];
    const birthDate = new Date(birthyear, birthmonth, birthday);

    const isValidDate = (date) => {
        return (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date))
    };

    if (!isValidDate(birthDate)) {
        alert("Invalid date format: please enter a valid date DD-MM-YYYY");
        return;
    }

    const ageinMilliSeconds = today - birthDate;
    const ageInSeconds = Math.floor(ageinMilliSeconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);


    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `<div class="result-item"><h3> Age:</h3 > <p> ${ageInYears} Years ${ageInMonths} Months  ${ageInDays} days </p>  </div >

                        <div class="result-item"><h3> Months Passed:</h3 > <p> ${ageInMonths} Months  </div >
                        <div class="result-item"><h3> Weeks Passed:</h3 > <p> ${ageInWeeks} Weeks </p>  </div >
                        <div class="result-item"><h3> Days Passed:</h3 > <p>  ${ageInDays} days </p>  </div >
                        <div class="result-item"><h3> Hours Passed:</h3 > <p>  ${ageInHours} Hours </p>  </div >
                        <div class="result-item"><h3> Minutes Passed:</h3 > <p> ${ageInMinutes} Minutes </p>  </div >
                        <div class="result-item"><h3> Seconds Passed:</h3 > <p> ${ageInSeconds} Seconds </p>  </div >
                        <div class="result-item"><h3> Milliseconds Passed:</h3 > <p> ${ageinMilliSeconds} Milliseconds </p>  </div > `;

    resultContainer.style.display = "block";


}
    const ageCalculatorForm = document.getElementById("ageCalculator");

    ageCalculatorForm.addEventListener("submit", (event) => {
        event.preventDefault();
        calculateAge();
    });
