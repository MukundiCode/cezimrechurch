# Christ Embassy (Zimre) Church Management System

This is a Spring Boot and React web application for my local church, that helps the church admin manage church members and monitor church finances.

![alt text](https://github.com/MukundiCode/cezimrechurch/blob/master/docs/imgs/dashboard.png)

## Features

- CRUD operations for church members, groups, and givings
- Dashboard with charts and statistics for church finances
- Authentication and authorization using JWT and Spring Security
- Responsive UI using Bootstrap and Material UI
- RESTful API using Spring Boot and Spring Data JPA
- PostgreSQL database using AWS RDS
- Deployment using AWS Elastic Beanstalk and S3

## Installation

To run this project locally, you need to have Java 11, Node.js, npm, and PostgreSQL installed on your machine.

1. Clone this repository: `git clone https://github.com/MukundiCode/cezimrechurch.git`
2. Navigate to the resources folder
3. Create a `.properties` file with hibernate and jwt properties

3. Run the backend application: `./mvnw spring-boot:run`
4. Navigate to the frontend folder: `cd ../frontend`
5. Install the dependencies: `npm install`
6. Run the frontend application: `npm start`
7. Open your browser and go to `http://localhost:3000`

## Demo

<!--You can see a live demo of this project here: [https://church-management-system.aws.com](https://church-management-system.aws.com)-->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



