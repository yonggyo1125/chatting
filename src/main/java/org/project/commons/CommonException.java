package org.project.commons;

import org.springframework.http.HttpStatus;

import java.util.ResourceBundle;

public class CommonException extends RuntimeException {
    private HttpStatus status;

    protected final static ResourceBundle validations;
    protected final static ResourceBundle errors;

    static {
        validations = ResourceBundle.getBundle("messages.validations");
        errors = ResourceBundle.getBundle("messages.errors");
    }

    public CommonException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public CommonException(String message) {
        this(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public HttpStatus getStatus() {
        return status;
    }
}
