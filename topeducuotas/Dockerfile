FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} topeducuotas-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/topeducuotas-0.0.1-SNAPSHOT.jar"]