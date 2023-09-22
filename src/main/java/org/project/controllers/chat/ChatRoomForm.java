package org.project.controllers.chat;


import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record ChatRoomForm(
        Long roomNo,
        @NotBlank
        String roomNm,
        int max) {}
