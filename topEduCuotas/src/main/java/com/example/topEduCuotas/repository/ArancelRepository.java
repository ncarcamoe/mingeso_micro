package com.example.topEduCuotas.repository;

import com.example.topEduCuotas.entity.ArancelEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArancelRepository extends CrudRepository<ArancelEntity, Long> {

}