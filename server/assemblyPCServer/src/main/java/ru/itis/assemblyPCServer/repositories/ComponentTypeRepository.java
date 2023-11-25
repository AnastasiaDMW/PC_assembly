package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.models.ComponentType;

public interface ComponentTypeRepository extends JpaRepository<ComponentType, Long> {
}
