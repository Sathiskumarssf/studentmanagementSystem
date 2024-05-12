package com.dialog.springboot.repository;
import com.dialog.springboot.model.Events;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface EventsRepository extends JpaRepository<Events,String>{
    }
