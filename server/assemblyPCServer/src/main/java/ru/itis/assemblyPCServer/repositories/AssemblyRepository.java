package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.models.Component;

public interface AssemblyRepository extends JpaRepository<Assembly, Long> {

    Assembly findByid(Long id);
}
