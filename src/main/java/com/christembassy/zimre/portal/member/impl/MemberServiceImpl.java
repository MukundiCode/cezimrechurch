package com.christembassy.zimre.portal.member.impl;

import com.christembassy.zimre.portal.church.Church;
import com.christembassy.zimre.portal.member.Member;
import com.christembassy.zimre.portal.offering.dto.TopPartnerDTO;
import com.christembassy.zimre.portal.exception.MemberException;
import com.christembassy.zimre.portal.member.MemberRepository;
import com.christembassy.zimre.portal.member.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@EnableTransactionManagement
public class MemberServiceImpl implements MemberService {

  @Autowired
  private MemberRepository memberRepository;

  @Autowired
  private Church church;


  @Override
  @Transactional
  public Member register(@Valid Member member) {
    member.setChurch(this.church);
    return memberRepository.save(member);
  }

  @Override
  @Transactional
  public Member findById(Long id) {
    return memberRepository
            .findById(id)
            .orElseThrow(() -> new MemberException("Member with id " + id + " was not found."));
  }

  @Override
  @Transactional
  public List<Member> findAll() {
    try {
      return memberRepository.findAll();
    } catch (Exception e) {
      throw new MemberException("Could not fetch all members.");
    }
  }

  @Override
  public List<TopPartnerDTO> getTopFivePartners() {
    return memberRepository
            .findAll()
            .stream()
            .map(TopPartnerDTO::toDto)
            .sorted(Collections.reverseOrder())
            .limit(5)
            .collect(Collectors.toList());
  }
}
