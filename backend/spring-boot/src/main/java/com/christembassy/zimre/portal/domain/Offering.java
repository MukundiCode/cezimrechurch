package com.christembassy.zimre.portal.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Currency;
import java.util.Objects;

@Entity
public class Offering implements Serializable {

  @Id
  @Column(nullable = false)
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  private BigDecimal amount;

  @Column(nullable = false)
  private String offeringType;

  @Column(nullable = false)
  private LocalDate date;

  @Column(nullable = false)
  private Currency currency;

  @JsonProperty
  @ManyToOne
  @JoinColumn(name = "member_id")
  private Member member;

  public Offering() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public String getOfferingType() {
    return offeringType;
  }

  public void setOfferingType(String offeringType) {
    this.offeringType = offeringType;
  }

  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public Currency getCurrency() {
    return currency;
  }

  public void setCurrency(Currency currency) {
    this.currency = currency;
  }

  public Member getMember() {
    return member;
  }

  public void setMember(Member member) {
    this.member = member;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Offering offering = (Offering) o;
    return id.equals(offering.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public String toString() {
    return "Offering{" +
            "id=" + id +
            ", amount=" + amount +
            ", offeringType='" + offeringType + '\'' +
            ", date=" + date +
            ", currency=" + currency +
            ", member=" + member +
            '}';
  }
}
