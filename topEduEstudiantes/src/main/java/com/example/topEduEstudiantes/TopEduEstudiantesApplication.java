package com.example.topEduEstudiantes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TopEduEstudiantesApplication {

	public static void main(String[] args) {

		String entre = "";
		SpringApplication.run(TopEduEstudiantesApplication.class, args);
	}

}
