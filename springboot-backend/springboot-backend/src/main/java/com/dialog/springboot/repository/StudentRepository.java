package com.dialog.springboot.repository;

import com.dialog.springboot.model.Student;
import lombok.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByStudentName(String studentName);
    Student getStudentBystudentemail(String studentEmail);
    Student findBystudentemailAndStudentGrade(String studentEmail,String studentGrade);

    @Query(value = "SELECT * FROM student WHERE id = ?1", nativeQuery = true)
    Student getStudentById(int studentId);


    @Query(value = "SELECT * FROM student WHERE id = ?1 AND student_name =?2", nativeQuery = true)
    Student getStudentById(int studentId, String studentName);

}
