package ru.itis.assemblyPCServer.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.itis.assemblyPCServer.dto.ComponentDto;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.models.Component;
import ru.itis.assemblyPCServer.repositories.AssemblyRepository;
import ru.itis.assemblyPCServer.services.AssemblyService;
import ru.itis.assemblyPCServer.services.ComponentService;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Service
public class AssemblyServiceImpl implements AssemblyService {

    @Autowired
    private AssemblyRepository assemblyRepository;

    @Autowired
    private ComponentService componentService;

    @Override
    public Assembly saveAssembly(Assembly assembly){

        String pattern = "dd/MM/yyyy";
        SimpleDateFormat DateFormat = new SimpleDateFormat(pattern);
        Calendar c = Calendar.getInstance();
        String curr_date = DateFormat.format(c.getTime());

        Assembly newAssembly = new Assembly();
        newAssembly.setTitle(assembly.getTitle());
        newAssembly.setAssemblyCode(assembly.getAssemblyCode());
        newAssembly.setDateCreated(curr_date);
        newAssembly.setImages(assembly.getImages());
        newAssembly.setAvailability(assembly.getAvailability());
        newAssembly.getComponents().addAll(
                assembly.getComponents().stream().map(v -> {
                    Component vv = componentService.getComponentById(v.getId());
                    System.out.println("SaveAssembly: "+vv.getTitle());
                    vv.getAssemblies().add(newAssembly);
                    return vv;
                }).toList()
        );

        return assemblyRepository.save(newAssembly);
    }

}
