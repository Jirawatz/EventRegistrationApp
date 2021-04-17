package com.eventregistration.application.controller;

import com.eventregistration.application.model.Events;
import com.eventregistration.application.repository.EventRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/event")
public class EventORM {

  @Autowired
  EventRepository eventRepository;

  @GetMapping(value = "/api/all")
  public List<Events> allEvent() { return (List<Events>) eventRepository.findAll(); }

  @GetMapping(value = "/api/find/{id}")
  public Events findById(@PathVariable int id) {
    return eventRepository.findEventById(id);
  }

  @GetMapping(value = "/api/create")
  public Events createEvent(@RequestBody Events events) {
    return eventRepository.save(events);
  }

  @GetMapping(value = "/api/update/{eventid}")
  public Events updateEvent(@PathVariable int eventid, @RequestBody Events events) {
    Events currentEvent = eventRepository.findEventById(eventid);
    currentEvent.setName(events.getName());
    currentEvent.setType(events.getType());
    currentEvent.setStartdate(events.getStartdate());
    currentEvent.setEnddate(events.getEnddate());
    currentEvent.setDescription(events.getDescription());
    currentEvent.setFee(events.getFee());
    return eventRepository.save(currentEvent);
  }

  @GetMapping(value = "/api/delete/{eventid}")
  public void deleteEvent(@PathVariable int eventid) {
    eventRepository.deleteById(eventid);
  }

}
