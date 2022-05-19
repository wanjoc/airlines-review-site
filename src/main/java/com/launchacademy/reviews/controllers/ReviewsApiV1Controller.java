package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.exceptionHandling.ReviewNotCreatedException;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import com.launchacademy.reviews.services.ReviewService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewsApiV1Controller {
  private ReviewService reviewService;

  @Autowired
  public ReviewsApiV1Controller(ReviewService reviewService) {
    this.reviewService = reviewService;
  }

  @PostMapping
  public ResponseEntity<Map<String, Review>> create(@RequestBody ReviewForm commentForm) {
    try {
      Review persistedReview = reviewService.createReview(commentForm);
      Map<String, Review> dataMap = new HashMap<>();
      dataMap.put("review", persistedReview);
      return new ResponseEntity<Map<String, Review>>(dataMap, HttpStatus.CREATED);
    } catch (IllegalArgumentException ex) {
      throw new ReviewNotCreatedException();
    }
  }
}
