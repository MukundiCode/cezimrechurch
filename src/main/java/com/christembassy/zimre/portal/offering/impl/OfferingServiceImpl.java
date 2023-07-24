package com.christembassy.zimre.portal.offering.impl;

import com.christembassy.zimre.portal.church.Church;
import com.christembassy.zimre.portal.offering.EPartnership;
import com.christembassy.zimre.portal.member.Member;
import com.christembassy.zimre.portal.offering.Offering;
import com.christembassy.zimre.portal.offering.dto.OfferingStatisticsByMonthDTO;
import com.christembassy.zimre.portal.offering.dto.OfferingStatisticsByPartnershipTypeDTO;
import com.christembassy.zimre.portal.offering.dto.PartnershipStatisticsByMonthDTO;
import com.christembassy.zimre.portal.exception.OfferingException;
import com.christembassy.zimre.portal.offering.OfferingRepository;
import com.christembassy.zimre.portal.offering.OfferingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
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
    try {
      return offeringRepository.save(offering);
    } catch (Exception e) {
      throw new OfferingException("Could not add offering: " + offering);
    }
  }

  @Override
  @Transactional
  public Offering findById(Long id) {
    return offeringRepository
            .findById(id)
            .orElseThrow(() -> new OfferingException("Could not find offering with id " + id));
  }

  @Override
  @Transactional
  public List<Offering> findAll() {
    try {
      return offeringRepository.findAll();
    } catch (Exception e) {
      throw new OfferingException("Could not fetch all offerings.");
    }
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
  @Transactional
  public BigDecimal getTotalPartnership() {
    return offeringRepository
            .findAll()
            .stream()
            .map(Offering::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

  @Override
  @Transactional
  public List<OfferingStatisticsByPartnershipTypeDTO> getOfferingStatistics() {
    try {
      return buildOfferingStatisticsDTO(new ArrayList<>(offeringRepository.findAll()));
    } catch (Exception e) {
      throw new OfferingException("Could not fetch offering statistics.");
    }
  }

  @Override
  @Transactional
  public List<OfferingStatisticsByMonthDTO> getOfferingMonthlyStatistics() {
    return offeringRepository.findAll()
            .stream()
            .collect(Collectors.groupingBy(offering -> offering.getDate().getMonthValue()))
            .entrySet()
            .stream()
            .map(entry -> new OfferingStatisticsByMonthDTO(entry.getKey(),
                    buildOfferingStatisticsDTO(entry.getValue())))
            .collect(Collectors.toList());
  }

  @Override
  @Transactional
  public List<PartnershipStatisticsByMonthDTO> getPartnershipStatisticsByMonth(){
    return offeringRepository.findAll()
            .stream()
            .collect(Collectors.groupingBy(Offering::getOfferingType))
            .entrySet()
            .stream()
            .map(entry -> PartnershipStatisticsByMonthDTO.toDto(entry.getKey(), entry.getValue()))
            .collect(Collectors.toList());
  }

  private List<OfferingStatisticsByPartnershipTypeDTO> buildOfferingStatisticsDTO(List<Offering> offerings) {
    return offerings.stream()
            .collect(Collectors.groupingBy(Offering::getOfferingType))
            .entrySet()
            .stream()
            .map(entry -> new OfferingStatisticsByPartnershipTypeDTO(entry.getKey(), entry
                    .getValue()
                    .stream()
                    .map(Offering::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add)))
            .collect(Collectors.toList());
  }
}
