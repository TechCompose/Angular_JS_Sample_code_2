angular.module('chartApp', ['angularCharts']);

function MainCtrl($scope) {
  $scope.config = {
    title: 'Products',
    tooltips: true,
    labels: false,    
    mouseover: function() {},
    mouseout: function() {},
    click: function() {},
    legend: {
      display: true,
      //could be 'left, right'
      position: 'right'
    }
  };

  $scope.data = {
    series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
    data: [{
      x: "Laptops",
      y: [100, 500, 900]      
    }, {
      x: "Desktops",
      y: [300, 100, 100]
    }, {
      x: "Mobiles",
      y: [351]
    }, {
      x: "Tablets",
      y: [54, 0, 879]
    }]
  };
}