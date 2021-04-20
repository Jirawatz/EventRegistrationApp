package com.eventregistration.application.repository;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.model.Events;
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

}
