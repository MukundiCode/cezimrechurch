package com.christembassy.zimre.portal.member;

import com.christembassy.zimre.portal.offering.dto.TopPartnerDTO;

import java.util.List;

public interface MemberService {

  Member register(Member member);

  Member findById(Long id);

  List<Member> findAll();

  List<TopPartnerDTO> getTopFivePartners();

}
