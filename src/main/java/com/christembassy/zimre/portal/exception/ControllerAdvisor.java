package com.christembassy.zimre.portal.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {

  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(
          MethodArgumentNotValidException ex, HttpHeaders headers,
          HttpStatus status, WebRequest request) {

    Map<String, Object> body = new LinkedHashMap<>();
    body.put("timestamp", Timestamp.valueOf(LocalDateTime.now()));
    body.put("status", status.value());

    Map<String, String> errs = new HashMap<>();
    ex.getBindingResult()
            .getFieldErrors()
            .forEach( obj ->
                    errs.put(obj.getField(), obj.getDefaultMessage())
            );

    body.put("errors", errs);
    return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
  }

}
