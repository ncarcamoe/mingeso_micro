package com.example.topEduCuotas.service;

import com.example.topEduCuotas.entity.ArancelEntity;
import com.example.topEduCuotas.entity.CuotaEntity;
import com.example.topEduCuotas.model.EstudianteEntity;
import com.example.topEduCuotas.repository.CuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;


@Service
public class CuotaService {
    @Autowired
    CuotaRepository cuotaRepository;

    @Autowired
    ArancelService arancelService;

    @Autowired
    RestTemplate restTemplate;

    public ArrayList<CuotaEntity> obtenerPorIdEstudiante(Long idEstudiante){
        return cuotaRepository.findByIdEstudiante(idEstudiante);
    }

    public CuotaEntity guardar(CuotaEntity cuota){
        return cuotaRepository.save(cuota);
    }

    public CuotaEntity obtenerPorId(Long id){
        Optional<CuotaEntity> cuotaOptional = cuotaRepository.findById(id);
        CuotaEntity cuota = new CuotaEntity();
        if (cuotaOptional.isPresent()) {
            cuota = cuotaOptional.get();
        }
        return cuota;
    }

    public boolean eliminar(Long idEstudiante, Short anio) {
        try{
            cuotaRepository.deleteByIdEstudianteAndArancelAnio(idEstudiante,anio);
            return true;
        }catch(Exception err){
            return false;
        }
    }

    /**Necesito arancel, numero de cuotas y el idestudiante**/
    public ArrayList<CuotaEntity> generarCuotas(CuotaEntity cuota) {
        System.out.println("Estudiante: "+ cuota.toString());
        EstudianteEntity estudiante = findByIdEstudiante(cuota.getIdEstudiante());
        Integer arancel = cuota.getArancel().getValor();
        Integer descuento = generarDescuento(arancel,estudiante.getColegio().getTipoColegio().getPorcDescuento());
        descuento = descuento + descuentoPorAnio(arancel,estudiante.getAnioEgreso());
        arancel = arancel - descuento;
        Integer valorCuota = dividirCuotas(arancel,cuota.getNumCuota());
        ArrayList<CuotaEntity> cuotas = new ArrayList<>();
        for (int i = 1; i <= cuota.getNumCuota(); i++) {

            Calendar calendario = Calendar.getInstance();
            calendario.add(Calendar.MONTH, i);
            calendario.set(Calendar.DAY_OF_MONTH, 10);

            CuotaEntity cuotaNew = new CuotaEntity();
            cuotaNew.setNumCuota(i);
            cuotaNew.setValorCuota(valorCuota);
            cuotaNew.setPagado(Boolean.FALSE);
            cuotaNew.setFechaVencimiento(calendario.getTime());
            cuotaNew.setArancel(cuota.getArancel());
            cuotaNew.setIdEstudiante(cuota.getIdEstudiante());
            cuotas.add(guardar(cuotaNew));
        }
        return cuotas;
    }

    public Integer generarDescuento(Integer valorArancel, Short descuento){
        return (int) (valorArancel * (0.01 * descuento));
    }
    public Integer dividirCuotas(Integer valorArancel, Integer cantidadCuotas){
        return valorArancel/cantidadCuotas;
    }

    public Integer descuentoPorAnio(Integer valorArancel, Short anio){
        Calendar calendario = Calendar.getInstance();
        Integer anioActual = calendario.get(Calendar.YEAR);

        Integer diferencia = anioActual - anio;
        Integer descuento = 0;
        if (diferencia < 1) {
            descuento = (int) (valorArancel * (0.01 * 15));
        } else if (diferencia >= 1 && diferencia <= 2) {
            descuento = (int) (valorArancel * (0.01 * 8));
        } else if (diferencia >= 3 && diferencia <= 4) {
            descuento = (int) (valorArancel * (0.01 * 4));
        }
        return descuento;
    }

    public EstudianteEntity findByIdEstudiante(Long id){
        System.out.println("idEstudiante: "+id);
        ResponseEntity<EstudianteEntity> response = restTemplate.exchange(
                //"http://localhost:9000/estudiante/id/"+id,
                "http://34.41.239.179:9000/estudiante/id/"+id,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<EstudianteEntity>() {}
        );
        System.out.println("Estudiante: "+ response.getBody().toString());
        return response.getBody();
    }
    /*
    public void descuentoArancel_generacionCuotas(EstudianteEntity estudianteEntity, int cantidadCuotas){
        if(administracionService.PreguntarCuotas(estudianteEntity.getTipo_colegio(), cantidadCuotas)){
            int descuentoTipoColegio = administracionService.descuentoTipoColegio(estudianteEntity.getTipo_colegio());
            int descuentoAnio = administracionService.descuentoEgresoColegio(estudianteEntity.getAnio_egreso(), estudianteEntity.getAnio_ingreso());
            int descuento_total = descuentoTipoColegio + descuentoAnio;
            float descuento_decimal = (float) descuento_total/100;
            int valorArancel = (int) (administracionService.getArancel() * (1-descuento_decimal));
            float cuota = (float) valorArancel/cantidadCuotas;
            int i = 1;
            CuotaEntity cuotasEntity;
            while (i <= cantidadCuotas){
                cuotasEntity = new CuotaEntity();
                cuotasEntity.setNumeroCuota(i);
                cuotasEntity.setValorCuota(cuota);
                cuotasEntity.setRut(estudianteEntity.getRut());
                cuotasEntity.setEstado(true);
                cuotasRepository.save(cuotasEntity);
                i++;
            }
        }
    }

    public EstudianteEntity findByRut(String rut){
        System.out.println("rut: "+rut);
        ResponseEntity<EstudianteEntity> response = restTemplate.exchange(
                "http://localhost:8080/estudiante/"+rut,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<EstudianteEntity>() {}
        );
        return response.getBody();
    }
    public List<CuotaEntity> findCuotaByRut(String rut){
        return cuotasRepository.findCuotaByRut(rut);
    }*/
}
