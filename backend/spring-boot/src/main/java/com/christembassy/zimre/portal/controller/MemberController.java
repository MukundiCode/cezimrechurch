package com.christembassy.zimre.portal.controller;

import com.christembassy.zimre.portal.domain.Member;

import java.util.List;

public interface MemberController {

  Member newMember(Member newMember);

  Member findById(Long id);

  List<Member> all();

}
