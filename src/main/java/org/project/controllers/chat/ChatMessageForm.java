package org.project.controllers.chat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record ChatMessageForm(
        @NotBlank(message="닉네임을 입력하세요.")
        String nickNm,
        @NotBlank(message="메세지를 입력하세요.")
        String message,
        @NotNull(message="채팅방을 선택하세요.")
        Long roomNo) {}
