# PlayGreen - Sports Application

## Description

Develop the PlayGreen - Sports application using ReactJS, consuming an API to fetch random sports photos and implementing a like and dislike functionality.

## API suggestion:
- 

## Features

- API consumption to fetch sports photos. ✅
- Like and dislike functionality. ✅
- Authentication with Firebase. ✅
- Save storage in Firestore. ✅
- Dark mode. ✅
- Responsive design. ✅
- Animations (general and Tinder-like slide).
- PWA (Progressive Web App).

## Prerequisites

- Node.js and pnpm or npm installed.
- Firebase account for authentication and Firestore.

## Installation

1. Clone the repository:
    
    ```bash
    git clone <https://github.com/your-username/playgreen-sports.git>
    cd playgreen-sports
    ```
    
2. Install dependencies:
    
    ```bash
    pnpm install or npm install
    ```
    
3. Configure Firebase:
    - Create a project in Firebase.
    - Enable authentication and Firestore.
    - Create a `.env` file in the root of the project with your Firebase credentials:
    
    ```
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_SENDER_ID=your_messaging_sender_id
    VITE_APP_ID=your_app_id
    ```
    
4. Run the application:
    
    ```bash
    pnpm run dev or npm run dev
    ```
    
## Technologies Used

- ReactJS
- TypeScript
- Axios
- Styled-components
- Firebase (Authentication and Firestore)
- Toast (Alerts)
- Framer Motion (Pages Transition)

## Deployment

The application is deployed at [deployment-link](https://playgreen-sports-cf485.web.app/).