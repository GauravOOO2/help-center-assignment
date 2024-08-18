
##### Here's the updated README file for Help Center API Assignment:
---

# Help Center API Assignment

### Description

The Help Center Cards API is a service designed to manage 'Help Center' cards, allowing users to effortlessly create and read cards to provide information or raise doubts. 

It provides functionalities such as form submissions and search capabilities to enhance user interaction and management of help center content.

## Features

- **Form Submission and Dynamic Data Display:** Submit new cards via a form popup to the backend API, handling card data input and submission. Display all card data from the database dynamically as soon as new cards are inserted.
- **Search Functionality:** Dynamically search for cards using keywords through a search bar. Display search results or a "No card found" message if there are no matches.
- **Error Handling:** Includes try catch block to handle and display errors effectively.
- **User Interaction:** Provides intuitive interfaces for users to interact with the 'Help Center' cards.
- **Responsive Design:** Ensures the frontend is user-friendly and functional across different devices.


---

## Technology Stack

- **Next.js:** Used for the frontend application to interact with the API, including form submissions and displaying search results.
- **MongoDB:** Provides a NoSQL database to store and manage 'Help Center' card data.
- **Node.js:** Used as the runtime environment for building the server-side application.
- **Express:** Serves as the web application framework to handle HTTP requests and responses, and manage API routes.
- **Tailwind CSS:** A utility-first CSS framework for building custom designs quickly.
- **CORS:** Configured to handle cross-origin requests between the frontend and backend.

---


## Run Locally


#### Clone the project from github



```bash
  git clone https://github.com/GauravOOO2/help-center-assignment.git
```
**Back End:**

Navigate to the BackEnd Directory:

```bash
  cd help-center-assignment/BackEnd

```

Install dependencies

```bash
  npm install
```

Set Environment Variables:

Create a ".env" file in the backend directory and add the following:
```bash
MONGO_URI=<your-mongodb-connection-string>
PORT=5000

```
Start the BackEnd server 

```bash
  node server.js
```

**Front End:**

Navigate to the Front End Directory:

```bash
  cd help-center-assignment/my-help-center

```

Install dependencies

```bash
  npm install
```

Set Environment Variables:

Create a .env file in the frontend directory and add the following:

```bash
BACKEND_URL=http://localhost:5000/api

```
Run the Application 

```bash
  npm run dev
```


## Built by

This project is built by [J.Gaurav Varma](https://github.com/GauravOOO2).
