package com.christembassy.zimre.portal.repository.impl;

import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.domain.Offering;
import com.christembassy.zimre.portal.repository.OfferingRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashSet;
import java.util.Set;

@Repository
public class OfferingRepositoryImpl implements OfferingRepository {

  @PersistenceContext
  private EntityManager entityManager;

  @Override
  public Offering save(Offering offering) {
    entityManager.persist(offering);
    return offering;
  }

  @Override
  public Offering findById(Long id) {
    return entityManager.find(Offering.class, id);
  }

  @Override
  public Set<Offering> findAll() {
    return new HashSet<>(entityManager
            .createQuery("select a from Offering a", Offering.class)
            .getResultList());
  }
}
