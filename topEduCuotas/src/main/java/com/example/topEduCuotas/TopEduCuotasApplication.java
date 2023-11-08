package com.example.topEduCuotas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TopEduCuotasApplication {

	public static void main(String[] args) {
		SpringApplication.run(TopEduCuotasApplication.class, args);
	}

}
