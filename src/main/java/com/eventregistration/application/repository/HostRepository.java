package com.eventregistration.application.repository;

import com.eventregistration.application.model.Host;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HostRepository extends CrudRepository<Host, Integer> {

    @Query(value = "SELECT * FROM host WHERE host.hostId = :id", nativeQuery = true)
    public Host findHostById(int id);

    @Query(value = "SELECT * FROM host WHERE CONCAT(host.events_eventid, ' ', host.organizer_id) LIKE %:text%", nativeQuery = true)
    public List<Host> findHostByEventAndOrganizer(String text);

    @Query(value = "SELECT host.hostId, host.events_eventid, host.organizer_id FROM host, events, organizers\n"
        + "WHERE organizers.id = host.organizer_id\n"
        + "AND events.eventId = host.events_eventid\n"
        + "AND organizers.id=:id", nativeQuery = true)
    public List<Host> findHostByOrganizerID(Integer id);
}
