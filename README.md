##PlaywrightLoginAutomation

##Overview
This project automates Login and Logout functionality using Playwright with JavaScript. The framework is built using Page Object Model (POM) for better code maintainability and reusability.

##TechStack
Playwright
JavaScript (Node.js)
Page Object Model

##TestCovered
✅ Login with valid credentials
✅ Verify Home Page after login
✅ Logout from application
✅ Verify Sign In page after logout

##SetupAndRun
npm install
npx playwright install
npx playwright test

## ExpectedResult
✔ User should successfully login with valid credentials
✔ Home page should be displayed
✔ User should successfully logout
✔ Sign In page should be displayed again

##BestPracticesImplemented
✔ Page Object Model
✔ Reusable methods
✔ Proper locator strategy
✔ Clean and maintainable code structure
✔ Assertions for validation

##FutureEnhancements
🔹 Add Negative Login Test Cases
🔹 Add Cross Browser Testing
🔹 Integrate Reporting (Allure / HTML Reports)
🔹 CI/CD Integration
🔹 Test Data Management

