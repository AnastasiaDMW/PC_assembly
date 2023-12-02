package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.models.Assembly;

public interface AssemblyRepository extends JpaRepository<Assembly, Long> {
}
