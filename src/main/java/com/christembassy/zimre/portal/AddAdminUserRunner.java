package com.christembassy.zimre.portal;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.christembassy.zimre.portal.auth.AuthController;
import com.christembassy.zimre.portal.auth.ERole;
import com.christembassy.zimre.portal.auth.payload.request.SignupRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class AddAdminUserRunner implements CommandLineRunner {

  @Autowired
  private AuthController authController;

  @Value("${cezimreportal.app.masteruserpassword}")
  private String password;

  @Override
  public void run(String... args) throws Exception {
    ResponseEntity response = authController.registerUser(
            new SignupRequest("Admin",
                    "tinashechitamba@outlook.com",
                    new HashSet<>(Arrays.asList(ERole.ROLE_ADMIN.toString(), ERole.ROLE_USER.toString())),
                    password));
    if (response.getStatusCode().equals(HttpStatus.OK)) log.info("Master user created");
    else log.info("Master user already exists");
  }
}
