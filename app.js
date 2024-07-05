const { createApp } = Vue

createApp({
    data() {
        return {
            results: []
        }
    },
    mounted() {
        axios.get("http://localhost:5099/WeatherForecast").then(response => {
            this.results = response.data
        })
    }
}).mount('#app')
