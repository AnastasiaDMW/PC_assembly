package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
