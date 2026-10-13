# AfyaQueue Nairobi 🏥

**AfyaQueue Nairobi** is a portfolio prototype for a patient-friendly hospital appointment and queue management chatbot. It demonstrates how patients could plan a visit from home, choose an insurance provider, find a relevant department, browse a sample staff directory, and prepare an appointment request.

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

## Suggested next development steps

1. Add a FastAPI backend and PostgreSQL database.
2. Add authentication and role-based access for patients, clinicians, nurses, and administrators.
3. Integrate a hospital's actual appointment schedule and verified staff roster.
4. Integrate insurer eligibility and pre-authorisation checks with approved provider APIs.
5. Add queue token generation and real-time queue updates.
6. Add consent-based SMS/email notifications.
7. Conduct security, accessibility, privacy, and clinical-safety reviews before any real deployment.

## Privacy and safety

Do not upload real patient information, medical records, insurance membership numbers, passwords, access tokens, or API keys. A production deployment in Kenya should be designed around applicable data-protection requirements and hospital policies. Symptom routing is informational and must not be represented as a medical diagnosis.

## Portfolio description

AfyaQueue Nairobi is a healthcare technology prototype designed to improve the patient journey through online appointment requests, insurance-provider selection, specialty-based department routing, staff directory browsing, and queue-management guidance. Built with React and Vite, it demonstrates frontend development, workflow design, data privacy awareness, and healthcare service digitisation.

## License

This project is provided for learning and portfolio demonstration. Add a license if you want to define reuse permissions.