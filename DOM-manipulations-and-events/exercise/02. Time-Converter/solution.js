function attachEventsListeners() {
    const divs = [...document.querySelectorAll('main div')];

    const rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    divs.forEach(el => {
        el.children[2].addEventListener('click', onClick);
    })

    function convert(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function onClick(e){
        const targetValue = e.target.parentElement.children[1].value;
        const unit = e.target.parentElement.children[1].id;
        const result = convert(targetValue, unit);
        for (const key in result) {
            document.getElementById(key).value = result[key];
        }
    }
}