package com.eventregistration.application.repository;

import com.eventregistration.application.model.Host;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HostRepository extends CrudRepository<Host, Integer> {

}
