package ru.itis.assemblyPCServer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.assemblyPCServer.models.Assembly;
import ru.itis.assemblyPCServer.models.User;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AssemblyDto {

    private Long id;
    private String title;
    private String assemblyCode;
    private String dateCreated;
    private String images;
    private String availability;

//    private Collection<ComponentDto> components;
    private Collection<User> users;

    public static AssemblyDto from(Assembly assembly) {
        return AssemblyDto.builder()
                .id(assembly.getId())
                .title(assembly.getTitle())
                .images(assembly.getImages())
                .dateCreated(assembly.getDateCreated())
                .availability(assembly.getAvailability())
                .assemblyCode(assembly.getAssemblyCode())
//                .components(ComponentDto.from(assembly.getComponents()))
                .users(assembly.getUsers())
                .build();
    }

    public static List<AssemblyDto> from(List<Assembly> assemblies) {
        return assemblies.stream().map(AssemblyDto::from).collect(Collectors.toList());
    }
}
