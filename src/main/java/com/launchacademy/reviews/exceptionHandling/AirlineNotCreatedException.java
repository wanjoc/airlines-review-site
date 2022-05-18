package com.launchacademy.reviews.exceptionHandling;

public class AirlineNotCreatedException extends RuntimeException {
  public AirlineNotCreatedException() {super("Could not create airline");
  }
}
