package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import com.launchacademy.reviews.repositories.ReviewsRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewDatabaseService implements ReviewService {
  private ReviewsRepository reviewsRepository;

  private AirlineService airlineService;

  @Autowired
  public ReviewDatabaseService(ReviewsRepository reviewsRepository, AirlineService airlineService) {
    this.reviewsRepository = reviewsRepository;
    this.airlineService = airlineService;
  }
  @Override
  public List<Review> findAll() {
    return (List<Review>) reviewsRepository.findAll();
  }

  @Override
  public void save(Review review) {
    reviewsRepository.save(review);
  }

  @Override
  public Review createReview(ReviewForm reviewForm) {
    Review review = new Review();
    review.setReviewerName(reviewForm.getReviewerName());
    review.setNumberOfStars(reviewForm.getNumberOfStars());
    review.setComment(review.getComment());

    Airline airline = airlineService.findById(reviewForm.getAirlineId());
    review.setAirline(airline);

    return reviewsRepository.save(review);
  }
}
