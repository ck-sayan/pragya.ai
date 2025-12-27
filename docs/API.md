# API Documentation

## Chat Endpoint

### `POST /api/chat`

Sends a message to the AI and receives a streaming response (or JSON).

**Request Body:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "reply": "I'm doing well, thank you! How can I help you today?"
}
```

---

## Chats Management

### `GET /api/chats`

Fetches all saved chats for the authenticated user.

**Response:**
```json
{
  "chats": [
    {
      "id": "uuid",
      "title": "Chat Title",
      "created_at": "timestamp",
      "messages": [...]
    }
  ]
}
```

### `POST /api/chats`

Saves a new chat session.

**Request Body:**
```json
{
  "title": "Optional Title",
  "messages": [
    { "sender": "user", "message": "Hi" },
    { "sender": "bot", "message": "Hello" }
  ]
}
```

### `DELETE /api/chats?id={chatId}`

Deletes a specific chat session.
