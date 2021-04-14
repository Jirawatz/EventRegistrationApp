package com.eventregistration.application.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "events")
public class Events {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int eventid;
  private String name;
  private String type;
  private Date startdate;
  private Date enddate;
  private String description;
  private Integer fee;

  public Events() {
  }

  public int getEventid() {
    return eventid;
  }

  public void setEventid(int eventid) {
    this.eventid = eventid;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Date getStartdate() {
    return startdate;
  }

  public void setStartdate(Date startdate) {
    this.startdate = startdate;
  }

  public Date getEnddate() {
    return enddate;
  }

  public void setEnddate(Date enddate) {
    this.enddate = enddate;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Integer getFee() {
    return fee;
  }

  public void setFee(Integer fee) {
    this.fee = fee;
  }
}
