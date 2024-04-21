package com.lbg.PersonalProject.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lbg.PersonalProject.domain.Employment;

@Repository
public interface EmploymentRepo extends JpaRepository<Employment, Integer> {

}
