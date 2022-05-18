package com.launchacademy.reviews.exceptionHandling;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHelper {
  @ExceptionHandler(value = {AirlineNotFoundException.class})
  public ResponseEntity<String> handleAirlineNotFoundException(AirlineNotFoundException ex) {
    return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(value = { AirlineNotCreatedException.class })
  public ResponseEntity<Map<String, List>> handleAirlineNotCreatedException(AirlineNotCreatedException ex) {
    System.out.println("Could not create airline");
    List<String> errorList = new ArrayList<>();
    errorList.add(ex.getMessage());
    Map<String, List> responseBody = new HashMap<>();
    responseBody.put("errors", errorList);
    return new ResponseEntity<>(responseBody, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}

