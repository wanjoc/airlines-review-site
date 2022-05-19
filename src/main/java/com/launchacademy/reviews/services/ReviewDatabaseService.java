package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewDatabaseService implements ReviewService {
  private ReviewsRepository reviewsRepository;

  @Autowired
  public ReviewDatabaseService(
      ReviewsRepository reviewsRepository) {
    this.reviewsRepository = reviewsRepository;
  }

  @Override
  public List<Review> findAll() {
    return (List<Review>) reviewsRepository.findAll();
  }

  @Override
  public void save(Review review) {
    reviewsRepository.save(review);
  }
}
