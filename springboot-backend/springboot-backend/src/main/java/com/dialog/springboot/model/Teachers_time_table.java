package com.dialog.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Teachers_time_table")
public class Teachers_time_table {

    @Id
    @Column(name = "teacher_id")
    private long teacher_id;

    @Column(name = "teacher_name")
    private  String teacher_name;
    @Column(name = "classroom")
    private  String classroom;

    @Column(name = "subject")
    private  String subject;
    @Column(name = "weekday")
    private  String weekday;

    @Column(name = "time_priod")
    private  String time_priod;


}


