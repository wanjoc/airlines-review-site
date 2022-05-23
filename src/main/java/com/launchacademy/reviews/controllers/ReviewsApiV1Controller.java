package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.exceptionHandling.ReviewNotCreatedException;
import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import com.launchacademy.reviews.services.ReviewService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

  @GetMapping("/average/{id}")
  public ResponseEntity<Map<String, Double>> getAirlineRating(@PathVariable Long id) {
    Map<String, Double> dataMap = new HashMap<>();
    dataMap.put("averageRating", reviewService.airlineAverageRating(id));
    return ResponseEntity.ok(dataMap);
  }

  @PostMapping
  public ResponseEntity<Map<String, Review>> createReview(
      @RequestBody @Valid ReviewForm commentForm, BindingResult bindingResult) {
    try {
      if (bindingResult.hasFieldErrors()) {
        Map<String, String> errorsList = new HashMap<>();
        for (FieldError fieldError : bindingResult.getFieldErrors()) {
          errorsList.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        Map<String, Map> errors = new HashMap<>();
        errors.put("errors", errorsList);
        return new ResponseEntity(errors, HttpStatus.UNPROCESSABLE_ENTITY);
      } else {
        Review newReview = reviewService.createReview(commentForm);
        Map<String, Review> dataMap = new HashMap<>();
        dataMap.put("review", newReview);
        return new ResponseEntity(dataMap, HttpStatus.CREATED);
      }
    } catch (Exception e) {
      throw new ReviewNotCreatedException();
    }
  }
}
