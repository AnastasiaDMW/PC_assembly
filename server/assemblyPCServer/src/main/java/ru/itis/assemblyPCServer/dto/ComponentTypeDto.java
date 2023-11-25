package ru.itis.assemblyPCServer.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.assemblyPCServer.models.ComponentType;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ComponentTypeDto {

    @JsonIgnore
    private Long id;
    private String title;

    public static ComponentTypeDto from(ComponentType componentType) {
        return ComponentTypeDto.builder()
                .id(componentType.getId())
                .title(componentType.getTitle())
                .build();
    }

    public static List<ComponentTypeDto> from(List<ComponentType> componentTypes) {
        return componentTypes.stream().map(ComponentTypeDto::from).collect(Collectors.toList());
    }

}
