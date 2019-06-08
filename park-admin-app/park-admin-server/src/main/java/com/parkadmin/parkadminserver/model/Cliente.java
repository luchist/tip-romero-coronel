package com.parkadmin.parkadminserver.model;

import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class Cliente {
    private String nyap;
    private boolean esDiscapacitado;
    private int telefono;
}
