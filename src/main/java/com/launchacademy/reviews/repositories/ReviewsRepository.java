package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends CrudRepository<Review, Long> {

}
