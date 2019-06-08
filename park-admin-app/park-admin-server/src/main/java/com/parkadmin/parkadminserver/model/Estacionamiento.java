package com.parkadmin.parkadminserver.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Estacionamiento {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    @OneToMany(mappedBy = "nivel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Nivel> niveles;
}
