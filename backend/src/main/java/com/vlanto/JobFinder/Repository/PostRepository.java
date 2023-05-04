package com.vlanto.JobFinder.Repository;

import com.vlanto.JobFinder.Model.Post;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String>{

}
