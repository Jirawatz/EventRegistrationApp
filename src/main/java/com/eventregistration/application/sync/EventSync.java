package com.eventregistration.application.sync;

import com.eventregistration.application.model.Events;
import com.eventregistration.application.repository.EventRepository;
import com.eventregistration.application.service.EventService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class EventSync implements CommandLineRunner {

  @Autowired
  EventService eventService;

  @Autowired
  EventRepository eventRepository;

  @Override
  public void run(String... args) throws Exception {
    //eventRepository.deleteAll();

    try {
      List<Events> eventsList = eventService.fetchAll();

      for(Events events : eventsList) {
        //eventRepository.save(events);
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
