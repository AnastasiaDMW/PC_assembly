package ru.itis.assemblyPCServer.services;

import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.AssemblyDto;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.models.Component;

import java.io.IOException;
import java.util.List;

public interface AssemblyService {

    Assembly saveAssembly(Assembly assembly);

    List<Assembly> getAllAssembly();

    String uploadAssemblyToFileSystem(MultipartFile file) throws IOException;

    byte[] downloadAssemblyFromFileSystem(String filename) throws IOException;

    Assembly getAssemblyById(Long id);
}
