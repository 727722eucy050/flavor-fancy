package com.example.catering.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "packages")
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "package_name",nullable = false)
    private String packageName;

    @Column(name = "breakfast_name")
    private String breakfastName;
    
    @Column(name = "breakfast_img")
    private String breakfastImage;
    
    @Column(name = "breakfast_description")
    private String breakfastDescription;
    
    @Column(name = "breakfast_price")
    private Double breakfastPrice;
    
    @Column(name = "lunch_name")
    private String lunchName;
    
    @Column(name = "lunch_description")
    private String lunchDescription;
    
    @Column(name = "lunch_img")
    private String lunchImage;
    
    @Column(name = "lunch_price")
    private Double lunchPrice;
    
    @Column(name = "dinner_name")
    private String dinnerName;
    
    @Column(name = "dinner_description")
    private String dinnerDescription;

    @Column(name = "dinner_img")
    private String dinnerImage;
    
    @Column(name = "dinner_price")
    private Double dinnerPrice;

    @Column(name = "price")
    private Double price;

    @Column(name = "veg")
    private boolean veg;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "img")
    private String img;

    @Column(name = "admin_id")
    private Long adminId;
}
