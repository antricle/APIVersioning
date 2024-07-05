const { createApp } = Vue

createApp({
    data() {
        return {
            results: []
        }
    },
    mounted() {
        axios.get("http://localhost:5099/api/v1/WeatherForecast/get").then(response => {
            this.results = response.data
        })
    }
}).mount('#app')
