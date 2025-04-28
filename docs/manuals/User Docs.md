# User Instructions

## Prerequisites
Ensure you have a compatible IDE or code editor installed to work with JavaScript and Angular projects, such as:
- Visual Studio Code (Recommended)
Additionally, verify that **Node.js** and **npm** are installed on your system.

---

# Setup

## 1. Install Node.js
Download and install Node.js from the official website:

[https://nodejs.org/en/download](https://nodejs.org/en/download)

Node.js installation also includes npm (Node Package Manager).

## 2. Install Angular CLI
Using your terminal (Mac/Linux) or command prompt (Windows), run the following command:

```bash
npm install -g @angular/cli
```

This will install the Angular Command Line Interface globally on your machine.

---

# Project Preparation

## 1. Navigate to the Project Directory
Using your terminal or command prompt, navigate to the folder where your Angular project is located. Example:

```bash
cd path/to/your/Angular_project
```

Replace `path/to/your/Angular_project` with the actual path on your system.

## 2. Install Project Dependencies
Inside the project folder, install all necessary dependencies by executing:

```bash
npm install
```

This will read the `package.json` file and install all required libraries for the project.

---

# Running the Project

## 1. Open Two Terminal/Command Prompt Windows
- Use the first window to serve the Angular development server.
- The second window can be used for any additional monitoring if needed.

## 2. Start the Angular Development Server
In the first terminal window, run:

```bash
ng serve
```

The server will compile the project and make it available locally, typically at:

```
http://localhost:4200
```

## 3. Access the Application
Open a web browser and visit:

```
http://localhost:4200
```

You will see the live application running.

---

# Stopping the Server

Once you are finished working with the project:

- Go back to the terminal window where `ng serve` is running.
- Press **Control + C** to terminate the server process.

Repeat the same for any other active terminal windows if necessary.

---

# Notes

- If port 4200 is already in use, you can start the Angular server on a different port:

```bash
ng serve --port 4300
```

- Always ensure you are inside the correct project folder where `angular.json` and `package.json` are present before running commands.

- Make sure your internet connection is stable during the first-time setup to allow npm to fetch required packages.

---

# Quick Summary

```bash
npm install -g @angular/cli
cd path/to/project
npm install
ng serve
# Access: http://localhost:4200
# Stop server: Control + C
```


