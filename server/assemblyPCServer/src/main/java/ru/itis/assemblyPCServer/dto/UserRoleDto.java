package ru.itis.assemblyPCServer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.assemblyPCServer.models.UserRole;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRoleDto {
    private Long id;

    private String title;

    public static UserRoleDto from(UserRole userRole) {
        return UserRoleDto.builder()
                .id(userRole.getId())
                .title(userRole.getTitle())
                .build();
    }

    public static List<UserRoleDto> from(List<UserRole> userRoles) {
        return userRoles.stream().map(UserRoleDto::from).collect(Collectors.toList());
    }
}
