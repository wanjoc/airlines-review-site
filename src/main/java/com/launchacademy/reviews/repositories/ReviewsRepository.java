package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends CrudRepository<Review, Long> {

  @Query("SELECT ROUND(AVG(r.numberOfStars), 2) FROM Review r where r.airline.id = :airlineId")
  Double airlineAverageRating(@Param("airlineId") Long airlineId);

}
