let calendar = document.querySelector('.calendar');
let prev_month = document.querySelector('#prev-month');
let next_month = document.querySelector('#next-month');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function isLeap(date) {
    if(date.getDate() == 29) {
        return 29;
    } else {
        return 28;
    }
}



function generateCalendar(year, month, day) {
    let calendar_days = calendar.querySelector('.calendar-days');
    let calendar_year = calendar.querySelector('#year');
    let calendar_month = calendar.querySelector('#month');

    const days_of_month = [31, isLeap(date), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    calendar_days.innerHTML = '';

    calendar_year.innerHTML = year;
    calendar_month.innerHTML = month_names[month];

    let first_day = new Date(year, month, 1);
    let k = 1;
    for(let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let dayDiv = document.createElement('div');
        if(i >= first_day.getDay()) {
            dayDiv.innerHTML = k;
            if(k == day) {
                dayDiv.classList.add('current-day');
            }
            k++;
        }
        calendar_days.appendChild(dayDiv);
    }
}

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

generateCalendar(year, month, day);

prev_month.addEventListener('click', function() {
    if(month - 1 > 0) {
        month -= 1;
    } else {
        month = 11;
        year -= 1;
    }
    
    generateCalendar(year, month, day);
});


next_month.addEventListener('click', function() {
    if(month + 1 < 12) {
        month += 1;
    } else {
        month = 1;
        year += 1;
    }
    generateCalendar(year, month, day);
});