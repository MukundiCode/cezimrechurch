package com.christembassy.zimre.portal.repository;

import com.christembassy.zimre.portal.domain.Offering;

import java.util.Optional;
import java.util.Set;

public interface OfferingRepository {

  Offering save(Offering offering);

  Optional<Offering> findById(Long id);

  Set<Offering> findAll();

}
