package com.christembassy.zimre.portal.service.impl;

import java.util.List;

public class MonthlyOfferingStatisticsDTO {

  private int month;

  private List<OfferingStatisticsDTO> monthlyStatistics;

  public MonthlyOfferingStatisticsDTO(int month, List<OfferingStatisticsDTO> monthlyStatistics) {
    this.month = month;
    this.monthlyStatistics = monthlyStatistics;
  }

  public int getMonth() {
    return month;
  }

  public void setMonth(int month) {
    this.month = month;
  }

  public List<OfferingStatisticsDTO> getMonthlyStatistics() {
    return monthlyStatistics;
  }

  public void setMonthlyStatistics(List<OfferingStatisticsDTO> monthlyStatistics) {
    this.monthlyStatistics = monthlyStatistics;
  }
}
