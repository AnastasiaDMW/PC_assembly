package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    // api/component/components?componentTypeId=2 - По типу "Процессоры"
    @GetMapping("/components")
    public List<ComponentDto> getComponentByTypeId(@RequestParam Long componentTypeId){
        return componentService.getComponentByTypeId(componentTypeId);
    }

    @GetMapping("/get_component_by_id")
    public ComponentDto getComponentById(@RequestParam Long id) {
        return componentService.getComponentById(id);
    }
}
