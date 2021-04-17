package com.eventregistration.application.repository;

import com.eventregistration.application.model.Events;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Events,Integer> {

  @Query(value = "SELECT * FROM Events WHERE Events.id:=id")
  public Events findEventById(int id);
}
