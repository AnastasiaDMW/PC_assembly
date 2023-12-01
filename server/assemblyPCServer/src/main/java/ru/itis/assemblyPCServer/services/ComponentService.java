package ru.itis.assemblyPCServer.services;

import ru.itis.assemblyPCServer.dto.ComponentDto;

import java.util.List;

public interface ComponentService{

    List<ComponentDto> getAllComponents();

    List<ComponentDto> getComponentByTypeId(Long componentTypeId);

    ComponentDto getComponentById(Long id);
}
