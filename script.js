'use strict';

$(document).ready(function() {


    const dateElement = $("div.current-time");
    const date = dayjs().format("h:mma - ddd MMMM DD, YYYY");

    dateElement.text(date);

    
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



