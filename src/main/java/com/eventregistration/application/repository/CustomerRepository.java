package com.eventregistration.application.repository;

import com.eventregistration.application.model.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

  @Query(value = "SELECT * FROM Customer WHERE Customer.id=:id", nativeQuery = true)
  public Customer findCustomerById(Integer id);

}
