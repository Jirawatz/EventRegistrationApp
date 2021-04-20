package com.eventregistration.application.controller;

import com.eventregistration.application.repository.OrganizerRepository;
import com.eventregistration.application.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/review/api")
@CrossOrigin(origins = "*")
public class ReviewORM {

  @Autowired
  ReviewRepository reviewRepository;



}
