package com.example.topEduEstudiantes.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tipoColegio")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TipoColegioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTipoColegio;

    private String descripcion;
    private Short maximoCuotas;
    private Short porcDescuento;
}
