package com.christembassy.zimre.portal.service.impl;

import com.christembassy.zimre.portal.domain.Church;
import com.christembassy.zimre.portal.domain.EPartnership;
import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.repository.OfferingRepository;
import com.christembassy.zimre.portal.service.OfferingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@Service
@EnableTransactionManagement
public class OfferingServiceImpl implements OfferingService {

  @Autowired
  private OfferingRepository offeringRepository;

  @Override
  @Transactional
  public Offering addNew(Offering offering) {
    offering.setDate(LocalDate.now());
    return offeringRepository.save(offering);
  }

  @Override
  public Offering findById(Long id) {
    return offeringRepository.findById(id);
  }

  @Override
  public Set<Offering> findAll() {
    return offeringRepository.findAll();
  }

  @Override
  public Set<Offering> findByMember(Member member) {
    return null;
  }

  @Override
  public Set<Offering> findByChurch(Church church) {
    return null;
  }

  @Override
  public List<EPartnership> getPartnershipTypes() {
    return new ArrayList<>(Arrays.asList(EPartnership.values()));
  }
}
