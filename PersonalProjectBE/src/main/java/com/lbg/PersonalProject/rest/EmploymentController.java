package com.lbg.PersonalProject.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lbg.PersonalProject.domain.Employment;
import com.lbg.PersonalProject.service.EmploymentService;

@RestController
@RequestMapping("/empl")
@CrossOrigin
public class EmploymentController {

	private EmploymentService service;

	public EmploymentController(EmploymentService service) {
		super();
		this.service = service;
	}

	@GetMapping("/get")
	public List<Employment> getEmployment() {
		return this.service.getEmployment();
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<Employment> getEmployment(@PathVariable int id) {
		return this.service.getEmployment(id);
	}

	@PostMapping("/create")
	public ResponseEntity<Object> createEmployment(@RequestBody Employment empl) {
		return this.service.createEmployment(empl);
	}

	@DeleteMapping("/delete/{id}")
	public boolean deleteEmployment(@PathVariable int id) {
		return this.service.deleteEmployment(id);
	}

	@PatchMapping("/update/{id}")
	public ResponseEntity<Employment> updateEmployment(@PathVariable int id, @RequestBody Employment empl) {
		return this.service.updateEmployment(id, empl);
	}

}
