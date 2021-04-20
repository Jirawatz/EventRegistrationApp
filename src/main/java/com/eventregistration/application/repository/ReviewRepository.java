package com.eventregistration.application.repository;

import com.eventregistration.application.model.Reviews;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends CrudRepository<Reviews, Integer> {

  @Query(value = "SELECT * FROM reviews WHERE reviews.event_eventid = :id", nativeQuery = true)
  public List<Reviews> findReviewsByEvent(Integer id);

  @Query(value = "SELECT * FROM reviews WHERE reviews.review_id = :id", nativeQuery = true)
  public Reviews findReviewsById(Integer id);

}
