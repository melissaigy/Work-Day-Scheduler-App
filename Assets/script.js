setInterval(function(){
    var today = moment().format('dddd, MMMM Do, h:mm:ss a');
  $("#currentDay").text(today)
}, 1000)


$("#hr-9 .description").val(localStorage.getItem("hr-9"));
$("#hr-10 .description").val(localStorage.getItem("hr-10"));
$("#hr-11 .description").val(localStorage.getItem("hr-11"));
$("#hr-12 .description").val(localStorage.getItem("hr-12"));
$("#hr-13 .description").val(localStorage.getItem("hr-13"));
$("#hr-14 .description").val(localStorage.getItem("hr-14"));
$("#hr-15 .description").val(localStorage.getItem("hr-15"));
$("#hr-16 .description").val(localStorage.getItem("hr-16"));
$("#hr-17 .description").val(localStorage.getItem("hr-17"));

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, text);

    window.alert("Event Saved!");
})


function timeTracker() {
    var time = moment().hour();

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hr-")[1]);

        if (timeBlock < time) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (timeBlock === time) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
        // console.log(timeBlock)
    })
}

timeTracker();