package com.example.topEduEstudiantes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.topEduEstudiantes.entity.EstudianteEntity;
import com.example.topEduEstudiantes.entity.TipoColegioEntity;
import com.example.topEduEstudiantes.repository.TipoColegioRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TipoColegioService {
    @Autowired
    TipoColegioRepository tipoColegioRepository;

    public TipoColegioEntity guardar(TipoColegioEntity tipoColegioEntity){
        return tipoColegioRepository.save(tipoColegioEntity);
    }

    public ArrayList<TipoColegioEntity> findAll(){
        return (ArrayList<TipoColegioEntity>) tipoColegioRepository.findAll();
    }

    public TipoColegioEntity findById(Long id){
        Optional<TipoColegioEntity> tipoColegioOptional = tipoColegioRepository.findById(id);
        TipoColegioEntity tipoColegio = new TipoColegioEntity();
        if (tipoColegioOptional.isPresent()) {
            tipoColegio = tipoColegioOptional.get();
        }
        return tipoColegio;
    }
}
