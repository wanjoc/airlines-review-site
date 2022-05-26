package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.query.Param;

public interface ReviewService {

  List<Review> findAll();

  void save(Review review);

  Review createReview(ReviewForm reviewForm);

  void deleteReview(Review review);

  Optional<Review> findById(Long id);
  
  Double airlineAverageRating(Long airlineId);

  Review updateReview(Long id, ReviewForm reviewForm);
}
