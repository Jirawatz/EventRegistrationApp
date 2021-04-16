package com.eventregistration.application.service;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.model.Organizer;
import java.util.List;

public interface OrganizerService {

  public List<Organizer> fetchAll();

}
