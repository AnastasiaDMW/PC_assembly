package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.Form;
import ru.itis.assemblyPCServer.services.UserService;

import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/user")
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

    @PatchMapping("/update-name/{id}")
    public ResponseEntity<Void> updateUserName(@PathVariable Long id, @RequestBody UserDto user) {
        userService.updateUser(id, user);
        return ResponseEntity.noContent().build();
    }

}
