package com.example.topEduEstudiantes.entity;


import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "colegios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ColegioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idColegio;

    private String nombre;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tipo_colegio")
    private TipoColegioEntity tipoColegio;


}
