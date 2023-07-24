package com.christembassy.zimre.portal.offering;

import com.christembassy.zimre.portal.church.Church;
import com.christembassy.zimre.portal.member.Member;
import com.christembassy.zimre.portal.offering.dto.OfferingStatisticsByMonthDTO;
import com.christembassy.zimre.portal.offering.dto.OfferingStatisticsByPartnershipTypeDTO;
import com.christembassy.zimre.portal.offering.dto.PartnershipStatisticsByMonthDTO;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

public interface OfferingService {

  Offering addNew(Offering offering);

  Offering findById(Long id);

  List<Offering> findAll();

  Set<Offering> findByMember(Member member);

  Set<Offering> findByChurch(Church church);

  List<EPartnership> getPartnershipTypes();

  BigDecimal getTotalPartnership();

  List<OfferingStatisticsByPartnershipTypeDTO> getOfferingStatistics();

  List<OfferingStatisticsByMonthDTO> getOfferingMonthlyStatistics();

  List<PartnershipStatisticsByMonthDTO> getPartnershipStatisticsByMonth();

}
