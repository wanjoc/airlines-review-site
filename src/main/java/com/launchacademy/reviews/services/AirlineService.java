package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Airline;
import java.util.List;

public interface AirlineService {
  List<Airline> findAll();
  void save(Airline airline);

  Airline findById(Long id);
}
