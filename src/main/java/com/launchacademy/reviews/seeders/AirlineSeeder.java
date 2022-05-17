package com.launchacademy.reviews.seeders;

import com.launchacademy.reviews.models.Airline;
import com.launchacademy.reviews.services.AirlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AirlineSeeder {

  private AirlineService airlineService;

  @Autowired
  public AirlineSeeder(AirlineService airlineService) {
    this.airlineService = airlineService;
  }

  public void seed(){
    if (airlineService.findAll().isEmpty()){
      Airline airline = new Airline();
      airline.setName("Alaska Airlines");
      airline.setDescription("Alaska Airlines is a major American airline headquartered in SeaTac, Washington, within the Seattle metropolitan area. It is the sixth largest airline in North America when measured by fleet size, scheduled passengers carried, and the number of destinations served.");
      airline.setHeadquarters("SeaTac, WA");
      airline.setContactNumber("1 (800) 252-7522");
      airline.setHomepageUrl("https://www.alaskaair.com/");
      airline.setLogoUrl("https://yt3.ggpht.com/ytc/AKedOLQW_Y3yOTuj8agTPX7EWnHN8PmumhaC5G7mxw13mg=s900-c-k-c0x00ffffff-no-rj");
      airlineService.save(airline);

      Airline airlineTwo = new Airline();
      airlineTwo.setName("United Airlines");
      airlineTwo.setDescription("United Airlines, Inc. is a major U.S. airline headquartered at Willis Tower in Chicago, Illinois. United operates a large domestic and international route network spanning cities large and small across the United States and all six inhabited continents");
      airlineTwo.setHeadquarters("Chicago, IL");
      airlineTwo.setContactNumber("1 (800) 864-8331");
      airlineTwo.setHomepageUrl("https://www.united.com/en/us");
      airlineTwo.setLogoUrl("https://www.newrest.eu/wp-content/uploads/2016/01/United-Airlines.jpg");
      airlineService.save(airlineTwo);

      Airline airlineThree = new Airline();
      airlineThree.setName("Delta Airlines");
      airlineThree.setDescription("Delta Air Lines, Inc., typically referred to as Delta, is one of the major airlines of the United States and a legacy carrier. One of the world's oldest airlines in operation, Delta is headquartered in Atlanta, Georgia.");
      airlineThree.setHeadquarters("Atlanta, GA");
      airlineThree.setContactNumber(" 1 (800) 221-1212");
      airlineThree.setHomepageUrl("https://www.delta.com/");
      airlineThree.setLogoUrl("https://mma.prnewswire.com/media/588812/DELTA_AIR_LINES_LOGO.jpg?p=facebook");
      airlineService.save(airlineThree);

    }
  }
}
