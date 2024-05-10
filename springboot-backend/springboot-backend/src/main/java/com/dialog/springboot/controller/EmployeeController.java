package com.dialog.springboot.controller;

import com.dialog.springboot.exception.ResourceNotFoundException;
import com.dialog.springboot.model.Employee;
import com.dialog.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = {"http://localhost:3000/"})
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee = employeeRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("emaplyee not exist with id "+ id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employee){
        Employee updateEmployee =employeeRepository.findById(id).orElseThrow(
                () ->
                    new ResourceNotFoundException("Employee not exist with id" +id)

        );

        updateEmployee.setFristName(employee.getFristName());
        updateEmployee.setLastName(employee.getLastName());
        updateEmployee.setEmailid(employee.getEmailid());

        employeeRepository.save((updateEmployee));

        return ResponseEntity.ok(updateEmployee);

    }
}
