package com.eventregistration.application.repository;

import com.eventregistration.application.model.Organizer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizerRepository extends CrudRepository<Organizer,Integer> {

}
