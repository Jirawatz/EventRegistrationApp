package com.eventregistration.application.repository;

import com.eventregistration.application.model.Register;
import org.springframework.data.repository.CrudRepository;

public interface RegisterRepository extends CrudRepository<Register, Integer> {

}
