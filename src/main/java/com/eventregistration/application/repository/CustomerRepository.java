package com.eventregistration.application.repository;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.model.Events;
import com.eventregistration.application.model.Register;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

  @Query(value = "SELECT * FROM customers WHERE customers.id=:id", nativeQuery = true)
  public Customer findCustomerById(Integer id);

  @Query(value = "SELECT * FROM customers WHERE CONCAT(customers.first_name, ' ', customers.last_name) LIKE %:text%", nativeQuery = true)
  public List<Customer> findCustomerByName(String text);


  @Query(value = "SELECT register.registrationId, register.customerid_id, register.eventid_eventid FROM events, customers, register\n"
      + "WHERE customers.id=register.customerid_id\n"
      + "AND events.eventId = register.eventid_eventid\n"
      + "AND customerid_id=:custid", nativeQuery = true)
  public List<Register> findRegisterByCustomerId(Integer custid);

}
