package com.eventregistration.application.sync;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.model.Organizer;
import com.eventregistration.application.repository.OrganizerRepository;
import com.eventregistration.application.service.OrganizerService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class OrganizerSync implements CommandLineRunner {

  @Autowired
  OrganizerService organizerService;

  @Autowired
  OrganizerRepository organizerRepository;

  @Override
  public void run(String... args) throws Exception {
    organizerRepository.deleteAll();

    try {
      List<Organizer> organizersList = organizerService.fetchAll();

      for(Organizer organizer : organizersList) {
        organizerRepository.save(organizer);
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
