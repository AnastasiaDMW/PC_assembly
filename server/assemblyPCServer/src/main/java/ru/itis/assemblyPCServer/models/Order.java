package ru.itis.assemblyPCServer.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "number_order")
    private String numberOrder;
    private Integer price;
    private Integer count;
    @Column(name = "bonuses_accrued")
    private Integer bonusesAccrued;
    @Column(name = "assembly_code")
    private Integer assemblyCode;
    private String images;
    private String title;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "pickup_point_id")
    private PickupPoint pickupPoint;
}
