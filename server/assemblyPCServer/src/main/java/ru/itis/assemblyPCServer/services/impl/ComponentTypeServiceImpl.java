package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itis.assemblyPCServer.dto.ComponentTypeDto;
import ru.itis.assemblyPCServer.repositories.ComponentTypeRepository;
import ru.itis.assemblyPCServer.services.ComponentTypeService;

import java.util.List;

@Service
public class ComponentTypeServiceImpl implements ComponentTypeService {
    @Autowired
    private ComponentTypeRepository componentTypeRepository;

    @Override
    public List<ComponentTypeDto> getComponentType() {
        return ComponentTypeDto.from(componentTypeRepository.findAll());
    }
}
