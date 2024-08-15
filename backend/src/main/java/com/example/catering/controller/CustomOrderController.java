package com.example.catering.controller;

import com.example.catering.dto.CustomOrderDTO;
import com.example.catering.service.CustomOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customOrders")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomOrderController {

    @Autowired
    private CustomOrderService customOrderService;

    @PostMapping
    public CustomOrderDTO createCustomOrder(@RequestBody CustomOrderDTO customOrderDTO) {
        return customOrderService.createCustomOrder(customOrderDTO);
    }

    @GetMapping
    public List<CustomOrderDTO> getAllCustomOrders() {
        return customOrderService.getAllCustomOrders();
    }

    @GetMapping("/{id}")
    public CustomOrderDTO getCustomOrderById(@PathVariable Long id) {
        return customOrderService.getCustomOrderById(id);
    }

    @PutMapping("/{id}")
    public CustomOrderDTO updateCustomOrder(@PathVariable Long id, @RequestBody CustomOrderDTO customOrderDTO) {
        return customOrderService.updateCustomOrder(id, customOrderDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomOrder(@PathVariable Long id) {
        customOrderService.deleteCustomOrder(id);
    }
}