package com.christembassy.zimre.portal.config;

import com.christembassy.zimre.portal.domain.Church;
import org.springframework.context.annotation.*;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
public class JPAConfig {

  public static String getProperty(String key) {
    Properties properties = new Properties();
    String name;
    try {
      properties.load(WebMvcConfig.class.getClassLoader().getResourceAsStream("application.properties"));
      name = properties.getProperty(key);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
    return name;
  }

  @Bean
  public Church getChurch(){
    return new Church(1l, "SA Zone 5", "Ruwa", "Zimre");
  }

  @Bean
  @Profile("!test")
  public DataSource getDataSource() {
    DriverManagerDataSource dataSource = new DriverManagerDataSource();
    dataSource.setDriverClassName(getProperty("datasourceDriver"));
    dataSource.setUrl(getProperty("datasourceURL"));
    dataSource.setUsername(getProperty("datasourceUsername"));
    dataSource.setPassword(getProperty("datasourcePassword"));
    return dataSource;
  }

  @Bean
  @Profile("!test")
  public LocalContainerEntityManagerFactoryBean getEntityManagerFactoryBean() {
    LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
    factoryBean.setDataSource(getDataSource());
    factoryBean.setPackagesToScan("com.christembassy.zimre.portal.domain");
    JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
    factoryBean.setJpaVendorAdapter(vendorAdapter);
    factoryBean.setJpaProperties(hibernateProperties());
    return factoryBean;
  }

  private Properties hibernateProperties() {
    Properties properties = new Properties();
    properties.setProperty("hibernate.show_sql", "true");
    properties.setProperty("hibernate.format_sql", "true");
    properties.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQL95Dialect");
//    properties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
    properties.setProperty("hibernate.hbm2ddl.auto", "update");
    return properties;
  }

  @Bean
  @Profile("test")
  public DataSource getTestDataSource() {
    DriverManagerDataSource dataSource = new DriverManagerDataSource();
    dataSource.setDriverClassName(getProperty("datasourceDriver"));
    dataSource.setUrl(getProperty("testDatasourceURL"));
    dataSource.setUsername(getProperty("datasourceUsername"));
    dataSource.setPassword(getProperty("datasourcePassword"));
    return dataSource;
  }

  @Bean
  @Profile("test")
  public LocalContainerEntityManagerFactoryBean getTestEntityManagerFactoryBean() {
    LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
    factoryBean.setDataSource(getTestDataSource());
    factoryBean.setPackagesToScan("com.psybergate.agile.project.finance.domain");
    JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
    factoryBean.setJpaVendorAdapter(vendorAdapter);
    factoryBean.setJpaProperties(testHibernateProperties());
    return factoryBean;
  }

  @Profile("test")
  private Properties testHibernateProperties() {
    Properties properties = new Properties();
    properties.setProperty("hibernate.show_sql", "true");
    properties.setProperty("hibernate.format_sql", "true");
    properties.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQL95Dialect");
    properties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
//    properties.setProperty("hibernate.hbm2ddl.auto", "update");
    return properties;
  }

  @Bean
  @Profile("test")
  public PlatformTransactionManager testTransactionManager() {
    JpaTransactionManager transactionManager = new JpaTransactionManager();
    transactionManager.setEntityManagerFactory(getTestEntityManagerFactoryBean().getObject());
    return transactionManager;
  }

  @Bean
  @Profile("!test")
  public PlatformTransactionManager transactionManager() {
    JpaTransactionManager transactionManager = new JpaTransactionManager();
    transactionManager.setEntityManagerFactory(getEntityManagerFactoryBean().getObject());
    return transactionManager;
  }

}
