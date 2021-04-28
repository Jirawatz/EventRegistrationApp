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

  @Query(value = "SELECT customers.id, customers.first_name, customers.last_name, customers.username, customers.password, customers.email, customers.date_of_birth, customers.gender, customers.age\n"
      + "FROM customers, events, register\n"
      + "WHERE customers.id = register.customerid_id\n"
      + "AND events.eventId = register.eventid_eventid\n"
      + "AND events.eventId=:id", nativeQuery = true)
  public List<Customer> findCustomerByEvent(Integer id);

}
