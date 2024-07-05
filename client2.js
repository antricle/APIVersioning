const { createApp } = Vue

createApp({
    data() {
        return {
            results: []
        }
    },
    mounted() {
        axios.get("http://localhost:5099/WeatherForecast/v2").then(response => {
            this.results = response.data
        })
    }
}).mount('#app')