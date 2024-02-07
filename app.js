let tg = window.Telegram.WebApp;
tg.expand();
let finish_from = document.getElementById("finish__from");

finish_from.addEventListener("click", () => {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let growth = document.getElementById("growth").value;
    let gender = document.getElementById("gender").value;
    let activity_level = document.getElementById("activity-level").value;
    let goal = document.getElementById("goal").value;

    let data = {
        age: age,
        weight: weight,
        growth: growth,
        gender: gender,
        activity_level: activity_level,
        goal: goal
    };
    tg.sendData(JSON.stringify(data));
    tg.close();
});
