package com.dialog.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNot_Student_Exception extends RuntimeException{
    public ResourceNot_Student_Exception(String massage){
        super(massage);
    }
}
