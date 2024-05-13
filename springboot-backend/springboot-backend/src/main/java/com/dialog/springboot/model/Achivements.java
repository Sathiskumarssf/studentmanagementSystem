package com.dialog.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="Achivement")
public class Achivements {

    @Id
    @Column(name = "image_path")
    private  String Image_path;
    @Column(name = "achivement_description")
    private  String achivement_description;


}
