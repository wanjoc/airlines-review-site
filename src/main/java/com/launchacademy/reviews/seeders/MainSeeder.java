package com.launchacademy.reviews.seeders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MainSeeder implements CommandLineRunner {
  private AirlineSeeder airlineSeeder;

  @Autowired
  public MainSeeder(AirlineSeeder airlineSeeder) {
    this.airlineSeeder = airlineSeeder;
  }

  @Override
  public void run(String... args) throws Exception{
    airlineSeeder.seed();
  }
}
