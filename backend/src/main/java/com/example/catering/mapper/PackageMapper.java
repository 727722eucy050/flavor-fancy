package com.example.catering.mapper;

import com.example.catering.dto.PackageDTO;
import com.example.catering.entity.Package;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PackageMapper {

    @Mapping(target = "rating", expression = "java(packageEntity.getRating() != null ? packageEntity.getRating() : 0.0)")
    PackageDTO toDTO(Package packageEntity);

    Package toEntity(PackageDTO packageDTO);

    void updatePackageFromDto(PackageDTO packageDTO, @MappingTarget Package packageEntity);
}
