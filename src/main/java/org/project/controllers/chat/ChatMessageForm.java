package org.project.controllers.chat;

import lombok.Builder;

@Builder
public record ChatMessageForm(String nickNm, String message, Long roomNo) {}
