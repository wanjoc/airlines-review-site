package com.launchacademy.reviews.exceptionHandling;

public class ReviewNotDeletedException extends RuntimeException {

  public ReviewNotDeletedException() {
    super("Review cannot be deleted");
  }
}