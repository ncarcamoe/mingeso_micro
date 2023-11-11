package com.example.topEduCuotas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class TipoColegioEntity {
    private Long idTipoColegio;
    private String descripcion;
    private Short maximoCuotas;
    private Short porcDescuento;
}
