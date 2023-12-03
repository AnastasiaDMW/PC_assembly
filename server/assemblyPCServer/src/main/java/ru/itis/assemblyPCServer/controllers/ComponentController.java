package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.services.ComponentService;

import java.io.IOException;
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
    @GetMapping("/components_by_type")
    public List<ComponentDto> getComponentByTypeId(@RequestParam Long componentTypeId){
        return componentService.getComponentByTypeId(componentTypeId);
    }

    @GetMapping("/component_by_id")
    public ComponentDto getComponentById(@RequestParam Long id) {
        return componentService.getComponentDtoById(id);
    }

    @PostMapping("/fileSystem")
    public ResponseEntity<?> uploadImageToFileSystem(@RequestParam("image") MultipartFile file) throws IOException {
        String uploadImage = componentService.uploadComponentToFileSystem(file);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping("/fileSystem/{filename}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String filename) throws IOException {
        byte[] imageData = componentService.downloadComponentFromFileSystem(filename);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);
    }
}
