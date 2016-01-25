angular.module("app", [])
  .controller("ShoppingController", function($scope) {
    
    // "public" data, can be accessed from the view
    $scope.availableItems = [
    	{name: 'lamp', price: 5.95},
    	{name: 'desk', price: 7.50},
    	{name: 'chair', price: 23.95},
    	{name: 'Honda Civic', price: 19999.95}
    ]

    $scope.totalCost = 0;
    $scope.currentItems = [];

    // "private" data, cannot be accessed by the view.
    var taxRate = .18;

    // "public" function, can be accessed from the view. 
    $scope.addItem = function (item) {
    	$scope.currentItems.push(item);
    	updatePrice();
    }

    // "private" function, cannot be accessed by the view.
    function updatePrice() {
    	var sum = 0;
    	for(var i = 0; i < $scope.currentItems.length; i++) {
    		sum += $scope.currentItems[i].price;
    	}

    	$scope.totalCost = sum + (sum * taxRate);
    }
});	