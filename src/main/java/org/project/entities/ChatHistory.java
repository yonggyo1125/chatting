package org.project.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@NoArgsConstructor @AllArgsConstructor
public class ChatHistory extends BaseEntity {
    @Id @GeneratedValue
    private Long seq;
    @Column(length=40, nullable = false)
    private String nickNm;
    @Lob
    @Column(nullable = false)
    private String message;

    @ToString.Exclude
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="roomNo")
    private ChatRoom room;
}
