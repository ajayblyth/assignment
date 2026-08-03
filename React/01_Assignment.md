# React Assignments

---

# Assignment 1: useEffect and Data Fetching

## API

* https://rickandmortyapi.com/api/character
* Search: https://rickandmortyapi.com/api/character/?name=<term>

Open both URLs in the browser first and observe the response structure.

---

## Task 1: Character Table

* Fetch character data when the component loads.
* Use **useEffect**.
* Display a table with:

  * Image
  * Name
  * Status
  * Species
  * Gender
  * Origin

---

## Task 2: Search Characters

* Create a search input.
* As the user types:

  * Fetch matching characters.
  * Display them as cards.

Each card should show:

* Image
* Name
* Status
* Species
* Gender
* Last Known Location

---

## Requirements

* Show loading while fetching.
* Show an error message if the request fails.
* Test the error by intentionally breaking the URL.
* Handle **404** and display **"No Results Found"**.
* Every list item must have a unique **key**.
* Fetch only inside **useEffect**.
* Task 1 should fetch exactly once.
* Verify with **console.log()**.
* Task 2 should:

  * Fetch when the search term changes.
  * Use debounce (delay + cleanup).
  * Not fetch when the search box is empty.
* Use **fetch()** only.
* No Axios or other libraries.

---

# Assignment 2: React Hooks

Before starting:

* Open **vite.config.js**
* Remove **reactCompilerPreset**
* Keep only:

```jsx
react()
```

Restart the development server.

---

## Rules

* Prove every claim using **console.log()**.
* Every **useMemo**, **useCallback**, and **React.memo** should include a comment explaining:

  * What breaks if it is removed.
* Every list item must have a unique key.

---

## Q1: Previous Value Tracker (useRef)

* Number input
* Display:

  * Current value
  * Previous value
* Store previous value using **useRef**
* Explain why **useState** cannot be used.

---

## Q2: Filter Large List (useMemo)

* Create 5000 items.
* Search box filters items.
* Dark mode toggle.

### Before useMemo

* Filter runs every render.
* Console log confirms it.
* Toggle dark mode.
* Observe lag.

### After useMemo

* Filter only runs when:

  * Search changes
* Dark mode no longer triggers filtering.

---

## Q3: Array Identity (useMemo)

* Parent has:

  * Counter
  * Array
* Child uses **React.memo**
* Child logs every render.

### Before

* Array recreated every render.
* Child re-renders.

### After

* Wrap array in **useMemo**.
* Child stops unnecessary re-renders.

Explain why.

---

## Q4: React.memo with Object Prop

* Parent has counter.
* Child uses React.memo.
* Pass:

```jsx
style={{ color: "red" }}
```

Child still re-renders.

Explain why.

Do NOT fix it.

---

## Q5: Fix Object + Function Props

Start from Q4.

Parent passes:

* style object
* function

Use

* useMemo
* useCallback

Verify child renders only once.

Explain why both are required.

---

## Q6: Todo List

* Parent stores todos.
* TodoItem uses React.memo.
* Every TodoItem logs renders.

Requirement:

* Existing todos should NOT re-render when adding a new todo.

Use:

* useCallback
* Functional setState

Explain why functional setState allows an empty dependency array.

---

## Q7: Capstone

API:

https://jsonplaceholder.typicode.com/users

Requirements

* Fetch users once
* Handle loading
* Handle errors
* Search users
* Filter using useMemo
* UserCard uses React.memo
* Select button handler uses useCallback
* Track render count using useRef

Requirement:

Typing or selecting one user should not re-render every card.

Verify using console logs.

---

## Q8: Diagnosis

Write a short paragraph explaining:

* Why useMemo for adding two numbers is unnecessary.
* Why memoizing a two-item array is unnecessary.
* Why useCallback is unnecessary for a function never passed to a child.
* Why overusing useMemo/useCallback can reduce readability and may hurt performance.

---

## Submission

* Push every question to GitHub.
* One folder per question.
* Every memoization must include an explaining comment.
* Include before/after console screenshots for:

  * Q2
  * Q3
  * Q4
  * Q7

---

# Assignment 3: React Router DOM

Build a **Notes App** using:

* React Router
* useState

(No Redux)

---

## Routes

### Layout

* Navbar
* Home
* Notes
* Add Note
* Outlet

Navbar should appear on every page.

---

### Home

Route:

```
/
```

Display a welcome message.

---

### Notes

Route:

```
/notes
```

Display:

* All notes
* Title
* Link to detail page

---

### Note Detail

Route

```
/notes/:id
```

Use:

* useParams()

Display:

* Title
* Body

If note not found:

```
Note not found
```

Include:

* Delete button
* Navigate back to /notes after deletion.

---

### Add Note

Route

```
/add
```

Controlled inputs:

* Title
* Body

On submit

* Add note
* Navigate to /notes

---

### Not Found

404 page

Include a link back to Home.

---

## Requirements

* Notes stored using useState.
* Pass notes via props.
* Unique ID using:

  * Date.now()
  * Counter
* Use Link (never `<a>`).
* Controlled inputs.
* Lazy load Add Note using:

  * React.lazy()
  * Suspense()

---

## Starter Data

```js
const initialNotes = [
  { id: 1, title: "First note", body: "This is my first note." },
  { id: 2, title: "Shopping", body: "Milk, eggs, bread." },
];
```

---

# Assignment 4: Redux Toolkit

Rebuild the same Notes App.

Difference:

Use **Redux Toolkit** instead of useState.

Routes remain exactly the same.

---

## Requirements

### Store

* configureStore()

---

### Slice

Create **notesSlice**

Reducers

* addNote
* deleteNote
* editNote (optional)

---

### Provider

Wrap App with:

```jsx
<Provider store={store}>
```

---

### Read Data

Use:

```jsx
useSelector()
```

For:

* Notes page
* Detail page

---

### Update Data

Use:

```jsx
useDispatch()
```

Dispatch:

* addNote
* deleteNote

---

## Important

* Do NOT pass notes as props.
* Read notes directly from Redux.
* Routing stays unchanged.

---

# Reflection

Write a short paragraph answering:

* What became easier with Redux?
* What became harder?
* How did prop passing change?
* Where did notes live in:

  * Assignment 3 (useState)?
  * Assignment 4 (Redux Toolkit)?
