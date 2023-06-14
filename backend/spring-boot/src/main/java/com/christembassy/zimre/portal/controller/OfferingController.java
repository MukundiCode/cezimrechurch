package com.christembassy.zimre.portal.controller;

import com.christembassy.zimre.portal.domain.Offering;

import java.util.List;

public interface OfferingController {

  Offering newOffering(Offering newOffering);

  Offering findById(Long id);

  List<Offering> findAll();

}
