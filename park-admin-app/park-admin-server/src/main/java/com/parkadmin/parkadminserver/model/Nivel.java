package com.parkadmin.parkadminserver.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Nivel {
    @Id
    private Long numero;
    private Orientacion orientacion;
    @ManyToOne
    private Estacionamiento estacionamiento;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Espacio> espacios;
}

enum Orientacion {
    HORIZONTAL,
    VERTICAL
}