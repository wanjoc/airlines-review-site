package com.launchacademy.reviews.exceptionHandling;

public class AirlineNotDeleted extends RuntimeException{

  public AirlineNotDeleted() {
    super("Airline with the provided ID couldn't be deleted");
  }
}
