package com.eventregistration.application.controller;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.model.Events;
import com.eventregistration.application.model.Register;
import com.eventregistration.application.repository.CustomerRepository;

import java.util.List;

import com.eventregistration.application.repository.EventRepository;
import com.eventregistration.application.repository.RegisterRepository;
import javax.persistence.criteria.CriteriaBuilder.In;
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
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerORM {

  @Autowired
  CustomerRepository customerRepository;

  @Autowired
  EventRepository eventRepository;

  @Autowired
  RegisterRepository registerRepository;

  @GetMapping(value = "/all")
  public List<Customer> allCustomer() {
    return (List<Customer>) customerRepository.findAll();
  }

  @GetMapping(value = "/find/{id}")
  public Customer findById(@PathVariable("id") Integer id) {
    return customerRepository.findCustomerById(id);
  }

  @PostMapping(value = "/create")
  public Customer createCustomer(@RequestBody Customer customer) {
    return customerRepository.save(customer);
  }

  @PutMapping(value = "/update/{cusid}")
  public Customer updateCustomer(@PathVariable("cusid") Integer custid, @RequestBody Customer customer) {
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

  @DeleteMapping(value = "/delete/{custid}")
  public void deleteCustomer(@PathVariable("custid") Integer custid) {
    customerRepository.deleteById(custid);
  }

  @GetMapping(value = "/name/{custname}")
  public List<Customer> findCustomerByName(@PathVariable("custname") String custname) {
    return customerRepository.findCustomerByName(custname);
  }

  @GetMapping(value = "/event/customer/{id}")
  public List<Events> findEventsByCustomerID(@PathVariable("id") Integer id) {
    return eventRepository.findEventByCustomerRegister(id);
  }

  @GetMapping(value = "/event/register/{id}")
  public List<Register> findRegisterByCustomerId(@PathVariable("id") Integer id) {
    return registerRepository.findRegisterByCustomerId(id);
  }

  @GetMapping(value = "/event/{id}")
  public List<Customer> findCustomerByEvent(@PathVariable("id") Integer id) {
    return customerRepository.findCustomerByEvent(id);
  }

}
