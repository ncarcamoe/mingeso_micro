package com.example.topEduEstudiantes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.topEduEstudiantes.entity.TipoColegioEntity;
import com.example.topEduEstudiantes.service.TipoColegioService;

import java.util.List;

@Controller
@RequestMapping("/tipoColegio")
public class TipoColegioController {
    @Autowired
	TipoColegioService tipoColegioService;

	@PostMapping()
	public ResponseEntity<TipoColegioEntity> crear(@RequestBody TipoColegioEntity tipoColegio) {
		tipoColegioService.guardar(tipoColegio);
		return ResponseEntity.ok(tipoColegio);
	}

	@GetMapping("/")
	public ResponseEntity<List<TipoColegioEntity>> listar() {
		List<TipoColegioEntity> tipoColegioEntities = tipoColegioService.findAll();
		return ResponseEntity.ok(tipoColegioEntities);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TipoColegioEntity> findByRut(@PathVariable("id") Long id) {
		TipoColegioEntity tipoColegioEntity = tipoColegioService.findById(id);
		return ResponseEntity.ok(tipoColegioEntity);
	}
}