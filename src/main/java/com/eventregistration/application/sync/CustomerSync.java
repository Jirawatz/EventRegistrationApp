package com.eventregistration.application.sync;

import com.eventregistration.application.model.Customer;
import com.eventregistration.application.repository.CustomerRepository;
import com.eventregistration.application.service.CustomerService;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CustomerSync implements CommandLineRunner {

  @Autowired
  CustomerService customerService;

  @Autowired
  CustomerRepository customerRepository;

  @Override
  public void run(String... args) throws Exception {
    customerRepository.deleteAll();

    try {
      List<Customer> customerList = customerService.fetchAll();

      for(Customer customer : customerList) {
        customerRepository.save(customer);
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
