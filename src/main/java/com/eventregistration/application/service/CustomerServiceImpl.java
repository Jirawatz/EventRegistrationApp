package com.eventregistration.application.service;

import com.eventregistration.application.model.Customer;
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
 * Contain Customer Business Logic
 */

@Component
public class CustomerServiceImpl implements CustomerService {

  String CUSTOMER_DATA = "https://jirawatz.github.io/EventRegistrationApp/CustomerData.json";

  @Autowired
  private RestOperations restTemplate;

  @Autowired
  private ObjectMapper objectMapper;

  @Override
  public List<Customer> fetchAll() {
    restTemplate = new RestTemplate();

    HttpHeaders headers = new HttpHeaders();
    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
    String response
        = restTemplate.getForObject(CUSTOMER_DATA, String.class);

    objectMapper = new ObjectMapper();

    try {
      List<Customer> customer
          = objectMapper.readValue(response, new TypeReference<List<Customer>>() {
      });
      return customer;
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }
}
