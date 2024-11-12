//Get user information from the form
document.getElementById("generatePlan").addEventListener('click', function (event) {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;
    let pattern = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //email input validation
    if (email === "") {
        alert("Enter your email");
        event.preventDefault();
    } else if (!pattern.test(email)) {
        alert("Enter a valid email address");
        event.preventDefault();
    } else {
        // Collect meal inputs for Monday 
        let mondayBreakfast = document.getElementById("mondayBreakfast").value;
        let mondaySnack1 = document.getElementById("mondaySnack1").value;
        let mondayLunch = document.getElementById("mondayLunch").value;
        let mondaySnack2 = document.getElementById("mondaySnack2").value;
        let mondayDinner = document.getElementById("mondayDinner").value;

        // Collect meal inputs for Tuesday 
        let tuesdayBreakfast = document.getElementById("tuesdayBreakfast").value;
        let tuesdaySnack1 = document.getElementById("tuesdaySnack1").value;
        let tuesdayLunch = document.getElementById("tuesdayLunch").value;
        let tuesdaySnack2 = document.getElementById("tuesdaySnack2").value;
        let tuesdayDinner = document.getElementById("tuesdayDinner").value;

        // Collect meal inputs for Wednesday 
        let wednesdayBreakfast = document.getElementById("wednesdayBreakfast").value;
        let wednesdaySnack1 = document.getElementById("wednesdaySnack1").value;
        let wednesdayLunch = document.getElementById("wednesdayLunch").value;
        let wednesdaySnack2 = document.getElementById("wednesdaySnack2").value;
        let wednesdayDinner = document.getElementById("wednesdayDinner").value;

        // Collect meal inputs for Thursday 
        let thursdayBreakfast = document.getElementById("thursdayBreakfast").value;
        let thursdaySnack1 = document.getElementById("thursdaySnack1").value;
        let thursdayLunch = document.getElementById("thursdayLunch").value;
        let thursdaySnack2 = document.getElementById("thursdaySnack2").value;
        let thursdayDinner = document.getElementById("thursdayDinner").value;

        // Collect meal inputs for Friday 
        let fridayBreakfast = document.getElementById("fridayBreakfast").value;
        let fridaySnack1 = document.getElementById("fridaySnack1").value;
        let fridayLunch = document.getElementById("fridayLunch").value;
        let fridaySnack2 = document.getElementById("fridaySnack2").value;
        let fridayDinner = document.getElementById("fridayDinner").value;

        // Collect meal inputs for Saturday 
        let saturdayBreakfast = document.getElementById("saturdayBreakfast").value;
        let saturdaySnack1 = document.getElementById("saturdaySnack1").value;
        let saturdayLunch = document.getElementById("saturdayLunch").value;
        let saturdaySnack2 = document.getElementById("saturdaySnack2").value;
        let saturdayDinner = document.getElementById("saturdayDinner").value;

        // Collect meal inputs for Sunday 
        let sundayBreakfast = document.getElementById("sundayBreakfast").value;
        let sundaySnack1 = document.getElementById("sundaySnack1").value;
        let sundayLunch = document.getElementById("sundayLunch").value;
        let sundaySnack2 = document.getElementById("sundaySnack2").value;
        let sundayDinner = document.getElementById("sundayDinner").value;

        // Define window dimensions
        const width = 600;
        const height = 700;

        // Calculate the center position
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        // Define HTML content for the meal plan window
        myText = `
        <html>
        <head>
           <title>Meal Plan</title>
           <link rel="stylesheet" href="styles.css">
           <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
        </head>

        <body id="newWindowBody">
        <div id = "contentDownload">
            <h1>Weekly Meal Plan for ${fName} ${lName}</h1>
            <p>Let's create your meal plan for the week. Your goal is: ${goal}</p>
            <h2>Monday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${mondayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${mondaySnack1}</span></p>
                <p class="meal">Lunch: <span>${mondayLunch}</span></p>
                <p class="meal">Second Snack: <span>${mondaySnack2}</span></p>
                <p class="meal">Dinner: <span>${mondayDinner}</span></p>
            </div>
            <h2>Tuesday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${tuesdayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${tuesdaySnack1}</span></p>
                <p class="meal">Lunch: <span>${tuesdayLunch}</span></p>
                <p class="meal">Second Snack: <span>${tuesdaySnack2}</span></p>
                <p class="meal">Dinner: <span>${tuesdayDinner}</span></p>
            </div>
            <h2>Wednesday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${wednesdayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${wednesdaySnack1}</span></p>
                <p class="meal">Lunch: <span>${wednesdayLunch}</span></p>
                <p class="meal">Second Snack: <span>${wednesdaySnack2}</span></p>
                <p class="meal">Dinner: <span>${wednesdayDinner}</span></p>
            </div>
            <h2>Thursday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${thursdayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${thursdaySnack1}</span></p>
                <p class="meal">Lunch: <span>${thursdayLunch}</span></p>
                <p class="meal">Second Snack: <span>${thursdaySnack2}</span></p>
                <p class="meal">Dinner: <span>${thursdayDinner}</span></p>
            </div>
            <h2>Friday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${fridayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${fridaySnack1}</span></p>
                <p class="meal">Lunch: <span>${fridayLunch}</span></p>
                <p class="meal">Second Snack: <span>${fridaySnack2}</span></p>
                <p class="meal">Dinner: <span>${fridayDinner}</span></p>
            </div>
            <h2>Saturday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${saturdayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${saturdaySnack1}</span></p>
                <p class="meal">Lunch: <span>${saturdayLunch}</span></p>
                <p class="meal">Second Snack: <span>${saturdaySnack2}</span></p>
                <p class="meal">Dinner: <span>${saturdayDinner}</span></p>
            </div>
            <h2>Sunday</h2>
            <div class="day">
                <p class="meal">Breakfast: <span>${sundayBreakfast}</span></p>
                <p class="meal">First Snack: <span>${sundaySnack1}</span></p>
                <p class="meal">Lunch: <span>${sundayLunch}</span></p>
                <p class="meal">Second Snack: <span>${sundaySnack2}</span></p>
                <p class="meal">Dinner: <span>${sundayDinner}</span></p>
            </div>
        </div>
            <!-- Print and Download buttons -->
            <button type="button" id="printPlanner">Print Planner</button>
            <button type="button" id="downloadPlanner">Download Planner</button>
            <!-- Script to add event listeners in the new window -->
            <script>
                <!--Print button-->
                document.getElementById("printPlanner").addEventListener('click', function () {
                    window.print();
                });

                <!--Download the meal planner button-->
                document.getElementById("downloadPlanner").addEventListener('click', () => {
                    <!--reference which element to download-->
                    const content = document.getElementById("contentDownload"); 

                    <!-- Use html2pdf to generate and download the PDF-->
                    html2pdf()
                        .set({
                            margin: 1,
                            filename: 'Meal_Plan_Form.pdf',
                            image: { type: 'jpeg', quality: 1 },
                            html2canvas: { scale: 1 },
                            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                        })
                        .from(content)
                        .save();
                });
            </script>
        </body>
        </html>
    `;

        //Open a new window with a meal plan based on user input and write the HTML content to it
        flyWindow = window.open('about:blank', 'mealPlanner', `width=${width},height=${height},left=${left},top=${top}`);
        flyWindow.document.write(myText);
        flyWindow.document.close();
    }
});

//Reset button
document.getElementById("reset").addEventListener('click', function () {
    document.forms.mealPlanForm.reset();
});





