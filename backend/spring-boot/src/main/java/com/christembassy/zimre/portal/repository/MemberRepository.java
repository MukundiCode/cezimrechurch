package com.christembassy.zimre.portal.repository;

import com.christembassy.zimre.portal.domain.Member;

import java.util.Optional;
import java.util.Set;

public interface MemberRepository {

  Member save(Member member);

  Optional<Member> findById(Long id);

  Set<Member> findAll();

}
