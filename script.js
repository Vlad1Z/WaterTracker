const tg = window.Telegram.WebApp;

function addWater(amount) {
    // Отправка данных на сервер
    const userId = tg.initDataUnsafe.user.id;
    fetch("https://yourdomain.com/update_water", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: userId,
            water_amount: amount
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("current-intake").textContent = `${data.current_water} мл`;
    })
    .catch(error => console.error("Ошибка:", error));
}
