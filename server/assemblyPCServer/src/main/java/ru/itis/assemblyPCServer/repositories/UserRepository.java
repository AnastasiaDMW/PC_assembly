package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
}
