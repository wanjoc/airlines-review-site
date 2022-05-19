package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="reviews")
public class Review {
  @Id
  @SequenceGenerator(name = "review_generator", sequenceName = "reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Long id;

  @Column(name="reviewer_name")
  private String reviewerName;

  @Min(value=1)
  @Max(value=5)
  @Column(name="number_of_stars", nullable=false)
  private Integer numberOfStars;

  @Column(name="comment")
  private String comment;

  @ManyToOne
  @JoinColumn(name = "airline_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private Airline airline;
}
