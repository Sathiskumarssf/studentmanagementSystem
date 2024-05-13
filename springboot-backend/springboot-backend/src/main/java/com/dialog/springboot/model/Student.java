package com.dialog.springboot.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "studentName")
    private  String studentName;
    @Column(name = "studentGrade")
    private  String studentGrade;
    @Column(name = "studentAdress")
    private  String studentAdress;

    @Column(name = "studentEmail")
    private  String studentemail;

    @Column(name = "userRole")
    private  String userRole;


}
