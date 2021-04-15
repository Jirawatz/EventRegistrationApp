package com.eventregistration.application.controller;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.model.Events;
import com.eventregistration.application.model.Organizer;
import com.eventregistration.application.model.Reviews;
import com.eventregistration.application.repository.CustomerRepository;
import com.eventregistration.application.repository.EventRepository;
import com.eventregistration.application.repository.OrganizerRepository;
import com.eventregistration.application.repository.ReviewRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class EventRegistrationController {

  @Autowired
  CustomerRepository customerRepository;

  @Autowired
  OrganizerRepository organizerRepository;

  @Autowired
  EventRepository eventRepository;

  @Autowired
  ReviewRepository reviewRepository;

  @GetMapping(value = "/hello")
  public String helloWorld() {
    return "HelloWord";
  }

  @GetMapping(value = "/api/customer/all")
  public List<Customer> allCustomer() {
    return (List<Customer>) customerRepository.findAll();
  }

  @GetMapping(value = "/api/organizer/all")
  public List<Organizer> allOrganizer() {
    return (List<Organizer>) organizerRepository.findAll();
  }

  @GetMapping(value = "/api/events/all")
  public List<Events> allEvent() { return (List<Events>) eventRepository.findAll(); }

  @GetMapping(value = "/api/review/all")
  public List<Reviews> allReview() { return (List<Reviews>) reviewRepository.findAll(); }

}
