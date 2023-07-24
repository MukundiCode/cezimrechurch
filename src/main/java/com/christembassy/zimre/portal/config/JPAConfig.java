package com.christembassy.zimre.portal.config;

import com.christembassy.zimre.portal.church.Church;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class JPAConfig {

  @Bean
  public Church getChurch(){
    return new Church(1l, "SA Zone 5", "Ruwa", "Zimre");
  }

}
