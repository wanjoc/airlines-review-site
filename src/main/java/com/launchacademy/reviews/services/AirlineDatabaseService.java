package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.repositories.AirlinesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AirlineDatabaseService implements AirlineService{

  private AirlinesRepository airlinesRepository;

  @Autowired
  public AirlineDatabaseService(
      AirlinesRepository airlinesRepository) {
    this.airlinesRepository = airlinesRepository;
  }

  @Override
  public List<Airline> findAll() {
    return (List<Airline>) airlinesRepository.findAll();
  }

  @Override
  public void save(Airline airline) {
    airlinesRepository.save(airline);
  }
}
