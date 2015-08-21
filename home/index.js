module.exports = function(demoAppModule) {
    demoAppModule
        .config(Config)
        .controller('HomeController', HomeController);
}

function Config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url:'/',
        templateUrl: '/views/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        resolve: {
            text: function(Data) {
                return Data.get().then(function(response) {
                    return response.data;
                });
            }
        }
    });
}

function HomeController(text) {
    var vm = this;
    vm.title = 'Index'
    vm.text = text;
}
