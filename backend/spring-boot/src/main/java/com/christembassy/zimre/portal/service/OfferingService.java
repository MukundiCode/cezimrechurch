package com.christembassy.zimre.portal.service;

import com.christembassy.zimre.portal.domain.Church;
import com.christembassy.zimre.portal.domain.EPartnership;
import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.service.impl.MonthlyOfferingStatisticsDTO;
import com.christembassy.zimre.portal.service.impl.OfferingStatisticsDTO;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

public interface OfferingService {

  Offering addNew(Offering offering);

  Offering findById(Long id);

  Set<Offering> findAll();

  Set<Offering> findByMember(Member member);

  Set<Offering> findByChurch(Church church);

  List<EPartnership> getPartnershipTypes();

  BigDecimal getTotalPartnership();

  List<OfferingStatisticsDTO> getOfferingStatistics();

  List<MonthlyOfferingStatisticsDTO> getOfferingMonthlyStatistics();

}
