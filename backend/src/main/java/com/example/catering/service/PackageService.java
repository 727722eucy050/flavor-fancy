package com.example.catering.service;

import com.example.catering.dto.PackageDTO;
import com.example.catering.entity.Package;
import com.example.catering.mapper.PackageMapper;
import com.example.catering.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private PackageMapper packageMapper;

    public List<PackageDTO> getAllPackages() {
        return packageRepository.findAll()
                .stream()
                .map(packageMapper::toDTO)
                .collect(Collectors.toList());
    }

    public PackageDTO getPackageById(Long id) {
        Package packageEntity = packageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found"));
        return packageMapper.toDTO(packageEntity);
    }

    public PackageDTO createPackage(PackageDTO packageDTO) {
        Package packageEntity = packageMapper.toEntity(packageDTO);
        packageEntity = packageRepository.save(packageEntity);
        return packageMapper.toDTO(packageEntity);
    }

    public PackageDTO updatePackage(Long id, PackageDTO packageDTO) {
        Package packageEntity = packageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Package not found"));
        packageMapper.updatePackageFromDto(packageDTO, packageEntity);
        packageEntity = packageRepository.save(packageEntity);
        return packageMapper.toDTO(packageEntity);
    }

    public void deletePackage(Long id) {
        packageRepository.deleteById(id);
    }
}
