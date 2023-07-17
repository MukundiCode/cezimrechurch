package com.christembassy.zimre.portal.service;

import com.christembassy.zimre.portal.domain.Church;

import java.util.Set;

public interface ChurchService {

  Church register(Church church);

  Church findById(Long id);

  Set<Church> findAll();

}
