'use strict';

$(document).ready(function() {

    const now = dayjs().format("h:mma - ddd MMMM DD, YYYY");

    const $dateElement = $("#navbar-subtitle");
    $dateElement.text(now);

    let $plannerContainer = $("div.container");

    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;


        //building rows
        let $rowDiv = $("<div>");
        $rowDiv.addClass("row");
        $rowDiv.addClass("plannerRow");
        $rowDiv.attr("hour-index", hour);





        //building time div
        let $timeDiv = $("<div>");
        $timeDiv.addClass("col-2");

        const $timeBoxSpan = $("<span>");
        $timeBoxSpan.attr("class", "timeBox");

        let displayHour = 0;
        let ampm = "";
        if (hour > 12) {
            displayHour = hour - 12;
            ampm = "pm";
        } else {
            displayHour = hour;
            ampm = "am";
        }




        //building input areas
        let $activitySpan = $("<input>");

        $activitySpan.attr("id", `input-${index}`);

        $timeBoxSpan.text(`${displayHour} ${ampm}`);

        $rowDiv.append($timeDiv);
        $timeDiv.append($timeBoxSpan);






        $plannerContainer.append(rowDiv);
    };


    // let $activity = $("input.activity").val();


    // localStorage.setItem("Activity", $activity);
    
    
    
    // function getActivity() {
    //     let todo = localStorage.getItem("Activity");
    //     let theActivity = JSON.parse(todo);
        
    //     if (!$activity) {
    //         return;
    //     } 
    //     $activity.text(theActivity);
    // }
    
    // $("button.saveBtn").on("click", $activity);
    
    
    // getActivity();
    // console.log(getActivity);
    // const events = $('.event');

    // for(let i = 0; i < events.length; i++) {
    //     const date = dayjs().format("h:mma - ddd MMMM DD, YYYY");
    //     const dateElement = $("div.current-time");

    //     dateElement.text(date);
    // }
    // // events.forEach(event => {
    //     const date = dayjs().format("h:mma - ddd MMMM DD, YYYY");
    //     const dateElement = $("div.current-time");
    
    //     console.log(dateElement);
    // });

})



