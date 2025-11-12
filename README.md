# 🎬 IT Academy - Sprint 3 : Advanced JavaScript Functions

## 📝 Project Description

This project is part of the Front-End development Sprint 3. The main objective was to implement and test a set of advanced JavaScript functions using core array methods (`map`, `filter`, `reduce`, `sort`) to manipulate a movie dataset.

The work focused heavily on ensuring code **robustness**, resolving module conflicts, and creating efficient solutions with tie-breaking logic and proper error handling (`NaN`).

## ⚙️ Setup and Testing

This environment uses **Jest** as the testing framework. All source code and test files have been standardized to use the **CommonJS** module system (`require`/`module.exports`) to guarantee seamless compatibility with the existing project structure and Jest's default configuration.

### Requirements

* Node.js (LTS version recommended)
* npm (included with Node.js)

## 📁 Project Structure
```
SPRINT-3/  
├── src/ 
│ ├── data.js 
│ ├── films.js
│ ├── indexx.html
├── test/ 
│ └── films.spec.js
├── package.json
├── README.md
└── test-results.html
```
---

### Installation

Clone the repository and execute the following command to install the project dependencies (including Jest):

```bash
git clone https://github.com/blackfel666/sprint-3.git
```
```bash
npm install
```
---

### Deployment

https://blackfel666.github.io/sprint-3/

---

| Exercise	| Function	| Description and Robustness |
| :--- | :--- | :--- |
| Ex. 1	| `getAllDirectors()` | Returns an array containing the names of all movie directors. |
| Ex. 2	| `getMoviesFromDirector()` | Filters the movie list to return only films directed by a specific person. |
| Ex. 3	| `moviesAverageOfDirector()` | Calculates the average score for a specific director and returns the result as a string formatted to two decimal places (e.g., "8.45"). |
| Ex. 4	| `orderAlphabetically()` | Sorts the entire movie list alphabetically by title, then returns an array with the titles of the first 20 results. |
| Ex. 5	| `orderByYear()` | Implements complex sorting logic: primarily by Year (ascending); if years are equal, Title is used as the alphabetical tie-breaker. |
| Ex. 6	| `moviesAverageByCategory()` | Calculates the average score for a specific genre. Includes a guard clause that returns 0 instead of NaN if no movies match the genre. |
| Ex. 7	| `hoursToMinutes()` | Converts movie durations from "Xh Ymin" string format to a total number of minutes, updating the movie object (duration: '142 min'). |
| Ex. 8	| `bestFilmOfYear()` | Finds and returns the movie object with the highest score for a given year. |

---

### 💡 Implementation Notes (Lessons Learned)

**CommonJS Standardization:** All persistent module conflicts (import vs require) were resolved by standardizing the test environment and source files to use CommonJS (require/module.exports).

**Array Immutability:** The spread operator ([...array]) and .slice() were used in sorting functions (sort()) to guarantee that the original movie array remains immutable.

**Robust Averaging:** Guard clauses (if (array.length === 0) return 0;) were implemented in average functions to handle the division-by-zero case and prevent NaN results.

**Code Cleanliness:** Removed all global function calls and execution statements from the source file (src/films.js) to prevent module-loading errors (ReferenceErrors).

---

## 🤝 Contributing

This is an educational project developed for the **IT Academy Barcelona's Frontend Development course**.

---

## 👨‍💻 Author

**blackfel666**
* GitHub: **`@blackfel666`**
