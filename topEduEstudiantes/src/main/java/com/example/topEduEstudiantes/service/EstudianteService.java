package com.example.topEduEstudiantes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.topEduEstudiantes.entity.EstudianteEntity;
import com.example.topEduEstudiantes.repository.EstudianteRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class EstudianteService {
    @Autowired
    EstudianteRepository estudianteRepository;

    public EstudianteEntity guardar(EstudianteEntity estudianteEntity){
        return estudianteRepository.save(estudianteEntity);
    }

    public ArrayList<EstudianteEntity> findAll(){
        return (ArrayList<EstudianteEntity>) estudianteRepository.findAll();
    }

    public EstudianteEntity findByRut(String rut){
        return estudianteRepository.findByRut(rut);
    }

}
