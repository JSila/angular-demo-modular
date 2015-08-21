module.exports = function(demoAppModule) {
    demoAppModule
        .factory('Data', Data)
}

function Data($http) {
    return {
        get:get
    };

    function get() {
        return $http.get('/data', {
            cache: true
        });        
    }
}
