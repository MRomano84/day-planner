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
        
        
        $timeBoxSpan.text(`${displayHour} ${ampm}`);
        
        $rowDiv.append($timeDiv);
        $timeDiv.append($timeBoxSpan);





        //building input areas
        let $activitySpan = $("<input>");

        $activitySpan.attr("id", `input-${index}`);
        $activitySpan.attr('hour-index', index);
        $activitySpan.attr('type', 'text');
        $activitySpan.attr('class', 'dailyPlan');

        let $inputDiv = $("<div>");
        $inputDiv.addClass("col-9");

        $rowDiv.append($inputDiv);
        $inputDiv.append($activitySpan);




        //building save area
        let $saveDiv = $("<div>Save</div>");
        $saveDiv.addClass("col-1");

        let $saveBtn = $('<i>');
        $saveBtn.attr('id', `saveid-${index}`);
        $saveBtn.attr('save-id', index);
        $saveBtn.attr('class', "save");



        $rowDiv.append($saveDiv);
        $saveDiv.append($saveBtn);







        $rowDiv.appendTo($plannerContainer);
    };



    //NEED TO: Update row color





    //NEED TO: Save hourly activities to local storage...
















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



