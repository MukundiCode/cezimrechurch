package com.christembassy.zimre.portal.controller;

import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.dto.TopPartnerDTO;
import com.christembassy.zimre.portal.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/member")
public class MemberControllerImpl {

  @Autowired
  private MemberService memberService;

  @PostMapping("/register")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public Member newMember(@RequestBody @Valid Member newMember) {
    return memberService.register(newMember);
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public Member findById(@PathVariable Long id) {
    return memberService.findById(id);
  }

  @GetMapping("/all")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<Member> all() {
    return new ArrayList<>(memberService.findAll());
  }

  @GetMapping("/total")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public Integer getTotalMembers(){
    return memberService.findAll().size();
  }

  @GetMapping("/getTopFivePartners")
  @PreAuthorize("hasRole('ADMIN')")
  @ResponseBody
  public List<TopPartnerDTO> getTopFivePartners() {
    return memberService.getTopFivePartners();
  }

}
