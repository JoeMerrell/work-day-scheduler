$(document).ready(function () {// tells engine to load html and css first
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour9 .content").val(localStorage.getItem("hour9"));
    $("#hour10 .content").val(localStorage.getItem("hour10"));
    $("#hour11 .content").val(localStorage.getItem("hour11"));
    $("#hour12 .content").val(localStorage.getItem("hour12"));
    $("#hour13 .content").val(localStorage.getItem("hour13"));
    $("#hour14 .content").val(localStorage.getItem("hour14"));
    $("#hour15 .content").val(localStorage.getItem("hour15"));
    $("#hour16 .content").val(localStorage.getItem("hour16"));
    $("#hour17 .content").val(localStorage.getItem("hour17"));


    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            // console.log(blockHour, currentHour)

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})