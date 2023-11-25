package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.encrypt.Hashing;
import ru.itis.assemblyPCServer.models.Form;
import ru.itis.assemblyPCServer.models.User;
import ru.itis.assemblyPCServer.models.UserRole;
import ru.itis.assemblyPCServer.repositories.UserRepository;
import ru.itis.assemblyPCServer.repositories.UserRoleRepository;
import ru.itis.assemblyPCServer.services.UserService;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    public String login(Form auth) throws NoSuchAlgorithmException {
        System.out.println(auth);
        List<UserDto> allUsers = UserDto.from(userRepository.findAll());
        for (UserDto user : allUsers) {
            if (Objects.equals(user.getEmail(), auth.getEmail())){
                MessageDigest digest = MessageDigest.getInstance("SHA-256");
                byte[] encodedHash = digest.digest(auth.getPassword().getBytes(StandardCharsets.UTF_8));
                Hashing hash = new Hashing();
                System.out.println(hash.bytesToHex(encodedHash));
                System.out.println(user.getPassword());
                if (!Objects.equals(hash.bytesToHex(encodedHash), user.getPassword())) {
                    return "Неправильный пароль!";
                }
            }
        }
        return "Вход выполнен успешно!";
    }

    // Сделать подгрузку изображения в register

    @Override
    public String registration(UserDto user) throws NoSuchAlgorithmException {
        List<UserDto> allUsers = UserDto.from(userRepository.findAll());
        UserRole userRole = userRoleRepository.findById(user.getUserRole())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user id: " + user.getUserRole()));

        for (UserDto allUser : allUsers) {
            if (Objects.equals(allUser.getEmail(), user.getEmail())) return "Такой пользователь уже зарегистрирован!";
        }

        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] encodedHash = digest.digest(user.getPassword().getBytes(StandardCharsets.UTF_8));
        Hashing hash = new Hashing();

        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setLastname(user.getLastname());
        newUser.setEmail(user.getEmail());
        newUser.setPhoto(user.getPhoto());
        newUser.setBonuses(0);
        newUser.setPassword(hash.bytesToHex(encodedHash));
        newUser.setPhoneNumber(user.getPhoneNumber());
        newUser.setUserRole(userRole);

        userRepository.save(newUser);
        return "Пользователь зарегистрирован";
    }
}
