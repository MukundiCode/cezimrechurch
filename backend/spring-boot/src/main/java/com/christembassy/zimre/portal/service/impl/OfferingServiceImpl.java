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

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

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

  @Override
  public BigDecimal getTotalPartnership() {
    return offeringRepository
            .findAll()
            .stream()
            .map(Offering::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

  @Override
  public List<OfferingStatisticsDTO> getOfferingStatistics() {
    return buildOfferingStatisticsDTO((new ArrayList<>(offeringRepository.findAll())));
  }

  @Override
  public List<MonthlyOfferingStatisticsDTO> getOfferingMonthlyStatistics() {
    return offeringRepository.findAll()
            .stream()
            .collect(Collectors.groupingBy(offering -> offering.getDate().getMonthValue()))
            .entrySet()
            .stream()
            .map(entry -> new MonthlyOfferingStatisticsDTO(entry.getKey(),
                    buildOfferingStatisticsDTO(entry.getValue())))
            .collect(Collectors.toList());
  }

  private List<OfferingStatisticsDTO> buildOfferingStatisticsDTO(List<Offering> offerings){
    return offerings.stream()
            .collect(Collectors.groupingBy(Offering::getOfferingType))
            .entrySet()
            .stream()
            .map(entry -> new OfferingStatisticsDTO(entry.getKey(), entry
                    .getValue()
                    .stream()
                    .map(Offering::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add)))
            .collect(Collectors.toList());
  }
}
