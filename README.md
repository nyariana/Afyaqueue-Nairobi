# AfyaQueue Nairobi 🏥

**A healthcare appointment and queue-management prototype**

AfyaQueue Nairobi is a React-based portfolio project exploring how patients could prepare for hospital visits, identify relevant departments, review illustrative healthcare staff profiles, select an insurance provider, and request online or in-person consultations.

The project focuses on a clear patient journey and demonstrates frontend development, form handling, interactive UI states, responsive design, and privacy-aware healthcare workflows.

> **Prototype notice:** This is not a live hospital service. Names, staff schedules, insurance options, and availability are illustrative. The application does not book appointments, verify insurance, provide medical diagnoses, generate real queue tokens, or connect patients to live clinicians.

## Project preview

A visual design showcase is planned for this section. Add the image to `docs/images/afyaqueue-demo.png` in the repository, then embed it here:

```markdown
![AfyaQueue Nairobi hospital interface concept](docs/images/afyaqueue-demo.png)
```

*The showcase image represents the intended user experience; some screens and functions shown are concepts rather than connected live services.*

## Features in the current prototype

- Appointment request form with preferred date and time
- Online or physical consultation preference
- Video-call or phone-call preference for a proposed online consultation
- Sample insurance-provider selection, including SHA and private providers
- Concern-based department and specialty suggestions
- Illustrative doctor and nurse directory with filters
- Hospital department and wing guidance
- Informational chatbot responses about departments, insurance, staff availability, and queues
- Demo live-chat interface with clear notices that messages are not delivered to a real clinician
- Emergency guidance for urgent or severe symptoms
- Responsive layout for desktop and mobile screens
- Appointment request summary that can be copied after the user acknowledges the demo limitations

## Technology stack

- React
- Vite
- JavaScript
- Lucide React
- CSS

## Run locally

**Requirements:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
Afyaqueue-Nairobi/
├── index.html
├── package.json
├── README.md
├── .gitignore
├── .env.example
└── src/
    ├── main.jsx
    └── styles.css
```

## Future development roadmap

1. **Backend and database:** Build a FastAPI backend with PostgreSQL.
2. **Authentication and access control:** Add secure sign-in and role-based permissions for patients, clinicians, nurses, and administrators.
3. **Hospital integration:** Connect verified staff profiles, department information, and real appointment schedules.
4. **Insurance integration:** Explore approved insurer APIs for eligibility checks and pre-authorisation.
5. **Queue management:** Add queue token generation and real-time status updates.
6. **Live consultations:** Implement secure clinician messaging and integrate an approved video/phone service.
7. **Notifications:** Add consent-based appointment reminders through SMS or email.
8. **Security and compliance:** Review data protection, accessibility, security, consent, and clinical safety before any real deployment.

## Privacy and safety

Do not enter or upload real patient details, medical records, insurance membership numbers, passwords, access tokens, or API keys into this prototype. Before deployment in Kenya, the system would need appropriate security controls, privacy safeguards, and review against applicable data-protection requirements and hospital policies.

Symptom-based routing is informational only and is not a diagnosis or substitute for professional medical advice. For severe or urgent symptoms, seek emergency care rather than relying on this prototype.

## License

This project is currently intended for learning and portfolio demonstration. No open-source reuse permissions are granted by a specific license yet. Add a license file if you decide how others may use, modify, and distribute the code.
