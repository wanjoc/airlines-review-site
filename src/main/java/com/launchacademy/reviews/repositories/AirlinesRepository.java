package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Airline;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirlinesRepository extends CrudRepository<Airline, Long> {
}
