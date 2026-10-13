import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Activity, CalendarDays, CheckCircle2, Clock3, Copy, HeartPulse, Hospital, MapPin, MessageCircle, ShieldCheck, Stethoscope, Users, AlertTriangle, ClipboardCheck, ChevronRight } from "lucide-react";
import "./styles.css";

const concerns = {
  "General consultation": ["Outpatient Department", "General Practice", "Sample Doctor A"],
  "Fever, flu or infection": ["Outpatient Department", "General Medicine", "Sample Doctor B"],
  "Heart or blood pressure": ["Cardiology Wing", "Cardiology", "Sample Doctor C"],
  "Pregnancy or women's health": ["Maternity & Gynaecology Wing", "Obstetrics & Gynaecology", "Sample Doctor D"],
  "Child health": ["Paediatric Wing", "Paediatrics", "Sample Doctor E"],
  "Dental pain or oral health": ["Dental Clinic", "Dentistry", "Sample Doctor F"],
  "Skin conditions": ["Dermatology Clinic", "Dermatology", "Sample Doctor G"],
  "Eye problems": ["Eye Clinic", "Ophthalmology", "Sample Doctor H"],
  "Bone, joint or muscle pain": ["Orthopaedic Clinic", "Orthopaedics", "Sample Doctor I"],
  "Mental health or emotional wellbeing": ["Mental Health Clinic", "Psychiatry", "Sample Doctor J"],
  "Stomach or digestive problems": ["Gastroenterology Clinic", "Gastroenterology", "Sample Doctor K"],
  "Injury or accident": ["Emergency Department", "Emergency Medicine", "Emergency team"]
};

const staff = [
  ["Sample Doctor A", "Doctor", "General Practice", "Outpatient Department", "Mon–Fri, 9 AM–1 PM"],
  ["Sample Doctor B", "Doctor", "General Medicine", "Outpatient Department", "Mon–Fri, 10 AM–3 PM"],
  ["Sample Doctor C", "Doctor", "Cardiology", "Cardiology Wing", "Tue–Thu, 9 AM–12 PM"],
  ["Sample Doctor D", "Doctor", "Obstetrics & Gynaecology", "Maternity & Gynaecology Wing", "Mon–Fri, 9 AM–2 PM"],
  ["Sample Doctor E", "Doctor", "Paediatrics", "Paediatric Wing", "Mon–Sat, 9 AM–1 PM"],
  ["Sample Doctor F", "Doctor", "Dentistry", "Dental Clinic", "Mon–Fri, 10 AM–4 PM"],
  ["Sample Doctor G", "Doctor", "Dermatology", "Dermatology Clinic", "Wed–Fri, 9 AM–12 PM"],
  ["Sample Doctor H", "Doctor", "Ophthalmology", "Eye Clinic", "Mon–Thu, 9 AM–1 PM"],
  ["Sample Doctor I", "Doctor", "Orthopaedics", "Orthopaedic Clinic", "Tue–Fri, 10 AM–2 PM"],
  ["Sample Doctor J", "Doctor", "Psychiatry", "Mental Health Clinic", "Mon–Fri, 10 AM–3 PM"],
  ["Sample Doctor K", "Doctor", "Gastroenterology", "Gastroenterology Clinic", "Mon–Thu, 9 AM–12 PM"],
  ["Sample Nurse A", "Nurse", "Triage and vital signs", "Outpatient Department", "Mon–Sat, 8 AM–5 PM"],
  ["Sample Nurse B", "Nurse", "Maternity nursing", "Maternity & Gynaecology Wing", "By roster"],
  ["Sample Nurse C", "Nurse", "Paediatric nursing", "Paediatric Wing", "By roster"],
  ["Sample Nurse D", "Nurse", "Emergency nursing", "Emergency Department", "24/7, subject to roster"],
  ["Sample Nurse E", "Nurse", "Wound care and patient education", "Outpatient Department", "Mon–Fri, 8 AM–4 PM"]
];

const insurers = ["SHA — Social Health Authority", "AAR Insurance", "Jubilee Health Insurance", "Britam", "CIC Insurance", "APA Insurance", "Madison Insurance", "Old Mutual", "Minet / employer medical scheme", "Private payment / no insurance", "Other"];

