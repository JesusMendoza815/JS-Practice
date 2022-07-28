const d = document;

export function digitalClock(clock,btnPlay,btnStop) {
    let interval;
  d.addEventListener('click', (e) => {
    if (e.target.matches(btnPlay)) {
        interval = setInterval(() => {
            let hour = new Date().toLocaleTimeString();
            d.querySelector(clock).innerHTML = `<h3>${hour}</h3>`;      
        }, 1000);

        e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
        clearInterval(interval);
        d.querySelector(clock).innerHTML = null;
        d.querySelector(btnPlay).disabled = false;
    }
  })
}

export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const alarm = d.createElement('audio');
    alarm.src = sound;

    document.addEventListener('click', (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setInterval(() => {
                alarm.play();
            }, 1500);
            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            alarm.currentTime = 0;
            alarm.pause();
            clearInterval(alarmTempo);
            d.querySelector(btnPlay).disabled = false;
        }
    })
}