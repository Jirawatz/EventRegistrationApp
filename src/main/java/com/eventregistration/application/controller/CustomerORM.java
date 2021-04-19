package com.eventregistration.application.controller;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.repository.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer/api")
@CrossOrigin(origins = "*")
public class CustomerORM {

  @Autowired
  CustomerRepository customerRepository;

  @GetMapping(value = "/all")
  public List<Customer> allCustomer() {
    return (List<Customer>) customerRepository.findAll();
  }

  @GetMapping(value = "/find/{id}")
  public Customer findById(@PathVariable("id") int id) {
    return customerRepository.findCustomerById(id);
  }

  @PostMapping(value = "/create")
  public Customer createCustomer(@RequestBody Customer customer) {
    return customerRepository.save(customer);
  }

  @PutMapping(value = "/update/{cusid}")
  public Customer updateCustomer(@PathVariable int custid, @RequestBody Customer customer) {
    Customer currentCustomer = customerRepository.findCustomerById(custid);
    currentCustomer.setFirstName(customer.getFirstName());
    currentCustomer.setLastName(customer.getLastName());
    currentCustomer.setUsername(customer.getUsername());
    currentCustomer.setPassword(customer.getPassword());
    currentCustomer.setEmail(customer.getEmail());
    currentCustomer.setDateOfBirth(customer.getDateOfBirth());
    currentCustomer.setGender(customer.getGender());
    currentCustomer.setAge(customer.getAge());
    return customerRepository.save(currentCustomer);
  }

  @DeleteMapping(value ="/delete/{custid}")
  public void deleteCustomer(@PathVariable int custid) {
    customerRepository.deleteById(custid);
  }

}
