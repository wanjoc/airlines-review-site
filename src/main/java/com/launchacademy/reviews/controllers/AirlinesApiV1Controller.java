package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.exceptionHandling.AirlineNotCreatedException;
import com.launchacademy.reviews.exceptionHandling.AirlineNotDeleted;
import com.launchacademy.reviews.exceptionHandling.AirlineNotFoundException;
import com.launchacademy.reviews.exceptionHandling.ReviewNotDeletedException;
import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.services.AirlineService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/airlines")
public class AirlinesApiV1Controller {

  private AirlineService airlineService;

  @Autowired
  public AirlinesApiV1Controller(AirlineService airlineService) {
    this.airlineService = airlineService;
  }

  @GetMapping
  public ResponseEntity<Map<String, List<Airline>>> airlineList() {
    Map<String, List<Airline>> dataMap = new HashMap<>();
    dataMap.put("airlines", airlineService.findAll());
    return new ResponseEntity<>(dataMap, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Map<String, Airline>> getAirline(@PathVariable Long id) {
    try {
      Map<String, Airline> dataMap = new HashMap<>();
      dataMap.put("airline", airlineService.findById(id));
      return ResponseEntity.ok(dataMap);
    } catch (Exception e) {
      throw new AirlineNotFoundException();
    }
  }

  @PostMapping
  public ResponseEntity<Map<String, Airline>> createAirline(@RequestBody @Valid Airline airline,
      BindingResult bindingResult) {
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
        Airline newAirline = airlineService.save(airline);
        Map<String, Airline> dataMap = new HashMap<>();
        dataMap.put("airline", newAirline);
        return new ResponseEntity(dataMap, HttpStatus.CREATED);
      }
    } catch (Exception e) {
      if (airlineService.findByName(airline.getName()) != null) {
        Map<String, String> errorList = new HashMap<>();
        errorList.put(airline.getName(), "already exists");
        Map<String, Map> errors = new HashMap<>();
        errors.put("errors", errorList);
        return new ResponseEntity(errors, HttpStatus.UNPROCESSABLE_ENTITY);
      }
      throw new AirlineNotCreatedException();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Map<String, Review>> deleteAirline(@PathVariable Long id) {
    Airline airline = airlineService.findById(id);
    System.out.println(airline.getName());
    Map<String, Review> dataMap = new HashMap<>();
    airlineService.deleteAirline(airline);
    return new ResponseEntity<>(dataMap, HttpStatus.ACCEPTED);
  }
}
