# Bayzat Test Project

### Overview
You're tasked with creating a basic React app. The app will have a table that shows a list of users and a form to add new users. The goal is to write clean, production-ready code.

### Tasks
1. **Set Up User Data**: 
   - Create a `users.json` file in the root of your project to store user data.
   - Each user should have these details: `username`, `firstName`, `lastName`, and `email`.

2. **Create a Users Table**:
   - Display the list of users from the `users.json` file in a table.

3. **Build a Form for Adding Users**:
   - Create a form that allows users to add new data to the `users.json` file.
   - The form can be filled in two ways:
     - Manually: The user types in the information.
     - Automatically: Add a `Generate` button that fetches random user data from this API: [Random User API](https://random-data-api.com/api/v2/users).
   - Make sure the form checks that all fields are correctly filled before submission.

### Requirements
- **Use TypeScript** for building the app.
- **Validate the form** before allowing a user to submit.
- **Write basic tests** using Cypress to ensure the app works as expected.
- Keep a **clear commit history**. Follow the guide here: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Assessment Criteria
Your completed test exercise will be marked according to a score sheet. We will focus on the following areas:
- That your solution meets the requirements.
- How usable your application is when using assistive technology.
- Your approach to testing the application.
- The use of responsive design.
- Clear project structure and conventions.
- How readable and understandable your code is.
- The performance of your completed application.

### Tips
- You can use **MUI (Material UI)** to make your app's components look consistent. Feel free to customize the styling to make the app look good.
- Add **toast notifications** for a better user experience, such as showing a message when a user is successfully added.

### Submission Instructions
1. **Create a private GitHub repository** and invite `@zego0` and `@abdulhamidOumer` as collaborators.
2. **Add a README.md file** with instructions on how to run your project locally. Include additional details such as:
   - Your thought process in building the solution.
   - Any improvements you would make if you had more time.
   - The tools and libraries you used, and why you chose them.
3. **Deploy your project** to a free hosting service like [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com) and include the live link in your README.md file.

Good luck! 🙏
