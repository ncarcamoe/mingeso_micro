package com.example.topEduEstudiantes.controller;

import com.example.topEduEstudiantes.service.TipoColegioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.topEduEstudiantes.entity.ColegioEntity;
import com.example.topEduEstudiantes.service.ColegioService;

import java.util.List;

@Controller
//@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/colegio")
public class ColegioController {
    @Autowired
	ColegioService colegioService;

	@Autowired
	TipoColegioService tipoColegioService;

	@PostMapping()
	public ResponseEntity<ColegioEntity> crear(@RequestBody ColegioEntity colegio) {
		colegioService.guardar(colegio);
		return ResponseEntity.ok(colegio);
	}

	@GetMapping("/")
	public ResponseEntity<List<ColegioEntity>> listar() {
		List<ColegioEntity> colegioEntities = colegioService.findAll();
		return ResponseEntity.ok(colegioEntities);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ColegioEntity> findById(@PathVariable("id") Long id) {
		ColegioEntity colegioEntity = colegioService.findById(id);
		return ResponseEntity.ok(colegioEntity);
	}
}