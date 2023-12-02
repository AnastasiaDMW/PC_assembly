package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.models.Component;
import ru.itis.assemblyPCServer.models.User;
import ru.itis.assemblyPCServer.repositories.ComponentRepository;
import ru.itis.assemblyPCServer.services.ComponentService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
public class ComponentServiceImpl implements ComponentService {
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
        Component component = componentRepository.findByid(id);
        System.out.println("ComponentService: "+component.getTitle());
        return component;
    }
}
