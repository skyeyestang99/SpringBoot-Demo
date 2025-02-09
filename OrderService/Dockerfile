FROM openjdk:17-jdk-slim
WORKDIR /app

COPY target/OrderService-0.0.1-SNAPSHOT.jar OrderService-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "OrderService-0.0.1-SNAPSHOT.jar"]