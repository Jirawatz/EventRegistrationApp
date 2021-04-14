package com.eventregistration.application.repository;

import com.eventregistration.application.model.Events;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Events,Integer> {

}
