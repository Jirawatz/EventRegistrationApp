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

    @Query(value = "SELECT * FROM register WHERE CONCAT(register.customerid_id, ' ', register.eventid_eventid) LIKE %:text%", nativeQuery = true)
    public List<Register> findRegisterByCustomerAndEvent(String text);
}
