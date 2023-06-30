package com.christembassy.zimre.portal.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
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

  @Getter(AccessLevel.NONE)
  @Setter(AccessLevel.NONE)
  @OneToMany(
          cascade = CascadeType.ALL,
          mappedBy = "church")
  private Set<Member> members;

  public Church(Long id, String zone, String subgroup, String location) {
    this.id = id;
    this.zone = zone;
    this.subgroup = subgroup;
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

}
