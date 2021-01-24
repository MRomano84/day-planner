$(document).ready(function () {
    'use strict';

    const now = dayjs().format("h:mma - ddd MMMM DD, YYYY");

    const $dateElement = $("#navbar-subtitle");
    $dateElement.text(now);

    let currentHour = dayjs().format("H");

    let $plannerContainer = $("div.container");
    $plannerContainer.empty();


    let dayPlans = JSON.parse(localStorage.getItem("dayPlans"));
    if (dayPlans !== null) {
        plansArr = dayPlans;
    }




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
        $inputDiv.addClass("col-9 text");

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


    //Save hourly activities to local storage...I CANNOT GET THIS TO WORK...
    $("div.save").on("click", function() {
        var myContent = $("textarea.text").value;

        console.log(myContent);
        // localStorage.setItem("myContent", myContent);

        // function myLoad() {
        //     var myContent = localStorage.getItem("myContent");
        //     document.querySelector("textarea").value = myContent;
        // }


    })
        
        
})



