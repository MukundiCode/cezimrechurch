package com.christembassy.zimre.portal.dto;

import com.christembassy.zimre.portal.domain.EPartnership;
import com.christembassy.zimre.portal.domain.Offering;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PartnershipStatisticsByMonthDTO {

  @JsonProperty("label")
  private EPartnership partnershipType;

  @JsonProperty("data")
  private List<BigDecimal> monthlyAmount;

  public static PartnershipStatisticsByMonthDTO toDto(EPartnership partnershipType, List<Offering> offerings) {
    return new PartnershipStatisticsByMonthDTO(partnershipType,
            getOfferingTotalsByMonth(getOfferingsGroupedByMonth(offerings)));
  }

  private static Map<Integer, List<Offering>> getOfferingsGroupedByMonth(List<Offering> in) {
    return in.stream()
            .collect(Collectors.groupingBy(offering -> offering.getDate().getMonthValue()));
  }

  private static List<BigDecimal> getOfferingTotalsByMonth(Map<Integer, List<Offering>> in) {
    List<BigDecimal> totals = new ArrayList<>();

    for (int i = 0; i < 12; i++) {
      if (in.containsKey(i)) {
        totals.add(in.get(i).stream()
                .map(Offering::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add));
      } else {
        totals.add(BigDecimal.ZERO);
      }
    }
    return totals;
  }

}
