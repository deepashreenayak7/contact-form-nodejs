# Contact Form (Node.js + Express)

This is a simple full-stack contact form project built using **HTML, CSS, JavaScript, and Node.js with Express**.

The project demonstrates how a frontend form sends data to a backend server and stores the submitted messages.

## Features

- Contact form UI
- Form validation using HTML
- JavaScript Fetch API for sending form data
- Node.js Express backend
- Messages stored in a JSON file
- Success response displayed on the page

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

## Project Structure


contact-form-nodejs
│
├── public
│ ├── index.html
│ ├── style.css
│ └── main.js
│
├── server.js
├── messages.json
├── package.json
└── README.md


## Installation

Clone the repository:


git clone https://github.com/your-username/contact-form-nodejs.git


Navigate to the project folder:


cd contact-form-nodejs


Install dependencies:


npm install


Run the server:


node server.js


Open in browser:


http://localhost:3000


## How it Works

1. User fills the contact form.
2. JavaScript captures the form data.
3. Fetch API sends the data to the backend.
4. Node.js Express receives the POST request.
5. Data is stored in `messages.json`.
6. A success message is returned to the frontend.

## Example Stored Data


[
{
"name": "Deepa",
"email": "deepa@gmail.com
",
"message": "Testing contact form"
}
]


## Future Improvements

- Store messages in a database (MongoDB)
- Add admin panel to view messages
- Add form validation
- Deploy the application online

## Author

Deepashree Nayak

GitHub: https://github.com/deepashreenayak7
