package ru.itis.assemblyPCServer.services;

import ru.itis.assemblyPCServer.dto.AssemblyDto;
import ru.itis.assemblyPCServer.models.Assembly;

public interface AssemblyService {

    Assembly saveAssembly(Assembly assembly);
}
