# RESTful API using Node.js, Express, TypeScript, and MongoDB

Welcome to the RESTful API project developed using Node.js, Express, TypeScript, and MongoDB. This project provides a solid foundation for building robust APIs with modern technologies. Below, you'll find key information about the project and how to get started.

## Features

- **Technology Stack**: This project uses Node.js and Express, leveraging TypeScript to enhance code quality and maintainability.
- **Database**: MongoDB is used as the database to manage data efficiently.
- **Automated Restart**: Nodemon is configured to restart the server upon file changes, making development smoother.
- **Controllers**: Clear separation of concerns is maintained through controllers, managing request handling and data flow.
- **Middlewares**: Custom middlewares are integrated for functionalities like authentication and validation.
- **Authentication**: Cookie-based authentication enhances security by managing authentication states.
- **Testing**: The API endpoints are tested using Postman to ensure reliability and correctness.
- **CRUD Operations**: Core CRUD operations (Create, Read, Update, Delete) are implemented to manage data effectively.

## Getting Started

1. Clone the repository to your local machine using `git clone https://github.com/YashwanthKothakota9/restapi-node-ts-mongo-express.git.`
2. Navigate to the project directory: `cd restapi-node-ts-mongo-express.`
3. Install dependencies using `npm install.`
4. Set up your MongoDB connection by editing the `src/index.ts` file.
5. Run the development server using `npm start.`

## API Endpoints

The API exposes the following endpoints:

- `GET /api/users`: Get a list of all users.
- `GET /api/users/:id`: Get details of a specific user.
- `POST /api/users`: Create a new user.
- `PATCH /api/users/:id`: Update details of a user.
- `DELETE /api/users/:id`: Delete a user.

## Testing

To test the API endpoints, you can use Postman or any API testing tool. Import the provided Postman collection (`RestAPI-Node-TS-Mongo-Express.postman_collection.json`) for easy testing.

## Contributing

Contributions are welcome! If you find any issues or improvements, please feel free to create a pull request or an issue in the repository.


---

**Note:** This project was created by [Yashwanth Kothakota](https://github.com/YashwanthKothakota9) as part of a learning experience.
