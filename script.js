$(document).ready(function() {
    'use strict';

    const now = dayjs().format("h:mma - ddd MMMM DD, YYYY");

    const $dateElement = $("#navbar-subtitle");
    $dateElement.text(now);

    let currentHour = dayjs().format("H");

    let savedActivities = JSON.parse(localStorage.getItem("savedActivities"));

    let $plannerContainer = $("div.container");
    $plannerContainer.empty();




    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;


        //building rows
        let $rowDiv = $("<div>");
        $rowDiv.addClass("row");
        $rowDiv.addClass("plannerRow");
        $rowDiv.addClass("dailyPlan");
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

        let $inputDiv = $("<textarea>");
        $inputDiv.addClass("col-9");

        $rowDiv.append($inputDiv);
        $inputDiv.append($activitySpan);




        //building save area
        let $saveDiv = $("<div>");
        $saveDiv.addClass("col-1 save");

        let $saveBtn = $("<i>");
        $saveBtn.attr("id", `saveid-${index}`);
        $saveBtn.attr("save-id", index);
        $saveBtn.attr("class", "fas fa-save");
        // $saveBtn.attr('src', "./Floppy-Disk-icon.png")



        $rowDiv.append($saveDiv);
        $saveDiv.append($saveBtn);


        changeRowColor($rowDiv, hour);




        $rowDiv.appendTo($plannerContainer);
    };



    // Update row color

    function changeRowColor($rowHour, hour) {
        
        if (hour < currentHour) {
            $rowHour.css("background-color", "lightgrey")
        } else if (hour > currentHour) {
            $rowHour.css("background-color", "lightgreen")
        } else {
            $rowHour.css("background-color", "tomato")

        }
    };





    //NEED TO: Save hourly activities to local storage...
    $("i").on("click", function(event) {
        event.preventDefault();

        let $index = $(this).attr("save-id");

        let inputId = "#input-" + $index;
        let $value = $(inputId).val();

        textArr = $value;

        localStorage.setItem("savedActivities", JSON.stringify(textArr));
    })
    // const saveActivity = function(event) {
    //     let activity = {
    //         Activity: $("textarea input.hour-index[i]").val();
    //     }
    //     console.log(event);
    // }

    // $("$saveDiv").on("click", saveActivity);

    // $(".save")on("click", function(event) {
    //     event.preventDefault();

    //     let $index = $(this).attr("save-id");

    //     let inputId = "#input" + $index;
    //     let $value = $(inputId).val();
    // })













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



