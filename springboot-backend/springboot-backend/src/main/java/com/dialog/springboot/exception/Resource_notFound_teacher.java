

package com.dialog.springboot.exception;

        import org.springframework.http.HttpStatus;
        import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Resource_notFound_teacher extends RuntimeException{
    public Resource_notFound_teacher(String massage){
        super(massage);
    }
}
