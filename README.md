
# Post Dashboard

A React application that fetches posts from an API and allows users to filter them by title.

## Features

- Fetches posts from JSONPlaceholder using the Fetch API.
- Uses `useEffect` to load posts when the application starts.
- Uses `useReducer` to manage loading, success, and error states.
- Provides a controlled input for filtering post titles.
- Displays loading, error, empty, and filtered-result messages.
- Uses reusable `Post` and `PostList` components.
- Cancels an active request when the component unmounts.

## Technologies

- React
- Vite
- JavaScript
- HTML
- CSS
- Fetch API

## Project Structure

```text
assignment6/
├── src/
│   ├── api/
│   │   └── postsApi.js
│   ├── components/
│   │   ├── FilterForm.jsx
│   │   ├── Post.jsx
│   │   └── PostList.jsx
│   ├── reducer/
│   │   └── postsReducer.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Installation and Usage

1. Install Node.js if it is not already installed.
2. Open the project directory in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## Challenges and Learning Outcomes

During this project, I practiced managing asynchronous API requests in React, handling loading and error states with `useReducer`, and using `useEffect` to load data when the component mounts. I also practiced controlled inputs, filtering data without mutating the original array, and separating the application into reusable components.
