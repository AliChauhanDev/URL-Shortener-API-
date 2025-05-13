   🔗 URL Shortener API

A lightweight and efficient RESTful API for shortening URLs. Built with Node.js, Express.js, and MongoDB. This is an **API-only project**, meaning it has no user interface—you’ll need tools like **Postman** to test it.

---

## 📌 Features

- Shorten long URLs to short, shareable links
- Redirect to the original URL using the short link
- Retrieve all stored URLs
- Delete specific shortened URLs
- Error handling and input validation

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Utility:** Nanoid (for unique short codes)

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB connection string (local or Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AliChauhanDev/URL-Shortener-API-.git
   cd URL-Shortener-API-
````

2. **Install dependencies:**

   ```bash
   npm i
   ```

3. **Configure environment variables:**

   Create a `.env` file and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   Server will run on `http://localhost:5000`

---

## 📬 Note

> ⚠️ This is **not a frontend web app**. It's a RESTful **API**—use **Postman**, Insomnia, or similar tools to test the endpoints.

---

## 📚 API Endpoints

### 1. Shorten a URL

* `POST /api/shorten`
* **Body:**

  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```
* **Response:**

  ```json
  {
    "shortUrl": "http://localhost:5000/abc123"
  }
  ```

---

### 2. Redirect to Original URL

* `GET /:shortCode`
* Redirects user to the original long URL.

---

### 3. Get All URLs

* `GET /api/urls`
* **Response:**

  ```json
  [
    {
      "_id": "...",
      "originalUrl": "...",
      "shortCode": "...",
      "createdAt": "..."
    }
  ]
  ```

---

### 4. Delete a Shortened URL

* `DELETE /api/urls/:shortCode`
* **Response:**

  ```json
  {
    "message": "URL deleted successfully."
  }
  ```

---

## 🧪 Testing the API

Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to send requests to the endpoints listed above.

---

## 📁 Project Structure

```
├── controller/
│   └── urlController.js
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── dbconnect.js
├── index.js
├── .env
└── package.json
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Nanoid](https://github.com/ai/nanoid)

```

---

Let me know if you want me to include images (like Postman screenshots), add GitHub badges, or help with deployment to services like Render or Railway!
```
