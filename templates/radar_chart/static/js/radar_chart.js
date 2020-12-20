
//proof of concept with switzerland

//data is structured: [score1, score2, score3, score4, score5, score6] total is 7.59
var Switzerland = [1.4, 1.35, 0.94, 0.67, 0.3, 0.42];

var ctx = document.getElementById('myChart').getContext('2d');
var mychart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['score1', 'score2', 'score3', 'score4', 'score5', 'score6'],
        datasets: [{
            label: "Baby's First dataset (Switzerland)'",
            backgroundColor: 'rgb(126, 237, 148)',
            borderColor: 'rgb(82, 186, 103)',
            data: Switzerland
        }]
    },

    // Configuration options go here
    options: {}
});

// rbg(255, 99, 132)
