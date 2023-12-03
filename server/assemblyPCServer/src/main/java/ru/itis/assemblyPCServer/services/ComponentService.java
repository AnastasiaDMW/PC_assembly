package ru.itis.assemblyPCServer.services;

import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.models.Component;

import java.io.IOException;
import java.util.List;

public interface ComponentService{

    List<ComponentDto> getAllComponents();

    List<ComponentDto> getComponentByTypeId(Long componentTypeId);

    ComponentDto getComponentDtoById(Long id);

    Component getComponentById(Long id);

    String uploadComponentToFileSystem(MultipartFile file) throws IOException;

    byte[] downloadComponentFromFileSystem(String filename) throws IOException;
}
