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
@Table(name = "Events")
public class Events {

    @Id
    @Column(name = "image_path")
    private  String Image_path;
    @Column(name = "event_name")
    private  String Event_name;

    @Column(name = "event_description")
    private  String Event_description;
    @Column(name = "date")
    private  String Date;

    @Column(name = "time")
    private  String Time;
}


