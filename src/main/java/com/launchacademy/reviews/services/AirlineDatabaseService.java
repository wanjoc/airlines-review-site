package com.launchacademy.reviews.services;

import com.launchacademy.reviews.exceptionHandling.AirlineNotDeleted;
import com.launchacademy.reviews.exceptionHandling.AirlineNotFoundException;
import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.repositories.AirlinesRepository;

import com.launchacademy.reviews.repositories.ReviewsRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AirlineDatabaseService implements AirlineService {

  private AirlinesRepository airlinesRepository;
  private ReviewsRepository reviewsRepository;

  @Autowired
  public AirlineDatabaseService(
      AirlinesRepository airlinesRepository,
      ReviewsRepository reviewsRepository) {
    this.airlinesRepository = airlinesRepository;
    this.reviewsRepository = reviewsRepository;
  }

  @Override
  public List<Airline> findAll() {
    return (List<Airline>) airlinesRepository.findAll();
  }

  @Override
  public Airline save(Airline airline) {
    return airlinesRepository.save(airline);
  }

  @Override
  public Airline findById(Long id) {
    Optional<Airline> airline = airlinesRepository.findById(id);
    if (airline.isPresent()) {
      return airline.get();
    } else {
      throw new AirlineNotFoundException();
    }
  }

  @Override
  public Airline findByName(String name) {
    return airlinesRepository.findByName(name);
  }

  @Override
  public void deleteAirline(Airline airline) {
    try{
    airlinesRepository.delete(airline);
    }catch(Exception err){
      throw new AirlineNotDeleted();
    }
  }


}
