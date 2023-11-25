package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.Form;
import ru.itis.assemblyPCServer.services.UserService;

import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login (@RequestBody Form auth) throws NoSuchAlgorithmException {
        return userService.login(auth);
    }
    @PostMapping("/register")
    public String registration(@RequestBody UserDto user) throws NoSuchAlgorithmException {
        return userService.registration(user);
    }

}
