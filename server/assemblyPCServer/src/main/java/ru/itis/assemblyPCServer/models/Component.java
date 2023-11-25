package ru.itis.assemblyPCServer.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "component")
public class Component {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(columnDefinition="VARCHAR(1500)")
    private String images;
    private Integer price;
    @Column(columnDefinition="VARCHAR(1500)")
    private String characteristics;
    @Column(columnDefinition="VARCHAR(1000)")
    private String description;
    private String color;
    private String model;
    private Integer guarantee;
    private Integer discount;
    private Integer count;
    @Column(name = "country_of_origin")
    private String countryOfOrigin;

    @ManyToOne
    @JoinColumn(name = "component_type_id")
    private ComponentType componentType;

    @ManyToMany(mappedBy = "components")
    private List<Assembly> assemblies;
}
