package org.project.repositories;

import org.project.entities.ChatHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface ChatHistoryRepository extends JpaRepository<ChatHistory, Long>, QuerydslPredicateExecutor<ChatHistory> {
}
