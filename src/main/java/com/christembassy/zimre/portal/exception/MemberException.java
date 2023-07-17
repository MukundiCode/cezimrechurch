package com.christembassy.zimre.portal.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MemberException extends RuntimeException{

  public MemberException(String message) {
    super(message);
  }
}
