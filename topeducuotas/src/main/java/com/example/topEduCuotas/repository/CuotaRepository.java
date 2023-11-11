package com.example.topEduCuotas.repository;

import com.example.topEduCuotas.entity.CuotaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;

@Repository
public interface CuotaRepository extends CrudRepository<CuotaEntity, Long> {

    @Query("select e from CuotaEntity e where e.idEstudiante = :idEstudiante")
    ArrayList<CuotaEntity> findByIdEstudiante(@Param("idEstudiante") Long idEstudiante);

    @Modifying
    @Query("DELETE FROM CuotaEntity c WHERE c.idEstudiante = :idEstudiante AND c.arancel.anio = :anio")
    void deleteByIdEstudianteAndArancelAnio(@Param("idEstudiante") Long idEstudiante, @Param("anio") Short anio);
}
