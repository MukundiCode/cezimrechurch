package com.christembassy.zimre.portal.dto;

import com.christembassy.zimre.portal.domain.EPartnership;

import java.math.BigDecimal;

public class OfferingStatisticsByPartnershipTypeDTO {

  private EPartnership partnershipType;

  private BigDecimal amount;

  public OfferingStatisticsByPartnershipTypeDTO(EPartnership partnershipType, BigDecimal amount) {
    this.partnershipType = partnershipType;
    this.amount = amount;
  }

  public EPartnership getPartnershipType() {
    return partnershipType;
  }

  public void setPartnershipType(EPartnership partnershipType) {
    this.partnershipType = partnershipType;
  }

  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }
}
