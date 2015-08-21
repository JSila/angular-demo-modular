module.exports = function(demoAppModule) {
    demoAppModule
        .config(Config)
        .controller('GamesController', GamesController);
};

function Config($stateProvider) {
    $stateProvider.state('games', {
        url:'/games',
        templateUrl: '/views/games.html',
        controller: 'GamesController',
        controllerAs: 'gamesCtrl',
        resolve: {
            text: function(Data) {
                return Data.get().then(function(response) {
                    return response.data;
                });
            }
        }
    });
}

function GamesController(text) {
    var vm = this;
    vm.title = 'Games';
    vm.text = text;
}
