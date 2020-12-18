
//proof of concept with Iceland
// data [score, gdp, social_support, life_expectancy, freedom, generosity, corruption]
var Iceland = [7.59, 1.40, 1.35, 0.94, 0.67, 0.30, 0.42];


var ctx = document.getElementById('myChart').getContext('2d');

var mychart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['score1', 'score2', 'score3', 'score4', 'score5', 'score6'],
        datasets: [{
            label: "Iceland",
            backgroundColor: 'rgb(126, 237, 148)',
            borderColor: 'rgb(82, 186, 103)',
            data: Iceland
        }]
    },

    // Configuration options go here
    options: {}
});

// rbg(255, 99, 132)
