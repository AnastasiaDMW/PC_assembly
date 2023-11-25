package ru.itis.assemblyPCServer.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.assemblyPCServer.models.*;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private Long id;
    private String name;
    private String lastname;
    private String email;
    private String password;
    private String photo;
    private int bonuses;
    @Column(name = "phone_number")
    private String phoneNumber;

    private Long userRole;

    public static UserDto from(User user) {
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .photo(user.getPhoto())
                .bonuses(user.getBonuses())
                .phoneNumber(user.getPhoneNumber())
                .password(user.getPassword())
                .userRole(UserRoleDto.from(user.getUserRole()).getId())
                .build();
    }

    public static List<UserDto> from(List<User> users) {
        return users.stream().map(UserDto::from).collect(Collectors.toList());
    }
}
