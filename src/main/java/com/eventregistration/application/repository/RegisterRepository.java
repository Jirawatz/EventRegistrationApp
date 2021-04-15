package com.eventregistration.application.repository;

import com.eventregistration.application.model.Register;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends CrudRepository<Register, Integer> {

}
