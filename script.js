// Adding date to header
const today = moment().format('Do MMM YYYY');
$('#currentDay').text(today);

// Function to update the styles based on time

function rowColour() {
    let now = moment().format("HH");
    $(".row").each(function() {
        let TimeBlock = moment($(this).find(".time-block").text(), "HH:00").format("HH");
    })
}
