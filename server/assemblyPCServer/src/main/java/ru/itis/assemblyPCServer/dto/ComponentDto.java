package ru.itis.assemblyPCServer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.itis.assemblyPCServer.models.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ComponentDto {

    private Long id;
    private String title;
    private String images;
    private Integer price;
    private String characteristics;
    private String description;
    private String color;
    private String model;
    private Integer guarantee;
    private Integer discount;
    private Integer count;
    private String countryOfOrigin;

    private ComponentTypeDto componentType;

    public static ComponentDto from(Component component) {
        return ComponentDto.builder()
                .id(component.getId())
                .title(component.getTitle())
                .images(component.getImages())
                .price(component.getPrice())
                .characteristics(component.getCharacteristics())
                .description(component.getDescription())
                .color(component.getColor())
                .model(component.getModel())
                .guarantee(component.getGuarantee())
                .discount(component.getDiscount())
                .count(component.getCount())
                .countryOfOrigin(component.getCountryOfOrigin())
                .componentType(ComponentTypeDto.from(component.getComponentType()))
                .build();
    }

    public static List<ComponentDto> from(List<Component> components) {
        return components.stream().map(ComponentDto::from).collect(Collectors.toList());
    }

    public static Collection<ComponentDto> from(Collection<Component> components) {
        return components.stream().map(ComponentDto::from).collect(Collectors.toList());
    }

}
