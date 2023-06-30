package com.christembassy.zimre.portal.controller.impl;

import com.christembassy.zimre.portal.domain.EPartnership;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.service.OfferingService;
import com.christembassy.zimre.portal.dto.OfferingStatisticsByMonthDTO;
import com.christembassy.zimre.portal.dto.OfferingStatisticsByPartnershipTypeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/offering")
public class OfferingControllerImpl {

  @Autowired
  private OfferingService offeringService;

  @PostMapping("/new")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Offering> newOffering(@RequestBody @Valid Offering newOffering) {
    System.out.println("newOffering = " + newOffering);
    return ResponseEntity
            .ok()
            .body(offeringService.addNew(newOffering));
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Offering> findById(@PathVariable Long id) {
    return ResponseEntity
            .ok()
            .body(offeringService.findById(id));
  }

  @GetMapping("/all")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<Offering>> findAll() {
    return ResponseEntity
            .ok()
            .body(new ArrayList<>(offeringService.findAll()));
  }

  @GetMapping("/partnershipTypes")
  public ResponseEntity<List<EPartnership>> getPartnerships(){
    return ResponseEntity
            .ok()
            .body(offeringService.getPartnershipTypes());
  }

  @GetMapping("/statistics")
  public ResponseEntity<List<OfferingStatisticsByPartnershipTypeDTO>> getOfferingStatistics(){
    return ResponseEntity
            .ok()
            .body(offeringService.getOfferingStatistics());
  }

  @GetMapping("/monthlyStatistics")
  public ResponseEntity<List<OfferingStatisticsByMonthDTO>> getMonthlyStatistics(){
    return ResponseEntity
            .ok()
            .body(offeringService.getOfferingMonthlyStatistics());
  }

  @GetMapping("/getTotalPartnership")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<BigDecimal> getTotalPartnership(){
    return ResponseEntity
            .ok()
            .body(offeringService.getTotalPartnership());
  }
}
