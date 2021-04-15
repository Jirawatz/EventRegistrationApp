package com.eventregistration.application.repository;

import com.eventregistration.application.model.Reviews;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Reviews, Integer> {

}
