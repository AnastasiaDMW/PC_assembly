package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.models.Component;
import ru.itis.assemblyPCServer.repositories.AssemblyRepository;
import ru.itis.assemblyPCServer.services.AssemblyService;
import ru.itis.assemblyPCServer.services.ComponentService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Objects;
import java.util.Random;

@Service
public class AssemblyServiceImpl implements AssemblyService {

    private final String FOLDER_PATH = "..\\assemblyPCServer\\src\\main\\resources\\assemblies\\";

    @Autowired
    private AssemblyRepository assemblyRepository;

    @Autowired
    private ComponentService componentService;

    @Override
    public Assembly saveAssembly(Assembly assembly){

        String pattern = "dd/MM/yyyy";
        SimpleDateFormat DateFormat = new SimpleDateFormat(pattern);
        Calendar c = Calendar.getInstance();
        String curr_date = DateFormat.format(c.getTime());

        Assembly newAssembly = new Assembly();
        newAssembly.setTitle(assembly.getTitle());
        newAssembly.setAssemblyCode(assembly.getAssemblyCode());
        newAssembly.setDateCreated(curr_date);
        newAssembly.setImages(assembly.getImages());
        newAssembly.setAvailability(assembly.getAvailability());
        newAssembly.getComponents().addAll(
                assembly.getComponents().stream().map(v -> {
                    Component vv = componentService.getComponentById(v.getId());
                    vv.getAssemblies().add(newAssembly);
                    return vv;
                }).toList()
        );

        return assemblyRepository.save(newAssembly);
    }

    @Override
    public List<Assembly> getAllAssembly() {
        return assemblyRepository.findAll();
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
    public String uploadAssemblyToFileSystem(MultipartFile file) throws IOException {
        boolean isNameExist = Boolean.FALSE;
        String filePath;
        String fileName;

        List<Assembly> newAssembly = assemblyRepository.findAll();

        for (Assembly assembly : newAssembly) {
            if (Objects.equals(assembly.getImages(), file.getOriginalFilename())) {
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
    public byte[] downloadAssemblyFromFileSystem(String filename) throws IOException {
        String filePath = new File(FOLDER_PATH).getAbsolutePath()+"\\"+filename;
        return Files.readAllBytes(new File(filePath).toPath());
    }

    @Override
    public Assembly getAssemblyById(Long id) {
        return assemblyRepository.findByid(id);
    }

}
