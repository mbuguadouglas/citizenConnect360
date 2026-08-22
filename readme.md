# citizen connect 360

## Table of Contents

1. [Introduction](#introduction)
1. [Features](#features)
1. [Technology Stack & Architecture](#technology-stack-&-architecture)
1. [Project Setup](#project-setup)

## Introduction

A comprehensive digital platform bridging the gap between citizens and their government. It fosters transparency, accountability, and active engagement by providing a unified space for users to interact with government documents (such as parliamentary bills), report civic incidents, apply for bursaries, participate in polls and file petitions. By leveraging Artificial Intelligence to analyze citizen input, the platform supports informed decision-making and drives positive change, ultimately leading to a more equitable society.

It is aimed at creating a platform where citizens can see what their MPs are doing, propose bills, vote on issues, and participate in forums. MPs can communicate directly with constituents, publish their voting records, and manage proposed bills. An admin manages the platform, users, and oversee the integrity of the data.

## Features

- **User authentication & authorization**: (constituent, mp, admin)
- **Bill tracker**: a system to track the progress of bills.
- **Forums/discussions**: spaces for public debate(possibly with a live chat?!)
- **Polls/surveys**: for mps to gauge constituent opinions.
- **Document repository**: for all official parliament documents.
- **admin panel**: profiles for mps showing their activity, voting history, and committee memberships.

## Technology Stack & Architecture

- frontend: ~~angular~~ Jinja2 templates + bootstrap styling
- database: MariaDb(SQLAlchemy ORM) + Amazon s3 storage for pdf documents
- backend: FastApi(Python)
- containerization & deployment: Docker

the application exposes the following endpoints which can be categorized by the user roles accessing them:

### 3.1 Public Routes (All Users)

| HTTP Method | Route Path | Type | Access Level | Description / Template |
| --- | --- | --- | --- | --- |
| `GET` | `/` | View |  | Home landing page (`/index.html`) |
| `GET` | `/constituencies` | View |  | Map of constituencies & MPs (`/constituencies.html`) |
| `GET` | `/bills` | View |  |  legislative bills tracker (`/bills.html`) |
| `GET` | `/polls` | View | | see current polls (`/polls.html`) |
| `POST` | `/api/auth/login` | API |  | Authenticates user & issues HTTP-Only JWT Cookie |
| `GET` | `/auth/login` | View |  | Login page (`/login.html`) |
| `POST` | `/api/auth/register` | API |  | Creates new constituent account |
| `GET` | `/auth/register` | View |  | Constituent registration page (`/register.html`) |
| `POST` | `/auth/verify-email` | View |  | Verifies email verification tokens |
| `POST` | `/auth/forgot-password` | View |  | Reset password page (`/forgot-password.html`)|
| `POST` | `/api/auth/forgot-password` | API |  | send request to change password |
| `POST` | `/api/auth/logout` | API | Authenticated | Clears auth tokens and redirects to `/` |

---

### 4.2 Normal User / Constituent Routes (`/user/*` & `/api/user/*`)

| HTTP Method | Route Path | Type | Access Level | Description / Template |
| --- | --- | --- | --- | --- |
| `GET` | `/user/dashboard` | View | User | Constituent home portal (`constituent/dashboard.html`) |
| `GET` | `/user/profile` | View | User | View/Edit account settings & ID verification status |
| `PATCH` | `/api/user/profile` | API | User | Updates user profile information |
| **Petitions & Grievances** |  |  |  |  |
| `GET` | `/user/petitions` | View | User | List constituent's petitions & public petitions |
| `GET` | `/user/petitions/new` | View | User | Form to create a petition (`constituent/petition_new.html`) |
| `POST` | `/api/petitions` | API | User | Submits a new petition/grievance with attachments |
| `GET` | `/user/petitions/{id}` | View | User | Detail view of petition & official responses |
| `POST` | `/api/petitions/{id}/sign` | API | User | Signs/supports an active public petition |
| **Appointments** |  |  |  |  |
| `GET` | `/user/appointments` | View | User | View appointment requests with MP office |
| `GET` | `/user/appointments/book` | View | User | Booking interface (`constituent/book_appointment.html`) |
| `POST` | `/api/appointments` | API | User | Requests an appointment with MP/Staff |
| `DELETE` | `/api/appointments/{id}` | API | User | Cancels a pending appointment |
| **Bursaries & Social Funds** |  |  |  |  |
| `GET` | `/user/bursaries` | View | User | Open bursary application schemes |
| `GET` | `/user/bursaries/apply` | View | User | Bursary application form |
| `POST` | `/api/bursaries/apply` | API | User | Submits bursary form + PDF supporting documents |
| `GET` | `/user/bursaries/my-applications` | View | User | Tracks status of submitted applications |
| **Polls & Community Feedback** |  |  |  |  |
| `GET` | `/user/polls` | View | User | Active constituency opinion polls |
| `POST` | `/api/polls/{id}/vote` | API | User | Casts a vote on a constituency poll |

---

### 4.3 Member of Parliament (MP) & Staff Routes (`/mp/*` & `/api/mp/*`)

| HTTP Method | Route Path | Type | Access Level | Description / Template |
| --- | --- | --- | --- | --- |
| `GET` | `/mp/dashboard` | View | MP | Executive dashboard with metrics (`mp/dashboard.html`) |
| **Petition Management** |  |  |  |  |
| `GET` | `/mp/petitions` | View | MP | Manage constituency petitions & grievances |
| `GET` | `/mp/petitions/{id}` | View | MP | Review petition details & signatures list |
| `PATCH` | `/api/v1/mp/petitions/{id}/status` | API | MP | Change status: `Under Review`, `Escalated`, `Resolved` |
| `POST` | `/api/v1/mp/petitions/{id}/response` | API | MP | Issue official MP response/statement |
| **Appointment Scheduling** |  |  |  |  |
| `GET` | `/mp/appointments` | View | MP | Manage calendar and constituent bookings |
| `PATCH` | `/api/v1/mp/appointments/{id}` | API | MP | Approve, reschedule, or decline appointment |
| `POST` | `/api/v1/mp/slots` | API | MP | Set available office hours / consultation slots |
| **Bursary Fund Management** |  |  |  |  |
| `GET` | `/mp/bursaries` | View | MP | Review applications for constituency bursaries |
| `GET` | `/mp/bursaries/{id}` | View | MP | Single application verification & document viewer |
| `PATCH` | `/api/v1/mp/bursaries/{id}/review` | API | MP | Action application: `Approve`, `Reject`, `Request Info` |
| `POST` | `/api/v1/mp/bursaries/disburse` | API | MP | Finalize fund distribution batch |
| **Polls** |  |  |  |  |
| `POST` | `/api/v1/mp/polls` | API | MP | Create a new constituent poll |
| `POST` | `/api/v1/mp/broadcast` | API | MP | Send SMS/Email broadcast to constituents |

---

### 4.4 Platform Site Admin Routes (`/admin/*` & `/api/v1/admin/*`)

| HTTP Method | Route Path | Type | Access Level | Description / Template |
| --- | --- | --- | --- | --- |
| `GET` | `/admin/dashboard` | View | Admin | System health, user stats, and audit logs |
| **User & Staff Management** |  |  |  |  |
| `GET` | `/admin/users` | View | Admin | User database management (`admin/users.html`) |
| `PATCH` | `/api/v1/admin/users/{id}/role` | API | Admin | Assign roles (`User`, `MP`, `Admin`) |
| `PATCH` | `/api/v1/admin/users/{id}/status` | API | Admin | Activate, suspend, or verify national ID |
| **Constituencies & Boundaries** |  |  |  |  |
| `GET` | `/admin/constituencies` | View | Admin | Manage constituencies and sub-counties/wards |
| `POST` | `/api/v1/admin/constituencies` | API | Admin | Add new constituency boundary |
| `POST` | `/api/v1/admin/wards` | API | Admin | Add/Edit ward mapping under a constituency |
| **System Operations & Audits** |  |  |  |  |
| `GET` | `/admin/audit-logs` | View | Admin | System audit trail & security activity |
| `GET` | `/api/v1/admin/export/report` | API | Admin | Download platform analytics report (CSV/PDF) |

---

Background services that Should be included:

- when a new user register for the app, send welcome email
- when user deletes account, goodbye email
- on any new bill/poll being added, send them a quick notification, unless they have unsubscribed from this
- password reset request
- successful password reset

## Project Setup

Simply run the project with docker:

```bash
docker compose up
```
