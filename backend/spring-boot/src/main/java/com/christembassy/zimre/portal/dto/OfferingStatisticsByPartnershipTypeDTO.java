package com.christembassy.zimre.portal.dto;

import com.christembassy.zimre.portal.domain.EPartnership;
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
