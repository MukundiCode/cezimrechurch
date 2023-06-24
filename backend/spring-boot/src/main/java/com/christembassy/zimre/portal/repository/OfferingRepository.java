package com.christembassy.zimre.portal.repository;

import com.christembassy.zimre.portal.domain.Offering;

import java.util.Set;

public interface OfferingRepository {

  Offering save(Offering offering);

  Offering findById(Long id);

  Set<Offering> findAll();

}
