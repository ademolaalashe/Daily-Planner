// Adding date to header
const today = moment().format('Do MMM YYYY');
$('#currentDay').text(today);

// Function to update the styles based on time

function rowColour() {
    let now = moment().format('HH');
    $('.row').each(function() {
        let timeBlock = moment($(this).find('.time-block').text(), 'HH:00').format('HH');

        if (timeBlock < now ) {
            $(this).addClass('past').removeClass('present future');
        }

        if (timeBlock === now ) {
            $(this).addClass('present').removeClass('past future');
        }

         if (timeBlock > now ) {
            $(this).addClass('future').removeClass('past present');
        }


    })
}

// 'this' is the same as 'event.target'

rowColour()

// save button event listener
$('.container').on('click', '.saveBtn', function (event) {
    
    // referencing data-index
    let index = $(this).attr('data-index');
    
    // referencing time-block with the same data-index as the clicked saveBtn in the current loop(in the same row)
    let timeBlock = $(`.time-block[data-index="${index}"]`);
    
    // referencing textarea with the same data-index as the clicked saveBtn in the current loop
    let taskInput = $(`textarea[data-index="${index}"]`).val();

  // save to local here

  // if none of the textarea input assigned to the index of time-block in the locally stored object: create an object.
  if (!storedTasks[index]) {
    storedTasks[index] = {
      time: timeBlock,
      task: taskInput,
    };
    // else update task text in the object for the corresponding time-block index
  } else {
    storedTasks[index].time = timeBlock;
    storedTasks[index].task = taskInput;
  }

  // pass the object above to the storage
  localStorage.setItem('storedTasks', JSON.stringify(storedTasks));
});

// get the object in the storage or if doesn't exist return empty array
let storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];

// interate throgh each textarea
$('textarea').each(function () {
    
    // specify data-index variable
    let index = $(this).attr('data-index');
   
    // if no input for task found for this particular time-block, empty value
    if (storedTasks[index] === null || storedTasks[index] === undefined) {
      $(this).val('');
    } else {
      
    // display value of task in the textarea
      $(this).val(storedTasks[index].task);
    }
  });
