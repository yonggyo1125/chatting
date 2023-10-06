package org.project.models.chat;

import lombok.RequiredArgsConstructor;
import org.project.entities.ChatRoom;
import org.project.repositories.ChatRoomRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.domain.Sort.Order.desc;

@Service
@RequiredArgsConstructor
public class ChatRoomInfoService {
    private final ChatRoomRepository roomRepository;
    public List<ChatRoom> getList() {
        List<ChatRoom> rooms = roomRepository.findAll(Sort.by(desc("createdAt")));

        return rooms;
    }

    public ChatRoom get(Long roomNo) {
        ChatRoom room = roomRepository.findById(roomNo).orElseThrow(RoomNotFoundException::new);

        return room;
    }
}
