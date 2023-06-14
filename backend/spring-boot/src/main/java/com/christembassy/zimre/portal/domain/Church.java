package com.christembassy.zimre.portal.domain;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
public class Church {

  @Id
  @Column(nullable = false)
  private Long id;

  @Column(nullable = false)
  private String zone;

  @Column(nullable = false)
  private String subgroup;

  @Column(nullable = false)
  private String location;

  @OneToMany(
          cascade = CascadeType.ALL,
          mappedBy = "church")
  private Set<Member> members;

  public Church() {
  }

  public Church(Long id, String zone, String subgroup, String location) {
    this.id = id;
    this.zone = zone;
    this.subgroup = subgroup;
    this.location = location;
  }

  public Church(String zone, String subgroup, String location) {
    this.zone = zone;
    this.subgroup = subgroup;
    this.location = location;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getZone() {
    return zone;
  }

  public void setZone(String zone) {
    this.zone = zone;
  }

  public String getSubgroup() {
    return subgroup;
  }

  public void setSubgroup(String subgroup) {
    this.subgroup = subgroup;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Church church = (Church) o;
    return id.equals(church.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  @Override
  public String toString() {
    return "Church{" +
            "id=" + id +
            ", zone='" + zone + '\'' +
            ", subgroup='" + subgroup + '\'' +
            ", location='" + location + '\'' +
            '}';
  }
}
