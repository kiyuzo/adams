API Endpoints
Base URL: http://127.0.0.1:3000
I ASKED CHATGPT TO SUMMARIZE MY POSTMAN IN ORDER TO GENERATE THIS.
📌 Register
POST /register
Request Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "securePassword123!"
}
🔐 Login
POST /login
Request Body:

json
Copy
Edit
{
  "email": "user@example.com",
  "password": "securePassword123!"
}
📡 Scanner Data
GET /scanner-data
Headers:

pgsql
Copy
Edit
Content-Type: application/json
POST /scanner-data
Request Body:

json
Copy
Edit
{
  "pollution": 45.7,
  "x_coor": -73.935242,
  "y_coor": 40.730610
}
🗺️ Get Heatmap
GET /get-heatmap
Headers:

pgsql
Copy
Edit
Content-Type: application/json
🌫️ Pollution Exposure
POST /pollution-exposure
Request Body:

json
Copy
Edit
{
  "x_coor": -73.935242,
  "y_coor": 40.730610,
  "pollution": 38.2
}
GET /pollution-exposure

🤖 Gemini Explanation
GET /gemini-explanation

🎯 Mission
GET /auth/mission

POST /auth/mission
Request Body:

json
Copy
Edit
{
  "mission": "lorem ipsum",
  "points": 500
}
