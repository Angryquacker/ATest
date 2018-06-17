var ngApp = angular.module("myApp", []);
                                    
ngApp.controller('myCon', function($scope) {
    $scope.message = [
        {
            title: 'Yo',
            text: 'Cake',
            date: '1976-02-13',
            location: 'Moravian Hall Square',
            time: '08:24'
        }, 
        {
            title: 'Sup',
            text: 'Food',
            date: '1976-02-14',
            location: 'Nazareth Circle',
            time: '06:54'
        }
    ];
    
    $scope.addM = () => {
        let text = document.getElementById('text').value;
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let loc = document.getElementById('loc').value;
        let time = document.getElementById('time').value;
        
        $scope.message.push({title: title, text: text, date: date, location: loc, time: time});
    };
    
    $scope.newCommunity = () => {
      
    };
});
