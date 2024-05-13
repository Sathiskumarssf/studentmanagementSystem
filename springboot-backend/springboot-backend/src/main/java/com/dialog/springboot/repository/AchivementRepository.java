package com.dialog.springboot.repository;

import com.dialog.springboot.model.Achivements;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AchivementRepository extends JpaRepository<Achivements, String> {
}
