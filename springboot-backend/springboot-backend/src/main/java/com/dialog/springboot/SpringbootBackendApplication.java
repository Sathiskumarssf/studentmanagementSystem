package com.dialog.springboot;

import com.dialog.springboot.model.Employee;
import com.dialog.springboot.repository.EmployeeRepository;
import com.dialog.springboot.repository.StudentRepository;
import com.dialog.springboot.repository.Teacher_timetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private Teacher_timetableRepository teacherTimetableRepository;

	@Override
	public void run(String... args) throws Exception {
 
	}
}
