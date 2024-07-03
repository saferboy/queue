# API Documentation

## Overview

This API allows for user authentication and management of devices, categories, and products. It uses Express.js for handling HTTP requests and Prisma as the ORM for database operations.

## Authentication

### Login

- **URL**: `/login`
- **Method**: `POST`
- **Description**: Authenticates a user with their username and password.
- **Request Body**:

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

- Success Response:
- Code: 200 OK
- Content

```json
{
  "message": "Muvaffaqiyatli login",
  "user": {
    "id": "number",
    "username": "string"
  }
}
```

- Error Responses:
- Code: 401 Unauthorized

```json
{
  "message": "username yoki parol xato"
}
```

---

## Create Device

- **URL**: `/devices`
- **Method:** ` POST`
- **Description:**: `Creates a new device`.

- **Request Body**

```json
{
  "name": "string",
  "device_id": "number",
  "password": "string",
  "device_type": "order_receiving_device | queuing_device"
}
```

### Success Response:

- **Code:**: `201 Created`
- **Content:**

```json
{
  "message": "Device qo'shildi",
  "device": {
    "id": "number",
    "name": "string",
    "device_id": "number",
    "password": "string",
    "device_type": "string"
  }
}
```

- **Error Response:**
- **Code: 409 Conflict**
- **Content**

```json
{
  "message": "device avval yaratilgan"
}
```

## Get All Devices

- **URL**: `/`
- **Method**: `GET`
- **Description**: `Retrieves all devices`.
- **Success Response**:
- **Code: 200 OK**

### Content

```json
[
  {
    "id": "number",
    "name": "string",
    "device_id": "number",
    "password": "string",
    "device_type": "string"
  }
]
```
---

