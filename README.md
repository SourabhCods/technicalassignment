#  Getting Started

Follow the steps below to run the application locally.

---

##  Clone the Repository

```
git clone https://github.com/SourabhCods/technicalassignment.git

cd product-api
```

---

##  Install Dependencies

```
npm i express
```

---

##  Run the Application

```
nodemon app.js
```

The server will start at:

```
http://localhost:8080
```

---

##  Testing API Endpoints

You can test the CRUD operations using Postman or any API client:

1. Open Postman
2. Select the HTTP Method: **GET**, **POST**, **PUT** or **DELETE**
3. Use the endpoint :
    ```
    http://localhost:8080/products/**[API_ENDPOINT]**
    ```
4. Click **Send**

---

##  Sample Requests

###  POST Request

To create a new product, go to **Body → raw → JSON** and paste the following:

```json
{
  "id": 11,
  "name": "Sonata Watch",
  "price": 700,
  "description": "Good Quality and perfect watch for youngsters",
  "page": 1
}
```
 **Note:** In a POST request, all keys (`id`, `name`, `price`, `description`) are mandatory. The `page` key can be any number.

---

###  PATCH Request

To update an existing product, go to **Body → raw → JSON** and paste:

```json
{
  "newName": "High Platted Sonata Watch",
  "newPrice": 870,
  "newDescription": "Perfect for perfect guys"
}
```
 **Note:** In a PATCH request, only the keys you want to update need to be included. All other keys will remain unchanged.

---

##  Important Notes

- All data is stored in a temporary in-memory array.
-  **Changes will not persist after the server restarts.**
- This is intended for backend logic testing only, without using a database.
- Feel free to experiment by modifying or adding your data.
