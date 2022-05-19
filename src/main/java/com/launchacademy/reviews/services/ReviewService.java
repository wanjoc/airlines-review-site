package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import java.util.List;

public interface ReviewService {
  List<Review> findAll();
  void save(Review review);
}
