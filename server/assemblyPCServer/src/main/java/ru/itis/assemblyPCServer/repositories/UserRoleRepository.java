package ru.itis.assemblyPCServer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.itis.assemblyPCServer.models.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
}
