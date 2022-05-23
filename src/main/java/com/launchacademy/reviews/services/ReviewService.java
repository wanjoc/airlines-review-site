package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import java.util.List;
import org.springframework.data.repository.query.Param;

public interface ReviewService {
  List<Review> findAll();
  void save(Review review);

  Review createReview(ReviewForm reviewForm);

  Double airlineAverageRating(Long airlineId);
}
