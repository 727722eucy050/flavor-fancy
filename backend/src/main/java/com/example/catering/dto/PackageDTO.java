package com.example.catering.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PackageDTO {
    private Long id;
    private String packageName;

    private String breakfastName;
    private String breakfastDescription;
    private Double breakfastPrice;
    private String breakfastImage;

    private String lunchName;
    private String lunchDescription;
    private Double lunchPrice;
    private String lunchImage;

    private String dinnerName;
    private String dinnerDescription;
    private Double dinnerPrice;
    private String dinnerImage;
    private Double price;
    private boolean veg;
    private double rating;
    private String img;
    private Long adminId;
}
