package org.project.commons;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class JSONData<T> {
    private boolean success;
    private HttpStatus status = HttpStatus.OK;
    private String message;
    private T data;
}
