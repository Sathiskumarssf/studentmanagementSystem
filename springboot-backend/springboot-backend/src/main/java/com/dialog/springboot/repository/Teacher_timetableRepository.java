package com.dialog.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dialog.springboot.model.Teachers_time_table;

import java.util.List;

public interface Teacher_timetableRepository extends JpaRepository<Teachers_time_table, Long> {
    List<Teachers_time_table> findAllByClassroom(String classroom);
}
