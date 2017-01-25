var app = angular.module("index-app", []);

//app.config(function ($httpProvider) {
//    $httpProvider.defaults.usexdomain = true;
//    $httpProvider.defaults.headers.common = 'content-type: application/json';
//    delete $httpProvider.defaults.headers.common['x-requested-with'];
//})

app.controller('EmployeesCtrl', function ($scope, $http) {
    $scope.GetEmployee = function () {
        console.log("fdsgd");
        var url = "http://localhost:4404/EmployeeDetails";
        $scope.emplooyeesList = {};
        //$http.headers(
        //    {
        //        'Access-Control-Allow-Origin': '*',
        //        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        //        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        //    });
        $http
            //.get(url, { header: { 'Access-Control-Allow-Origin': '*' } })
            .get(url)
                .then(function OnSuccess(response) {
                    $scope.emplooyeesList = response.data;
                    console.log(response.data);
                }, function OnFailure(response) {
                    console.log(response);
                })
    }

    $scope.GetEmployee();

    $scope.PostEmployee = function () {
        var url = "http://localhost:4404/EmployeeDetails";
        var employee = {};
        console.log($scope.Employee_Id);
        
     
        employee.Employee_Id = $scope.Employee_Id;
        employee.FirstName = $scope.FName;
        employee.LastName = $scope.LName;
        employee.PhoneNo = $scope.PhoneNo;
        employee.Age = $scope.Age;
        employee.Email_Id = $scope.Email_Id;
        employee.Status = $scope.Status;

        console.log(employee);
        $http
            .post(url, employee)
                .then(function OnSuccess(response) {
                    alert("Employee Added");
                    console.log(response);
  
                }, function OnFailure(response) {
                    alert("New Employee could not be added");
                    console.log(response);
                })
    }

    $scope.Put1Employee = function () {
        var url = "http://localhost:4404/EmployeeDetails/" + $scope.Employee_Id1;
        //var url = "http://localhost:4404/EmployeeDetails/acds";
        var employee = {};
        //header('Access-Control-Allow-Origin: *');
        //header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        //header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        //var headers = {
        //    'Access-Control-Allow-Origin': '*',
        //    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        //    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        //}
        //$http.defaults.headers['Access-Control-Allow-Origin'] = '*';
        //$http.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
        //$http.defaults.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
        //    delete $http.defaults.headers.common['X-Requested-With'];
        //$http({
        //    method: 'GET',
        //    url: url,
        //    headers: headers
        //}).then(function (response) {
        //    console.log(response.data);
        //}
        //, function (response) {
        //    console.log(response.data);
        //});
        $http
            .get(url,$scope.Employee_Id)
                .then(function OnSuccess(response) {
                    
                    employee = response.data;
                    //$scope.Employee_Id1 = employee.Employee_Id;
                    $scope.FName = employee.FirstName;
                    $scope.LName = employee.LastName;
                    $scope.PhoneNo = employee.PhoneNo;
                    $scope.Email_Id = employee.Email_Id;
                    $scope.Age = employee.Age;
                    $scope.Status = employee.Status;
                    console.log(response.data);
                }, function OnFailure(response) {
                    alert("Employee could not be found");
                    console.log(response);
                })
        
    }
    $scope.PutEmployee = function () {
        var url = "http://localhost:4404/EmployeeDetails/" + $scope.Employee_Id1;
        var employee = {};

//        if ($scope.Employee_Id) {
            employee.Employee_Id = $scope.Employee_Id1;
  //          if ($scope.FName) {
                employee.FirstName = $scope.FName;
   //             if ($scope.LName) {
                    employee.LastName = $scope.LName;
   //                 if ($scope.PhoneNo) {
                        employee.PhoneNo = $scope.PhoneNo;
    //                    if ($scope.Email_Id) {
                            employee.Email_Id = $scope.Email_Id;
      //                      if ($scope.Age) {
                                employee.Age = $scope.Age;
        //                        if ($scope.Status) {
                                    employee.Status = $scope.Status;
          //                      }
              //              }
            //            }
           //         }
           //     }
          //  }
       // }
       // else {
         //   alert("Fill All Fields");
           // return;
        //}
        console.log(employee);
        $http
            .put(url, employee)
                .then(function OnSuccess(response) {
                    console.log(response);
                    alert("Employee Details Edited Successful");
                }, function OnFailure(response) {
                    alert("Could not edit the details");
                    console.log(response);
                })
    }
    $scope.Delete1Employee = function () {
        var url = "http://localhost:4404/EmployeeDetails/" + $scope.Employee_Id1;
        //var url = "http://localhost:4404/EmployeeDetails/acds";
        var employee = {};
        $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        $http
            .get(url, $scope.Employee_Id)
                .then(function OnSuccess(response) {
                    employee = response.data;
                    //$scope.Employee_Id = employee.Employee_Id;
                    $scope.FName = employee.FirstName;
                    $scope.LName = employee.LastName;
                    $scope.PhoneNo = employee.PhoneNo;
                    $scope.Email_Id = employee.Email_Id;
                    $scope.Age = employee.Age;
                    $scope.Status = employee.Status;
                    console.log(response.data);
                }, function OnFailure(response) {
                    alert("Employee not found");
                    console.log(response);
                })

    }
    $scope.DeleteEmployee = function () {
        var url = "http://localhost:4404/EmployeeDetails/"+ $scope.Employee_Id1;
        $http
            .delete(url, $scope.Employee_Id1)
                .then(function OnSuccess(response) {
                    console.log(response.data);
                    alert("Emplyee deleted");
                }, function OnFailure(response) {
                    alert("Employee could not be deleted");
                    console.log(response);
                })

    }
}   
);
