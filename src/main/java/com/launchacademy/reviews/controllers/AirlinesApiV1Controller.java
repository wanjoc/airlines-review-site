package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.exceptionHandling.AirlineNotFoundException;
import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.services.AirlineService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/api/v1/airlines")
public class AirlinesApiV1Controller {
  private AirlineService airlineService;

  @Autowired
  public AirlinesApiV1Controller(AirlineService airlineService) {
    this.airlineService = airlineService;
  }

  @GetMapping
  public ResponseEntity<Map<String, List<Airline>>> airlineList(){
    Map<String, List<Airline>> dataMap = new HashMap<>();
    dataMap.put("airlines", airlineService.findAll());
    return new ResponseEntity<>(dataMap, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Map<String, Airline>> getAirline(@PathVariable Long id){
    try{
    Map<String, Airline> dataMap = new HashMap<>();
    dataMap.put("airline", airlineService.findById(id));
    return ResponseEntity.ok(dataMap);
    }catch(Exception e){
      throw new AirlineNotFoundException();
    }
  }
}
