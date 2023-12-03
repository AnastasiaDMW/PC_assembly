package ru.itis.assemblyPCServer.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_assembly",
            joinColumns = {@JoinColumn(name = "assembly_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    @JsonIgnore
    private Collection<User> users = new ArrayList<>();

    @ManyToMany(mappedBy = "assemblies")
    private Collection<Component> components = new ArrayList<>();

    @OneToMany(mappedBy = "assemblies")
    @JsonIgnore
    private List<Cart> carts;
}
