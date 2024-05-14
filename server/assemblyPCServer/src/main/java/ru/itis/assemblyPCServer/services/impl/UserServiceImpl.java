package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import ru.itis.assemblyPCServer.dto.AssemblyDto;
import ru.itis.assemblyPCServer.dto.UserDto;
import ru.itis.assemblyPCServer.encrypt.Hashing;
import ru.itis.assemblyPCServer.models.*;
import ru.itis.assemblyPCServer.repositories.UserRepository;
import ru.itis.assemblyPCServer.repositories.UserRoleRepository;
import ru.itis.assemblyPCServer.services.AssemblyService;
import ru.itis.assemblyPCServer.services.UserService;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    private final String FOLDER_PATH = "..\\assemblyPCServer\\src\\main\\resources\\avatars\\";
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private AssemblyService assemblyService;

    @Override
    public String login(Form auth) throws NoSuchAlgorithmException {
        boolean userIsExist = false;
        String userPwd = "";
        System.out.println(auth);
        List<UserDto> allUsers = UserDto.from(userRepository.findAll());

        for (UserDto user : allUsers) {
            if (Objects.equals(user.getEmail(), auth.getEmail())){
                userIsExist = true;
                userPwd = user.getPassword();
                break;
            }
        }
        if (userIsExist){
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] encodedHash = digest.digest(auth.getPassword().getBytes(StandardCharsets.UTF_8));
            Hashing hash = new Hashing();

            if (!Objects.equals(hash.bytesToHex(encodedHash), userPwd)) {
                return "Неправильный пароль!";
            }
            else{
                return "Вход выполнен успешно!";
            }
        }
        else{
            return "Такой пользователь не найден";
        }
    }

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
        newUser.setPhoto("CatDefaultAvatar.png");
        newUser.setBonuses(0);
        newUser.setPassword(hash.bytesToHex(encodedHash));
        newUser.setPhoneNumber(user.getPhoneNumber());
        newUser.setUserRole(userRole);

        userRepository.save(newUser);

        return "Пользователь зарегистрирован";
    }

    public String generatePartFilename() {
        Random random = new Random();

        String lettersAndNumbers = "";
        String alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String numbers = "0123456789";

        for (int i = 0; i < 10; i++) {
            int randomIndex1 = random.nextInt(alphabet.length());
            char randomLetter = alphabet.charAt(randomIndex1);
            lettersAndNumbers += randomLetter;

            int randomIndex2 = random.nextInt(numbers.length());
            char randomNumber = numbers.charAt(randomIndex2);
            lettersAndNumbers += randomNumber;
        }

        return lettersAndNumbers;
    }

    @Override
    public String updateUser(Long id, UserDto user) {

        User newUser = userRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user id: " + id));

        if (user.getName() != null) {
            newUser.setName(user.getName());
        }
        if (user.getLastname() != null) {
            newUser.setLastname(user.getLastname());
        }
        if (user.getPhoneNumber() != null) {
            newUser.setPhoneNumber(user.getPhoneNumber());
        }
        if (user.getPhoto() != null) {
            newUser.setPhoto(user.getPhoto());
        }

        userRepository.save(newUser);
        return "Данные о пользователе были изменены";
    }

    @Override
    public String uploadAvatarToFileSystem(MultipartFile file) throws IOException {
        boolean isNameExist = Boolean.FALSE;
        String filePath;
        String fileName;

        List<User> newUser = userRepository.findAll();

        for (User user : newUser) {
            if (Objects.equals(user.getPhoto(), file.getOriginalFilename())) {
                isNameExist = Boolean.TRUE;
                break;
            }
        }

        String randomString = generatePartFilename();
        if (isNameExist == Boolean.TRUE) {
            fileName = randomString+file.getOriginalFilename();
        }
        else{
            fileName = file.getOriginalFilename();
        }

        filePath = new File(FOLDER_PATH).getAbsolutePath()+"\\"+fileName;
        file.transferTo(new File(filePath));

        return "image uploaded successfully: "+fileName;
    }

    @Override
    public byte[] downloadAvatarFromFileSystem(String filename) throws IOException {
        String filePath = new File(FOLDER_PATH).getAbsolutePath()+"\\"+filename;
        return Files.readAllBytes(new File(filePath).toPath());
    }

    @Override
    public User saveUserAssembly(User user) {

        System.out.println(user.getId());
        User newUser = userRepository.findByid(user.getId());
        System.out.println(newUser.getName());

        newUser.getAssemblies().addAll(
                user.getAssemblies().stream().map( u -> {
                    Assembly assembly = assemblyService.getAssemblyById(u.getId());
                    System.out.println(assembly.getTitle());
                    assembly.getUsers().add(newUser);
                    assembly.setCarts(new ArrayList<Cart>());
                    assembly.setComponents(new ArrayList<Component>());
                    return assembly;
                }).toList()
        );

        return userRepository.save(newUser);
    }

    @Override
    public User getUserByEmail(String email) throws IOException {
        List<User> allUsers = userRepository.findAll();
        User currentUser = null;
        for (User user : allUsers) {
            if (user.getEmail().equalsIgnoreCase(email)) {
                currentUser = user;
            }
        }
        return currentUser;
    }

    @Override
    public List<User> getUserAssembly() {
        return userRepository.findAll();
    }

    @Override
    public User getUserAssemblyById(Long userAssemblyId) {
        return userRepository.findByid(userAssemblyId);
    }

    @Override
    public String changeUserAvatar(UserAvatar data) throws IOException {
        User curUser = userRepository
                .findById(data.getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Invalid user id: " + data.getId()));

        curUser.setPhoto(data.getAvatar());
        userRepository.save(curUser);

        return "Аватарка пользователя изменена";
    }
}
