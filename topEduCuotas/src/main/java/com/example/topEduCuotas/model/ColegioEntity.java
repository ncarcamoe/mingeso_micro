package com.example.topEduCuotas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ColegioEntity {
    private Long idColegio;
    private String nombre;
    private TipoColegioEntity tipoColegio;
}
