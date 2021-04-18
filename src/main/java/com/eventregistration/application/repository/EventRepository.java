package com.eventregistration.application.repository;

import com.eventregistration.application.model.Events;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Events,Integer> {

  @Query(value = "SELECT * FROM events WHERE events.id:=id", nativeQuery = true)
  public Events findEventById(int id);

  @Query(value = "SELECT * FROM events WHERE lower(events.name) LIKE %:text%", nativeQuery = true)
  public List<Events> findEventByName(String text);

}
