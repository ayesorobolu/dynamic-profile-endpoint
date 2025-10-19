# Dynamic Profile Endpoint

A simple Node.js + Express backend API that returns your profile information along with a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).  

---

## 🚀 Features
- Profile Information: **GET `/me`** endpoint that returns user info.  
- Random Cat Facts: Fetches and includes a random cat fact from an external API.
- Handles API failures.
- Uses **environment variables** for personal information.  
- Returns the current **UTC timestamp** in ISO 8601 format.  

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ayesorobolu/dynamic-profile-endpoint.git
cd dynamic-profile-endpoint
```

### 2️⃣ Install Dependencies
Make sure Node.js (v18+) and npm are installed, then run:

```bash
npm install
```

**Dependencies installed:**

| Package | Purpose |
|---------|---------|
| `express` | Creates the REST API server |
| `axios` | Makes HTTP requests to Cat Facts API |
| `cors` | Enables cross-origin requests |
| `dotenv` | Loads environment variables from `.env` |

---

### 3️⃣ Environment Variables
Create a `.env` file in the root of your project with:

```
PORT=4000
EMAIL=youremail@example.com
NAME=Your Full Name
STACK=Node.js/Express
```

---

### 4️⃣ Run the Server Locally
```bash
npm start
```
or
```bash
node server.js
```

You should see in the terminal:
```
Server running on port 4000
```

Visit the endpoint in your browser or Postman:
```
http://localhost:4000/me
```

✅ Example response:
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T14:30:22.456Z",
  "fact": "random cat fact"
}
```

---

### 5️⃣ Error Handling
If the Cat Facts API fails (timeout, network error, API down), the endpoint returns a 500 error with a fallback message:

```json
{
  "error": "Failed to fetch cat fact",
  "timestamp": "2025-10-19T14:31:10.789Z"
}
```

---

### 6️⃣ Deployment
You can deploy to any allowed HNG hosting platform such as:
- **Railway**  
- **Koyeb**  
- **PXXL App**  
- **Heroku**  

Set the **same environment variables** in your host dashboard before running.

---

### 👨‍💻 Author
- **Name:** Ayesoro Abraham  
- **Email:** ayesorobolu@gmail.com  
- **Stack:** Node.js / Express