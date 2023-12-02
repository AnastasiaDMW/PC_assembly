package ru.itis.assemblyPCServer.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

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
    private String dateCreated;
    @Column(columnDefinition="VARCHAR(1500)")
    private String images;
    private String availability;

    @ManyToOne
    @JoinColumn(name = "assembly_type_id")
    @JsonIgnore
    private AssemblyType assemblyType;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(
            name = "user_assembly",
            joinColumns = {@JoinColumn(name = "assembly_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    @JsonIgnore
    private Set<User> users;

    @ManyToMany(mappedBy = "assemblies")
    private Collection<Component> components = new ArrayList<>();

    @OneToMany(mappedBy = "assemblies")
    @JsonIgnore
    private List<Cart> carts;
}
