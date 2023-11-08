package com.example.topEduCuotas.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "cuotas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CuotaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCuota;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_arancel")
    private ArancelEntity arancel;
    private Long idEstudiante;
    private Integer numCuota;
    private Integer valorCuota;
    private Date fechaVencimiento;
    private Boolean pagado;
}
