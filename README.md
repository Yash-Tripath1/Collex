# Collex

> Find your college, without the noise.

India has thousands of colleges and almost no honest information about them. Collex fixes that. Real verified data, AI-powered student sentiment analysis, and actual numbers, not brochure fluff.

Live at **[collex-amber.vercel.app](https://collex-amber.vercel.app)**

---

## What it does

You search a college, you get the real picture — fees, placements, campus life, and an AI-generated review based on verified data. Not what the college wants you to think. What students actually experience.

- **250+ colleges** across IITs, NITs, IIITs, IIMs, NLUs, medical colleges, DU colleges, research institutes, and private universities
- **AI Analysis** — live Groq-powered review with pros, cons, and student voices for every college
- **Reality Score** — 10-dimension rating across budget friendliness, academics, placements, campus life, and more
- **Filters** — search by state, rating, and average LPA package
- **Compare** — side-by-side comparison of up to 3 colleges
- **Watchlist** — bookmark colleges to track them
- **Firebase Auth** — login with Google to save your watchlist and comparisons across devices
- **Collex AI** — chat assistant that answers any question about Indian colleges

---

## Why I built this

Most college research tools in India either show outdated data, make stuff up, or are just glorified ads for colleges. I wanted something that was actually honest. The AI review isn't hallucinated, it's grounded in verified fee structures, placement records, and campus data I researched manually for every college in the database.

---

## Tech stack

- **Frontend** — vanilla HTML, CSS, JavaScript. 
- **AI** — Groq API (llama-3.1-8b) via a Vercel serverless proxy
- **Auth & Storage** — Firebase Authentication + Firestore
- **Deployment** — Vercel (auto-deploys on every push)

---

## Roadmap

- [ ] Global colleges (top universities for Indian students going abroad)
- [ ] College request system with Google Sheets backend
- [ ] Premium tier with deeper analytics
- [ ] Mobile app

---

## Contact

Built by **Yash Tripathi**  
📧 collex.business@gmail.com  
🌐 [collex-amber.vercel.app](https://collex-amber.vercel.app)

---

*If you find this useful, star the repo. If your college isn't in the database, use the Request a College button on the site.*