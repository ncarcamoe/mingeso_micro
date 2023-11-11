package com.example.topEduCuotas.controller;

import com.example.topEduCuotas.entity.ArancelEntity;
import com.example.topEduCuotas.service.ArancelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/arancel")
public class ArancelController {
    @Autowired
	ArancelService arancelService;

	@PostMapping()
	public ResponseEntity<ArancelEntity> crear(@RequestBody ArancelEntity colegio) {
		arancelService.guardar(colegio);
		return ResponseEntity.ok(colegio);
	}

	@GetMapping("/")
	public ResponseEntity<List<ArancelEntity>> listar() {
		List<ArancelEntity> colegioEntities = arancelService.findAll();
		return ResponseEntity.ok(colegioEntities);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ArancelEntity> findById(@PathVariable("id") Long id) {
		ArancelEntity colegioEntity = arancelService.findById(id);
		return ResponseEntity.ok(colegioEntity);
	}
}