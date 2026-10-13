# AfyaQueue Nairobi 🏥

**AfyaQueue Nairobi** AfyaQueue Nairobi is a healthcare technology prototype designed to improve the patient journey through online appointment requests, insurance-provider selection, symptom-based department guidance, healthcare staff directory browsing, consultation preferences, and queue-management support.

Built with React and Vite, the project demonstrates frontend development, user-interface design, workflow automation concepts, healthcare service digitisation, and awareness of data privacy and security.

> **Demo only:** Hospital names, staff, schedules, insurance options, and availability shown in this project are illustrative. This project does not make real appointments, verify insurance, diagnose medical conditions, or issue live queue numbers.

## Features

- Appointment request form with patient contact fields
- Sample insurance-provider selection, including SHA and private insurers
- Symptom/concern-based department suggestions
- Sample doctor and nurse directory with specialties and illustrative hours
- Hospital wing/department guide
- Queue and insurance guidance chatbot responses
- Emergency warning for urgent symptoms
- Responsive layout for desktop and mobile
- Privacy-conscious demo messaging

## Tech stack

- React
- Vite
- JavaScript
- Lucide React icons
- CSS

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
afyaqueue-nairobi/
├── index.html
├── package.json
├── README.md
├── .gitignore
├── .env.example
└── src/
    ├── main.jsx
    └── styles.css
```

## Future Development Roadmap

Backend and Database: Build a FastAPI backend with PostgreSQL for secure data storage and processing.

Authentication and Access Control: Introduce secure login and role-based permissions for patients, doctors, nurses, and administrators.

Hospital Integration: Connect verified healthcare staff profiles, hospital departments, and actual appointment schedules.

Insurance Integration: Explore approved insurer APIs for eligibility verification and pre-authorisation.

Queue Management: Implement queue token generation and real-time patient queue updates.

Notifications: Add consent-based SMS and email appointment reminders.

Live Consultations: Enable secure real-time doctor-patient messaging and integrate video or phone consultations.

Security and Compliance: Conduct security, accessibility, privacy, and clinical-safety reviews before deployment.

## Privacy and safety

Do not upload real patient information, medical records, insurance membership numbers, passwords, access tokens, or API keys. A production deployment in Kenya should be designed around applicable data-protection requirements and hospital policies. Symptom routing is informational and must not be represented as a medical diagnosis.

## Portfolio description

AfyaQueue Nairobi is a healthcare technology prototype designed to improve the patient journey through online appointment requests, insurance-provider selection, specialty-based department routing, staff directory browsing, and queue-management guidance. Built with React and Vite, it demonstrates frontend development, workflow design, data privacy awareness, and healthcare service digitisation.

## License

This project is currently intended for learning and portfolio demonstration. A formal open-source license can be added later to define how others may use, modify, and distribute the code.
