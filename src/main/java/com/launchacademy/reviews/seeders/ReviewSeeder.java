package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.services.AirlineService;
import com.launchacademy.reviews.services.ReviewService;
import org.springframework.stereotype.Component;

@Component
public class ReviewSeeder {
  private final AirlineService airlineService;
  private final ReviewService reviewService;

  public ReviewSeeder(AirlineService airlineService,
      ReviewService reviewService) {
    this.airlineService = airlineService;
    this.reviewService = reviewService;
  }

  public void seed() {
    if (reviewService.findAll().size() == 0) {
      Airline alaska = airlineService.findByName("Alaska Airlines");

      Review alaskaReview = new Review();
      alaskaReview.setReviewerName("Alice");
      alaskaReview.setNumberOfStars(5);
      alaskaReview.setAirline(alaska);
      alaskaReview.setComment("Great airline");
      reviewService.save(alaskaReview);
    }
  }
}
