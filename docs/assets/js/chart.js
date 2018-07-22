$(function () {
  var graphElement = $("#pokerGraph");
  var chartSetup = false;
  var data;
  $.get('https://s3.amazonaws.com/jamesallhands/averaged_results_3.json.gz').then(function(result){
    data = result;
  });

  $("#pokergraphLink").click(function(e){
    e.preventDefault();
    $("#pokerWinningsModal").modal('show');
    if(!chartSetup){
      chartSetup = true;
      setTimeout(function(){
        setupChart(data);
      }, 200)
    }
  });

  function setupChart(data) {
    graphElement.highcharts({
      title: {
        text: 'Big Blinds Won / Hands Played'
      },
      xAxis: {
        type: 'Hands Played'
      },
      yAxis: {
        title: {
          text: 'Big Blinds'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: { },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [{
        name: 'Total Big Blinds Won',
        data: data
      }]
    });
  }
});
