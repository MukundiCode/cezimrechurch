package com.christembassy.zimre.portal.offering.dto;

import com.christembassy.zimre.portal.offering.EPartnership;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class OfferingStatisticsByPartnershipTypeDTO {

  private EPartnership partnershipType;

  private BigDecimal amount;

}
