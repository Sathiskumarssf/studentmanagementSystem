package com.dialog.springboot.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "frist_name")
    private  String fristName;
    @Column(name = "last_name")
    private  String lastName;
    @Column(name = "email_id")
    private  String emailid;
}
