package com.parkadmin.parkadminserver.repository;

import com.parkadmin.parkadminserver.model.Nivel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NivelRepository  extends JpaRepository<Nivel, Long> {
    Nivel findByNumero(Long id);
}
