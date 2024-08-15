package com.example.catering.service.impl;

import com.example.catering.dto.CustomOrderDTO;
import com.example.catering.entity.CustomOrder;
import com.example.catering.mapper.CustomOrderMapper;
import com.example.catering.repository.CustomOrderRepository;
import com.example.catering.service.CustomOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomOrderServiceImpl implements CustomOrderService {

    @Autowired
    private CustomOrderRepository customOrderRepository;

    @Autowired
    private CustomOrderMapper customOrderMapper;

    public List<CustomOrderDTO> getAllCustomOrders() {
        return customOrderRepository.findAll()
                .stream()
                .map(customOrderMapper::toDTO)
                .collect(Collectors.toList());
    }

    public CustomOrderDTO getCustomOrderById(Long id) {
        CustomOrder customOrder = customOrderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Custom order not found"));
        return customOrderMapper.toDTO(customOrder);
    }

    public CustomOrderDTO createCustomOrder(CustomOrderDTO customOrderDTO) {
        CustomOrder customOrder = customOrderMapper.toEntity(customOrderDTO);
        customOrder = customOrderRepository.save(customOrder);
        return customOrderMapper.toDTO(customOrder);
    }

    public CustomOrderDTO updateCustomOrder(Long id, CustomOrderDTO customOrderDTO) {
        CustomOrder customOrder = customOrderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Custom order not found"));
        customOrderMapper.updateCustomOrderFromDto(customOrderDTO, customOrder);
        customOrder = customOrderRepository.save(customOrder);
        return customOrderMapper.toDTO(customOrder);
    }

    public void deleteCustomOrder(Long id) {
        customOrderRepository.deleteById(id);
    }
}