package ru.itis.assemblyPCServer.services;

import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.Form;

import java.security.NoSuchAlgorithmException;

public interface UserService {

    String login(Form auth) throws NoSuchAlgorithmException;
    String registration(UserDto user) throws NoSuchAlgorithmException;

}
