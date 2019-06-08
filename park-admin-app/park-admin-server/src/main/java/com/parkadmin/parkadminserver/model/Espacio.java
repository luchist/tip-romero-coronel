package com.parkadmin.parkadminserver.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Espacio {
    private Long id;
    private int x;
    private int y;
    private int ancho;
    private int largo;
}
