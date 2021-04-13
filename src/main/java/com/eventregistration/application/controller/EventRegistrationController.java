package com.eventregistration.application.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class EventRegistrationController {

  @GetMapping(value = "/hello")
  public String helloWorld() {
    return "HelloWord";
  }

}