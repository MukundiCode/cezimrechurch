package com.christembassy.zimre.portal.repository.impl;

import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.repository.MemberRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashSet;
import java.util.Set;

@Repository
public class MemberRepositoryImpl implements MemberRepository {

  @PersistenceContext
  private EntityManager entityManager;


  @Override
  public Member save(Member member) {
    entityManager.persist(member);
    return member;
  }

  @Override
  public Member findById(Long id) {
    return entityManager.find(Member.class, id);
  }

  @Override
  public Set<Member> findAll() {
    return new HashSet<>(entityManager
            .createQuery("select a from Member a", Member.class)
            .getResultList());
  }
}
