package com.example.catering.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomOrderDTO {
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