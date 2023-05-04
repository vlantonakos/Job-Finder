package com.vlanto.JobFinder.Repository;

import java.util.List;

import com.vlanto.JobFinder.Model.Post;

public interface SearchRepository {

	List<Post> findByText(String text);
	
}
