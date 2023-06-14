package com.christembassy.zimre.portal.controller.impl;

import com.christembassy.zimre.portal.controller.OfferingController;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.service.OfferingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("offering")
public class OfferingControllerImpl implements OfferingController {

  @Autowired
  private OfferingService offeringService;

  @Override
  @PostMapping("/new")
  public Offering newOffering(Offering newOffering) {
    System.out.println("newOffering = " + newOffering);
    return offeringService.addNew(newOffering);
  }

  @Override
  @GetMapping("/{id}")
  public Offering findById(@PathVariable Long id) {
    return offeringService.findById(id);
  }

  @Override
  @GetMapping("/all")
  public List<Offering> findAll() {
    return new ArrayList<>(offeringService.findAll());
  }
}
