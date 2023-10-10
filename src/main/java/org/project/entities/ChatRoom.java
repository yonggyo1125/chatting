package org.project.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
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

   // @ToString.Exclude
   // @OneToMany(mappedBy = "room", fetch=FetchType.LAZY)
   // private List<ChatHistory> histories = new ArrayList<>();
}
