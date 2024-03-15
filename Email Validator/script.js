let submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
    let key = "ema_live_MZ3ZhHMXuD8aVp7lQaVIyefOK4YFQEjw3li9MDaY";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        let str = '';
        for (let key in data) {
            str += `<div>${key}: ${data[key]}</div>`;
        }
        document.getElementById('resultContainer').innerHTML = str;
    } catch (error) {
        console.error('Error:', error);
    }
});
