package tingeso_mingeso.backendestudiantesservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tingeso_mingeso.backendestudiantesservice.entity.ColegioEntity;
import tingeso_mingeso.backendestudiantesservice.repository.ColegioRepository;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ColegioService {
    @Autowired
    ColegioRepository colegioRepository;

    public ColegioEntity guardar(ColegioEntity colegioEntity){
        return colegioRepository.save(colegioEntity);
    }

    public ArrayList<ColegioEntity> findAll(){
        return (ArrayList<ColegioEntity>) colegioRepository.findAll();
    }

    public ColegioEntity findById(Long id){
        Optional<ColegioEntity> colegioOptional = colegioRepository.findById(id);
        ColegioEntity colegio = new ColegioEntity();
        if (colegioOptional.isPresent()) {
            colegio = colegioOptional.get();
        }
        return colegio;
    }
}
