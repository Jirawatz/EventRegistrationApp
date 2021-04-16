package com.eventregistration.application.service;

import com.eventregistration.application.model.Organizer;
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

/**
 * Contain Organizer Business Logic
 */

@Component
public class OrganizerCustomerServiceImpl implements OrganizerService {

  String ORGANIZER_DATA = "https://jirawatz.github.io/EventRegistrationApp/OrganizerData.json";

  @Autowired
  private RestOperations restTemplate;

  @Autowired
  private ObjectMapper objectMapper;

  @Override
  public List<Organizer> fetchAll() {
    restTemplate = new RestTemplate();

    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    String response
        = restTemplate.getForObject(ORGANIZER_DATA, String.class);

    objectMapper = new ObjectMapper();

    try {
      List<Organizer> organizers
          = objectMapper.readValue(response, new TypeReference<List<Organizer>>() {
      });
      return organizers;
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }
}
