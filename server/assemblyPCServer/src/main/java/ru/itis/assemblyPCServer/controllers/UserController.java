package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.models.Form;
import ru.itis.assemblyPCServer.models.User;
import ru.itis.assemblyPCServer.models.UserAvatar;
import ru.itis.assemblyPCServer.services.UserService;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public String login (@RequestBody Form auth) throws NoSuchAlgorithmException {
        return userService.login(auth);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public String registration(@RequestBody UserDto user) throws NoSuchAlgorithmException {
        return userService.registration(user);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/change_avatar")
    public String changeUserAvatar(@RequestBody UserAvatar data) throws IOException {
        return userService.changeUserAvatar(data);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PatchMapping("/update/{id}")
    public String updateUserName(@PathVariable Long id, @RequestBody UserDto user) {
        return userService.updateUser(id, user);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/change_avatar")
    public String changeUserAvatar(@RequestBody UserAvatar data) throws IOException {
        return userService.changeUserAvatar(data);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/fileSystem")
    public ResponseEntity<?> uploadImageToFileSystem(@RequestParam("image") MultipartFile file) throws IOException {
        String uploadImage = userService.uploadAvatarToFileSystem(file);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/fileSystem/{filename}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String filename) throws IOException {
        byte[] imageData = userService.downloadAvatarFromFileSystem(filename);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add_user_assembly")
    public ResponseEntity<?> saveUserAssembly(@RequestBody User user) {
        return new ResponseEntity<>(userService.saveUserAssembly(user), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user_email")
    public User getUserByEmail(@RequestParam String email) throws IOException {
        return userService.getUserByEmail(email);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users_assemblies")
    public ResponseEntity<?> getUserAssembly() {
        return new ResponseEntity<>(userService.getUserAssembly(), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user_assembly")
    public User getUserAssemblyById(@RequestParam Long userAssemblyId) {
        return userService.getUserAssemblyById(userAssemblyId);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user_email")
    public User getUserByEmail(@RequestParam String email) throws IOException {
        return userService.getUserByEmail(email);
    }

}
