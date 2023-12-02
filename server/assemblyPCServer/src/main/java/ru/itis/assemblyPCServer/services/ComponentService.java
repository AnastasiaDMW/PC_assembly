package ru.itis.assemblyPCServer.services;

import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.models.Component;

import java.util.List;

public interface ComponentService{

    List<ComponentDto> getAllComponents();

    List<ComponentDto> getComponentByTypeId(Long componentTypeId);

    ComponentDto getComponentDtoById(Long id);

    Component getComponentById(Long id);
}
