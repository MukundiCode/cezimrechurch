package com.christembassy.zimre.portal.controller.impl;

import com.christembassy.zimre.portal.controller.MemberController;
import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("member")
public class MemberControllerImpl implements MemberController {

  @Autowired
  private MemberService memberService;

  @Override
  @PostMapping("/register")
  public Member newMember(Member newMember) {
    return memberService.register(newMember);
  }

  @Override
  @GetMapping("/{id}")
  public Member findById(@PathVariable Long id) {
    return memberService.findById(id);
  }

  @Override
  @GetMapping("/all")
  public List<Member> all() {
    return new ArrayList<>(memberService.findAll());
  }
}
