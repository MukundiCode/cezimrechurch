package com.christembassy.zimre.portal.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

@Entity
public class Member implements Serializable {

  @Id
  @Column
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String surname;

  @Column
  private String email;

  @Column
  private String address;

  @Column
  private LocalDate birthday;

  @ManyToOne
  @JoinColumn(name = "church_id", nullable = false)
  private Church church;

  @JsonManagedReference
  @OneToMany(
          cascade = CascadeType.ALL,
          mappedBy = "member")
  private Set<Offering> offerings;

  public Member() {
  }

  public Member(Long id, String name, String surname, String email, String address, LocalDate birthday, Church church) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.address = address;
    this.birthday = birthday;
    this.church = church;
  }

  public Member(String name, String surname, String email, String address, LocalDate birthday, Church church) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.address = address;
    this.birthday = birthday;
    this.church = church;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSurname() {
    return surname;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public LocalDate getBirthday() {
    return birthday;
  }

  public void setBirthday(LocalDate birthday) {
    this.birthday = birthday;
  }

  public Church getChurch() {
    return church;
  }

  public void setChurch(Church church) {
    this.church = church;
  }

  public Set<Offering> getOfferings() {
    return offerings;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Member member = (Member) o;
    return id.equals(member.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public String toString() {
    return "Member{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", surname='" + surname + '\'' +
            ", email='" + email + '\'' +
            ", address='" + address + '\'' +
            ", birthday=" + birthday +
            ", church=" + church +
            '}';
  }
}
