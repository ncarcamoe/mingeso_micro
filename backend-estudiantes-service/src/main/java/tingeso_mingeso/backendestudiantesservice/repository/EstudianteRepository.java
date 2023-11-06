package tingeso_mingeso.backendestudiantesservice.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tingeso_mingeso.backendestudiantesservice.entity.EstudianteEntity;

@Repository
public interface EstudianteRepository extends CrudRepository<EstudianteEntity, Long> {
    @Query("select e from EstudianteEntity e where e.rut = :rut")
    EstudianteEntity findByRut(@Param("rut") String rut);
}
