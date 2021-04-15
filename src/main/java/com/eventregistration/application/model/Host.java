package com.eventregistration.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "host")
public class Host {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int hostid;

  @ManyToOne
  private Organizer organizer;

  @ManyToOne
  private  Events events;

  public Host() {
  }

  public int getHostid() {
    return hostid;
  }

  public void setHostid(int hostid) {
    this.hostid = hostid;
  }

  public Organizer getOrganizer() {
    return organizer;
  }

  public void setOrganizer(Organizer organizer) {
    this.organizer = organizer;
  }

  public Events getEvents() {
    return events;
  }

  public void setEvents(Events events) {
    this.events = events;
  }
}
