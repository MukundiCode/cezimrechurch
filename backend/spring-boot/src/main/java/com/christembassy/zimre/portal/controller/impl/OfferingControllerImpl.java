package com.christembassy.zimre.portal.controller.impl;

import com.christembassy.zimre.portal.controller.OfferingController;
import com.christembassy.zimre.portal.domain.EPartnership;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.service.OfferingService;
import com.christembassy.zimre.portal.service.impl.MonthlyOfferingStatisticsDTO;
import com.christembassy.zimre.portal.service.impl.OfferingStatisticsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/offering")
public class OfferingControllerImpl implements OfferingController {

  @Autowired
  private OfferingService offeringService;

  @Override
  @PostMapping("/new")
  @PreAuthorize("hasRole('ADMIN')")
  public Offering newOffering(@RequestBody Offering newOffering) {
    System.out.println("newOffering = " + newOffering);
    return offeringService.addNew(newOffering);
  }

  @Override
  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public Offering findById(@PathVariable Long id) {
    return offeringService.findById(id);
  }

  @Override
  @GetMapping("/all")
  @PreAuthorize("hasRole('ADMIN')")
  public List<Offering> findAll() {
    return new ArrayList<>(offeringService.findAll());
  }

  @GetMapping("/partnershipTypes")
  public List<EPartnership> getPartnerships(){
    return offeringService.getPartnershipTypes();
  }

  @GetMapping("/statistics")
  public List<OfferingStatisticsDTO> getOfferingStatistics(){
    return offeringService.getOfferingStatistics();
  }

  @GetMapping("/monthlyStatistics")
  public List<MonthlyOfferingStatisticsDTO> getMonthlyStatistics(){
    return offeringService.getOfferingMonthlyStatistics();
  }

  @GetMapping("/getTotalPartnership")
//  @PreAuthorize("hasRole('ADMIN')")
  public BigDecimal getTotalPartnership(){
    return offeringService.getTotalPartnership();
  }
}
