package com.dialog.springboot.controller;

import com.dialog.springboot.exception.ResourceNotFoundException;
import com.dialog.springboot.model.Employee;
import com.dialog.springboot.model.Student;
import com.dialog.springboot.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/students")
public class Studentcontroller {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getAllstudent(){
        return studentRepository.findAll();
    }

    @GetMapping("/find")
    public ResponseEntity<Student> getStudentByNameAndGrade(@RequestParam String studentName)  {
        Student student = studentRepository.findByStudentName(studentName);
        return ResponseEntity.ok(student);
    }


    @GetMapping("/finduser")
    String getStudentByemailAndGrade(@RequestParam String studentemail,@RequestParam String studentGrade)  {
        Student student = studentRepository.findBystudentemailAndStudentGrade(studentemail,studentGrade);

        if(student !=null){
            return  "User found";
        }else{
            return  "the not userfound";
        }

    }

    @GetMapping("/getuserbyemail")
    public ResponseEntity<Student> getStudentById(@RequestParam String studentemail){
        Student student = studentRepository.getStudentBystudentemail(studentemail);
        return ResponseEntity.ok(student);
    }

    @GetMapping("/getUserbyidAndusername")
    public ResponseEntity<Student> getStudentById(@RequestParam int StudentId, @RequestParam String StudentName){
        System.out.println(StudentId);
        Student student = studentRepository.getStudentById(StudentId,StudentName);
        return ResponseEntity.ok(student);
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }
}
