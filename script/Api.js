class Api {
    constructor(config) {
        // тело конструктора
        this.config = config;
    }

    getWeather(city){
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.config.key}&lang=ru`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                   return Promise.reject(`Что то пошло не так ${res.status}`)
                })
                .catch((err) => {
                    console.log(err);
                });
    }

    getTime(city){
     return   fetch(`https://worldtimeapi.org/api/timezone/Europe/${city}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что то пошло не так ${res.status}`)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
