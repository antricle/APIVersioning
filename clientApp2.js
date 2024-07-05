const { createApp } = Vue

createApp({
    data() {
        return {
            results: []
        }
    },
    mounted() {
        axios.get("http://localhost:5099/api/v2/WeatherForecast/getv2").then(response => {
            this.results = response.data
        })
    }
}).mount('#app')
