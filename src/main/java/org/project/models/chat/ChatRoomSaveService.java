package org.project.models.chat;

import lombok.RequiredArgsConstructor;
import org.project.controllers.chat.ChatRoomForm;
import org.project.entities.ChatRoom;
import org.project.repositories.ChatRoomRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatRoomSaveService {
    private final ChatRoomRepository repository;

    public ChatRoom save(ChatRoomForm form) {
        Long roomNo = form.roomNo();
        ChatRoom room = null;
        if (roomNo != null) {
            room = repository.findById(roomNo).orElseThrow(RoomNotFoundException::new);
        } else {
            room = new ChatRoom();
        }

        room.setRoomNm(form.roomNm());
        room.setMax(form.max());
        repository.saveAndFlush(room);

        return room;
    }
}
