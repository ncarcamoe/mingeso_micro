package com.example.topEduEstudiantes.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "estudiantes")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EstudianteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEstudiante;

    private String rut;
    private String nombre;
    private String email;
    private String apellidoPrimario;
    private String apellidoSecundario;
    private Date fechaNacimiento;
    private Short anioEgreso;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_colegio")
    private ColegioEntity colegio;

}
