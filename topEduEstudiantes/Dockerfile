FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} topEduEstudiantes-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/topEduEstudiantes-0.0.1-SNAPSHOT.jar"]