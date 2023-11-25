package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.services.ComponentService;

import java.util.List;

@RestController
@RequestMapping("/api/component")
public class ComponentController {

    @Autowired
    private ComponentService componentService;

    @GetMapping("/all_components")
    public List<ComponentDto> getComponents() {
        return componentService.getAllComponents();
    }

    //Возможно здесь @PathVariable Long id
    @GetMapping("/components")
    public List<ComponentDto> getComponentsById(@RequestParam Long componentTypeId){
        return componentService.getComponentsById(componentTypeId);
    }

}
