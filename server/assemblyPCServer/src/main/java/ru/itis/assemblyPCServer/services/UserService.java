package ru.itis.assemblyPCServer.services;

import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.Form;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

public interface UserService {

    String login(Form auth) throws NoSuchAlgorithmException;
    String registration(UserDto user) throws NoSuchAlgorithmException;

    String updateUser(Long id, UserDto user);

    String uploadAvatarToFileSystem(MultipartFile file) throws IOException;

    byte[] downloadAvatarFromFileSystem(String filename) throws IOException;

}
