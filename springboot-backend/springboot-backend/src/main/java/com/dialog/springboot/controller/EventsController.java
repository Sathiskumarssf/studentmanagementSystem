package com.dialog.springboot.controller;

import com.dialog.springboot.model.Events;
import com.dialog.springboot.repository.EventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/events")
public class EventsController {

    @Autowired
    private EventsRepository eventsRepository;

    @GetMapping
    public List<Events> getAllEvents() {
        return eventsRepository.findAll();
    }
}
