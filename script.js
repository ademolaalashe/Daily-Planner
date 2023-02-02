// Adding date to header
const today = moment().format('Do MMM YYYY');
$('#currentDay').text(today);

// Test code below: Greetings changes depending on the time of day

// let today = new Date();
// let hourNow = today.getHours();
// let greetings;

// if (hourNow > 18) {
//     greeting = "Good evening!";
// } else if (hourNow > 12) {
//     greeting = "Good afternoon!";
// } else if (hourNow > 0) {
//     greeting = "Good morning!";
// } else {
//     greeting = "Welcome!"
// }

// document.write("<h3>" + greeting + "</h3>");

// Function to update the styles based on time

function rowColour() {
    let now = moment().format("HH");
    $(".row").each(function() {
        let timeBlock = moment($(this).find(".time-block").text(), "HH:00").format("HH");

        if (timeBlock < now ) {
            $(".row").addClass("past").removeClass("present future");
        }

        if (timeBlock === now ) {
            $(".row").addClass("present").removeClass("past future");
        }

         if (timeBlock > now ) {
            $(".row").addClass("future").removeClass("past present");
        }


    })
}

rowColour()

// setting new submission 
localStorage.setItem("user", JSON.stringify(user));

