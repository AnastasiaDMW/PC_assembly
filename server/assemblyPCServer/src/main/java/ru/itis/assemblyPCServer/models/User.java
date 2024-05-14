package ru.itis.assemblyPCServer.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private String email;
    @JsonIgnore
    private String password;
    private String photo;
    private Integer bonuses;
    @Column(name = "phone_number")
    private String phoneNumber;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Order> orders;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Cart> carts;

    @ManyToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private Collection<Assembly> assemblies = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_role_id")
    @JsonIgnore
    private UserRole userRole;
}
