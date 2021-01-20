'use strict';

const events = document.querySelectorAll('.event');

events.forEach(event => {
    const date = dayjs(event.dataset.date).format("h:mma on ddd MMMM DD, YYYY");
    const dateElement = document.querySelector(".date");

    dateElement.innerHTML = date;
});


