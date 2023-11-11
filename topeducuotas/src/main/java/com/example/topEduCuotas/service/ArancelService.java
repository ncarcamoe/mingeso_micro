package com.example.topEduCuotas.service;

import com.example.topEduCuotas.entity.ArancelEntity;
import com.example.topEduCuotas.repository.ArancelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ArancelService {
    @Autowired
    ArancelRepository arancelRepository;

    public ArancelEntity guardar(ArancelEntity arancelEntity){
        return arancelRepository.save(arancelEntity);
    }

    public ArrayList<ArancelEntity> findAll(){
        return (ArrayList<ArancelEntity>) arancelRepository.findAll();
    }

    public ArancelEntity findById(Long id){
        Optional<ArancelEntity> arancelOptional = arancelRepository.findById(id);
        ArancelEntity arancel = new ArancelEntity();
        if (arancelOptional.isPresent()) {
            arancel = arancelOptional.get();
        }
        return arancel;
    }

}