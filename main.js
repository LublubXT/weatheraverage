var average_list_together = [];
var dates = [];
var average = 0;

var temps1 = document.getElementById('temps1');
var type1 = document.getElementById('type1');
var total1 = document.getElementById('total1');
var equation1 = document.getElementById('equation1');
var aver1 = document.getElementById('average1');

var temp = document.getElementById('temp');
var date = document.getElementById('date');
var temps = document.getElementById('temps');

function add_to_temp_list(temp, list) {
    list.push(temp);
}

function find_average_temp() {
    for (var i = 0; i < average_list_together.length; i++) {
        average += Number(average_list_together[i]);
    }

    console.log('temps- ', average_list_together);
    temps1.innerHTML = '[' + average_list_together + ']';

    console.log('type-', typeof(average));
    console.log('total- ', Math.floor(average));
    total1.innerHTML = " " + Math.floor(average);

    console.log('equation- ', Math.floor(average), ' / ', average_list_together.length)
    equation1.innerHTML = " " + Math.floor(average) + ' / ' + average_list_together.length;

    average = Number(Math.floor(average) / average_list_together.length);

    console.log('average- ', Math.floor(average));
    aver1.innerHTML = " " + Math.floor(average);

    graph();
}

function add_list() {
    add_to_temp_list(temp.value, average_list_together);
    add_to_temp_list(date.value, dates);
    temps.innerHTML = average_list_together;
}

function delete_list() {
    average_list_together.pop();
    dates.pop();
    temps.innerHTML = average_list_together;
}

function graph() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dates,
            datasets: [{
                label: 'Temps',
                backgroundColor: 'rgba(0, 174, 255, 0.5)',
                borderColor: 'rgba(0, 174, 255, 1)',
                pointBackgroundColor: 'rgb(0, 81, 119)',
                pointBorderColor: 'rgb(0, 81, 119)',
                data: average_list_together
            }]
        },

        // Configuration options go here
        options: {
            animation: {
                duration: 0 // general animation time
            },
            hover: {
                animationDuration: 0 // duration of animations when hovering an item
            },
            responsiveAnimationDuration: 0 // animation duration after a resize
        }
    });
}
graph();