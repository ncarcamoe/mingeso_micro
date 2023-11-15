package com.example.topEduCuotas.controller;

import com.example.topEduCuotas.entity.ArancelEntity;
import com.example.topEduCuotas.entity.CuotaEntity;
import com.example.topEduCuotas.service.ArancelService;
import com.example.topEduCuotas.service.CuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
//@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RequestMapping("/cuota")
public class CuotaController {
    @Autowired
    CuotaService cuotaService;

    @Autowired
    ArancelService arancelService;

    @PostMapping()
    public ResponseEntity<List<CuotaEntity>> guardar(@RequestBody CuotaEntity cuotaEntity){
        ArancelEntity arancel = arancelService.findById(cuotaEntity.getArancel().getIdArancel());
        cuotaEntity.setArancel(arancel);
        return ResponseEntity.ok(cuotaService.generarCuotas(cuotaEntity));
    }

    @GetMapping("/eliminarPorIdEstudiante/{idEstudiante}/anio/{anio}")
    public ResponseEntity<Boolean> eliminarPorId(@PathVariable Long idEstudiante, @PathVariable Short anio) {
        return ResponseEntity.ok(cuotaService.eliminar(idEstudiante,anio));
    }

    @GetMapping("/buscarPorIdEstudiante/{idEstudiante}")
    public ResponseEntity<List<CuotaEntity>> listarPorIdEstudiante(@PathVariable Long idEstudiante) {
        ArrayList<CuotaEntity> cuotas = cuotaService.obtenerPorIdEstudiante(idEstudiante);
        return ResponseEntity.ok(cuotas);
    }
}
