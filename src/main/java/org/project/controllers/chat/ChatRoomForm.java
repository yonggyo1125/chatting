package org.project.controllers.chat;


import lombok.Builder;

@Builder
public record ChatRoomForm(Long roomNo, String roomNm, int max) {}
