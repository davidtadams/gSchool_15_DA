angular.module('realEstate')
  .factory('RealEstateService', RealEstateService)

RealEstateService.$inject = ['$http']

function RealEstateService($http) {
  return {
    getHomes: function() {
      return [{
        address: "123 Sesame St",
        photoURL: "http://photos3.zillowstatic.com/p_c/IS5uam958t2d1z0000000000.jpg",
        beds: 3,
        baths: 1,
        sqfeet: 1000
      }, {
        address: "2740 N Clay St",
        photoURL: "http://photos3.zillowstatic.com/p_h/IS9d0a1r37jtyq1000000000.jpg",
        beds: 3,
        baths: 2,
        sqfeet: 1000
      }, {
        address: "3238 Quivas St",
        photoURL: "http://photos3.zillowstatic.com/p_h/IS5mse54sm7fjd1000000000.jpg",
        beds: 3,
        baths: 2,
        sqfeet: 1500
      }]
    }
  }
}
