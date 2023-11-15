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
//@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RequestMapping("/arancel")
public class ArancelController {
    @Autowired
	ArancelService arancelService;

	@PostMapping()
	public ResponseEntity<ArancelEntity> crear(@RequestBody ArancelEntity arancel) {
		arancelService.guardar(arancel);
		return ResponseEntity.ok(arancel);
	}

	@GetMapping("/")
	public ResponseEntity<List<ArancelEntity>> listar() {
		List<ArancelEntity> arancelEntities = arancelService.findAll();
		return ResponseEntity.ok(arancelEntities);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ArancelEntity> findById(@PathVariable("id") Long id) {
		ArancelEntity arancelEntity = arancelService.findById(id);
		return ResponseEntity.ok(arancelEntity);
	}
}