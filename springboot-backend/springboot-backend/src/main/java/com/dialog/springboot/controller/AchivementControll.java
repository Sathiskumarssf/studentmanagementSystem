package com.dialog.springboot.controller;

import com.dialog.springboot.model.Achivements;
import com.dialog.springboot.repository.AchivementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/achivement")
public class AchivementControll {

    @Autowired
    private AchivementRepository achivementRepository;

    @GetMapping
    public List<Achivements> getAllEvents() {
        return achivementRepository.findAll();
    }
}
