// Adding date to header
const today = moment().format('Do MMM YYYY');
$('#currentDay').text(today);


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

