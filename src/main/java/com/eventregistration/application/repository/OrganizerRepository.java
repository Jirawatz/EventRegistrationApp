package com.eventregistration.application.repository;

import com.eventregistration.application.model.Organizer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizerRepository extends CrudRepository<Organizer,Integer> {

  @Query(value ="SELECT * FROM Organizer WHERE Organizer.id:=id", nativeQuery = true)
  public Organizer findOrganizerById(int id);

}
