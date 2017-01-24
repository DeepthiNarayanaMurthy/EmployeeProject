using System.Collections.Generic;

namespace EmployeeService.EmployeeModel
{
    public interface IEmployeeRepository
    {
        List<Employee> GetEmployees();
        Employee GetEmployeeById(string id);
        int InsertEmployee(Employee employee);
        int UpdateEmployee(Employee employee);
        int DeleteById(string id);   
    }
}
