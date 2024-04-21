package com.lbg.PersonalProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lbg.PersonalProject.domain.Employment;
import com.lbg.PersonalProject.repos.EmploymentRepo;

@Service
public class EmploymentService {

	private EmploymentRepo repo;

	public EmploymentService(EmploymentRepo repo) {
		super();
		this.repo = repo;
	}

	public List<Employment> getEmployment() {
		// TODO Auto-generated method stub
		return this.repo.findAll();
	}

	public ResponseEntity<Employment> getEmployment(int id) {
		Optional<Employment> found = this.repo.findById(id);
		if (found.isEmpty()) {
			return new ResponseEntity<Employment>(HttpStatus.NOT_FOUND);
		}

		Employment body = found.get();
		return ResponseEntity.ok(body);
	}

	public ResponseEntity<Object> createEmployment(Employment empl) {
		Employment created = this.repo.save(empl);
		System.out.println(created.getRole());
		return new ResponseEntity<Object>(created, HttpStatus.CREATED);
	}

	public boolean deleteEmployment(int id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}

	public ResponseEntity<Employment> updateEmployment(int id, Employment empl) {
		Optional<Employment> found = this.repo.findById(id);
		if (found.isEmpty()) {
			return new ResponseEntity<Employment>(HttpStatus.NOT_FOUND);
		}
		Employment existing = found.get();

		if (empl.getRole() != null) {
			existing.setRole(empl.getRole());
		}
		if (empl.getStartDate() != null) {
			existing.setStartDate(empl.getStartDate());
		}
		if (empl.getEndDate() != null) {
			existing.setEndDate(empl.getEndDate());
		}
		if (empl.getEmployer() != null) {
			existing.setEmployer(empl.getEmployer());
		}
		if (empl.getJobDescription() != null) {
			existing.setJobDescription(empl.getJobDescription());
		}
		if (empl.getResponsibility() != null) {
			existing.setResponsibility(empl.getResponsibility());
		}

		Employment updated = this.repo.save(existing);
		return ResponseEntity.ok(updated);
	}

}
