package tingeso_mingeso.backendestudiantesservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tingeso_mingeso.backendestudiantesservice.entity.ColegioEntity;
import tingeso_mingeso.backendestudiantesservice.service.ColegioService;

import java.util.List;

@Controller
@RequestMapping("/colegio")
public class ColegioController {
    @Autowired
	ColegioService colegioService;

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
	public ResponseEntity<ColegioEntity> findByRut(@PathVariable("id") Long id) {
		ColegioEntity colegioEntity = colegioService.findById(id);
		return ResponseEntity.ok(colegioEntity);
	}
}