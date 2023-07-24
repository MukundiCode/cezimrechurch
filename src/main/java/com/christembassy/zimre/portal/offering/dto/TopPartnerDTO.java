package com.christembassy.zimre.portal.offering.dto;

import com.christembassy.zimre.portal.member.Member;
import com.christembassy.zimre.portal.offering.Offering;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class TopPartnerDTO implements Comparable {

  private String name;

  private String surname;

  private BigDecimal totalPartnership;

  public static TopPartnerDTO toDto(Member member) {
    return new TopPartnerDTO(member.getName(), member.getSurname(),
            member.getOfferings()
                    .stream()
                    .map(Offering::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add));
  }

  @Override
  public int compareTo(Object o) {
    return totalPartnership.compareTo(((TopPartnerDTO) o).totalPartnership);
  }
}
