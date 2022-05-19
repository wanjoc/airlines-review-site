package com.launchacademy.reviews.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
  private AirlineSeeder airlineSeeder;
  private ReviewSeeder reviewSeeder;

  @Autowired
  public MainSeeder(AirlineSeeder airlineSeeder,
      ReviewSeeder reviewSeeder) {
    this.airlineSeeder = airlineSeeder;
    this.reviewSeeder = reviewSeeder;
  }

  @Override
  public void run(String... args) throws Exception{
    airlineSeeder.seed();
    reviewSeeder.seed();
  }
}
