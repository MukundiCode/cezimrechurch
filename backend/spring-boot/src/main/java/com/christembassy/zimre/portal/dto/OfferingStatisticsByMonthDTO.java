package com.christembassy.zimre.portal.dto;


import java.util.List;

public class OfferingStatisticsByMonthDTO {

  private int month;

  private List<OfferingStatisticsByPartnershipTypeDTO> monthlyStatistics;

  public OfferingStatisticsByMonthDTO(int month, List<OfferingStatisticsByPartnershipTypeDTO> monthlyStatistics) {
    this.month = month;
    this.monthlyStatistics = monthlyStatistics;
  }

  public int getMonth() {
    return month;
  }

  public void setMonth(int month) {
    this.month = month;
  }

  public List<OfferingStatisticsByPartnershipTypeDTO> getMonthlyStatistics() {
    return monthlyStatistics;
  }

  public void setMonthlyStatistics(List<OfferingStatisticsByPartnershipTypeDTO> monthlyStatistics) {
    this.monthlyStatistics = monthlyStatistics;
  }
}
