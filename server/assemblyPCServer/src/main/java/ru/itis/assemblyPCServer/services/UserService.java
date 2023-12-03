package ru.itis.assemblyPCServer.services;

import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.models.Form;
import ru.itis.assemblyPCServer.models.User;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public interface UserService {

    String login(Form auth) throws NoSuchAlgorithmException;
    String registration(UserDto user) throws NoSuchAlgorithmException;

    String updateUser(Long id, UserDto user);

    String uploadAvatarToFileSystem(MultipartFile file) throws IOException;

    byte[] downloadAvatarFromFileSystem(String filename) throws IOException;

    User saveUserAssembly(User user);

    List<User> getUserAssembly();

    User getUserAssemblyById(Long id);
}
