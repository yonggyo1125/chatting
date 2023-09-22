package org.project.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @Builder
@NoArgsConstructor @AllArgsConstructor
public class ChatRoom extends BaseEntity {
    @Id @GeneratedValue
    private Long roomNo;
    @Column(length=60, nullable = false)
    private String roomNm;
    private int max; // 최대 인원수, 0 이면 무제한
}