function App() {
  const [page, setPage] = useState("book");
  const [concern, setConcern] = useState("General consultation");
  const [hospital, setHospital] = useState("Hospital to be confirmed");
  const [insurance, setInsurance] = useState(insurers[0]);
  const [clinician, setClinician] = useState("Sample Doctor A");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [consultationType, setConsultationType] = useState("Physical consultation");
  const [onlineMethod, setOnlineMethod] = useState("Video call");
  const [symptoms, setSymptoms] = useState("");
  const [urgency, setUrgency] = useState("Routine");
  const [consent, setConsent] = useState(false);
  const [review, setReview] = useState(false);
  const [filter, setFilter] = useState("Everyone");
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const recommendation = concerns[concern];
  const doctorsForConcern = useMemo(() => staff.filter(s => s[1] === "Doctor" && s[2] === recommendation[1]), [recommendation]);

  function chooseConcern(value) {
    setConcern(value);
    setClinician(concerns[value][2]);
    setReview(false);
  }

  function askBot() {
    const q = question.toLowerCase();
    if (q.includes("insurance") || q.includes("cover") || q.includes("sha")) setReply("Choose your provider in the form. The hospital must verify your specific plan, benefits, pre-authorisation and any co-payment before the visit.");
    else if (q.includes("queue") || q.includes("wait")) setReply("A connected production system could issue a queue token after registration and show waiting estimates. This demo has no live queue connection.");
    else if (q.includes("doctor") || q.includes("available")) setReply("The staff directory contains illustrative entries only. Actual doctor availability must come from the hospital's live roster and appointment system.");
    else if (q.includes("wing") || q.includes("where") || q.includes("department")) setReply("Based on your selected concern, the suggested department is " + recommendation[0] + ". Confirm its location with the hospital before travelling.");
    else setReply("I can suggest " + recommendation[0] + " for this enquiry. This is guidance, not a diagnosis; a clinician should confirm the appropriate care.");
  }

  async function copyRequest() {
    const summary = "AFYAQUEUE APPOINTMENT REQUEST\nPatient: " + (patientName || "Not provided") + "\nHospital: " + hospital + "\nConcern: " + concern + "\nDepartment: " + recommendation[0] + "\nSpecialty: " + recommendation[1] + "\nClinician preference: " + clinician + "\nPreferred date: " + (date || "Not selected") + "\nPreferred time: " + time + "\nConsultation type: " + consultationType + (consultationType === "Online consultation" ? "\nOnline method: " + onlineMethod : "\nVisit location: " + recommendation[0]) + "\nInsurance: " + insurance + "\nUrgency: " + urgency;
    try { await navigator.clipboard.writeText(summary); alert("Request details copied."); }
    catch { window.prompt("Copy your request details:", summary); }
  }

  return <div className="app-shell">
    <header className="hero">
      <div className="brand-row"><div className="brand-icon"><Hospital size={27}/></div><div><div className="brand-name">AfyaQueue Nairobi</div><div className="brand-subtitle">Hospital Appointment & Queue Assistant</div></div><span className="demo-badge">DEMO</span></div>
      <h1>Your healthcare journey starts at home.</h1>
      <p>Plan a hospital visit, explore insurance options, and find the right department before you arrive.</p>
      <div className="feature-row"><span><CalendarDays size={17}/> Appointment requests</span><span><ShieldCheck size={17}/> Insurance selection</span><span><MapPin size={17}/> Department guidance</span></div>
    </header>
    <nav className="tabs" aria-label="Main navigation">
      <button className={page === "book" ? "tab active" : "tab"} onClick={() => setPage("book")}><CalendarDays size={16}/> Book a visit</button>
      <button className={page === "staff" ? "tab active" : "tab"} onClick={() => setPage("staff")}><Users size={16}/> Doctors & nurses</button>
      <button className={page === "wings" ? "tab active" : "tab"} onClick={() => setPage("wings")}><MapPin size={16}/> Find a wing</button>
    </nav>
    <main>
      {page === "book" && <section className="panel">
        <div className="section-heading"><MessageCircle/><div><h2>Talk to AfyaQueue</h2><p>Tell us why you want to visit the hospital.</p></div></div>
        <div className="bot-message"><strong>AfyaQueue</strong><p>Hello! I can help you identify a suitable department and prepare a visit request. What would you like assistance with?</p><small>This assistant provides general routing guidance, not a medical diagnosis.</small></div>
        <form onSubmit={e => { e.preventDefault(); setReview(true); }}>
          <div className="form-section"><h3>1. What is your main concern?</h3>
            <label>Reason for visit<select value={concern} onChange={e => chooseConcern(e.target.value)}>{Object.keys(concerns).map(c => <option key={c}>{c}</option>)}</select></label>
            <label>Describe your symptoms or enquiry (optional)<textarea value={symptoms} onChange={e => setSymptoms(e.target.value)} placeholder="Briefly describe your concern..." rows="3"/></label>
            <fieldset><legend>How urgent is your visit?</legend>{["Routine", "I need medical attention soon", "Emergency or severe symptoms"].map(v => <label className="radio-label" key={v}><input type="radio" name="urgency" checked={urgency === v} onChange={() => setUrgency(v)}/>{v}</label>)}</fieldset>
            {(urgency === "Emergency or severe symptoms" || concern === "Injury or accident") && <div className="alert"><AlertTriangle size={20}/><div><strong>Emergency guidance</strong><p>Do not wait for an online appointment if symptoms are severe. Go to the nearest emergency department or call Kenya emergency services on 999 or 112.</p></div></div>}
          </div>
          <div className="recommendation"><div className="recommendation-icon"><Activity size={23}/></div><div><span className="eyebrow">SUGGESTED DEPARTMENT</span><h3>{recommendation[0]}</h3><p>Specialty: {recommendation[1]}. A hospital clinician should confirm the appropriate department.</p></div></div>
          <div className="form-section"><h3>2. Hospital and insurance</h3>
            <label>Hospital<select value={hospital} onChange={e => setHospital(e.target.value)}>{["Hospital to be confirmed", "The Nairobi Hospital (demo)", "Kenyatta National Hospital (demo)", "Aga Khan University Hospital, Nairobi (demo)", "MP Shah Hospital (demo)", "Another hospital"].map(h => <option key={h}>{h}</option>)}</select></label>
            <label>Medical insurance provider<select value={insurance} onChange={e => setInsurance(e.target.value)}>{insurers.map(i => <option key={i}>{i}</option>)}</select></label>
            <p className="helper">Options are for demonstration only. Confirm that the selected facility accepts your specific plan and service.</p>
          </div>
          <div className="form-section"><h3>3. Choose consultation type</h3>
            <div className="consultation-options">
              <button type="button" className={consultationType === "Online consultation" ? "consultation-card selected" : "consultation-card"} onClick={() => setConsultationType("Online consultation")}><span className="consultation-symbol"><MessageCircle size={21}/></span><strong>Online consultation</strong><span>Consult from home by video or phone, subject to the hospital's services.</span></button>
              <button type="button" className={consultationType === "Physical consultation" ? "consultation-card selected" : "consultation-card"} onClick={() => setConsultationType("Physical consultation")}><span className="consultation-symbol"><Hospital size={21}/></span><strong>Physical consultation</strong><span>Visit the hospital and go to the recommended department or wing.</span></button>
            </div>
            {consultationType === "Online consultation" ? <div className="online-details"><label>Preferred online method<select value={onlineMethod} onChange={e => setOnlineMethod(e.target.value)}><option>Video call</option><option>Phone call</option></select></label><p className="helper">The hospital must confirm whether online consultations are offered for your concern, clinician, insurance plan and selected time. A secure meeting link is not generated by this demo.</p></div> : <div className="physical-details"><MapPin size={17}/><div><strong>Suggested visit location</strong><span>{recommendation[0]}</span><small>Confirm the exact wing and appointment time with the hospital before travelling.</small></div></div>}
          </div>
          <div className="form-section"><h3>4. Preferred clinician and appointment</h3>
            <label>Doctor or clinician preference<select value={clinician} onChange={e => setClinician(e.target.value)}>{doctorsForConcern.map(s => <option key={s[0]}>{s[0]} — {s[2]}</option>)}<option>Any available clinician in this specialty</option></select></label>
            <div className="two-col"><label>Preferred date<input type="date" min={new Date().toISOString().slice(0, 10)} value={date} onChange={e => setDate(e.target.value)}/></label><label>Preferred time<select value={time} onChange={e => setTime(e.target.value)}>{["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"].map(t => <option key={t}>{t}</option>)}</select></label></div>
            <label>Patient name<input value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="Enter patient name" required/></label>
            <div className="two-col"><label>Phone (optional)<input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+254..."/></label><label>Email (optional)<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"/></label></div>
            <label className="checkbox-label"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}/> I understand this is a demo request and the hospital must confirm appointment availability and insurance eligibility.</label>
            <button className="primary-button" type="submit"><ClipboardCheck size={17}/> Review appointment request</button>
          </div>
        </form>
        {review && <div className="request-card"><div className="request-title"><h3>Appointment request summary</h3><span className="pending-badge">Not yet booked</span></div><p className="helper">This prototype cannot contact a hospital, verify insurance, or reserve a real appointment.</p>
          <dl><div><dt>Patient</dt><dd>{patientName || "Not provided"}</dd></div><div><dt>Hospital</dt><dd>{hospital}</dd></div><div><dt>Department</dt><dd>{recommendation[0]}</dd></div><div><dt>Specialty</dt><dd>{recommendation[1]}</dd></div><div><dt>Consultation type</dt><dd>{consultationType}{consultationType === "Online consultation" ? " · " + onlineMethod : " · " + recommendation[0]}</dd></div><div><dt>Clinician</dt><dd>{clinician}</dd></div><div><dt>Preferred visit</dt><dd>{date || "No date selected"} at {time}</dd></div><div><dt>Insurance</dt><dd>{insurance}</dd></div></dl>
          <button className="secondary-button" disabled={!consent} onClick={copyRequest}><Copy size={16}/> Copy request details</button>{!consent && <p className="helper">Tick the consent checkbox to enable copying the request summary.</p>}
        </div>}
        <div className="chat-box"><h3>Ask the chatbot</h3><div className="chat-input"><input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === "Enter" && askBot()} placeholder="e.g. How do I check insurance cover?"/><button onClick={askBot}>Send</button></div>{reply && <div className="bot-reply"><strong>AfyaQueue</strong><p>{reply}</p></div>}</div>
      </section>}
      {page === "staff" && <section className="panel"><h2>Doctors and nursing team</h2><p className="muted">Illustrative sample directory. Names and schedules are not real hospital staffing information.</p>
        <div className="filter-row">{["Everyone", "Doctors", "Nurses"].map(f => <button key={f} className={filter === f ? "filter active-filter" : "filter"} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <div className="staff-grid">{staff.filter(s => filter === "Everyone" || (filter === "Doctors" ? s[1] === "Doctor" : s[1] === "Nurse")).map(s => <article className="staff-card" key={s[0]}><div className="staff-icon">{s[1] === "Nurse" ? <HeartPulse/> : <Stethoscope/>}</div><div className="staff-content"><span className="eyebrow">{s[1]}</span><h3>{s[0]}</h3><p>{s[2]}</p><div className="staff-detail"><MapPin size={15}/>{s[3]}</div><div className="staff-detail"><Clock3 size={15}/>{s[4]}</div>{s[1] === "Doctor" && <button className="text-button" onClick={() => { chooseConcern(Object.keys(concerns).find(k => concerns[k][1] === s[2]) || "General consultation"); setClinician(s[0]); setPage("book"); }}>Request this specialty <ChevronRight size={15}/></button>}</div></article>)}</div>
      </section>}
      {page === "wings" && <section className="panel"><h2>Find the right hospital wing</h2><p className="muted">Select a concern to see a suggested department. The actual location depends on the chosen hospital.</p><div className="wing-list">{Object.entries(concerns).map(([c, info]) => <button className="wing-row" key={c} onClick={() => { chooseConcern(c); setPage("book"); }}><div><strong>{c}</strong><span>{info[0]} · {info[1]}</span></div><ChevronRight/></button>)}</div></section>}
    </main>
    <footer><div className="footer-heading"><ShieldCheck size={19}/><strong>Privacy and patient safety</strong></div><p>This is a portfolio demonstration. Do not enter real patient data. A production system requires secure storage, access controls, consent, verified clinical information, live scheduling and insurer integrations, and compliance with applicable Kenyan data-protection requirements.</p><span>AfyaQueue Nairobi · Healthcare technology prototype</span></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
