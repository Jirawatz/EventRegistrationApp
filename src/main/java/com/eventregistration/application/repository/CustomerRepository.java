package com.eventregistration.application.repository;

import com.eventregistration.application.model.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

}
