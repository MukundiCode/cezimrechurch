package com.christembassy.zimre.portal.controller.impl;

import com.christembassy.zimre.portal.domain.Member;
import com.christembassy.zimre.portal.dto.PartnershipStatisticsByMonthDTO;
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
  public ResponseEntity<Member> newMember(@RequestBody @Valid Member newMember) {
    return ResponseEntity
            .ok()
            .body(memberService.register(newMember));
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Member> findById(@PathVariable Long id) {
    return ResponseEntity
            .ok()
            .body(memberService.findById(id));
  }

  @GetMapping("/all")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<Member>> all() {
    return ResponseEntity
            .ok()
            .body(new ArrayList<>(memberService.findAll()));
  }

  @GetMapping("/total")
  public ResponseEntity<Integer> getTotalMembers(){
    return ResponseEntity
            .ok()
            .body(memberService.findAll().size());
  }

  @GetMapping("/getTopFivePartners")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<List<TopPartnerDTO>> getTopFivePartners() {
    return ResponseEntity
            .ok()
            .body(memberService.getTopFivePartners());
  }

}
