# Feedback Form

This is a **React** project to implement a feedback form based on a provided Figma design. The form allows users to input their name, contact number, email, and feedback using an emoji-based slider and comment section. Submitted feedback is displayed dynamically without page refresh using local state.

## Live Demo

(https://react-feedback-form-drab.vercel.app/)

## Features

- **Input Fields**: Collects user feedback for Name, Contact Number, Email, Rating, and Comments.
- **Dynamic Emoji Slider**: Users can provide a rating between "Worst" and "Very Good," and the associated emoji updates dynamically.
- **Form Validation**: Ensures that all fields are filled correctly before allowing submission.
- **Local Storage**: Saves submitted feedback locally so that it persists between page refreshes.
- **Dynamic Feedback Display**: Once submitted, feedback appears in the 'Submitted Feedbacks' section immediately without refreshing the page.

## Tech Stack

- **React**: Frontend framework used to build this single-page application.
- **Tailwind CSS**: For styling the components and layout.
- **Vite**: Used for development and bundling.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to:

   ```
   http://localhost:5173/
   ```

## Components

### 1. **InputField Component**
   - A reusable input field component for the name, contact number, and email fields.
   
### 2. **Slider Component**
   - Provides a range input that allows users to select their experience rating.
   - Dynamically updates the emoji and description based on the slider value.

### 3. **UserComment Component**
   - Displays submitted feedback dynamically, including the user's name, comment, and mood.

### 4. **Main Form (Component)**
   - The primary container for rendering the form and the list of submitted feedbacks.
   - Handles form validation, submission, and state management.

## Form Validation

The following validations are enforced:

- **Name**: Must be at least 3 characters.
- **Contact Number**: Must be a valid 10-digit number.
- **Email**: Must be a valid email format.
- **Comments**: Cannot be empty.

## Emoji Slider Logic

The slider uses a range between 0 and 100 to represent the user's feedback, divided into the following categories:

| Slider Value | Emoji        | Description  |
|--------------|--------------|--------------|
| 0 - 20       | 😞 (Worst)   | Worst        |
| 21 - 40      | 😐 (Not Good) | Not Good     |
| 41 - 60      | 😑 (Fine)     | Fine         |
| 61 - 80      | 🙂 (Look Good) | Look Good    |
| 81 - 100     | 😍 (Very Good) | Very Good    |

## Project Structure

```bash
├── public/
├── src/
│   ├── components/
│   │   ├── InputField.jsx
│   │   ├── Slider.jsx
│   │   └── UserComment.jsx
│   ├── App.jsx
│   ├── Component.jsx
│   ├── main.jsx
│   └── styles/
│       ├── slider.css
│       └── component.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Runs ESLint to check for code style issues.

## License

This project is licensed under the MIT License.
