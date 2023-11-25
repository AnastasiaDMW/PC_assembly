package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.models.Component;

public interface ComponentRepository extends JpaRepository<Component, Long> {
}
