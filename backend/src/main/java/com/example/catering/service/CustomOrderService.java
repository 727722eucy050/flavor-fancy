package com.example.catering.service;

import com.example.catering.dto.CustomOrderDTO;

import java.util.List;

public interface CustomOrderService {

    List<CustomOrderDTO> getAllCustomOrders();

    CustomOrderDTO getCustomOrderById(Long id);

    CustomOrderDTO createCustomOrder(CustomOrderDTO customOrderDTO);

    CustomOrderDTO updateCustomOrder(Long id, CustomOrderDTO customOrderDTO);

    void deleteCustomOrder(Long id);
}