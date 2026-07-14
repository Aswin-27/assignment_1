# 🎓 EdCounselor AI

A full-stack student registration and profile management application built with **Node.js, Express, PostgreSQL, and Vanilla JavaScript**. The project demonstrates object-oriented programming principles, database design using stored procedures and triggers, and deployment on AWS Free Tier services.

---

## 📌 Features

- User Registration & Login
- Student Profile Management
- Secure Password Storage
- PostgreSQL Database
- REST API using Express.js
- Object-Oriented Design
- AWS Cloud Deployment

---

# 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Stored Procedures
- Triggers

### Cloud Services
- AWS EC2
- AWS RDS
- AWS S3
- AWS CloudFront (Optional)

---

# 📂 Project Structure

```
EdCounselor-AI/
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   └── ...
│
├── backend/
│   ├── db/
│   │   └── schema.sql
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env.example
│
└── README.md
```

---

# 🏗️ Object-Oriented Programming Concepts

| Concept | Implementation |
|----------|----------------|
| Abstraction | `Person` class exposes common functionality |
| Encapsulation | Private fields (`#email`, `#passwordHash`, `#gpa`) |
| Inheritance | `Student` extends `Person` |
| Polymorphism | `Student.getSummary()` overrides `Person.getSummary()` |

---

# 🗄️ Database Design

### Stored Procedures

- `sp_register_user`
- `sp_get_user_by_email`
- `sp_insert_student_profile`
- `sp_get_student_profile`

### Triggers

- `trg_users_updated_at`
- `trg_profiles_updated_at`

Automatically updates the `updated_at` timestamp whenever records are modified.

---

# 🚀 Running the Project Locally

## 1. Clone the Repository

```bash
git clone <repository-url>
cd EdCounselor-AI
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Configure Environment Variables

Copy the sample environment file.

```bash
cp .env.example .env
```

Update the values:

```env
PORT=4000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=edcounselor
DB_SSL=false
```

---

## 4. Create PostgreSQL Database

Using Docker:

```bash
docker run --name edc-postgres \
-e POSTGRES_PASSWORD=postgres \
-p 5432:5432 \
-d postgres
```

Load the schema:

```bash
psql -h localhost -U postgres -f backend/db/schema.sql
```

---

## 5. Start the Backend

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 6. Run the Frontend

Simply open

```
frontend/index.html
```

or serve it using

```bash
npx serve frontend
```

---

# ☁️ AWS Deployment

## 1. Create PostgreSQL Database (AWS RDS)

- Create a PostgreSQL Free Tier database
- Enable Public Access
- Save the endpoint
- Import the schema

```bash
psql -h <RDS-ENDPOINT> -U postgres -f backend/db/schema.sql
```

---

## 2. Configure Backend

Update `.env`

```env
PORT=4000

DB_HOST=<RDS-ENDPOINT>
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=<PASSWORD>
DB_NAME=edcounselor
DB_SSL=true
```

---

## 3. Launch EC2 Instance

- Amazon Linux 2023
- t2.micro
- Allow ports:
  - 22 (SSH)
  - 4000 (API)

Install Node.js

```bash
sudo yum update -y
sudo yum install -y nodejs git
```

Clone the project

```bash
git clone <repository-url>
cd backend
npm install
```

(Optional) Install PM2

```bash
npm install -g pm2
pm2 start server.js --name edcounselor-api
pm2 save
```

---

## 4. Deploy Frontend

Upload the `frontend` folder to an S3 bucket.

Enable:

- Static Website Hosting
- Public Read Access

(Optional)

Use CloudFront for HTTPS and caching.

---

## 5. Update API Endpoint

Inside

```
frontend/js/app.js
```

Set

```javascript
window.API_BASE = "http://<EC2-PUBLIC-IP>:4000/api";
```

---

# ☁️ AWS Services Used

- Amazon EC2
- Amazon RDS
- Amazon S3
- Amazon CloudFront (Optional)
- IAM
- Security Groups

---

# 🏛️ System Architecture

```
                +----------------+
                |     Browser    |
                +-------+--------+
                        |
                        |
                HTML/CSS/JavaScript
                        |
        +---------------+---------------+
        |                               |
        |                               |
   Static Files                    REST API
        |                               |
     Amazon S3                 Node.js + Express
                                      |
                                      |
                               PostgreSQL (RDS)
                                      |
                     Stored Procedures & Triggers
```

---

# 📚 Assignment Highlights

This project demonstrates:

- Full Stack Web Development
- Object-Oriented Programming
- PostgreSQL Database Design
- RESTful API Development
- AWS Cloud Deployment
- Database Security
- Clean Project Architecture

---

# 👨‍💻 Author

**Aswin Somasundaram**

Assignment 1 – EdCounselor AI