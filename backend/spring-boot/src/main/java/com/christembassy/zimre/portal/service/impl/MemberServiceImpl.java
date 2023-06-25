package com.christembassy.zimre.portal.service.impl;

import com.christembassy.zimre.portal.domain.Church;
import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.dto.TopPartnerDTO;
import com.christembassy.zimre.portal.exception.MemberNotFoundException;
import com.christembassy.zimre.portal.repository.MemberRepository;
import com.christembassy.zimre.portal.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Set;
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
  public Member register(Member member) {
    member.setChurch(this.church);
    return memberRepository.save(member);
  }

  @Override
  @Transactional
  public Member findById(Long id) {
    return memberRepository.findById(id);
  }

  @Override
  @Transactional
  public Set<Member> findAll() {
    return memberRepository.findAll();
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
