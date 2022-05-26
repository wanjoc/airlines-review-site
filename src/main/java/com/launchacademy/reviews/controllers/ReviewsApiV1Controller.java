package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.exceptionHandling.ReviewNotCreatedException;
import com.launchacademy.reviews.exceptionHandling.ReviewNotDeletedException;
import com.launchacademy.reviews.exceptionHandling.ReviewNotFoundException;
import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.models.ReviewForm;
import com.launchacademy.reviews.services.ReviewService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.swing.text.html.Option;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

  @DeleteMapping("/{id}")
  public ResponseEntity<Map<String, Review>> deleteReview(@PathVariable Long id) {
    Optional<Review> review = reviewService.findById(id);
    Map<String, Review> dataMap = new HashMap<>();
    if (review.isPresent()) {
      reviewService.deleteReview(review.get());
    } else {
      throw new ReviewNotDeletedException();
    }
    return new ResponseEntity<>(dataMap, HttpStatus.ACCEPTED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Map<String, Review>> getReview(@PathVariable Long id) {
    System.out.println(id);
    Optional<Review> review = reviewService.findById(id);
    Map<String, Review> dataMap = new HashMap<>();
    if (review.isPresent()) {
      dataMap.put("review", review.get());
    } else {
      throw new ReviewNotFoundException();
    }
    return new ResponseEntity<>(dataMap, HttpStatus.OK);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Map<String, Review>> editReview(@PathVariable Long id,@RequestBody @Valid ReviewForm reviewForm,
      BindingResult bindingResult) {
    System.out.println(id);
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
        System.out.println("Controller update");
        Map<String, Review> dataMap = new HashMap<>();
        Review updatedReview = reviewService.updateReview(id, reviewForm);
        dataMap.put("review", updatedReview);
        return new ResponseEntity<>(dataMap, HttpStatus.OK);
      }
    } catch (Exception e) {
      throw new ReviewNotCreatedException();
    }
  }
}
