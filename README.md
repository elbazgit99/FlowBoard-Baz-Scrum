# Baz Scrum
## FlowBoard – Kanban Management System

## Project Overview
Development of an internal task management tool using Native JavaScript, REST API, and a three-column Kanban board.

# Deliverable 1 – Initial Kanban Board

## Step 0 – Planning & GitFlow
- GitHub repository with `main` and `develop`.
- Feature branches and Pull Requests.
- Jira / GitHub Projects task management.
- No direct commits to `main` or `develop`.

## Step 1 – Interface Setup
- Three-column board: To Do, In Progress, Done.
- Header and filter bar.
- Tailwind CSS or Bootstrap.
- Separate API and UI files.

## Step 2 – Display Cards (Fetch API)
- Fetch cards from API.
- Store cards in `state.cards`.
- Distribute cards according to status.
- Column counters.
- Loading, success, and error states.
- HTTP error handling with `response.ok`.
- Retry button.

## Step 3 – Add Cards
- New Card button and modal form.
- Title, description, status, priority.
- Form validation.
- Add cards using `push`.
- Update state and re-render the board.
- Immediate display without reloading.
- Bonus: POST request to API.

## Step 4 – Filters
- Priority filter.
- Assigned user filter.
- Keyword search.
- Combined filters using `URLSearchParams`.
- Fetch filtered cards from API.
- Reset filters.
- Empty results message.

## Step 5 – Security & Robustness
- Safe DOM manipulation using `textContent` and `createElement`.
- XSS prevention.
- No `alert()` or `confirm()`.
- Interface notifications.
- Optional LocalStorage persistence.

# Deliverable 2 – Advanced Card Management

## Step 0 – Planning & GitFlow
- Feature branches for each new functionality.
- Jira task updates.
- One commit per feature.

## Step 1 – Axios & Architecture
- Axios integration.
- Single Axios instance using `axios.create`.
- Migration of existing Fetch requests.
- Dedicated `cardService.js`.
- Async/await implementation.

## Step 2 – Edit Cards
- Edit button on each card.
- Modal pre-filled with existing data.
- Validation.
- PUT request.
- Loading state and disabled button.

## Step 3 – Move Cards
- Change card status between columns.
- PATCH request.
- Update column counters.
- Bonus: HTML Drag & Drop API.

## Step 4 – Delete Cards
- Delete button.
- Custom confirmation modal.
- DELETE request.
- Update state and DOM.
- Error handling.

## Step 5 – Error Handling & Persistence
- try/catch in service functions.
- Success and error notifications.
- LocalStorage for filters, theme, and collapsed columns.
- SessionStorage for form drafts.

## Step 6 – AI Card Generation (Gemini)
- AI generation modal.
- Project description and API key.
- `generateCards(description, apiKey)`.
- Axios POST request.
- Loading state and notifications.
- Secure API key handling.

# Project Architecture

```text
flowboard/
├── assets/
├── fonts/
├── index.html
├── README.md
└── app/
    ├── main.js
    ├── ui.js
    ├── store.js
    └── api.js
```

# Storage

| Storage | Key |
|---|---|
| LocalStorage | `flowboard:filters` |
| LocalStorage | `flowboard:theme` |
| LocalStorage | `flowboard:collapsed` |
| SessionStorage | `flowboard:draft` |

# Learning Methods
- Individual work.
- Duration: 4 days per deliverable.

## Deliverable 1
- Deadline: November 13, 2026 – 5:00 PM.

## Deliverable 2
- Deadline: November 20, 2026 – 5:00 PM.

## Practical Scenario
- Duration: 45 minutes.

# Performance Criteria
- Fetch and Axios API consumption.
- HTTP methods: GET, POST, PUT, PATCH, DELETE.
- Promises, async/await, and Event Loop understanding.
- State and DOM management.
- Persistent CRUD operations.
- HTTP, network, and timeout error handling.
- Loading, success, and error states.
- XSS prevention and input validation.
- LocalStorage and SessionStorage mastery.
- Layered architecture and separation of concerns.
- API consistency after reloading.
- Clean console and reliable application behavior.
