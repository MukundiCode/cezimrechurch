package com.christembassy.zimre.portal.service.impl;

import com.christembassy.zimre.portal.domain.EPartnership;

import java.math.BigDecimal;

public class OfferingStatisticsDTO {

  private EPartnership partnershipType;

  private BigDecimal amount;

  public OfferingStatisticsDTO(EPartnership partnershipType, BigDecimal amount) {
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
