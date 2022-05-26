package com.launchacademy.reviews.exceptionHandling;

public class ReviewNotFoundException extends RuntimeException {
  public ReviewNotFoundException() {
    super("Could not find Review with the provided ID");
  }
}
