package com.eventregistration.application.controller;

import com.eventregistration.application.model.Events;
import com.eventregistration.application.repository.EventRepository;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/event/api")
@CrossOrigin(origins = "http://localhost:3000")
public class EventORM {

  @Autowired
  EventRepository eventRepository;

  @GetMapping(value = "/all")
  public List<Events> allEvent() { return (List<Events>) eventRepository.findAll(); }

  @GetMapping(value = "/find/{id}")
  public Events findById(@PathVariable("id") Integer id) {
    return eventRepository.findEventById(id);
  }

  @PostMapping(value = "/create")
  public Events createEvent(@RequestBody Events events) {
    return eventRepository.save(events);
  }

  @PutMapping(value = "/update/{eventid}")
  public Events updateEvent(@PathVariable("eventid") Integer eventid, @RequestBody Events events) {
    Events currentEvent = eventRepository.findEventById(eventid);
    currentEvent.setName(events.getName());
    currentEvent.setType(events.getType());
    currentEvent.setStartdate(events.getStartdate());
    currentEvent.setEnddate(events.getEnddate());
    currentEvent.setDescription(events.getDescription());
    currentEvent.setFee(events.getFee());
    return eventRepository.save(currentEvent);
  }

  @DeleteMapping("/delete/{delete}")
  public void deleteEvent(@PathVariable("delete") Integer delete) {
    eventRepository.deleteById(delete);
  }

  @GetMapping(value = "/name/{text}")
  public List<Events> findEventByName(@PathVariable("text") String text) {
    return eventRepository.findEventByName(text.toLowerCase());
  }

}
