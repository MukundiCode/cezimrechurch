package com.christembassy.zimre.portal.service.impl;

import java.math.BigDecimal;

public class TopPartnerDTO implements Comparable {

  private String name;

  private String surname;

  private BigDecimal totalPartnership;

  public TopPartnerDTO(String name, String surname, BigDecimal totalPartnership) {
    this.name = name;
    this.surname = surname;
    this.totalPartnership = totalPartnership;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSurname() {
    return surname;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  public BigDecimal getTotalPartnership() {
    return totalPartnership;
  }

  public void setTotalPartnership(BigDecimal totalPartnership) {
    this.totalPartnership = totalPartnership;
  }


  @Override
  public int compareTo(Object o) {
    return totalPartnership.compareTo(((TopPartnerDTO) o).totalPartnership);
  }
}
