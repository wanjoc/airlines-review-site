package com.launchacademy.reviews.services;

import com.launchacademy.reviews.exceptionHandling.ReviewNotFoundException;
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
    review.setComment(reviewForm.getComment());

    Airline airline = airlineService.findById(reviewForm.getAirlineId());
    review.setAirline(airline);

    return reviewsRepository.save(review);
  }

  @Override
  public void deleteReview(Review review) {
    try{
      reviewsRepository.delete(review);
    } catch(Exception error){
      throw new ReviewNotFoundException();
    }
  }

  @Override
  public Optional<Review> findById(Long id) {
    return reviewsRepository.findById(id);
  }

  @Override
  public Double airlineAverageRating(Long id) {
    return reviewsRepository.airlineAverageRating(id);
  }

  @Override
  public Review updateReview(Long id, ReviewForm reviewForm) {
      Optional<Review> review = reviewsRepository.findById(id);
      if (review.isPresent()) {
        Review dbReview = review.get();
        dbReview.setReviewerName(reviewForm.getReviewerName());
        dbReview.setNumberOfStars(reviewForm.getNumberOfStars());
        dbReview.setComment(reviewForm.getComment());
        return reviewsRepository.save(dbReview);
      }else{
        throw new ReviewNotFoundException();
      }
  }
}
