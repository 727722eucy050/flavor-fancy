package com.example.catering.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String name;
    private String userName;
    private String email;
    private String password;
}
