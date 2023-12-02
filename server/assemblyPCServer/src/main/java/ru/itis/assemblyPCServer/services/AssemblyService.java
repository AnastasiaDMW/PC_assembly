package ru.itis.assemblyPCServer.services;

import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.AssemblyDto;
import ru.itis.assemblyPCServer.models.Assembly;

import java.io.IOException;
import java.util.List;

public interface AssemblyService {

    Assembly saveAssembly(Assembly assembly);

    List<Assembly> getAllAssembly();

    String uploadAvatarToFileSystem(MultipartFile file) throws IOException;

    byte[] downloadAvatarFromFileSystem(String filename) throws IOException;
}
