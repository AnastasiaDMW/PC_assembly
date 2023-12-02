package ru.itis.assemblyPCServer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.services.AssemblyService;

@RestController
@RequestMapping("/api/assembly")
public class AssemblyController {

    @Autowired
    private AssemblyService assemblyService;

    @PostMapping("/add")
    public ResponseEntity<?> saveCustomer(@RequestBody Assembly assembly) {
        return new ResponseEntity<>(assemblyService.saveAssembly(assembly), HttpStatus.CREATED);
    }

}
