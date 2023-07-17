package com.christembassy.zimre.portal.controller;

import com.christembassy.zimre.portal.domain.Church;

import java.util.List;

public interface ChurchController {

  Church newChurch(Church newChurch);

  Church findById(Long id);

  List<Church> all();

}
