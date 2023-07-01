package com.christembassy.zimre.portal.service;

import com.christembassy.zimre.portal.domain.Offering;

import java.math.BigDecimal;
import java.util.List;

public class Utils {

  public static BigDecimal sumOfferingList(List<Offering> in){
    return in.stream()
            .map(Offering::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

}
