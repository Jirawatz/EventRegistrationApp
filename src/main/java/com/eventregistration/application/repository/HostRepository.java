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

}
