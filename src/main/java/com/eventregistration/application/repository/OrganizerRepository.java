package com.eventregistration.application.repository;

import com.eventregistration.application.model.Organizer;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizerRepository extends CrudRepository<Organizer,Integer> {

  @Query(value = "SELECT * FROM organizers WHERE organizers.id=:id", nativeQuery = true)
  public Organizer findOrganizerById(int id);

  @Query(value = "SELECT * FROM organizers WHERE CONCAT(organizers.first_name, ' ', organizers.last_name) LIKE %:text%", nativeQuery = true)
  public List<Organizer> findOrganizerByName(String text);

  @Query(value = "SELECT organizers.id, organizers.first_name, organizers.last_name, organizers.company, organizers.phone, organizers.username, organizers.password, organizers.email, organizers.date_of_birth\n"
      + "FROM organizers, host, events\n"
      + "WHERE organizers.id = host.organizer_id\n"
      + "AND host.events_eventid = events.eventId\n"
      + "AND events.eventId=:id", nativeQuery = true)
  public List<Organizer> findOrganizerByEvent(Integer id);


}
