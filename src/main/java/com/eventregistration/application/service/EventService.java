package com.eventregistration.application.service;
import com.eventregistration.application.model.Events;
import java.util.List;

public interface EventService {

  public List<Events> fetchAll();

}
