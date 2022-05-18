package com.launchacademy.reviews.exceptionHandling;

public class AirlineNotFoundException extends RuntimeException{
  public AirlineNotFoundException(){super("Could not find Airline with the provided ID");}
}
