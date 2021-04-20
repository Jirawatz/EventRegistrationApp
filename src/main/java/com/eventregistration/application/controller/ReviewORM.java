package com.eventregistration.application.controller;

import com.eventregistration.application.model.Reviews;
import com.eventregistration.application.repository.ReviewRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/review/api")
@CrossOrigin(origins = "*")
public class ReviewORM {

  @Autowired
  ReviewRepository reviewRepository;


  @GetMapping(value = "/event/{eventid}")
  public List<Reviews> findAllReviewsByEvent(@PathVariable("eventid") Integer eventid) {
    return reviewRepository.findReviewsByEvent(eventid);
  }

  @PostMapping(value = "/create")
  public Reviews createReview(@RequestBody Reviews reviews) {
    return reviewRepository.save(reviews);
  }

  @PutMapping(value = "/update/{revid}")
  public Reviews updateReview(@PathVariable("revid") Integer revid, @RequestBody Reviews reviews) {
    Reviews currentReview = reviewRepository.findReviewsById(revid);
    currentReview.setScore(reviews.getScore());
    currentReview.setComments(reviews.getComments());
    return reviewRepository.save(currentReview);
  }

  @DeleteMapping(value = "/delete/{revid}")
  public void removeReview(@PathVariable("revid") Integer revid) {
    reviewRepository.deleteById(revid);
  }

}
