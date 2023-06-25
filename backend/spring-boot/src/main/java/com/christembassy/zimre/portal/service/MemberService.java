package com.christembassy.zimre.portal.service;

import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.dto.TopPartnerDTO;

import java.util.List;
import java.util.Set;

public interface MemberService {

  Member register(Member member);

  Member findById(Long id);

  Set<Member> findAll();

  List<TopPartnerDTO> getTopFivePartners();

}
