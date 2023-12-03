package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.models.Component;
import ru.itis.assemblyPCServer.models.User;
import ru.itis.assemblyPCServer.repositories.ComponentRepository;
import ru.itis.assemblyPCServer.services.ComponentService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;

@Service
public class ComponentServiceImpl implements ComponentService {

    private final String FOLDER_PATH = "..\\assemblyPCServer\\src\\main\\resources\\components\\";

    @Autowired
    private ComponentRepository componentRepository;

    @Override
    public List<ComponentDto> getAllComponents() {
        return ComponentDto.from(componentRepository.findAll());
    }

    @Override
    public List<ComponentDto> getComponentByTypeId(Long componentTypeId) {
        List<ComponentDto> allComponent = ComponentDto.from(componentRepository.findAll());
        List<ComponentDto> newComponent = new ArrayList<>(Collections.emptyList());

        for (ComponentDto component : allComponent) {
            if (Objects.equals(component.getComponentType().getId(), componentTypeId)) {
                newComponent.add(component);
            }
        }
        System.out.println(newComponent);
        return newComponent;
    }

    @Override
    public ComponentDto getComponentDtoById(Long id) {
        return ComponentDto.from(componentRepository.findByid(id));
    }

    @Override
    public Component getComponentById(Long id) {
        return componentRepository.findByid(id);
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
    public String uploadComponentToFileSystem(MultipartFile file) throws IOException {
        boolean isNameExist = Boolean.FALSE;
        String filePath;
        String fileName;

        List<Component> newComponent = componentRepository.findAll();

        for (Component component : newComponent) {
            if (Objects.equals(component.getImages(), file.getOriginalFilename())) {
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
    public byte[] downloadComponentFromFileSystem(String filename) throws IOException {
        String filePath = new File(FOLDER_PATH).getAbsolutePath()+"\\"+filename;
        return Files.readAllBytes(new File(filePath).toPath());
    }
}
