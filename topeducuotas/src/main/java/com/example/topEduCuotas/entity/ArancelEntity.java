package com.example.topEduCuotas.entity;


import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "arancel")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArancelEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idArancel;

    private Integer valor;
    private Short anio;

    @JsonIgnore
    @OneToMany(mappedBy = "arancel", cascade = CascadeType.ALL)
    private Set<CuotaEntity> cuota = new HashSet<>();

}
