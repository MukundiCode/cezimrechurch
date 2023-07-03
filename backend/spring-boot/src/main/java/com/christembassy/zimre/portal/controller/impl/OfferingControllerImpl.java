package com.christembassy.zimre.portal.controller.impl;

import com.christembassy.zimre.portal.domain.EPartnership;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.dto.PartnershipStatisticsByMonthDTO;
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
  @ResponseBody
  public Offering newOffering(@RequestBody @Valid Offering newOffering) {
    return offeringService.addNew(newOffering);
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public Offering findById(@PathVariable Long id) {
    return offeringService.findById(id);
  }

  @GetMapping("/all")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<Offering> findAll() {
    return new ArrayList<>(offeringService.findAll());
  }

  @GetMapping("/partnershipTypes")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<EPartnership> getPartnerships(){
    return offeringService.getPartnershipTypes();
  }

  @GetMapping("/statistics")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<OfferingStatisticsByPartnershipTypeDTO> getOfferingStatistics(){
    return offeringService.getOfferingStatistics();
  }

  @GetMapping("/monthlyStatistics")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<OfferingStatisticsByMonthDTO> getMonthlyStatistics(){
    return offeringService.getOfferingMonthlyStatistics();
  }

  @GetMapping("/getTotalPartnership")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public BigDecimal getTotalPartnership(){
    return offeringService.getTotalPartnership();
  }

  @GetMapping("/getPartnershipStatisticsByMonth")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<PartnershipStatisticsByMonthDTO> getPartnershipStatisticsByMonth(){
    return offeringService.getPartnershipStatisticsByMonth();
  }
}
