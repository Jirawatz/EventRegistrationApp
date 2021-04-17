package com.eventregistration.application.controller;

import com.eventregistration.application.model.Organizer;
import com.eventregistration.application.repository.OrganizerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/organizer")
public class OrganizerORM {

  @Autowired
  OrganizerRepository organizerRepository;

  @GetMapping(value = "/api/all")
  public List<Organizer> allOrganizer() {
    return (List<Organizer>) organizerRepository.findAll();
  }

  @GetMapping(value = "/api/find/{id}")
  public Organizer findById(@PathVariable int id) {
    return organizerRepository.findOrganizerById(id);
  }

  @GetMapping(value = "/api/create")
  public Organizer createOrganizer(@RequestBody Organizer organizer) {
    return organizerRepository.save(organizer);
  }

  @GetMapping(value = "/api/update/{orgid}")
  public Organizer updateOrganizer(@PathVariable int orgid, @RequestBody Organizer organizer) {
    Organizer currentOrganizer = organizerRepository.findOrganizerById(orgid);
    currentOrganizer.setFirstName(organizer.getFirstName());
    currentOrganizer.setLastName(organizer.getLastName());
    currentOrganizer.setUsername(organizer.getUsername());
    currentOrganizer.setPassword(organizer.getPassword());
    currentOrganizer.setEmail(organizer.getEmail());
    currentOrganizer.setDateOfBirth(organizer.getDateOfBirth());
    currentOrganizer.setCompany(organizer.getCompany());
    currentOrganizer.setPhone(organizer.getPhone());
    return organizerRepository.save(currentOrganizer);
  }

  @GetMapping(value = "api/delete/{orgid}")
  public void deleteOrganizer(@PathVariable int orgid) {
    organizerRepository.deleteById(orgid);
  }
}
