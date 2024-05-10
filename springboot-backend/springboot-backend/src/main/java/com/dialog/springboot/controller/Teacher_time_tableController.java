package com.dialog.springboot.controller;


import com.dialog.springboot.model.Teachers_time_table;
import com.dialog.springboot.repository.Teacher_timetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.dialog.springboot.repository.Teacher_timetableRepository.*;

//@CrossOrigin(origins = {"http://localhost:3000/"})
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/teacher_timetable")
public class Teacher_time_tableController {
    @Autowired
    private Teacher_timetableRepository teacher_timetableRepository;

    @GetMapping
    public List<Teachers_time_table> getAllEmployees() {
        return teacher_timetableRepository.findAll();
    }

    @GetMapping("/find")
    public List<Teachers_time_table> getTeachersByClassroom(@RequestParam String classroom) {

        List<Teachers_time_table> teacherTimes = teacher_timetableRepository.findAllByClassroom(classroom);
        return teacherTimes;
    }




}