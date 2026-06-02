# nes-moh redesign — drop-in files

## What's in here

```
src/
  App.jsx                     ← replace your existing src/App.jsx
  styles/
    global.css                ← new global stylesheet
  components/
    Navbar.jsx
    Hero.jsx
    Projects.jsx
    Bio.jsx
    Skills.jsx
    WorkExperience.jsx
    EducationSection.jsx
    Contact.jsx
    Footer.jsx
```

## Setup steps

### 1. Copy the files
Replace your existing `src/` files with these. All component names match your original repo exactly.

### 2. Add the girl illustration
Copy `011507d1-39c6-407b-a753-fa6532ce48dd.png` into `src/assets/` and rename it:
```
src/assets/girl.png
```

### 3. Import global CSS
In your `src/main.jsx`, make sure you import the new stylesheet:
```js
import './styles/global.css'
```
You can remove any existing Tailwind or old CSS imports.

### 4. Remove Tailwind (optional)
Since the new design uses plain CSS, you can remove Tailwind if you want.
Or just leave it — the new CSS classes won't conflict.

### 5. Install missing deps (if needed)
The components use `react-icons` which you already have.
No new packages needed.

### 6. Run
```bash
npm run dev
```

## Notes
- The girl image (`girl.png`) is imported in `Hero.jsx` — make sure the path matches your assets folder
- Your existing `src/constants/index.jsx` is unchanged — all data (PROJECTS, EXPERIENCES, etc.) stays the same
- `WorkExperience.jsx` maps company names to logos automatically — if you add new jobs, add a matching entry to the `LOGOS` object in that file
