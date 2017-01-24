var app = angular.module("index-app", []);

//app.config(function ($routeProvider) {
//    $routeProvider
//		.when('/edit', {
//		    templateUrl: 'EmployeeView/Edit.html',
//		    controller: 'EmployeesCtrl'
//		})
//		.when('/delete', {
//		    templateUrl: 'EmployeeView/Delete.html',
//		    controller: 'EmployeesCtrl'
//		})
//        .when('/insert', {
//            templateUrl: 'EmployeeView/Insert.html',
//            controller: 'EmployeesCtrl'
//        })
//        .when('/home', {
//            templateUrl: 'EmployeeView/Home.html',
//            controller: 'EmployeesCtrl'
//        })
//		.otherwise({
//		    redirectTo: '/home'
//		});
//});


app.controller('EmployeesCtrl', function ($scope, $http) {
    $scope.GetEmployee = function () {
        var url = "http://localhost:4404/EmployeeDetails";
        $scope.emplooyeesList = {};
        $http
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
        console.log("inskiyjcyhjfv");
        console.log($scope.Employee_Id);
        //if ($scope.Employee_Id) {
        //    employee.Employee_Id = $scope.Employee_Id;
        //    console.log($scope.FName)
        //    if ($scope.FName) {
        //        employee.FirstName = $scope.FName;
        //        if ($scope.LName) {
        //            employee.LastName = $scope.LName;
        //            if ($scope.PhoneNo) {
        //                employee.PhoneNo = $scope.PhoneNo;
        //                if ($scope.Email_Id) {
        //                    employee.Email_Id = $scope.Email_Id;
        //                    if ($scope.Age) {
        //                        employee.Age = $scope.Age;
        //                        if ($scope.Status) {
        //                            employee.Status = $scope.Status;
        //                            console.log($scope.Status)
        //                        }
        //                    }
        //                }
        //            }
        //        }
        //    }
        //}
        //else {
        //    alert("Fill All Fields");
        //    console.log("asd");
        //    return;
        //}
        //if ($scope.Employee_Id) {
        //    employee.Employee_Id = $scope.Employee_Id;
        //    if ($scope.FName) {
        //        employee.FirstName = $scope.FName;
        //        if ($scope.LName) {
        //            employee.LastName = $scope.LName;
        //            if ($scope.PhoneNo) {
        //                employee.PhoneNo = $scope.PhoneNo;
        //                if ($scope.Email_Id){
        //                    employee.Age = $scope.Email_Id;
        //                    if ($scope.Status) {
        //                        employee.Status = $scope.Status;
        //                    }
        //                }
        //            }
        //        }
        //    }
        //}
        //else {
        //    alert("Fill All fields");
        //    return;
        //}

        if ($scope.Employee_Id && $scope.FName && $scope.LName && $scope.PhoneNo && $scope.Email_Id && $scope.Status)
            console.log("Perfect");
        else
            console.log("Thu");

        console.log(employee);
        $http
            .post(url, employee)
                .then(function OnSuccess(response) {
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
        $http
            .get(url)
                .then(function OnSuccess(response) {
                    
                    employee = response.data;
                    $scope.Employee_Id = employee.Employee_Id;
                    $scope.FName = employee.FirstName;
                    $scope.LName = employee.LastName;
                    $scope.PhoneNo = employee.PhoneNo;
                    $scope.Email_Id = employee.Email_Id;
                    $scope.Age = employee.Age;
                    $scope.Status = employee.Status;
                    console.log(response.data);
                }, function OnFailure(response) {
                    console.log(response);
                })
        
    }
    $scope.PutEmployee = function () {
        var url = "http://localhost:4404/EmployeeDetails/" + $scope.Employee_Id;
        var employee = {};
       
        if ($scope.Employee_Id) {
            employee.Employee_Id = $scope.Employee_Id;
            if ($scope.FName) {
                employee.FirstName = $scope.FName;
                if ($scope.LName) {
                    employee.LastName = $scope.LName;
                    if ($scope.PhoneNo) {
                        employee.PhoneNo = $scope.PhoneNo;
                        if ($scope.Email_Id) {
                            employee.Email_Id = $scope.Email_Id;
                            if ($scope.Age) {
                                employee.Age = $scope.Age;
                                if ($scope.Status) {
                                    employee.Status = $scope.Status;
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            alert("Fill All Fields");
            return;
        }
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
        $http
            .get(url)
                .then(function OnSuccess(response) {
                    employee = response.data;
                    $scope.Employee_Id = employee.Employee_Id;
                    $scope.FName = employee.FirstName;
                    $scope.LName = employee.LastName;
                    $scope.PhoneNo = employee.PhoneNo;
                    $scope.Email_Id = employee.Email_Id;
                    $scope.Age = employee.Age;
                    $scope.Status = employee.Status;
                    console.log(response.data);
                }, function OnFailure(response) {
                    console.log(response);
                })

    }
    $scope.DeleteEmployee = function () {
        var url = "http://localhost:4404/EmployeeDetails/"+ $scope.Employee_Id;
        $http
            .delete(url, $scope.Employee_Id)
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
