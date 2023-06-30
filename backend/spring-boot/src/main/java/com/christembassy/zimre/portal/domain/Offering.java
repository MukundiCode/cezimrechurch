package com.christembassy.zimre.portal.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
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
  @NotNull
  @DecimalMin(value = "0.0", message = "Amount can not be less zero or less")
  private BigDecimal amount;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  @NotNull(message = "Partnership arm can not be blank")
  private EPartnership offeringType;

  @Column(nullable = false)
  @NotNull(message = "Date can not be empty")
  private LocalDate date;

  @Column(nullable = false)
  @NotNull(message = "Currency can not be empty")
  private Currency currency;

  @JsonBackReference
  @ManyToOne
  @JoinColumn(name = "member_id")
  @NotNull(message = "Member can not be empty")
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

  public EPartnership getOfferingType() {
    return offeringType;
  }

  public void setOfferingType(EPartnership offeringType) {
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
