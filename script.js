// Adding date to header
const today = moment().format('Do MMM YYYY');
$('#currentDay').text(today);

// Function to update the styles based on time

function rowColour()
{
	let now = moment().format('HH');
	$('.row').each(function ()
	{
		let timeBlock = moment($(this).find('.time-block').text(), 'HH:00').format('HH');

		if (timeBlock < now)
		{
			$(this).addClass('past').removeClass('present future');
		}

		if (timeBlock === now)
		{
			$(this).addClass('present').removeClass('past future');
		}

		if (timeBlock > now)
		{
			$(this).addClass('future').removeClass('past present');
		}


	})
}

// 'this' is the same as 'event.target'

rowColour()

// Save button event listener
$('.container').on('click', '.saveBtn', function (event)
{

	// Referencing data-index
	let index = $(this).attr('data-index');

	// Referencing time-block with the same data-index as the clicked saveBtn in the current loop(in the same row)
	let timeBlock = $(`.time-block[data-index="${index}"]`);

	// Referencing textarea with the same data-index as the clicked saveBtn in the current loop
	let taskInput = $(`textarea[data-index="${index}"]`).val();

	// Save to local here

	// If none of the textarea input assigned to the index of time-block in the locally stored object: create an object.
	if (!storedTasks[index])
	{
		storedTasks[index] = {
			time: timeBlock,
			task: taskInput,
		};
		// Else update task text in the object for the corresponding time-block index
	}
	else
	{
		storedTasks[index].time = timeBlock;
		storedTasks[index].task = taskInput;
	}

	// Pass the object above to the storage
	localStorage.setItem('storedTasks', JSON.stringify(storedTasks));

	// Successful save
	$('.container').prepend(
		'<p class="save-success text-center">Task has been added to the <code>localStorage</code></p>'
	);

	// Remove save success element after 1 second

	setTimeout(() =>
	{
		$('.save-success').remove();
	}, 1000);

});



// Get the object in the storage or if doesn't exist return empty array
let storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];

// Interate throgh each textarea
$('textarea').each(function ()
{

	// Specify data-index variable
	let index = $(this).attr('data-index');

	// If no input for task found for this particular time-block, empty value
	if (storedTasks[index] === null || storedTasks[index] === undefined)
	{
		$(this).val('');
	}
	else
	{

		// Display value of task in the textarea
		$(this).val(storedTasks[index].task);
	}
});