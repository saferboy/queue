# API Documentation

## Overview

This API provides endpoints for managing categories.

## Category

> # Create Category

- **URL**: `/`
- **Method**: `POST`

### Request Body

> ```json
> {
>   "name": "string"
> }
> ```

### Response

> ```json
> {
>   "message": "Kategoriya yaratildi",
>   "category": {
>     "id": "number",
>     "name": "string"
>   }
> }
> ```

---

## Get All Category

- **URL**: `/`
- **Method**: `GET`

### Response

> ```json
> {
>   "message": "All Category",
>   "categories": [
>     {
>       "id": "number",
>       "name": "string"
>     }
>   ]
> }
> ```

---

## Get by ID

- **URL**: `/:id`
- **Method**: `Get`

### Response

> ```json
> {
>   "message": "2-id bo'yicha kategoriya",
>   "category": {
>     "id": "number",
>     "name": "string"
>   }
> }
> ```

---

## Update Category

- **URL**: `/:id`
- **Method**: `Put`

### Request Body

> ```json
> {
>   "name": "string"
> }
> ```

### Response

> ```json
> {
>   "message": "Kategoriya yangilandi",
>   "category": {
>     "id": "number",
>     "name": "string"
>   }
> }
> ```

---

## Delete Category

- **URL**: `/:id`
- **Delete**: `Delete`

### Response

> ```json
> {
>   "message": "o'chdi",
>   "category": {
>     "id": 5,
>     "name": "Aparat"
>   }
> }
> ```
