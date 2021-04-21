package com.eventregistration.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reviews")
public class Reviews {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer reviewId;
  private Integer score;
  private String comments;

  @ManyToOne
  private Customer customer;

  @ManyToOne
  private Events event;

  public Reviews() {
  }

  public Integer getReviewId() {
    return reviewId;
  }

  public void setReviewId(Integer reviewId) {
    this.reviewId = reviewId;
  }

  public Integer getScore() {
    return score;
  }

  public void setScore(Integer score) {
    this.score = score;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public Events getEvent() {
    return event;
  }

  public void setEvent(Events event) {
    this.event = event;
  }
}
