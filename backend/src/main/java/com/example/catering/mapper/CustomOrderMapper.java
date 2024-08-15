package com.example.catering.mapper;

import com.example.catering.dto.CustomOrderDTO;
import com.example.catering.entity.CustomOrder;
import org.springframework.stereotype.Component;

@Component
public class CustomOrderMapper {

    public CustomOrderDTO toDTO(CustomOrder customOrder) {
        return new CustomOrderDTO(
                customOrder.getId(),
                customOrder.getVegNonVeg(),
                customOrder.getCity(),
                customOrder.getDate(),
                customOrder.getDeliveryAt(),
                customOrder.getTime(),
                customOrder.getBreakfast(),
                customOrder.getLunch(),
                customOrder.getDinner(),
                customOrder.getPrice(),
                customOrder.getPhone()
        );
    }

    public CustomOrder toEntity(CustomOrderDTO customOrderDTO) {
        return new CustomOrder(
                customOrderDTO.getId(),
                customOrderDTO.getVegNonVeg(),
                customOrderDTO.getCity(),
                customOrderDTO.getDate(),
                customOrderDTO.getDeliveryAt(),
                customOrderDTO.getTime(),
                customOrderDTO.getBreakfast(),
                customOrderDTO.getLunch(),
                customOrderDTO.getDinner(),
                customOrderDTO.getPrice(),
                customOrderDTO.getPhone()
        );
    }

    public void updateCustomOrderFromDto(CustomOrderDTO customOrderDTO, CustomOrder customOrder) {
        customOrder.setVegNonVeg(customOrderDTO.getVegNonVeg());
        customOrder.setCity(customOrderDTO.getCity());
        customOrder.setDate(customOrderDTO.getDate());
        customOrder.setDeliveryAt(customOrderDTO.getDeliveryAt());
        customOrder.setTime(customOrderDTO.getTime());
        customOrder.setBreakfast(customOrderDTO.getBreakfast());
        customOrder.setLunch(customOrderDTO.getLunch());
        customOrder.setDinner(customOrderDTO.getDinner());
        customOrder.setPrice(customOrderDTO.getPrice());
        customOrder.setPhone(customOrderDTO.getPhone());
    }
}