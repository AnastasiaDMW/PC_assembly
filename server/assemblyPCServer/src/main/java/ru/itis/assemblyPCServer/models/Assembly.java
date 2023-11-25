package ru.itis.assemblyPCServer.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "assembly")
public class Assembly {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    @Column(name = "assembly_code")
    private String assemblyCode;
    @Column(name = "date_created")
    private Date dateCreated;
    @Column(columnDefinition="VARCHAR(1500)")
    private String images;
    private String availability;

    @ManyToOne
    @JoinColumn(name = "assembly_type_id")
    private AssemblyType assemblyType;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(
            name = "user_assembly",
            joinColumns = {@JoinColumn(name = "assembly_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private List<User> users;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(
            name = "assembly_component",
            joinColumns = {@JoinColumn(name = "assembly_id")},
            inverseJoinColumns = {@JoinColumn(name = "component_id")}
    )
    private List<Component> components;

    @OneToMany(mappedBy = "assemblies")
    private List<Cart> carts;
}
