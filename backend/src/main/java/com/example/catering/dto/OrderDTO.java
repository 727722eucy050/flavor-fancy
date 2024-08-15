package com.example.catering.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Long id;
    private Long packageId;
    private String dinnerName;
    private String lunchName;
    private String breakfastName;
    private Double price;
    private String phone;
    private String address;
    private Date date;
    private String time;
}