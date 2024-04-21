package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.assemblyPCServer.dto.ComponentTypeDto;
import ru.itis.assemblyPCServer.services.ComponentTypeService;

import java.util.List;

@RestController
@RequestMapping("/api/component_type")
public class ComponentTypeController {

    @Autowired
    private ComponentTypeService componentTypeService;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/component_types")
    public List<ComponentTypeDto> getComponentType(){
        return componentTypeService.getComponentType();
    }

}
