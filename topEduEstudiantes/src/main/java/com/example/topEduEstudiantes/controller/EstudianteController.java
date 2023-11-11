package com.example.topEduEstudiantes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.topEduEstudiantes.entity.EstudianteEntity;
import com.example.topEduEstudiantes.service.EstudianteService;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/estudiante")
public class EstudianteController {
    @Autowired
    EstudianteService estudianteService;

    @PostMapping()
    public ResponseEntity<EstudianteEntity> crear(@RequestBody EstudianteEntity estudiante) {
        estudianteService.guardar(estudiante);
        return ResponseEntity.ok(estudiante);
    }

    @GetMapping("/")
    public ResponseEntity<List<EstudianteEntity>> listar() {
        List<EstudianteEntity> estudianteEntities = estudianteService.findAll();
        return ResponseEntity.ok(estudianteEntities);
    }

    @GetMapping("/rut/{rut}")
    public ResponseEntity<EstudianteEntity> findByRut(@PathVariable("rut") String rut) {
        EstudianteEntity estudianteEntity = estudianteService.findByRut(rut);
        return ResponseEntity.ok(estudianteEntity);
    }

    @GetMapping("/id/{idEstudiante}")
    public ResponseEntity<EstudianteEntity> findByIdEstudiante(@PathVariable("idEstudiante") Long idEstudiante) {
        EstudianteEntity estudianteEntity = estudianteService.findByIdEstudiante(idEstudiante);
        return ResponseEntity.ok(estudianteEntity);
    }
}
