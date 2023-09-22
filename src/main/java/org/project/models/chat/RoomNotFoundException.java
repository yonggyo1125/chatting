package org.project.models.chat;

import org.project.commons.CommonException;
import org.springframework.http.HttpStatus;

public class RoomNotFoundException extends CommonException {
    public RoomNotFoundException() {
        super(errors.getString("NotFound.room"), HttpStatus.NOT_FOUND);
    }
}
