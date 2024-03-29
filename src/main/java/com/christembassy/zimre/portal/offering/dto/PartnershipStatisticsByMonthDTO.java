package com.christembassy.zimre.portal.offering.dto;

import com.christembassy.zimre.portal.offering.EPartnership;
import com.christembassy.zimre.portal.offering.Offering;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static com.christembassy.zimre.portal.Utils.sumOfferingList;

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
    return IntStream
            .range(1, 13)
            .mapToObj(i -> in.containsKey(i) ? sumOfferingList(in.get(i)) : BigDecimal.ZERO)
            .collect(Collectors.toList());
  }

}
