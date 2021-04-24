package com.eventregistration.application.repository;

import com.eventregistration.application.model.Register;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegisterRepository extends CrudRepository<Register, Integer> {

    @Query(value = "SELECT * FROM register WHERE register.registrationID=:id", nativeQuery = true)
    public Register findRegisterById(int id);

    @Query(value = "SELECT register.registrationId, register.customerid_id, register.eventid_eventid FROM events, customers, register\n"
            + "WHERE customers.id=register.customerid_id\n"
            + "AND events.eventId = register.eventid_eventid\n"
            + "AND customerid_id=:custid", nativeQuery = true)
    public List<Register> findRegisterByCustomerId(Integer custid);
}
