# node-app

A simple Node.js Express application with basic API endpoints.

## Prerequisites

- Node.js v24
- npm

## Getting Started

```bash
# Clone the repo
git clone <your-repo-url>
cd node-app

# Install dependencies
npm install

# Start the server
npm start
```

For development with auto-reload:

```bash
npm run dev
```

Server runs on `http://localhost:3000` by default.  
To use a different port, set the `PORT` environment variable:

```bash
PORT=4000 npm start
```

---

## Endpoints

### `GET /`
Returns a list of all available endpoints.

**Response:**
```json
{
  "app": "k8s-node-app",
  "endpoints": [
    { "method": "GET", "path": "/",       "description": "API info and available endpoints" },
    { "method": "GET", "path": "/health", "description": "Health check" },
    { "method": "GET", "path": "/success","description": "Returns a 200 success response" },
    { "method": "GET", "path": "/error",  "description": "Returns a 500 error response" }
  ]
}
```

---

### `GET /health`
Health check endpoint. Used to verify the server is running.

**Response `200`:**
```json
{ "status": "ok" }
```

---

### `GET /success`
Returns a successful response.

**Response `200`:**
```json
{ "status": "success", "message": "Everything is working!" }
```

---

### `GET /error`
Simulates an error response.

**Response `500`:**
```json
{ "status": "error", "message": "Something went wrong!" }
```

---

## Testing the Endpoints

Using `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/success
curl http://localhost:3000/error
```

Or open them directly in your browser.