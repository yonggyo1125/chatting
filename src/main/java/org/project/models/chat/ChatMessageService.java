package org.project.models.chat;

import lombok.RequiredArgsConstructor;
import org.project.controllers.chat.ChatMessageForm;
import org.project.entities.ChatHistory;
import org.project.entities.ChatRoom;
import org.project.repositories.ChatHistoryRepository;
import org.project.repositories.ChatRoomRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatMessageService {
    private final ChatRoomRepository roomRepository;
    private final ChatHistoryRepository historyRepository;

    public void save(ChatMessageForm form) {
        Long roomNo = form.roomNo();
        ChatRoom room = roomRepository.findById(roomNo).orElseThrow(RoomNotFoundException::new);

        ChatHistory history = ChatHistory.builder()
                .nickNm(form.nickNm())
                .message(form.message())
                .room(room)
                .build();
        historyRepository.saveAndFlush(history);
    }
}
