package com.launchacademy.reviews.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping(value = { "/airlines", "/airlines/{id}", "/airlines/new", "/airlines/edit/{id}", "/airlines/reviews/{id}", "/404"})
  public String forward() {
    return "forward:/";
  }
}
