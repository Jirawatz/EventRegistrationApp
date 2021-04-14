package com.eventregistration.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Register {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int registrationid;

  @ManyToOne
  private Customer customerid;

  @ManyToOne
  private Events eventid;

  public Register() {
  }

  public int getRegistrationid() {
    return registrationid;
  }

  public void setRegistrationid(int registrationid) {
    this.registrationid = registrationid;
  }

  @Column(name = "customerid")
  public Customer getCustomerid() {
    return customerid;
  }

  public void setCustomerid(Customer customerid) {
    this.customerid = customerid;
  }

  @Column(name = "eventid")
  public Events getEventid() {
    return eventid;
  }

  public void setEventid(Events eventid) {
    this.eventid = eventid;
  }
}
