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
  ReviewRepository reviewRepository;

  @GetMapping(value = "/hello")
  public String helloWorld() {
    return "HelloWord";
  }

  @GetMapping(value = "/api/review/all")
  public List<Reviews> allReview() { return (List<Reviews>) reviewRepository.findAll(); }

}
