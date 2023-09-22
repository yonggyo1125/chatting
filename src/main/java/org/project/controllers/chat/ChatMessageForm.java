package org.project.controllers.chat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record ChatMessageForm(
        @NotBlank
        String nickNm,
        @NotBlank
        String message,
        @NotNull
        Long roomNo) {}
