package com.christembassy.zimre.portal.offering;

import com.christembassy.zimre.portal.member.Member;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Currency;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
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

}
