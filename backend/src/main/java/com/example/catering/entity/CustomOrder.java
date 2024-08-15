package com.example.catering.entity;

import jakarta.persistence.*;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "customOrder")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vegNonVeg;
    private String city;
    private Date date;
    private String deliveryAt;
    private String time;
    private String breakfast;
    private String lunch;
    private String dinner;
    private Double price;
    private String phone;
}