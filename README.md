## Database Schema

### User Table
| Column   | Type    | Constraints       |
|----------|---------|-------------------|
| id       | Integer | Primary Key       |
| name     | String  | Not Null          |
| email    | String  | Unique, Not Null  |
| password | String  | Not Null          |

### Order Table
| Column                  | Type    | Constraints       |
|-------------------------|---------|-------------------|
| id                      | Integer | Primary Key       |
| user_id                 | Integer | Foreign Key       |
| status                  | String  | Not Null          |
| neurodegenerative_score | Integer | 0-100             |
| diabetes_score          | Integer | 0-100             |
| obesity_score           | Integer | 0-100             |

### Status Values
- "Unordered"
- "Ordered"
- "Received by Customer"
- "Received by Hospital"
- "Results Updated"