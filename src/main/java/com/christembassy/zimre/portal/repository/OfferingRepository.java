package com.christembassy.zimre.portal.repository;

import com.christembassy.zimre.portal.domain.Offering;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Set;

public interface OfferingRepository extends JpaRepository<Offering, Long> {

}
