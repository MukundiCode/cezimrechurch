package com.christembassy.zimre.portal.repository;

import com.christembassy.zimre.portal.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Set;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
