package com.christembassy.zimre.portal.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Member implements Serializable {

  @Id
  @Column
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  @NotEmpty(message = "Name can not be blank")
  private String name;

  @Column(nullable = false)
  @NotEmpty(message = "Surname can not be blank")
  private String surname;

  @Column
  private String email;

  @Column
  @NotEmpty(message = "Address can not be empty")
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

}
