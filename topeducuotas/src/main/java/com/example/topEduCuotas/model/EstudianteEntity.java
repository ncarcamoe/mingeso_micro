package com.example.topEduCuotas.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class EstudianteEntity {
    private Long idEstudiante;
    private String rut;
    private String nombre;
    private String email;
    private String apellidoPrimario;
    private String apellidoSecundario;
    private Date fechaNacimiento;
    private Short anioEgreso;
    private ColegioEntity colegio;
}
