package com.example.catering.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.catering.service.PackageService;
import com.example.catering.dto.PackageDTO;

import java.util.List;

@RestController
@RequestMapping("/packages")
@CrossOrigin(origins = "http://localhost:3000")
public class PackageController {

    @Autowired
    private PackageService packageService;

    @PostMapping
    public PackageDTO createPackage(@RequestBody PackageDTO packageDTO) {
        return packageService.createPackage(packageDTO);
    }

    @PutMapping("/{id}")
    public PackageDTO updatePackage(@PathVariable Long id, @RequestBody PackageDTO packageDTO) {
        return packageService.updatePackage(id, packageDTO);
    }

    @GetMapping("/{id}")
    public PackageDTO getPackageById(@PathVariable Long id) {
        return packageService.getPackageById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePackage(@PathVariable Long id) {
        packageService.deletePackage(id);
    }

    @GetMapping
    public List<PackageDTO> getAllPackages() {
        return packageService.getAllPackages();
    }
}
