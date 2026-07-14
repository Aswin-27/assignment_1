# Architecture Diagram

```text
[Browser] --> [CloudFront / S3 Frontend]
[Browser] --> [EC2 Node.js Express API]
[EC2 API] --> [RDS PostgreSQL]
```

- Frontend: HTML/CSS/JavaScript
- Backend: Express REST API
- Database: PostgreSQL with stored procedures and triggers
- Deployment: EC2 for backend, S3/CloudFront for frontend
