'use strict';

const events = document.querySelectorAll('.event');

events.forEach(event => {
    const date = dayjs().format("h:mma - ddd MMMM DD, YYYY");
    const dateElement = document.querySelector(".current-time");

    dateElement.innerHTML = date;
});


