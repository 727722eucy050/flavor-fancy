package com.example.catering.mapper;

import com.example.catering.dto.OrderDTO;
import com.example.catering.entity.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    public OrderDTO toDTO(Order order) {
        return new OrderDTO(
                order.getId(),
                order.getAPackage() != null ? order.getAPackage().getId() : null,
                order.getAddress(),
                order.getBreakfastName(),
                order.getDinnerName(),
                order.getPrice(),
                order.getPhone(),
                order.getLunchName(),
                order.getDate(),
                order.getTime()
        );
    }

    public Order toEntity(OrderDTO orderDTO) {
        Order order = new Order();
        order.setId(orderDTO.getId());
        // Assuming that Package, CustomerOrder, and User are fetched and set here based on IDs
        // For simplicity, null is set in this example. Actual implementation would involve fetching the entities
        order.setAPackage(null); // set the actual package entity based on orderDTO.getPackageId()
        order.setAddress(orderDTO.getAddress());
        order.setDate(orderDTO.getDate());
        order.setBreakfastName(orderDTO.getBreakfastName());
        order.setDinnerName(orderDTO.getDinnerName());
        order.setLunchName(orderDTO.getLunchName());
        order.setPrice(orderDTO.getPrice());
        order.setPhone(orderDTO.getPhone());
        order.setTime(orderDTO.getTime());
        return order;
    }

    public void updateOrderFromDto(OrderDTO orderDTO, Order order) {
        order.setAPackage(null); // update with actual package entity based on orderDTO.getPackageId()
        order.setAddress(orderDTO.getAddress());
        order.setBreakfastName(orderDTO.getBreakfastName());
        order.setDinnerName(orderDTO.getDinnerName());
        order.setPrice(orderDTO.getPrice());
        order.setPhone(orderDTO.getPhone());
        order.setLunchName(orderDTO.getLunchName());
        order.setDate(orderDTO.getDate());
        order.setTime(orderDTO.getTime());
    }
}