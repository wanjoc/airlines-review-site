package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="airlines")
public class Airline {
  @Id
  @SequenceGenerator(name = "airline_generator", sequenceName = "airlines_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "airline_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Long id;

  @NotBlank
  @Column(name = "name", nullable = false)
  private String name;

  @NotBlank
  @Column(name="description", nullable = false)
  private String description;

  @Column(name="logo_url")
  private String logoUrl;

  @NotBlank
  @Column(name="headquarters", nullable = false)
  private String headquarters;

  @NotBlank
  @Column(name="contact_number", nullable = false)
  private String contactNumber;

  @NotBlank
  @Column(name="homepage_url", nullable = false)
  private String homepageUrl;

  @OneToMany(mappedBy="airline")
  @JsonIgnoreProperties("airline")
  private List<Review> reviews;
}
