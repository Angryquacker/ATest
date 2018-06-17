var ngApp = angular.module("myApp", []);
                                    
ngApp.controller('myCon', function($scope) {
    $scope.message = [
        {
            title: 'Yo',
            text: 'Cake',
            date: '1976-02-13',
            location: 'Moravian Hall Square',
            sTime: '08:24',
            eTime: '09:24'
        }, 
        {
            title: 'Sup',
            text: 'Food',
            date: '1976-02-14',
            location: 'Nazareth Circle',
            sTime: '06:54',
            eTime: '08:00'
        }
    ];
    
    $scope.addM = () => {
        let text = document.getElementById('text').value;
        let title = document.getElementById('title').value;
        let date = document.getElementById('date').value;
        let loc = document.getElementById('loc').value;
        let sTime = document.getElementById('sTime').value;
        let eTime = document.getElementById('eTime').value;
        
        $scope.message.push({title: title, text: text, date: date, location: loc, sTime: sTime, eTime: eTime});
    };
    
    $scope.newCommunity = () => {
        alert('Feature In Development');
    };
});
