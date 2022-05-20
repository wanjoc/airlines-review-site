package com.launchacademy.reviews.models;

import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@NoArgsConstructor
@Getter
@Setter
@Component
public class ReviewForm {

  private String reviewerName;

  @NotNull
  private Integer numberOfStars;

  private String comment;

  @NotNull
  private Long airlineId;
}
