package com.example.catering.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.catering.entity.CustomOrder;

@Repository
public interface CustomOrderRepository extends JpaRepository<CustomOrder,Long>{

}
