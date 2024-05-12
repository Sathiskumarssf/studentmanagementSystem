package com.dialog.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
      public ResourceNotFoundException(String massage){
          super(massage);
          System.out.println(massage);

      }
}
