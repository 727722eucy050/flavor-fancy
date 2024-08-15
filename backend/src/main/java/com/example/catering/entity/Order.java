package com.example.catering.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private Package aPackage;
    
    @Column(name = "breakfast_name")
    private String breakfastName;

    @Column(name = "lunch_name")
    private String lunchName;

    @Column(name = "dinner_name")
    private String dinnerName;
    
    @Column(name = "address")
    private String address;

    @Column(name = "date")
    private Date date;

    @Column(name = "price")
    private Double price;
    
    @Column(name = "phone")
    private String phone;
    
    @Column(name = "time")
    private String time;

}