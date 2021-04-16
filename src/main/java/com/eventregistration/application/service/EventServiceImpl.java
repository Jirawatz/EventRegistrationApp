package com.eventregistration.application.service;

import com.eventregistration.application.model.Events;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

@Component
public class EventServiceImpl implements EventService {

  String EVENT_DATA = "https://jirawatz.github.io/EventRegistrationApp/EventData.json";

  @Autowired
  private RestOperations restTemplate;

  @Autowired
  private ObjectMapper objectMapper;


  @Override
  public List<Events> fetchAll() {
    restTemplate = new RestTemplate();

    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    String response
        = restTemplate.getForObject(EVENT_DATA, String.class);

    objectMapper = new ObjectMapper();

    try {
      List<Events> event
          = objectMapper.readValue(response, new TypeReference<List<Events>>() {
      });
      return event;
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }
}
