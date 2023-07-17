package com.christembassy.zimre.portal.repository;

import com.christembassy.zimre.portal.domain.Church;

import java.util.Set;

public interface ChurchRepository {

  Church save(Church church);

  Church getById(Long id);

  Set<Church> findAll();

}
