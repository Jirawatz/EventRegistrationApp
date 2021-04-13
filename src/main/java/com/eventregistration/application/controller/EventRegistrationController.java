package com.eventregistration.application.controller;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.repository.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class EventRegistrationController {

  @Autowired
  CustomerRepository customerRepository;

  @GetMapping(value = "/hello")
  public String helloWorld() {
    return "HelloWord";
  }

  @GetMapping(value = "/api/customer/all")
  public List<Customer> allCustomer() {
    return (List<Customer>) customerRepository.findAll();
  }



}
