package com.ego.yahsheek;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class YahSheekApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(YahSheekApiApplication.class, args);
    }

}
