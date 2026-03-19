// ============================================================
// COLLEX — College Database
// Add new colleges below following the same format
// ============================================================

const DB = {
    "aiims delhi": {
    name:"AIIMS Delhi", type:"Institute of National Importance", location:"Ansari Nagar, New Delhi", score:9.9, verdict:"India's #1 Medical College — Period",
    programs:"MBBS (5.5 years), MD/MS (3 years), DM/MCh (super-specialty), MDS, PhD, BSc Nursing/Paramedical",
    fees:"₹5,000–₹10,000 total — nearly free education",
    campuses:"Single 101-acre South Delhi campus with JPNA Trauma Centre",
    sports:"Basketball/volleyball, cricket/football, indoor gym",
    extra:"Cultural/sports fests, research symposiums, student societies for community service",
    placement:"100% placement via INI-CET for PG/residency; alumni in top hospitals globally",
    est:"1956",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:10.0,c:"g"},
      {n:"Teaching & Staff",v:10.0,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.5,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:10.0,c:"g"},{n:"Infrastructure",v:9.8,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },
  // ══════════════════════════════════════════
  //  LUCKNOW & UTTAR PRADESH REGIONAL
  // ══════════════════════════════════════════

  "integral university": {
    name:"Integral University", type:"Private State University", location:"Dasauli, Lucknow, UP", score:6.5, verdict:"Large Campus — Good for Medical/Architecture",
    programs:"B.Tech, B.Arch, MBBS, B.Pharm, BBA, BCA; M.Tech, PhD",
    fees:"₹1.2–₹1.5L/year; MBBS expensive",
    campuses:"Massive lush green campus in Lucknow outskirts",
    sports:"Football, cricket, huge indoor complex, gym",
    extra:"Fiesta (cultural), technical fests; disciplined environment",
    placement:"Avg ₹3.5–5 LPA; TCS, Wipro, regional companies",
    est:"2004",
    metrics:[{n:"Budget",v:7.5,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:5.5,c:"r"},{n:"Infra",v:7.5,c:"a"}]
  },

  "bbau lucknow": {
    name:"Babasaheb Bhimrao Ambedkar University", type:"Central University", location:"Vidya Vihar, Lucknow, UP", score:6.8, verdict:"Central Govt Status — Affordable",
    programs:"B.Tech (UIET), BBA, B.Com, Law, MBA, PhD",
    fees:"₹60K–₹80K/year — subsidized",
    campuses:"Single campus with government infrastructure",
    sports:"Basic sports grounds, badminton, gym",
    extra:"Govt funded events, NSS, NCC; reservation focus",
    placement:"Avg ₹4–6 LPA; off-campus opportunities preferred",
    est:"1996",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:5.0,c:"r"},{n:"Infra",v:6.5,c:"a"}]
  },

  "bbd university": {
    name:"Babu Banarasi Das University", type:"Private University", location:"Faizabad Road, Lucknow, UP", score:6.2, verdict:"Popular Local Choice — Active Life",
    programs:"B.Tech, BDS, B.Arch, BBA, BCA, MBA",
    fees:"₹1.2–₹1.5L/year",
    campuses:"Integrated campus with BBDNITM and dental college",
    sports:"BCCI approved cricket stadium, gym, courts",
    extra:"Utkarsh (fest), Star nights; very active social life",
    placement:"Avg ₹3.5–5 LPA; mass recruiters (TCS/Infosys)",
    est:"2010",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.0,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:5.5,c:"r"},{n:"Infra",v:7.8,c:"a"}]
  },

  "ramswaroop lucknow": {
    name:"SRMU (Shri Ramswaroop Memorial)", type:"Private University", location:"Deva Road, Lucknow, UP", score:6.0, verdict:"Strict Academics — School-like",
    programs:"B.Tech, BBA, BCA, MBA, Diploma",
    fees:"₹1.1–₹1.3L/year",
    campuses:"Multiple blocks, uniform culture",
    sports:"Basic fields, basketball court",
    extra:"Gantavya (tech fest), Abhivyakti; strict attendance rules",
    placement:"Avg ₹3.5–4.5 LPA; disciplined students preferred by TCS",
    est:"2012",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:6.0,c:"r"},{n:"Placement",v:5.8,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "hbtu kanpur": {
    name:"HBTU Kanpur", type:"State Technical University", location:"Nawabganj, Kanpur, UP", score:7.8, verdict:"UP's Hidden Gem — Oil/Chemical Legacy",
    programs:"B.Tech (Chemical, Paint, Oil, Food Tech specializations); M.Tech",
    fees:"₹1.35L/year; govt scholarships",
    campuses:"Two campuses (East/West) - historic red brick buildings",
    sports:"Huge grounds, cricket, football, old-school gym",
    extra:"Adhyaay (cultural); strong alumni network in PSU/Industry",
    placement:"Avg ₹8–11 LPA; Chemical/Paint branches hit ₹15L+",
    est:"1921",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:6.0,c:"r"}]
  },

  "mmmut gorakhpur": {
    name:"MMMUT Gorakhpur", type:"State Technical University", location:"Gorakhpur, UP", score:7.4, verdict:"Best in Eastern UP — Good ROI",
    programs:"B.Tech, MBA, MCA, M.Tech",
    fees:"₹1.1L/year; affordable",
    campuses:"Green residential campus",
    sports:"Stadium, courts, active sports council",
    extra:"Tech Srijan, Abhyudaya; robotics and coding clubs",
    placement:"Avg ₹6–8 LPA; highest ₹40L+; improving fast",
    est:"1962",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:7.2,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  DELHI NCR (NOIDA/GHAZIABAD/GURGAON)
  // ══════════════════════════════════════════

  "galgotias university": {
    name:"Galgotias University", type:"Private University", location:"Greater Noida, UP", score:6.5, verdict:"Huge Crowds — Good Marketing",
    programs:"B.Tech (CSE has huge intake), Law, BBA, Media",
    fees:"₹1.6–₹2L/year",
    campuses:"Modern looking campus but very crowded",
    sports:"Football ground, courts, celebrity visits",
    extra:"Unifest (huge budget), celebrity concerts; lively crowd",
    placement:"Avg ₹4–5 LPA; mass hiring by Wipro/Cognizant",
    est:"2011",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:6.0,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "sharda university": {
    name:"Sharda University", type:"Private University", location:"Greater Noida, UP", score:6.4, verdict:"Global Diversity — 'The World is Here'",
    programs:"B.Tech, Medical, Dental, Law, Business",
    fees:"₹1.8–₹2.2L/year; expensive",
    campuses:"Large sprawling campus with hospital",
    sports:"Good facilities, international students sports meets",
    extra:"Chorus (fest); diverse crowd with many international students",
    placement:"Avg ₹4–6 LPA; decent for management/medical",
    est:"2009",
    metrics:[{n:"Budget",v:5.5,c:"r"},{n:"Academics",v:6.0,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:5.8,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "gl bajaj": {
    name:"GL Bajaj", type:"Private College (AKTU)", location:"Greater Noida, UP", score:6.8, verdict:"Coding Factory — Placement Focused",
    programs:"B.Tech, MBA",
    fees:"₹1.4–₹1.6L/year",
    campuses:"Compact campus, academic blocks dominant",
    sports:"Limited; focus is on labs and classes",
    extra:"Strict attendance; coding clubs are very active",
    placement:"Avg ₹5–7 LPA; good record with Capgemini/Accenture",
    est:"2005",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:6.0,c:"r"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },
  // ══════════════════════════════════════════
  //  BANGALORE & KARNATAKA (COMEDK/STATE)
  // ══════════════════════════════════════════

  "bmsit bangalore": {
    name:"BMSIT & M", type:"Private College", location:"Yelahanka, Bengaluru", score:7.3, verdict:"BMS Legacy — Growing Fast",
    programs:"B.E. (CSE, AI, ECE)",
    fees:"₹2–₹3L/year (ComedK)",
    campuses:"Green campus in North Bangalore suburbs",
    sports:"Good grounds, active sports teams",
    extra:"Utsaha; relaxed compared to main campus",
    placement:"Avg ₹7–10 LPA; benefits from BMS brand",
    est:"2002",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "dsce bangalore": {
    name:"Dayananda Sagar (DSCE)", type:"Private Autonomous", location:"Kumaraswamy Layout, Bengaluru", score:7.4, verdict:"Vibrant Campus — Huge Crowd",
    programs:"B.E., M.Tech, MBA",
    fees:"₹2.5L/year",
    campuses:"Hilltop campus, crowded but lively",
    sports:"Football, basketball, indoor complex",
    extra:"Fests are massive; diverse student crowd",
    placement:"Avg ₹6–9 LPA; huge number of companies visit",
    est:"1979",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "jain university": {
    name:"Jain University", type:"Deemed University", location:"Jayanagar/Kanakapura, Bengaluru", score:7.0, verdict:"Sports Powerhouse — Entrepreneurial",
    programs:"B.Tech, BBA, B.Com, BMS",
    fees:"₹2.5–₹3.5L/year",
    campuses:"Global Campus (Kanakapura) is far; City campus small",
    sports:"Produced cricketers (Rahul, Mayank); top tier sports",
    extra:"Infinity (fest); startup culture is strong",
    placement:"Avg ₹5–8 LPA; good for commerce/management",
    est:"1990",
    metrics:[{n:"Budget",v:5.5,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "new horizon": {
    name:"New Horizon College", type:"Private Autonomous", location:"Marathahalli, Bengaluru", score:7.0, verdict:"IT Hub Location — Corporate Focus",
    programs:"B.E.",
    fees:"₹2.5L/year",
    campuses:"Located in IT corridor (Outer Ring Road)",
    sports:"Basketball, volleyball, gym",
    extra:"Sargam; strong industry interface",
    placement:"Avg ₹5–8 LPA; heavy recruitment by IT service firms",
    est:"2001",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "nitte meenakshi": {
    name:"Nitte Meenakshi (NMIT)", type:"Private Autonomous", location:"Yelahanka, Bengaluru", score:7.2, verdict:"Disciplined — Good for Core/Defense",
    programs:"B.E., M.Tech",
    fees:"₹2.2L/year",
    campuses:"Spacious campus near air base",
    sports:"Good grounds, NCC focus",
    extra:"Anaadyanta; research projects with DRDO/ISRO",
    placement:"Avg ₹6–9 LPA; growing reputation",
    est:"2001",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  HYDERABAD & TELANGANA
  // ══════════════════════════════════════════

  "cbit hyderabad": {
    name:"CBIT Hyderabad", type:"Private Autonomous", location:"Gandipet, Hyderabad", score:7.8, verdict:"Telangana's #1 Private — Strict",
    programs:"B.E. / B.Tech",
    fees:"₹1.4L/year (Convenor); higher for B-Cat",
    campuses:"Green campus near Ocean Park",
    sports:"Cricket, basketball, indoor stadium",
    extra:"Shruthi (fest); transport is iconic (CBIT buses)",
    placement:"Avg ₹9–12 LPA; comparable to some NITs",
    est:"1979",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:7.0,c:"a"}]
  },

  "vasavi hyderabad": {
    name:"Vasavi College of Engineering", type:"Private Autonomous", location:"Ibrahimbagh, Hyderabad", score:7.6, verdict:"Academic Focused — No Nonsense",
    programs:"B.E.",
    fees:"₹1.3L/year",
    campuses:"Compact, hillside campus",
    sports:"Limited grounds, focus on studies",
    extra:"Euphoria; strict attendance norms",
    placement:"Avg ₹8–11 LPA; Oracle, JPMorgan hire here",
    est:"1981",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "vnr vjiet": {
    name:"VNR VJIET", type:"Private Autonomous", location:"Bachupally, Hyderabad", score:7.7, verdict:"Rising Star — Practical Learning",
    programs:"B.Tech (Automobile, CSE, ECE)",
    fees:"₹1.35L/year",
    campuses:"Modern labs, growing campus",
    sports:"Good sports complex",
    extra:"Convergence; strong Vignana Jyothi backing",
    placement:"Avg ₹8–10 LPA; very consistent growth",
    est:"1995",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "gokaraju rangaraju": {
    name:"Gokaraju Rangaraju (GRIET)", type:"Private Autonomous", location:"Kukatpally, Hyderabad", score:7.3, verdict:"Local Favorite — Value for Money",
    programs:"B.Tech",
    fees:"₹1.25L/year",
    campuses:"Hilly terrain campus",
    sports:"Basketball, volleyball, cricket",
    extra:"Pulse; active student bodies",
    placement:"Avg ₹6–9 LPA; Amazon, TCS, Wipro",
    est:"1997",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  CHENNAI & TAMIL NADU
  // ══════════════════════════════════════════

  "ssn chennai": {
    name:"SSN College of Engineering", type:"Private Autonomous", location:"Kalavakkam, Chennai", score:8.2, verdict:"Merit Only — No Management Quota",
    programs:"B.E. / B.Tech",
    fees:"₹50K–₹1L/year (highly subsidized by Shiv Nadar)",
    campuses:"250-acre lush green campus, amazing infra",
    sports:"Cricket stadium, international facilities",
    extra:"Instincts; research active (Shiv Nadar funded)",
    placement:"Avg ₹10–14 LPA; top notch profiles",
    est:"1996",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.5,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:9.5,c:"g"}]
  },

  "sathyabama chennai": {
    name:"Sathyabama Institute", type:"Deemed University", location:"OMR, Chennai", score:7.0, verdict:"Massive Recruitment — Strict Rules",
    programs:"B.E., B.Tech, B.Arch, BDS",
    fees:"₹1.5–₹2L/year",
    campuses:"Large campus on OMR (IT corridor)",
    sports:"Basketball, volleyball, mess is huge",
    extra:"Cultural fests; strict discipline (dress code)",
    placement:"Avg ₹4.5–6 LPA; Cognizant/Capgemini bulk hire",
    est:"1987",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "hindustan university": {
    name:"Hindustan University", type:"Deemed University", location:"Padur, Chennai", score:6.8, verdict:"Aviation/Auto Focus — Good Exposure",
    programs:"B.Tech (Aero/Auto specializations)",
    fees:"₹2–₹2.5L/year",
    campuses:"Green campus with aircraft hangars",
    sports:"Horse riding, football, courts",
    extra:"Yantram; international exchange programs",
    placement:"Avg ₹4–6 LPA; core companies visit",
    est:"1985",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "crescent chennai": {
    name:"BS Abdur Rahman Crescent", type:"Deemed University", location:"Vandalur, Chennai", score:7.2, verdict:"Good Infrastructure — Balanced Life",
    programs:"B.Tech, B.Arch, Law",
    fees:"₹1.5–₹2L/year",
    campuses:"Clean, green campus near Zoo",
    sports:"Good grounds, active teams",
    extra:"Orion; literary societies active",
    placement:"Avg ₹5–7 LPA; IT and Core mixed",
    est:"1984",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "psg tech": {
    name:"PSG College of Technology", type:"Private Govt Aided", location:"Peelamedu, Coimbatore", score:8.3, verdict:"Industry Integrated — The Best in Kovai",
    programs:"B.E., B.Tech, Sandwich Courses (Industry)",
    fees:"₹50K–₹80K/year (Aided)",
    campuses:"Industrial atmosphere, attached to factories",
    sports:"Indoor stadium, courts",
    extra:"Kriya; intense industry exposure",
    placement:"Avg ₹10–12 LPA; core engineering paradise",
    est:"1951",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.8,c:"g"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:8.0,c:"g"}]
  },

  // ══════════════════════════════════════════
  //  KOLKATA & EAST
  // ══════════════════════════════════════════

  "iem kolkata": {
    name:"IEM Kolkata (Institute of Engg & Mgmt)", type:"Private College", location:"Salt Lake, Kolkata", score:7.5, verdict:"Strict Discipline — Consistent Jobs",
    programs:"B.Tech, BCA, BBA",
    fees:"₹1.5L/year",
    campuses:"Corporate-style towers (no large ground)",
    sports:"Limited; focus on academics",
    extra:"Innovacion; uniform mandatory, strict rules",
    placement:"Avg ₹5–8 LPA; TCS/Cognizant mass hire",
    est:"1989",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:5.0,c:"r"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "heritage kolkata": {
    name:"Heritage Institute (HIT-K)", type:"Private Autonomous", location:"Anandapur, Kolkata", score:7.4, verdict:"Best Campus in Kolkata Private",
    programs:"B.Tech, M.Tech",
    fees:"₹1.2L/year",
    campuses:"Green, Gothic style architecture",
    sports:"Football, cricket, swimming pool",
    extra:"Eclecia; active club culture",
    placement:"Avg ₹5–7 LPA; good TCS/Wipro numbers",
    est:"2001",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "techno india salt lake": {
    name:"Techno India (Main)", type:"Private College", location:"Salt Lake, Kolkata", score:7.0, verdict:"IT Hub Location — Mass Placement",
    programs:"B.Tech, BCA, MCA",
    fees:"₹1.5L/year",
    campuses:"Sector 5 IT Hub location",
    sports:"Limited",
    extra:"Edge; proximity to IT companies",
    placement:"Avg ₹4–6 LPA; bulk hiring",
    est:"2001",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "kiit bhubaneswar": {
    name:"KIIT University", type:"Deemed University", location:"Bhubaneswar, Odisha", score:7.5, verdict:"Massive Scale — 100% Placement Claim",
    programs:"B.Tech, Law, Medical, Biotech",
    fees:"₹3.5–₹4L/year (High)",
    campuses:"Huge township-like campus, 20+ campuses",
    sports:"World class stadiums, hosted Khelo India",
    extra:"KIIT Fest; huge diversity of students",
    placement:"Avg ₹6–9 LPA; thousands of offers",
    est:"1992",
    metrics:[{n:"Budget",v:4.0,c:"r"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:9.5,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:9.5,c:"g"}]
  },

  "soa bhubaneswar": {
    name:"SOA University (ITER)", type:"Deemed University", location:"Bhubaneswar, Odisha", score:7.2, verdict:"Academically Serious — Good Ranking",
    programs:"B.Tech, Medical, Hotel Mgmt",
    fees:"₹2.5L/year",
    campuses:"Multiple campuses, ITER is main engineering",
    sports:"Courts, grounds available",
    extra:"Strict academics compared to KIIT",
    placement:"Avg ₹5–7 LPA; Microsoft, Amazon visit",
    est:"1996",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  // ══════════════════════════════════════════
  //  INDORE & CENTRAL INDIA
  // ══════════════════════════════════════════

  "sgsits indore": {
    name:"SGSITS Indore", type:"Govt Aided Autonomous", location:"Park Road, Indore, MP", score:7.8, verdict:"MP's No. 1 Engineering College",
    programs:"B.E., B.Pharm, MBA",
    fees:"₹70K–₹1L/year",
    campuses:"Central Indore, old but functional",
    sports:"Cricket, tennis, badminton",
    extra:"Aayaam; strong alumni base in MP",
    placement:"Avg ₹8–12 LPA; Goldman Sachs, Adobe visit",
    est:"1952",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:6.0,c:"r"}]
  },

  "davv indore": {
    name:"IET DAVV Indore", type:"University Department", location:"Khandwa Road, Indore", score:7.2, verdict:"Reliable Govt Option — Low Fees",
    programs:"B.E., M.E.",
    fees:"₹70K/year",
    campuses:"Part of Takshashila campus",
    sports:"University stadium access",
    extra:"Engineer's Day fest; coding culture growing",
    placement:"Avg ₹5–8 LPA; mass recruiters + VMware",
    est:"1996",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:6.0,c:"a"}]
  },

  "medicaps indore": {
    name:"Medi-Caps University", type:"Private University", location:"AB Road, Indore", score:6.5, verdict:"Strict Discipline — Safe Bet",
    programs:"B.Tech, BBA, MBA",
    fees:"₹1.2L/year",
    campuses:"Green campus outside city",
    sports:"Grounds, courts available",
    extra:"Moonstone; school-like discipline",
    placement:"Avg ₹4–5 LPA; TCS is major recruiter",
    est:"2000",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "lnct bhopal": {
    name:"LNCT Bhopal", type:"Private College", location:"Raisen Road, Bhopal", score:6.8, verdict:"Placement Engine of MP",
    programs:"B.E. (CSE intake is huge)",
    fees:"₹1.1L/year",
    campuses:"Large campus, multiple buildings",
    sports:"Cricket, volleyball",
    extra:"Srishti; attendance focused",
    placement:"Avg ₹4–6 LPA; highest number of offers in region",
    est:"1994",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  JAIPUR & RAJASTHAN
  // ══════════════════════════════════════════

  "jecrc jaipur": {
    name:"JECRC University", type:"Private University", location:"Sitapura, Jaipur", score:6.7, verdict:"Vibrant Life — Good Marketing",
    programs:"B.Tech, BBA, Design",
    fees:"₹1.5–₹1.8L/year",
    campuses:"Modern brick architecture, photogenic",
    sports:"Grounds, courts, gym",
    extra:"Renaissance; lively campus culture",
    placement:"Avg ₹5–7 LPA; Accenture/Capgemini hire",
    est:"2012",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.2,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "manipal jaipur": {
    name:"Manipal University Jaipur (MUJ)", type:"Private University", location:"Jaipur-Ajmer Expressway", score:7.5, verdict:"Premium Campus — Manipal Legacy",
    programs:"B.Tech, B.Arch, BBA, Law",
    fees:"₹3–₹4L/year (Expensive)",
    campuses:"Award winning architecture, resort-like hostels",
    sports:"Top class, gym, swimming, courts",
    extra:"Oneiros; rich student life, expensive crowd",
    placement:"Avg ₹7–10 LPA; growing fast",
    est:"2011",
    metrics:[{n:"Budget",v:4.5,c:"r"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:9.5,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:9.5,c:"g"}]
  },
  "kiet ghaziabad": {
    name:"KIET Group of Institutions", type:"Private College (AKTU)", location:"Muradnagar, Ghaziabad", score:7.0, verdict:"Consistent Performer in NCR",
    programs:"B.Tech, Pharmacy, MBA",
    fees:"₹1.4L/year",
    campuses:"On highway, decent infrastructure",
    sports:"Grounds available, active sports clubs",
    extra:"Epoque (fest); strong coding culture (DSC/CSI)",
    placement:"Avg ₹5–8 LPA; consistent placement record",
    est:"1998",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "mait delhi": {
    name:"MAIT Delhi (Maharaja Agrasen)", type:"Private (GGSIPU)", location:"Rohini, Delhi", score:7.6, verdict:"Top Tier IPU — Low Fee, High Value",
    programs:"B.Tech (CSE/IT/ECE/MAE), MBA",
    fees:"₹1.1–₹1.3L/year; great ROI",
    campuses:"Small urban campus (block-based)",
    sports:"Small ground, badminton, table tennis",
    extra:"Techsurge, Mridang; coding societies are top notch",
    placement:"Avg ₹8–12 LPA; Amazon/Adobe visit on-campus/off-campus",
    est:"1999",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:5.5,c:"r"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:6.5,c:"a"}]
  },

  "msit delhi": {
    name:"MSIT Delhi (Surajmal)", type:"Private (GGSIPU)", location:"Janakpuri, Delhi", score:7.5, verdict:"Strict but Effective — Top IPU",
    programs:"B.Tech, BCA",
    fees:"₹1.2L/year",
    campuses:"Very small campus (5 acres) in Janakpuri",
    sports:"Limited space; mostly indoor or shared grounds",
    extra:"Avensis (tech); disciplined academic environment",
    placement:"Avg ₹7–10 LPA; strong recruiters list",
    est:"2001",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:4.5,c:"r"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:6.0,c:"r"}]
  },

  "manav rachna": {
    name:"Manav Rachna (MRIIRS)", type:"Deemed University", location:"Faridabad, Haryana", score:6.6, verdict:"Good Infra — Sports & Media Focus",
    programs:"B.Tech, BBA, BJMC, Dental",
    fees:"₹1.8–₹2.2L/year",
    campuses:"Good infrastructure, shooting range, clean campus",
    sports:"Excellent sports facilities (shooting, cricket, basketball)",
    extra:"Resurrection (fest); radio station, innovation center",
    placement:"Avg ₹4–6 LPA; variable by course",
    est:"1997",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  // ══════════════════════════════════════════
  //  MUMBAI & PUNE REGIONAL
  // ══════════════════════════════════════════

  "vjti mumbai": {
    name:"VJTI Mumbai", type:"State Govt Aided", location:"Matunga, Mumbai", score:8.5, verdict:"Mumbai's Engineering Pride — Elite",
    programs:"B.Tech, M.Tech, Diploma",
    fees:"₹85K/year; incredible ROI",
    campuses:"Historic campus in heart of Mumbai (Matunga)",
    sports:"Cricket ground, courts; active Gymkhana",
    extra:"Technovanza (massive tech fest), Pratibimb",
    placement:"Avg ₹10–14 LPA (CSE ₹20L+); Morgan Stanley, banks",
    est:"1887",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:8.8,c:"g"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:9.0,c:"g"},{n:"Infra",v:6.5,c:"a"}]
  },

  "spit mumbai": {
    name:"S.P.I.T. Mumbai", type:"Private Autonomous", location:"Andheri, Mumbai", score:8.2, verdict:"Coding Powerhouse — No Nonsense",
    programs:"B.Tech (CSE, IT, E & TC)",
    fees:"₹1.7L/year",
    campuses:"Shared campus with SP Jain (Bhavan's)",
    sports:"Lake on campus, grounds, boating",
    extra:"Oculus (fest); very competitive coding culture",
    placement:"Avg ₹12–15 LPA; top product companies hire here",
    est:"2005",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:8.5,c:"g"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:8.8,c:"g"},{n:"Infra",v:7.5,c:"a"}]
  },

  "dj sanghvi": {
    name:"DJ Sanghvi (DJSCE)", type:"Private Autonomous", location:"Vile Parle, Mumbai", score:8.0, verdict:"Gujarati Minority — Top Tier Placements",
    programs:"B.Tech (Specializations in Data Science, AI)",
    fees:"₹1.9–₹2.1L/year",
    campuses:"Single building (vertical campus) in Vile Parle",
    sports:"No ground; indoor gaming only",
    extra:"Trinity (fest); strong alumni network, posh crowd",
    placement:"Avg ₹10–12 LPA; JP Morgan, Morgan Stanley favorites",
    est:"1994",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:8.2,c:"g"},{n:"Campus",v:5.0,c:"r"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:8.0,c:"g"}]
  },

  "kj somaiya engineering": {
    name:"K.J. Somaiya College of Engineering", type:"Private Autonomous", location:"Vidyavihar, Mumbai", score:7.8, verdict:"Huge Campus in Mumbai — Expensive",
    programs:"B.Tech in various branches",
    fees:"₹4–₹4.5L/year (High)",
    campuses:"65-acre lush green campus (rare in Mumbai)",
    sports:"Olympic tracks, football, squash, huge grounds",
    extra:"Symphony (cultural); Maker spaces, Formula racing team",
    placement:"Avg ₹8–10 LPA; mass and premium recruiters",
    est:"1983",
    metrics:[{n:"Budget",v:4.0,c:"r"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:9.5,c:"g"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "mit wpu pune": {
    name:"MIT WPU Pune", type:"Private University", location:"Kothrud, Pune", score:7.4, verdict:"Great Branding — Expensive but Happening",
    programs:"B.Tech, BBA, Law, Liberal Arts",
    fees:"₹3–₹3.5L/year",
    campuses:"Iconic World Peace Dome, modern architecture",
    sports:"Good facilities, rowing, basketball",
    extra:"Aarohan; 'Peace' curriculum mandatory; rich student life",
    placement:"Avg ₹6–9 LPA; wide range of companies",
    est:"1983 (Uni 2017)",
    metrics:[{n:"Budget",v:5.0,c:"r"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "vit pune": {
    name:"VIT Pune (Vishwakarma)", type:"Private Autonomous", location:"Bibwewadi, Pune", score:7.8, verdict:"Pune's Student Favorite — Balanced",
    programs:"B.Tech",
    fees:"₹1.8–₹2L/year",
    campuses:"Compact but functional campus",
    sports:"Limited grounds, active sports clubs",
    extra:"Melange (fest); very active student chapters",
    placement:"Avg ₹7–10 LPA; consistent record",
    est:"1983",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "dy patil akurdi": {
    name:"DY Patil Akurdi", type:"Private College", location:"Akurdi, Pune", score:7.2, verdict:"Good Infrastructure — Decent Coding Culture",
    programs:"B.Tech, B.Arch, MCA",
    fees:"₹1.5L/year",
    campuses:"Modern campus, shared with medical college",
    sports:"Cricket stadium nearby, good courts",
    extra:"Vibrance; disciplined but active",
    placement:"Avg ₹5–7 LPA; bulk recruiters + some product firms",
    est:"1984",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:8.2,c:"g"}]
  },

  "nirma university": {
    name:"Nirma University", type:"Private University", location:"Ahmedabad, Gujarat", score:8.0, verdict:"Gujarat's No. 1 Private — Strict",
    programs:"B.Tech, Law, MBA, Pharmacy",
    fees:"₹2.2–₹2.5L/year",
    campuses:"115-acre green, spotless campus",
    sports:"Good complex, cricket, tennis",
    extra:"Vaudeville; strict attendance (85%), rigorous academics",
    placement:"Avg ₹9–12 LPA; strong industry connect",
    est:"2003",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:8.5,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:9.0,c:"g"}]
  },

  "pdeu gandhinagar": {
    name:"PDEU (Pandit Deendayal)", type:"Private University", location:"Gandhinagar, Gujarat", score:7.8, verdict:"Petroleum Legacy — Rich Infra",
    programs:"B.Tech (Petro, Civil, CSE), Liberal Arts",
    fees:"₹2.5L/year",
    campuses:"100-acre solar powered modern campus",
    sports:"Excellent sports infra, international exposure",
    extra:"Flare (fest); active student clubs",
    placement:"Avg ₹7–10 LPA; strong in Energy sector",
    est:"2007",
    metrics:[{n:"Budget",v:5.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:9.2,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:9.5,c:"g"}]
  },
  "kgmu lucknow": {
    name:"King George's Medical University", type:"Autonomous State Medical University", location:"Lucknow, Uttar Pradesh", score:8.5, verdict:"Top Medical College in North India",
    programs:"MBBS (150 seats), BDS, B.Sc Nursing; MD/MS (all specialties), MDS, DM/MCh, PhD",
    fees:"₹1–2L total — highly subsidized",
    campuses:"Historic 100+ acre campus with King George Hospital (3,000 beds)",
    sports:"Cricket/football, basketball/volleyball, indoor gym, tennis",
    extra:"Cultural/sports fests, research symposiums, student unions, community service",
    placement:"High success via NEET-PG; alumni lead major hospitals globally",
    est:"1905 (university 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "jipmer puducherry": {
    name:"JIPMER Puducherry", type:"Institute of National Importance", location:"Puducherry", score:9.0, verdict:"South India's Top Govt Medical College",
    programs:"MBBS (200 seats), BSc Nursing; MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹5,000–₹10,000 total — nearly free",
    campuses:"Single 192-acre campus with 1,800+ bed hospital",
    sports:"Cricket/football, basketball/volleyball, indoor gym, swimming",
    extra:"Cultural/sports fests, research activities, community outreach",
    placement:"100% via INI-CET; alumni in top hospitals, research",
    est:"1823 (INI 2008)",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "cmc vellore": {
    name:"Christian Medical College Vellore", type:"Private Deemed Medical University", location:"Vellore, Tamil Nadu", score:9.2, verdict:"India's Best Private Medical College",
    programs:"MBBS (100 seats), BDS, BSc Nursing; MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹4–5L total (subsidized for Christian community); scholarships available",
    campuses:"Single 186-acre campus with 3,000+ bed hospital",
    sports:"Cricket/football, basketball/tennis, gym, swimming pool",
    extra:"Cultural fests, strong community medicine, research, mission hospitals",
    placement:"100% via NEET-PG; alumni in top hospitals globally (WHO, Johns Hopkins)",
    est:"1900",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "mamc delhi": {
    name:"Maulana Azad Medical College", type:"State Government Medical College", location:"Bahadur Shah Zafar Marg, New Delhi", score:8.8, verdict:"Delhi's Top State Medical College",
    programs:"MBBS (250 seats), MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹5,000–₹20,000/year — highly subsidized",
    campuses:"Single campus with attached Lok Nayak Hospital (1,500+ beds)",
    sports:"Cricket/football, basketball/volleyball, indoor gym",
    extra:"Cultural fests, sports meets, research activities, community medicine",
    placement:"High NEET-PG success; alumni in top hospitals, UPSC",
    est:"1958",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "afmc pune": {
    name:"Armed Forces Medical College", type:"Deemed University (Ministry of Defence)", location:"Pune, Maharashtra", score:9.0, verdict:"India's Premier Military Medical College",
    programs:"MBBS (140 seats, only for Armed Forces candidates), MD/MS, DM/MCh, PhD",
    fees:"₹5,000–₹10,000 total — fully subsidized for military",
    campuses:"Single campus with Command Hospital attached",
    sports:"Extensive military training facilities, cricket/football, gym, swimming, athletics",
    extra:"Military drills, cultural events, research, community medicine",
    placement:"100% into Armed Forces Medical Services; alumni in top military hospitals",
    est:"1948",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:9.2,c:"g"},
      {n:"Teaching & Staff",v:9.2,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:8.0,c:"g"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "pgimer chandigarh": {
    name:"PGIMER Chandigarh", type:"Institute of National Importance", location:"Sector 12, Chandigarh", score:9.0, verdict:"North India's Best PG Medical Institute",
    programs:"MD/MS (all specialties), DM/MCh (super-specialty), PhD, BSc Nursing",
    fees:"₹5,000–₹20,000/year — highly subsidized",
    campuses:"Single 100+ acre campus with 1,900+ bed hospital",
    sports:"Cricket/football, basketball/tennis, gym, swimming pool",
    extra:"Research symposiums, community medicine programs, cultural events",
    placement:"100% into top hospitals, faculty positions, research",
    est:"1962",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nimhans bangalore": {
    name:"NIMHANS Bangalore", type:"Institute of National Importance", location:"Bengaluru, Karnataka", score:9.2, verdict:"Asia's Best Mental Health & Neuroscience Institute",
    programs:"MD (Psychiatry), DM (Neurology), MCh (Neurosurgery), M.Phil Clinical Psychology, PhD",
    fees:"₹5,000–₹20,000/year — highly subsidized",
    campuses:"Single 27-acre campus with 900+ bed hospital",
    sports:"Cricket/football, basketball, gym, yoga facilities",
    extra:"Research symposiums, community mental health programs, workshops",
    placement:"100% into top hospitals, research, faculty positions globally",
    est:"1925 (INI 2012)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "sgpgi lucknow": {
    name:"SGPGI Lucknow", type:"Autonomous State Institute", location:"Lucknow, Uttar Pradesh", score:8.5, verdict:"North India's Top Super-Specialty Institute",
    programs:"MD/MS (select specialties), DM/MCh (super-specialty), PhD",
    fees:"₹10,000–₹30,000/year — subsidized",
    campuses:"Single campus with 750+ bed hospital",
    sports:"Cricket/football, basketball, gym, indoor games",
    extra:"Research activities, community outreach, symposiums",
    placement:"100% into top hospitals, research, faculty positions",
    est:"1983",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "ims bhu": {
    name:"IMS BHU (Institute of Medical Sciences)", type:"Central University Institute", location:"Varanasi, Uttar Pradesh", score:8.0, verdict:"BHU's Medical Arm — Heritage + Quality",
    programs:"MBBS (100 seats), BDS, BSc Nursing; MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹5,000–₹20,000/year — highly subsidized",
    campuses:"Part of 1300-acre BHU campus with Sir Sunderlal Hospital (1,200+ beds)",
    sports:"BHU sports facilities: cricket/football stadia, basketball, tennis, gym, swimming",
    extra:"Cultural fests (part of BHU ecosystem), research, community medicine",
    placement:"High NEET-PG success; alumni in top hospitals, research",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "grant medical mumbai": {
    name:"Grant Medical College", type:"State Government Medical College", location:"Mumbai, Maharashtra", score:8.2, verdict:"Mumbai's Premier State Medical College",
    programs:"MBBS (250 seats), MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹5,000–₹30,000/year — subsidized",
    campuses:"Single campus with JJ Hospital (1,200+ beds) in central Mumbai",
    sports:"Cricket/football, basketball/volleyball, gym",
    extra:"Cultural fests, research, community medicine programs",
    placement:"High NEET-PG success; alumni in top Mumbai hospitals",
    est:"1845 — India's third oldest medical college",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "seth gs mumbai": {
    name:"Seth GS Medical College", type:"State Government Medical College", location:"Parel, Mumbai, Maharashtra", score:8.0, verdict:"Mumbai's Top State Medical College — KEM Hospital",
    programs:"MBBS (250 seats), MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹5,000–₹30,000/year — subsidized",
    campuses:"Single campus with KEM Hospital (2,200+ beds) in Parel",
    sports:"Cricket/football, basketball/volleyball, gym",
    extra:"Cultural fests, research (strong in cardiology, neurology), community programs",
    placement:"High NEET-PG success; alumni in top hospitals globally",
    est:"1926",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "mmc chennai": {
    name:"Madras Medical College", type:"State Government Medical College", location:"Chennai, Tamil Nadu", score:8.3, verdict:"South India's Oldest Medical College",
    programs:"MBBS (250 seats), MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹5,000–₹20,000/year — highly subsidized",
    campuses:"Single campus with Rajiv Gandhi Government General Hospital (3,000+ beds)",
    sports:"Cricket/football, basketball/volleyball, gym, athletics",
    extra:"Cultural fests, research, community medicine programs",
    placement:"High NEET-PG success; alumni in top Chennai hospitals, UPSC",
    est:"1835 — Asia's oldest medical college",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:5.0,c:"r"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "kasturba manipal": {
    name:"Kasturba Medical College", type:"Private Deemed Medical College", location:"Manipal, Karnataka", score:7.8, verdict:"Top Private Medical College — Expensive",
    programs:"MBBS (250 seats), MD/MS (all specialties), DM/MCh, PhD",
    fees:"₹60L–₹1 Cr total (MBBS 5.5 years) — among India's most expensive",
    campuses:"Manipal (main) + Mangalore campus; attached to 2,000+ bed hospitals",
    sports:"MAHE sports facilities: Olympic pool, cricket/football, basketball, tennis, gym",
    extra:"Cultural fests (part of MAHE ecosystem), research, international exchange programs",
    placement:"High NEET-PG success; alumni in top hospitals globally",
    est:"1953",
    metrics:[
      {n:"Fits Most Students' Budget",v:3.0,c:"r"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "aiims bhopal": {
    name:"AIIMS Bhopal", type:"Institute of National Importance", location:"Bhopal, Madhya Pradesh", score:8.0, verdict:"New AIIMS — Growing Fast",
    programs:"MBBS (125 seats), BSc Nursing; MD/MS (select specialties), DM/MCh, PhD",
    fees:"₹5,000–₹10,000 total — nearly free",
    campuses:"New permanent campus in Bhopal with 750-bed hospital",
    sports:"Cricket/football, basketball/volleyball, gym, indoor sports",
    extra:"Cultural fests, research activities, community medicine",
    placement:"100% via INI-CET; alumni in top hospitals, research",
    est:"2012",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  // ══════════════════════════════════════════
  //  Design & Architecture (4 Colleges)
  // ══════════════════════════════════════════

  "nid ahmedabad": {
    name:"NID Ahmedabad", type:"Autonomous Institute of National Importance", location:"Paldi, Ahmedabad, Gujarat", score:9.0, verdict:"India's Best Design School",
    programs:"BDes (4 years) in Product, Furniture, Transportation, Textile, Apparel, Communication, Animation/Film; MDes, PhD",
    fees:"₹4–5L total (4 years) — subsidized; scholarships up to 90%",
    campuses:"Main 55-acre Paldi campus (designed by Gautam Sarabhai/Charles Eames); satellite campuses",
    sports:"Cricket/football, basketball/volleyball, indoor gym",
    extra:"Design exhibitions, workshops, industry projects; prototyping, sustainability, research clubs",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹25+ LPA; Flipkart, Titan, TVS, Disney, Microsoft",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nift delhi": {
    name:"NIFT Delhi", type:"Statutory Deemed University", location:"Hauz Khas, New Delhi", score:8.8, verdict:"India's Top Fashion Institute",
    programs:"BDes (4 years) in Fashion Design, Textile, Knitwear, Leather, Accessory, Fashion Communication; MDes, MFM",
    fees:"₹3–5L total (4 years); scholarships up to 100% for merit/SC/ST/need",
    campuses:"HQ Delhi (Hauz Khas, 7 acres) + 18 satellite campuses nationwide",
    sports:"Basketball/volleyball, indoor facilities; annual sports meets across network",
    extra:"Design shows, fashion weeks, cultural fests like Whack; student fashion shows, industry collaborations",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; Raymond, Aditya Birla, Reliance",
    est:"1986 (statutory 2006)",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:9.2,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "spa delhi": {
    name:"School of Planning and Architecture Delhi", type:"Deemed University (Public)", location:"ITO, New Delhi", score:8.5, verdict:"India's Best Architecture & Planning College",
    programs:"B.Arch (5 years, 80 seats), B.Plan; M.Arch (12 specializations), M.Plan (7 specializations), M.Des, PhD",
    fees:"₹1–₹1.5L/year — highly subsidized government college",
    campuses:"Single compact urban campus at ITO, central Delhi",
    sports:"Basketball/volleyball, indoor table tennis/badminton, gym",
    extra:"Design exhibitions, Avishkaar (technical fest), architecture competitions, workshops",
    placement:"2024-25 avg ₹10–15 LPA, highest ₹30+ LPA; top architecture firms, urban planning agencies, research",
    est:"1941 (deemed 2014)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "cept ahmedabad": {
    name:"CEPT University", type:"Private Deemed University", location:"Navrangpura, Ahmedabad, Gujarat", score:8.2, verdict:"Premier Architecture & Planning University",
    programs:"B.Arch (5 years), B.Plan, B.Des; M.Arch (10+ specializations), M.Plan, M.Des, PhD",
    fees:"₹3–5L/year; merit/need-based scholarships available",
    campuses:"Single 9-acre campus designed by B.V. Doshi in Navrangpura, Ahmedabad",
    sports:"Basketball/volleyball, indoor sports, gym",
    extra:"Design exhibitions, Navratri events, workshops, industry projects, research centers",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; top architecture firms, urban planning, research",
    est:"1962 (university 2005)",
    metrics:[
      {n:"Fits Most Students' Budget",v:6.5,c:"a"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  // ══════════════════════════════════════════
  //  DU Colleges (8 Colleges)
  // ══════════════════════════════════════════

  "srcc": {
    name:"Shri Ram College of Commerce", type:"Constituent College — University of Delhi", location:"Maurice Nagar, North Campus, Delhi", score:8.5, verdict:"#1 Commerce College in India",
    programs:"BCom (Hons), BA (Hons) Economics (3 years); MCom, MA Economics, PGDGBO",
    fees:"₹30,000–₹40,000/year (DU fees) — minimal",
    campuses:"Single 16-acre North Campus location",
    sports:"Cricket/football, basketball/volleyball, indoor table tennis/gym",
    extra:"Crossroads (cultural fest), Gracie (commerce fest); dramatics, debates, entrepreneurship societies",
    placement:"2024-25 avg ₹12–15 LPA, highest ₹35+ LPA; McKinsey, Goldman Sachs, Deloitte",
    est:"1926",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:5.5,c:"a"}
    ]
  },

  "st stephens": {
    name:"St. Stephen's College Delhi", type:"Constituent College — University of Delhi", location:"University Enclave, North Campus, Delhi", score:8.3, verdict:"Prestige + Liberal Arts — 1% Acceptance",
    programs:"BA (Hons) Economics, English, Hindi, History, Philosophy, Sanskrit, Sociology; BSc (Hons) Chemistry, CS, Maths, Physics",
    fees:"₹25,000–₹40,000/year — minimal",
    campuses:"Single historic campus in DU North Campus designed by Walter George",
    sports:"Cricket/football, basketball/volleyball, table tennis, gymnasium",
    extra:"Stephanians' cultural fest, History Society (est. 1916), debates, dramatics, music",
    placement:"2024-25 avg ₹12–14 LPA, highest ₹30+ LPA; consulting, finance, civil services",
    est:"1881",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.2,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "miranda house": {
    name:"Miranda House", type:"Constituent College — University of Delhi", location:"North Campus, Delhi", score:8.2, verdict:"NIRF #1 College — Women's Excellence",
    programs:"BA (Hons) Economics, English, Hindi, History, Philosophy, Political Science, Psychology, Sociology; BSc (Hons) Botany, Chemistry, CS, Maths, Physics, Zoology",
    fees:"₹20,000–₹40,000/year — minimal",
    campuses:"Single heritage North Campus site with quadrangle hostel, gardens",
    sports:"Basketball/volleyball, badminton, table tennis, yoga",
    extra:"Tarang (cultural fest); debate, dramatics, dance, music, NCC, NSS societies",
    placement:"2024-25 avg ₹12–15 LPA, highest ₹30+ LPA; consulting, finance, research, civil services",
    est:"1948",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.3,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "lsr": {
    name:"Lady Shri Ram College for Women", type:"Constituent College — University of Delhi", location:"Lajpat Nagar IV, South Delhi", score:8.0, verdict:"Top Women's College — Strong Humanities",
    programs:"BA (Hons) Economics, English, Hindi, History, Philosophy, Political Science, Psychology, Sanskrit, Sociology; BSc (Hons) Statistics",
    fees:"₹20,000–₹35,000/year — minimal",
    campuses:"Single 15-acre lush green campus in South Delhi",
    sports:"Basketball/volleyball, badminton, table tennis, yoga",
    extra:"Tarang (cultural), Montage (management fest); debate, dramatics, dance, entrepreneurship societies",
    placement:"2024-25 avg ₹12–15 LPA, highest ₹30+ LPA; consulting, finance, media, NGOs",
    est:"1956",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.3,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "hindu college": {
    name:"Hindu College", type:"Constituent College — University of Delhi", location:"North Campus, Delhi", score:7.8, verdict:"Storied Legacy — Strong Sciences & Arts",
    programs:"BA (Hons) Economics, English, History, Political Science, Sociology; BSc (Hons) Botany, Chemistry, CS, Maths, Physics, Zoology",
    fees:"₹20,000–₹35,000/year — minimal",
    campuses:"Single North Campus location with historic architecture",
    sports:"Cricket/football, basketball/volleyball, gym, table tennis",
    extra:"Mecca (cultural fest); debate, dramatics, music, NCC, NSS societies",
    placement:"2024-25 avg ₹10–13 LPA, highest ₹25+ LPA; consulting, finance, IT, research",
    est:"1899 — DU's oldest college",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.8,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "hansraj college": {
    name:"Hansraj College", type:"Constituent College — University of Delhi", location:"Malka Ganj, North Campus, Delhi", score:7.7, verdict:"Strong Sciences — Good Balance",
    programs:"BA (Hons) Economics, English, History, Philosophy; BSc (Hons) Botany, Chemistry, CS, Electronics, Maths, Physics, Zoology",
    fees:"₹20,000–₹35,000/year — minimal",
    campuses:"Single North Campus location with modern science labs",
    sports:"Cricket/football, basketball/volleyball, gym, badminton",
    extra:"Confluence (cultural fest); debate, dramatics, music, science societies",
    placement:"2024-25 avg ₹10–12 LPA, highest ₹25+ LPA; IT, consulting, research, analytics",
    est:"1948",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.8,c:"a"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "ramjas college": {
    name:"Ramjas College", type:"Constituent College — University of Delhi", location:"Maurice Nagar, North Campus, Delhi", score:7.5, verdict:"Strong Sciences & Arts — Active Campus",
    programs:"BA (Hons) Economics, English, History, Political Science; BSc (Hons) Botany, Chemistry, CS, Electronics, Maths, Physics, Zoology",
    fees:"₹20,000–₹35,000/year — minimal",
    campuses:"Single North Campus location",
    sports:"Cricket/football, basketball/volleyball, gym, badminton",
    extra:"Ramjas Fest (controversial but vibrant cultural fest); debate, dramatics, music societies",
    placement:"2024-25 avg ₹8–10 LPA, highest ₹22+ LPA; IT, consulting, analytics",
    est:"1917",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.0,c:"a"}
    ]
  },

  "kirori mal college": {
    name:"Kirori Mal College", type:"Constituent College — University of Delhi", location:"North Campus, Delhi", score:7.5, verdict:"Strong Sciences — Good Faculty",
    programs:"BA (Hons) Economics, English, History, Political Science; BSc (Hons) Botany, Chemistry, CS, Electronics, Geology, Maths, Physics, Zoology",
    fees:"₹20,000–₹35,000/year — minimal",
    campuses:"Single North Campus location",
    sports:"Cricket/football, basketball/volleyball, gym, badminton",
    extra:"Confluence (cultural fest); debate, science, music societies",
    placement:"2024-25 avg ₹8–10 LPA, highest ₹20+ LPA; IT, consulting, analytics",
    est:"1954",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.0,c:"a"}
    ]
  },

  // ══════════════════════════════════════════
  //  Research Institutes (10 Colleges)
  // ══════════════════════════════════════════

  "iiser pune": {
    name:"IISER Pune", type:"Autonomous Public Research Institute (INI)", location:"Pashan, Pune, Maharashtra", score:9.0, verdict:"Best for Pure Science Research",
    programs:"BS-MS dual degree (5 years) in Physics, Chemistry, Mathematics, Biology, Earth Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — subsidized; scholarships/stipends for most",
    campuses:"Single expansive Pashan campus with research labs, Central Library",
    sports:"Cricket/football, basketball/tennis, indoor gym, volleyball",
    extra:"Science fests, research symposiums; astronomy, robotics, entrepreneurship clubs",
    placement:"BS-MS graduates pursue PhD abroad (Harvard, MIT, Oxford) or research/industry (~₹10-15 LPA)",
    est:"2006 (INI 2012)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "iiser kolkata": {
    name:"IISER Kolkata", type:"Autonomous Public Research Institute (INI)", location:"Haringhata, Nadia, West Bengal", score:8.9, verdict:"Top Science Research — Nature Index #4 India",
    programs:"BS-MS dual degree (5 years) in Biological, Chemical, Geological, Mathematical, Physical Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — subsidized; scholarships/stipends",
    campuses:"Single 250-acre Haringhata campus with research labs, central library",
    sports:"Cricket/football, basketball/tennis, indoor gym",
    extra:"Science symposiums, research fests, astronomy clubs, computational science workshops",
    placement:"BS-MS graduates pursue PhD (Stanford, MIT, Cambridge) or research (~₹10-15 LPA)",
    est:"2006 (INI 2012)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.7,c:"g"},
      {n:"Teaching & Staff",v:9.7,c:"g"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "iiser bhopal": {
    name:"IISER Bhopal", type:"Autonomous Public Research Institute (INI)", location:"Bhauri, Bhopal, Madhya Pradesh", score:8.8, verdict:"Strong Science Research — Growing Fast",
    programs:"BS-MS dual degree (5 years) in Biological, Chemical, Earth, Mathematical, Physical Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — subsidized; scholarships/stipends",
    campuses:"Single 200-acre Bhauri campus with advanced research labs, central library",
    sports:"Cricket/football, basketball/tennis, indoor gym, volleyball",
    extra:"Science symposiums, research conferences, astronomy clubs, entrepreneurship cells",
    placement:"BS-MS graduates pursue PhD (Caltech, ETH Zurich, Cambridge) or research (~₹10-15 LPA)",
    est:"2008 (INI 2014)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.6,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.3,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.3,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "iiser mohali": {
    name:"IISER Mohali", type:"Autonomous Public Research Institute (INI)", location:"Mohali, Punjab", score:8.7, verdict:"Strong Research — North India's Best IISER",
    programs:"BS-MS dual degree (5 years) in Biological, Chemical, Mathematical, Physical Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — subsidized; scholarships/stipends",
    campuses:"Single 125-acre campus in Mohali with modern research facilities",
    sports:"Cricket/football, basketball/tennis, gym, volleyball",
    extra:"Science symposiums, research conferences, astronomy clubs",
    placement:"BS-MS graduates pursue PhD (MIT, Stanford, Cambridge) or research (~₹10-15 LPA)",
    est:"2007 (INI 2014)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.2,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.3,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "iiser tvm": {
    name:"IISER Thiruvananthapuram", type:"Autonomous Public Research Institute (INI)", location:"Vithura, Thiruvananthapuram, Kerala", score:8.6, verdict:"Kerala's Research Institute — Scenic Campus",
    programs:"BS-MS dual degree (5 years) in Biological, Chemical, Mathematical, Physical Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — subsidized; scholarships/stipends",
    campuses:"Single 200-acre campus in Vithura with modern labs",
    sports:"Cricket/football, basketball/tennis, gym, indoor sports",
    extra:"Science symposiums, research conferences, astronomy clubs",
    placement:"BS-MS graduates pursue PhD (MIT, Cambridge, Oxford) or research (~₹10-15 LPA)",
    est:"2008 (INI 2014)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.2,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.2,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "isi kolkata": {
    name:"Indian Statistical Institute Kolkata", type:"Institute of National Importance", location:"Kolkata, West Bengal", score:9.2, verdict:"World's Best for Statistics & Mathematics",
    programs:"B.Stat (Hons, 3 years), B.Math (Hons, 3 years); M.Stat, M.Math, MS (QE, QMS, CS), PhD",
    fees:"₹20,000–₹50,000/year — highly subsidized; scholarships/stipends",
    campuses:"Main Kolkata campus (142 acres) + Delhi, Bangalore, Chennai centers",
    sports:"Cricket/football, basketball, badminton, gym",
    extra:"Research symposiums, seminars, workshops; strong quantitative research culture",
    placement:"UG avg ₹18–25 LPA; strong in data science, quant finance, research; Google, Goldman Sachs, PhD abroad",
    est:"1931 (INI 1959)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "cmi chennai": {
    name:"Chennai Mathematical Institute", type:"Deemed University (Private)", location:"Siruseri, Chennai, Tamil Nadu", score:8.8, verdict:"Best for Pure Mathematics & Theoretical CS",
    programs:"BSc (Hons) Maths & CS, BSc (Hons) Maths & Physics (3 years); MSc Maths, MSc CS, PhD",
    fees:"₹3–4L/year; extensive scholarships covering 70%+ students",
    campuses:"Single 5-acre campus in Siruseri IT corridor, Chennai",
    sports:"Cricket, basketball, badminton, table tennis, chess",
    extra:"Research seminars, workshops, international collaborations; strong CS theory, algebraic topology",
    placement:"UG avg ₹15–20 LPA; strong in research, quant finance, PhD abroad (MIT, Stanford, Princeton)",
    est:"1989 (deemed 2006)",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "tifr mumbai": {
    name:"Tata Institute of Fundamental Research", type:"Deemed University (Research)", location:"Colaba, Mumbai, Maharashtra", score:9.5, verdict:"India's Premier Research Institute",
    programs:"Integrated M.Sc-PhD (Physics, Chemistry, Biology, Maths); PhD in all sciences",
    fees:"₹5,000–₹10,000/year; all students get stipends (₹35K–₹50K/month)",
    campuses:"Main 90-acre Colaba campus (Navy Nagar) + centers in Bangalore, Pune, Hyderabad",
    sports:"Basketball, volleyball, badminton, gym, yoga",
    extra:"Research seminars, colloquia with Nobel laureates; strong international collaborations",
    placement:"100% pursue research (faculty positions globally, national labs, PhD abroad); some go to quant finance",
    est:"1945",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:10.0,c:"g"},
      {n:"Teaching & Staff",v:10.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:10.0,c:"g"},{n:"Infrastructure",v:9.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "hri allahabad": {
    name:"Harish-Chandra Research Institute", type:"Deemed University (Research)", location:"Prayagraj, Uttar Pradesh", score:8.8, verdict:"Best for Theoretical Physics & Mathematics",
    programs:"Integrated M.Sc-PhD (Physics, Maths); PhD",
    fees:"₹5,000–₹10,000/year; all students get stipends",
    campuses:"Single campus in Prayagraj",
    sports:"Cricket, badminton, table tennis, gym",
    extra:"Research seminars, workshops, international collaborations",
    placement:"100% pursue research (faculty, PhD abroad at MIT, Princeton, Cambridge)",
    est:"1966",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "niser bhubaneswar": {
    name:"NISER Bhubaneswar", type:"Autonomous Research Institute (DAE)", location:"Jatni, Bhubaneswar, Odisha", score:8.5, verdict:"Best for Integrated Science Education",
    programs:"Integrated M.Sc (5 years) in Biological, Chemical, Mathematical, Physical Sciences; PhD",
    fees:"₹5,000–₹20,000/year — highly subsidized; stipends for all students",
    campuses:"Single 320-acre campus near Bhubaneswar",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Research symposiums, workshops, astronomy clubs",
    placement:"M.Sc graduates pursue PhD abroad (MIT, Cambridge, ETH) or research/industry (~₹10-12 LPA)",
    est:"2007",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  // ══════════════════════════════════════════
  //  Additional IIMs & B-Schools (3 Colleges)
  // ══════════════════════════════════════════

  "xlri jamshedpur": {
    name:"XLRI Jamshedpur", type:"Private Autonomous Business School", location:"Jamshedpur, Jharkhand", score:8.8, verdict:"India's Best for HR — Strong Legacy",
    programs:"PGDM (2 years), PGDM-HRM (HR specialization), PGDM-GM (General Management), Executive programs",
    fees:"₹26–28L total (2 years); merit/need-based scholarships",
    campuses:"Single 60-acre campus in Jamshedpur with hostels, sports, library",
    sports:"Cricket/football, basketball/tennis, swimming pool, gym, squash",
    extra:"Ensemble (cultural), Valhalla (management fest); strong HR, consulting, finance clubs",
    placement:"2024-25 avg ₹30 LPA, highest ₹1 Cr+; top recruiters McKinsey, BCG, Deloitte, Tata",
    est:"1949",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.0,c:"r"},{n:"Academic Life",v:9.3,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.3,c:"g"},
      {n:"Future Opportunities",v:9.3,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "spjimr mumbai": {
    name:"SP Jain Institute of Management & Research", type:"Private Autonomous Business School", location:"Andheri West, Mumbai, Maharashtra", score:8.5, verdict:"Mumbai's Best Private B-School",
    programs:"PGDM (2 years), PGDM specializations (Family Business, Media, Finance), Executive programs",
    fees:"₹20–22L total (2 years); merit/need-based scholarships",
    campuses:"Single urban campus in Andheri West, Mumbai",
    sports:"Gym, indoor sports, basketball/volleyball courts",
    extra:"Oasis (management fest), SPJIMR Confluence; strong consulting, finance, marketing clubs",
    placement:"2024-25 avg ₹32 LPA, highest ₹70+ LPA; top recruiters BCG, Bain, Goldman Sachs, Amazon",
    est:"1981",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.5,c:"r"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "mdi gurgaon": {
    name:"MDI Gurgaon", type:"Private Autonomous Business School", location:"Mehrauli Road, Gurgaon, Haryana", score:8.2, verdict:"NCR's Top Private B-School",
    programs:"PGPM (2 years), PGDM-HRM, PGDM-International Management, Executive programs",
    fees:"₹22–25L total (2 years); merit/need-based scholarships",
    campuses:"Single 40-acre green campus in Gurgaon with hostels, sports complex",
    sports:"Cricket/football, basketball/tennis, gym, swimming pool, squash",
    extra:"Imperium (management fest), cultural events; strong consulting, finance, marketing clubs",
    placement:"2024-25 avg ₹28 LPA, highest ₹70+ LPA; top recruiters Deloitte, Accenture, Amazon, Goldman Sachs",
    est:"1973",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.5,c:"r"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },


  // ── IITs ────────────────────────────────────────────────
// ══════════════════════════════════════════
//  NITs (30 Colleges)
// ══════════════════════════════════════════

  "nit trichy": {
    name:"NIT Trichy", type:"National Institute of Technology", location:"Tiruchirappalli, Tamil Nadu", score:8.3, verdict:"Top NIT — Strong Placements",
    programs:"B.Tech in 10 branches, B.Arch, integrated M.Sc; M.Tech (30+), MBA, MCA, PhD",
    fees:"₹1.5–₹2L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 800-acre campus on banks of Cauvery River",
    sports:"Cricket/football, basketball/volleyball, tennis, indoor stadium, pool, gym",
    extra:"Festember (cultural), Pragyan (technical); clubs for music, dance, robotics, photography",
    placement:"2024-25 avg ₹20–22 LPA, highest ₹1 Cr+; Google, Microsoft, Goldman Sachs",
    est:"1964",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nit surathkal": {
    name:"NIT Surathkal", type:"National Institute of Technology", location:"Surathkal, Mangalore, Karnataka", score:8.2, verdict:"Top NIT — Coastal Campus",
    programs:"B.Tech in 13 branches incl. CSE, ECE, AI; M.Tech (30+), M.Sc, MCA, PhD",
    fees:"₹1.25–₹1.31L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 295-acre coastal campus with beach access",
    sports:"Cricket/football, basketball/tennis/volleyball, indoor stadium, pool, water sports",
    extra:"Incident (cultural, 50K+), Engineer (technical); Cadenza (music), Genesis (robotics)",
    placement:"2024-25 avg ₹23.24 LPA, highest ₹55 LPA; Google, Microsoft, Amazon",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.3,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.3,c:"g"},
      {n:"Future Opportunities",v:8.3,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nit warangal": {
    name:"NIT Warangal", type:"National Institute of Technology", location:"Warangal, Telangana", score:8.2, verdict:"Top NIT — Strong Core Engineering",
    programs:"B.Tech in 10 branches, M.Tech (40+), M.Sc, MBA, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD; hostel ~₹45K/year",
    campuses:"Single 248-acre campus",
    sports:"Cricket/football, basketball/tennis/volleyball, indoor stadium, pool, squash",
    extra:"SpringSpree (cultural, 40K+), Technozion (technical); Robocon club",
    placement:"2024-25 avg ₹21.98 LPA, highest ₹88 LPA; Google, Microsoft, Goldman Sachs",
    est:"1959",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.3,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.3,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.2,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "nit rourkela": {
    name:"NIT Rourkela", type:"National Institute of Technology", location:"Rourkela, Odisha", score:8.0, verdict:"Largest NIT — Most Diverse Programs",
    programs:"B.Tech in 21 branches, B.Arch; M.Tech (50+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 650-acre campus with industrial proximity",
    sports:"Cricket/football stadia, basketball/tennis/volleyball, indoor hall, pool, squash",
    extra:"Nitrutsav (cultural), Innovision (technical); music, dance, robotics, E-Cell",
    placement:"2024-25 avg ₹19.66 LPA, highest ₹67 LPA; Google, Microsoft, Deloitte",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "nit calicut": {
    name:"NIT Calicut", type:"National Institute of Technology", location:"Kozhikode, Kerala", score:8.1, verdict:"Top NIT — Kerala's Pride",
    programs:"B.Tech in 10 branches, B.Arch; M.Tech (30+), PhD",
    fees:"₹1.25–₹1.31L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 125-acre scenic campus with lakeside views",
    sports:"Football/cricket, basketball/tennis/volleyball, indoor stadium, pool, squash",
    extra:"Ragam (cultural, 40K+), Tathva (technical); clubs for music, dance, robotics",
    placement:"2024-25 avg ₹20–22 LPA, highest ₹50.64 LPA; Google, Microsoft, Cisco",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.2,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.2,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "vnit nagpur": {
    name:"VNIT Nagpur", type:"National Institute of Technology", location:"Nagpur, Maharashtra", score:7.9, verdict:"Central India's Best NIT",
    programs:"B.Tech in 12 branches, B.Arch; M.Tech (35+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 260-acre campus in center of Nagpur",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym, athletics",
    extra:"Axis (cultural), Cepheus (technical); clubs for music, robotics, entrepreneurship",
    placement:"2024-25 avg ₹16–20 LPA, highest ₹50+ LPA; Microsoft, Amazon, Google",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "mnnit allahabad": {
    name:"MNNIT Allahabad", type:"National Institute of Technology", location:"Prayagraj, Uttar Pradesh", score:7.9, verdict:"Strong NIT — Holy City Campus",
    programs:"B.Tech in 10 branches, M.Tech (30+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 222-acre campus on banks of Ganga",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Avishkar (technical), Culrav (cultural); clubs for robotics, music, drama",
    placement:"2024-25 avg ₹16–19 LPA, highest ₹45+ LPA; Microsoft, Amazon, TCS",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:7.8,c:"a"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "mnit jaipur": {
    name:"MNIT Jaipur", type:"National Institute of Technology", location:"Jaipur, Rajasthan", score:7.9, verdict:"Rajasthan's Top Engineering",
    programs:"B.Tech in 10 branches, B.Arch; M.Tech (30+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 317-acre campus in heart of Jaipur",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym, athletics",
    extra:"Blitzschlag (cultural+technical); clubs for robotics, music, drama, E-Cell",
    placement:"2024-25 avg ₹15–18 LPA, highest ₹45+ LPA; Microsoft, Amazon, Google",
    est:"1963",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.8,c:"a"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:7.8,c:"a"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "nit durgapur": {
    name:"NIT Durgapur", type:"National Institute of Technology", location:"Durgapur, West Bengal", score:7.7, verdict:"Bengal's Second Best Engineering",
    programs:"B.Tech in 10 branches; M.Tech (25+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 180-acre campus in Durgapur industrial belt",
    sports:"Cricket/football, basketball/tennis/volleyball, gym, athletics",
    extra:"Aarohan (cultural+technical fest); clubs for robotics, music, drama",
    placement:"2024-25 avg ₹12–16 LPA, highest ₹40+ LPA; Microsoft, Amazon, TCS",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit silchar": {
    name:"NIT Silchar", type:"National Institute of Technology", location:"Silchar, Assam", score:7.5, verdict:"NE India's Solid NIT",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 625-acre campus surrounded by hills",
    sports:"Cricket/football, basketball/tennis/volleyball, gym, athletics",
    extra:"Tecnoesis (technical), Incandescence (cultural); clubs for robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS, Infosys",
    est:"1967",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit patna": {
    name:"NIT Patna", type:"National Institute of Technology", location:"Patna, Bihar", score:7.5, verdict:"Bihar's Top Engineering",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single campus on Ashok Rajpath, central Patna",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Techno-cultural fests; clubs for robotics, coding, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS",
    est:"1886 (NIT status 2004)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "nit agartala": {
    name:"NIT Agartala", type:"National Institute of Technology", location:"Agartala, Tripura", score:6.8, verdict:"NE India NIT — Improving",
    programs:"B.Tech in 8 branches; M.Tech (15+), MBA, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 450-acre campus in Jirania",
    sports:"Cricket/football, basketball/volleyball, gym",
    extra:"Aayam (cultural+technical); clubs for robotics, music",
    placement:"2024-25 avg ₹6–9 LPA, highest ₹25+ LPA; TCS, Infosys, Wipro",
    est:"1965",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:6.8,c:"a"},
      {n:"Student Community",v:6.8,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.8,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "nit hamirpur": {
    name:"NIT Hamirpur", type:"National Institute of Technology", location:"Hamirpur, Himachal Pradesh", score:7.3, verdict:"Mountain NIT — Scenic Campus",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 320-acre hilltop campus with valley views",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Nimbus (cultural+technical); clubs for robotics, music, trekking",
    placement:"2024-25 avg ₹10–13 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS",
    est:"1986",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit kurukshetra": {
    name:"NIT Kurukshetra", type:"National Institute of Technology", location:"Kurukshetra, Haryana", score:7.5, verdict:"Haryana's Top Engineering",
    programs:"B.Tech in 10 branches; M.Tech (25+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 250-acre campus in Kurukshetra",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Techspardha (technical), Confluence (cultural); clubs for robotics, music, drama",
    placement:"2024-25 avg ₹12–15 LPA, highest ₹40+ LPA; Microsoft, Amazon, TCS, Samsung",
    est:"1963",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.2,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit jamshedpur": {
    name:"NIT Jamshedpur", type:"National Institute of Technology", location:"Jamshedpur, Jharkhand", score:7.4, verdict:"Steel City NIT — Industry Connect",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 260-acre campus near Tata Steel plant",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Ojass (technical), Culfest (cultural); clubs for robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Tata, Microsoft, TCS",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.2,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit raipur": {
    name:"NIT Raipur", type:"National Institute of Technology", location:"Raipur, Chhattisgarh", score:7.2, verdict:"CG's Top Engineering College",
    programs:"B.Tech in 9 branches, B.Arch; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 100-acre campus in central Raipur",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Eclectika (cultural+technical); clubs for robotics, coding, music",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹30+ LPA; TCS, Infosys, Amazon",
    est:"1956",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "nit surat": {
    name:"NIT Surat (SVNIT)", type:"National Institute of Technology", location:"Surat, Gujarat", score:7.7, verdict:"Gujarat's Top NIT — Diamond City",
    programs:"B.Tech in 10 branches; M.Tech (25+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 250-acre campus in Surat city",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Sparsh (cultural), Mindbend (technical); clubs for robotics, music, E-Cell",
    placement:"2024-25 avg ₹12–16 LPA, highest ₹40+ LPA; Microsoft, Amazon, Google",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "nit bhopal": {
    name:"MANIT Bhopal", type:"National Institute of Technology", location:"Bhopal, Madhya Pradesh", score:7.5, verdict:"MP's Top Engineering — Lake City",
    programs:"B.Tech in 10 branches, B.Arch; M.Tech (25+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 650-acre campus in central Bhopal",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Technosearch (technical), Maffick (cultural); clubs for robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Microsoft, TCS, Amazon",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.2,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit jalandhar": {
    name:"NIT Jalandhar (Dr B R Ambedkar)", type:"National Institute of Technology", location:"Jalandhar, Punjab", score:7.4, verdict:"Punjab's Second Best Engineering",
    programs:"B.Tech in 12 branches; M.Tech (25+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 180-acre campus in Jalandhar",
    sports:"Cricket/football, basketball/tennis/volleyball, gym, athletics",
    extra:"Utkansh (cultural+technical); clubs for robotics, coding, music",
    placement:"2024-25 avg ₹10–13 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS",
    est:"1987",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.2,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit srinagar": {
    name:"NIT Srinagar", type:"National Institute of Technology", location:"Srinagar, Jammu & Kashmir", score:7.0, verdict:"Kashmir's Top Engineering",
    programs:"B.Tech in 8 branches; M.Tech (15+), M.Sc, MBA, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 260-acre campus on banks of Dal Lake",
    sports:"Cricket/football, basketball/volleyball, gym",
    extra:"Techvaganza (technical); clubs for coding, music, photography",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; TCS, Infosys, Wipro",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:6.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.5,c:"a"},
      {n:"Future Opportunities",v:6.5,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit goa": {
    name:"NIT Goa", type:"National Institute of Technology", location:"Farmagudi, Ponda, Goa", score:7.0, verdict:"Newest NIT — Goan Vibes",
    programs:"B.Tech in 5 branches (CSE, ECE, EE, ME, Electronics); M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Temporary campus at GEC; permanent 300-acre campus planned",
    sports:"Cricket/football, basketball/badminton, gym",
    extra:"Cultural+technical fests; clubs for coding, music, beach activities",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; Amazon, TCS, Infosys",
    est:"2010",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:6.8,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:6.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "nit delhi": {
    name:"NIT Delhi", type:"National Institute of Technology", location:"Narela, Delhi", score:7.2, verdict:"Delhi's NIT — Small but Growing",
    programs:"B.Tech in 5 branches (CSE, ECE, EE, ME, Electronics); M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Compact campus in Narela, North Delhi",
    sports:"Cricket/football, basketball/badminton, gym",
    extra:"Cultural+technical fests; clubs for coding, robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹30+ LPA; Microsoft, Amazon, TCS",
    est:"2010",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:6.8,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:6.8,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "nit puducherry": {
    name:"NIT Puducherry", type:"National Institute of Technology", location:"Karaikal, Puducherry", score:6.8, verdict:"Newest NIT — Building Up",
    programs:"B.Tech in 5 branches; M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Campus in Karaikal, coastal town",
    sports:"Cricket/football, basketball, gym",
    extra:"Cultural+technical fests; clubs for coding, music",
    placement:"2024-25 avg ₹6–10 LPA, highest ₹20+ LPA; TCS, Infosys, Wipro",
    est:"2010",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:6.5,c:"a"},
      {n:"Student Community",v:6.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.2,c:"a"}
    ]
  },

  "nit andhra pradesh": {
    name:"NIT Andhra Pradesh", type:"National Institute of Technology", location:"Tadepalligudem, Andhra Pradesh", score:6.8, verdict:"Newest NIT — AP's Growing Institute",
    programs:"B.Tech in 5 branches; M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Permanent campus under development",
    sports:"Cricket/football, basketball, gym",
    extra:"Cultural+technical fests; clubs for coding, music",
    placement:"2024-25 avg ₹6–10 LPA, highest ₹20+ LPA; TCS, Infosys, Wipro",
    est:"2015",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:6.2,c:"a"},
      {n:"Student Community",v:6.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.0,c:"a"}
    ]
  },
// ══════════════════════════════════════════
//  NITs (30 Colleges)
// ══════════════════════════════════════════

  "nit trichy": {
    name:"NIT Trichy", type:"National Institute of Technology", location:"Tiruchirappalli, Tamil Nadu", score:8.3, verdict:"Top NIT — Strong Placements",
    programs:"B.Tech in 10 branches, B.Arch, integrated M.Sc; M.Tech (30+), MBA, MCA, PhD",
    fees:"₹1.5–₹2L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 800-acre campus on banks of Cauvery River",
    sports:"Cricket/football, basketball/volleyball, tennis, indoor stadium, pool, gym",
    extra:"Festember (cultural), Pragyan (technical); clubs for music, dance, robotics, photography",
    placement:"2024-25 avg ₹20–22 LPA, highest ₹1 Cr+; Google, Microsoft, Goldman Sachs",
    est:"1964",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nit surathkal": {
    name:"NIT Surathkal", type:"National Institute of Technology", location:"Surathkal, Mangalore, Karnataka", score:8.2, verdict:"Top NIT — Coastal Campus",
    programs:"B.Tech in 13 branches incl. CSE, ECE, AI; M.Tech (30+), M.Sc, MCA, PhD",
    fees:"₹1.25–₹1.31L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 295-acre coastal campus with beach access",
    sports:"Cricket/football, basketball/tennis/volleyball, indoor stadium, pool, water sports",
    extra:"Incident (cultural, 50K+), Engineer (technical); Cadenza (music), Genesis (robotics)",
    placement:"2024-25 avg ₹23.24 LPA, highest ₹55 LPA; Google, Microsoft, Amazon",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.3,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.3,c:"g"},
      {n:"Future Opportunities",v:8.3,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nit warangal": {
    name:"NIT Warangal", type:"National Institute of Technology", location:"Warangal, Telangana", score:8.2, verdict:"Top NIT — Strong Core Engineering",
    programs:"B.Tech in 10 branches, M.Tech (40+), M.Sc, MBA, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD; hostel ~₹45K/year",
    campuses:"Single 248-acre campus",
    sports:"Cricket/football, basketball/tennis/volleyball, indoor stadium, pool, squash",
    extra:"SpringSpree (cultural, 40K+), Technozion (technical); Robocon club",
    placement:"2024-25 avg ₹21.98 LPA, highest ₹88 LPA; Google, Microsoft, Goldman Sachs",
    est:"1959",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.3,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.3,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.2,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "nit rourkela": {
    name:"NIT Rourkela", type:"National Institute of Technology", location:"Rourkela, Odisha", score:8.0, verdict:"Largest NIT — Most Diverse Programs",
    programs:"B.Tech in 21 branches, B.Arch; M.Tech (50+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 650-acre campus with industrial proximity",
    sports:"Cricket/football stadia, basketball/tennis/volleyball, indoor hall, pool, squash",
    extra:"Nitrutsav (cultural), Innovision (technical); music, dance, robotics, E-Cell",
    placement:"2024-25 avg ₹19.66 LPA, highest ₹67 LPA; Google, Microsoft, Deloitte",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "nit calicut": {
    name:"NIT Calicut", type:"National Institute of Technology", location:"Kozhikode, Kerala", score:8.1, verdict:"Top NIT — Kerala's Pride",
    programs:"B.Tech in 10 branches, B.Arch; M.Tech (30+), PhD",
    fees:"₹1.25–₹1.31L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 125-acre scenic campus with lakeside views",
    sports:"Football/cricket, basketball/tennis/volleyball, indoor stadium, pool, squash",
    extra:"Ragam (cultural, 40K+), Tathva (technical); clubs for music, dance, robotics",
    placement:"2024-25 avg ₹20–22 LPA, highest ₹50.64 LPA; Google, Microsoft, Cisco",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.2,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.2,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "vnit nagpur": {
    name:"VNIT Nagpur", type:"National Institute of Technology", location:"Nagpur, Maharashtra", score:7.9, verdict:"Central India's Best NIT",
    programs:"B.Tech in 12 branches, B.Arch; M.Tech (35+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 260-acre campus in center of Nagpur",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym, athletics",
    extra:"Axis (cultural), Cepheus (technical); clubs for music, robotics, entrepreneurship",
    placement:"2024-25 avg ₹16–20 LPA, highest ₹50+ LPA; Microsoft, Amazon, Google",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "mnnit allahabad": {
    name:"MNNIT Allahabad", type:"National Institute of Technology", location:"Prayagraj, Uttar Pradesh", score:7.9, verdict:"Strong NIT — Holy City Campus",
    programs:"B.Tech in 10 branches, M.Tech (30+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 222-acre campus on banks of Ganga",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Avishkar (technical), Culrav (cultural); clubs for robotics, music, drama",
    placement:"2024-25 avg ₹16–19 LPA, highest ₹45+ LPA; Microsoft, Amazon, TCS",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:7.8,c:"a"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "mnit jaipur": {
    name:"MNIT Jaipur", type:"National Institute of Technology", location:"Jaipur, Rajasthan", score:7.9, verdict:"Rajasthan's Top Engineering",
    programs:"B.Tech in 10 branches, B.Arch; M.Tech (30+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 317-acre campus in heart of Jaipur",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym, athletics",
    extra:"Blitzschlag (cultural+technical); clubs for robotics, music, drama, E-Cell",
    placement:"2024-25 avg ₹15–18 LPA, highest ₹45+ LPA; Microsoft, Amazon, Google",
    est:"1963",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.8,c:"a"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:7.8,c:"a"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "nit durgapur": {
    name:"NIT Durgapur", type:"National Institute of Technology", location:"Durgapur, West Bengal", score:7.7, verdict:"Bengal's Second Best Engineering",
    programs:"B.Tech in 10 branches; M.Tech (25+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 180-acre campus in Durgapur industrial belt",
    sports:"Cricket/football, basketball/tennis/volleyball, gym, athletics",
    extra:"Aarohan (cultural+technical fest); clubs for robotics, music, drama",
    placement:"2024-25 avg ₹12–16 LPA, highest ₹40+ LPA; Microsoft, Amazon, TCS",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit silchar": {
    name:"NIT Silchar", type:"National Institute of Technology", location:"Silchar, Assam", score:7.5, verdict:"NE India's Solid NIT",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 625-acre campus surrounded by hills",
    sports:"Cricket/football, basketball/tennis/volleyball, gym, athletics",
    extra:"Tecnoesis (technical), Incandescence (cultural); clubs for robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS, Infosys",
    est:"1967",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit patna": {
    name:"NIT Patna", type:"National Institute of Technology", location:"Patna, Bihar", score:7.5, verdict:"Bihar's Top Engineering",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single campus on Ashok Rajpath, central Patna",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Techno-cultural fests; clubs for robotics, coding, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS",
    est:"1886 (NIT status 2004)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "nit agartala": {
    name:"NIT Agartala", type:"National Institute of Technology", location:"Agartala, Tripura", score:6.8, verdict:"NE India NIT — Improving",
    programs:"B.Tech in 8 branches; M.Tech (15+), MBA, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 450-acre campus in Jirania",
    sports:"Cricket/football, basketball/volleyball, gym",
    extra:"Aayam (cultural+technical); clubs for robotics, music",
    placement:"2024-25 avg ₹6–9 LPA, highest ₹25+ LPA; TCS, Infosys, Wipro",
    est:"1965",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:6.8,c:"a"},
      {n:"Student Community",v:6.8,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.8,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "nit hamirpur": {
    name:"NIT Hamirpur", type:"National Institute of Technology", location:"Hamirpur, Himachal Pradesh", score:7.3, verdict:"Mountain NIT — Scenic Campus",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 320-acre hilltop campus with valley views",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Nimbus (cultural+technical); clubs for robotics, music, trekking",
    placement:"2024-25 avg ₹10–13 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS",
    est:"1986",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit kurukshetra": {
    name:"NIT Kurukshetra", type:"National Institute of Technology", location:"Kurukshetra, Haryana", score:7.5, verdict:"Haryana's Top Engineering",
    programs:"B.Tech in 10 branches; M.Tech (25+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 250-acre campus in Kurukshetra",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Techspardha (technical), Confluence (cultural); clubs for robotics, music, drama",
    placement:"2024-25 avg ₹12–15 LPA, highest ₹40+ LPA; Microsoft, Amazon, TCS, Samsung",
    est:"1963",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.2,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit jamshedpur": {
    name:"NIT Jamshedpur", type:"National Institute of Technology", location:"Jamshedpur, Jharkhand", score:7.4, verdict:"Steel City NIT — Industry Connect",
    programs:"B.Tech in 8 branches; M.Tech (20+), M.Sc, MBA, MCA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 260-acre campus near Tata Steel plant",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Ojass (technical), Culfest (cultural); clubs for robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Tata, Microsoft, TCS",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.2,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit raipur": {
    name:"NIT Raipur", type:"National Institute of Technology", location:"Raipur, Chhattisgarh", score:7.2, verdict:"CG's Top Engineering College",
    programs:"B.Tech in 9 branches, B.Arch; M.Tech (20+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 100-acre campus in central Raipur",
    sports:"Cricket/football, basketball/tennis, gym, athletics",
    extra:"Eclectika (cultural+technical); clubs for robotics, coding, music",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹30+ LPA; TCS, Infosys, Amazon",
    est:"1956",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "nit surat": {
    name:"NIT Surat (SVNIT)", type:"National Institute of Technology", location:"Surat, Gujarat", score:7.7, verdict:"Gujarat's Top NIT — Diamond City",
    programs:"B.Tech in 10 branches; M.Tech (25+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 250-acre campus in Surat city",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Sparsh (cultural), Mindbend (technical); clubs for robotics, music, E-Cell",
    placement:"2024-25 avg ₹12–16 LPA, highest ₹40+ LPA; Microsoft, Amazon, Google",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "nit bhopal": {
    name:"MANIT Bhopal", type:"National Institute of Technology", location:"Bhopal, Madhya Pradesh", score:7.5, verdict:"MP's Top Engineering — Lake City",
    programs:"B.Tech in 10 branches, B.Arch; M.Tech (25+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 650-acre campus in central Bhopal",
    sports:"Cricket/football, basketball/tennis/volleyball, swimming pool, gym",
    extra:"Technosearch (technical), Maffick (cultural); clubs for robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹35+ LPA; Microsoft, TCS, Amazon",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.2,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "nit jalandhar": {
    name:"NIT Jalandhar (Dr B R Ambedkar)", type:"National Institute of Technology", location:"Jalandhar, Punjab", score:7.4, verdict:"Punjab's Second Best Engineering",
    programs:"B.Tech in 12 branches; M.Tech (25+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.3L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 180-acre campus in Jalandhar",
    sports:"Cricket/football, basketball/tennis/volleyball, gym, athletics",
    extra:"Utkansh (cultural+technical); clubs for robotics, coding, music",
    placement:"2024-25 avg ₹10–13 LPA, highest ₹35+ LPA; Microsoft, Amazon, TCS",
    est:"1987",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.2,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit srinagar": {
    name:"NIT Srinagar", type:"National Institute of Technology", location:"Srinagar, Jammu & Kashmir", score:7.0, verdict:"Kashmir's Top Engineering",
    programs:"B.Tech in 8 branches; M.Tech (15+), M.Sc, MBA, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 260-acre campus on banks of Dal Lake",
    sports:"Cricket/football, basketball/volleyball, gym",
    extra:"Techvaganza (technical); clubs for coding, music, photography",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; TCS, Infosys, Wipro",
    est:"1960",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:6.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.5,c:"a"},
      {n:"Future Opportunities",v:6.5,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nit goa": {
    name:"NIT Goa", type:"National Institute of Technology", location:"Farmagudi, Ponda, Goa", score:7.0, verdict:"Newest NIT — Goan Vibes",
    programs:"B.Tech in 5 branches (CSE, ECE, EE, ME, Electronics); M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Temporary campus at GEC; permanent 300-acre campus planned",
    sports:"Cricket/football, basketball/badminton, gym",
    extra:"Cultural+technical fests; clubs for coding, music, beach activities",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; Amazon, TCS, Infosys",
    est:"2010",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:6.8,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:6.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "nit delhi": {
    name:"NIT Delhi", type:"National Institute of Technology", location:"Narela, Delhi", score:7.2, verdict:"Delhi's NIT — Small but Growing",
    programs:"B.Tech in 5 branches (CSE, ECE, EE, ME, Electronics); M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Compact campus in Narela, North Delhi",
    sports:"Cricket/football, basketball/badminton, gym",
    extra:"Cultural+technical fests; clubs for coding, robotics, music",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹30+ LPA; Microsoft, Amazon, TCS",
    est:"2010",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:6.8,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:6.8,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "nit puducherry": {
    name:"NIT Puducherry", type:"National Institute of Technology", location:"Karaikal, Puducherry", score:6.8, verdict:"Newest NIT — Building Up",
    programs:"B.Tech in 5 branches; M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Campus in Karaikal, coastal town",
    sports:"Cricket/football, basketball, gym",
    extra:"Cultural+technical fests; clubs for coding, music",
    placement:"2024-25 avg ₹6–10 LPA, highest ₹20+ LPA; TCS, Infosys, Wipro",
    est:"2010",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:6.5,c:"a"},
      {n:"Student Community",v:6.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.2,c:"a"}
    ]
  },

  "nit andhra pradesh": {
    name:"NIT Andhra Pradesh", type:"National Institute of Technology", location:"Tadepalligudem, Andhra Pradesh", score:6.8, verdict:"Newest NIT — AP's Growing Institute",
    programs:"B.Tech in 5 branches; M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Permanent campus under development",
    sports:"Cricket/football, basketball, gym",
    extra:"Cultural+technical fests; clubs for coding, music",
    placement:"2024-25 avg ₹6–10 LPA, highest ₹20+ LPA; TCS, Infosys, Wipro",
    est:"2015",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:6.2,c:"a"},
      {n:"Student Community",v:6.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.2,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.0,c:"a"}
    ]
  },

  "nit uttarakhand": {
    name:"NIT Uttarakhand", type:"National Institute of Technology", location:"Srinagar, Uttarakhand", score:6.8, verdict:"Himalayan NIT — Scenic Location",
    programs:"B.Tech in 5 branches; M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Campus in Srinagar Garhwal, Himalayan setting",
    sports:"Cricket/football, basketball, gym, trekking",
    extra:"Cultural+technical fests; clubs for adventure, coding, music",
    placement:"2024-25 avg ₹6–10 LPA, highest ₹20+ LPA; TCS, Infosys, Wipro",
    est:"2009",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:6.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  // ══════════════════════════════════════════
  //  IIITs (10 Colleges)
  // ══════════════════════════════════════════

  "iiit hyderabad": {
    name:"IIIT Hyderabad", type:"Autonomous Deemed University", location:"Gachibowli, Hyderabad", score:9.0, verdict:"Best IIIT — Research + Placements",
    programs:"B.Tech in CSE & ECE, dual B.Tech+MS; M.Tech, MS Research, PhD in AI, VLSI",
    fees:"₹4–5L/year; scholarships for merit/SC/ST",
    campuses:"One modern 66-acre campus with research labs",
    sports:"Basketball/volleyball, cricket/football, indoor badminton/gym",
    extra:"Felicity (cultural/technical, 20K+); robotics, music, dance, entrepreneurship clubs",
    placement:"2024-25 avg ₹38.52 LPA, highest ₹105 LPA; 100% with Google, Microsoft, Amazon",
    est:"1998",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:9.8,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "iiit bangalore": {
    name:"IIIT Bangalore", type:"Private Deemed University", location:"Electronics City, Bengaluru", score:8.0, verdict:"Good for IT — Industry Proximity",
    programs:"B.Tech & integrated B.Tech+M.Tech in CSE, ECE, Data Science; M.Tech, PhD",
    fees:"₹4–6L/year; merit scholarships",
    campuses:"One urban campus in Electronics City (~15 acres)",
    sports:"Basketball/volleyball, indoor badminton/gym, football ground",
    extra:"Cultural/technical fests, hackathons; 50+ startups incubated",
    placement:"2024-25 avg ₹25–30 LPA, highest ₹65+ LPA; Google, Microsoft, Amazon",
    est:"1999",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.0,c:"r"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "iiit delhi": {
    name:"IIIT Delhi", type:"State Public Autonomous Institute", location:"Okhla Phase III, New Delhi", score:8.2, verdict:"Delhi's Best IIIT",
    programs:"B.Tech in CSE, ECE, CS & AI, CS & Design, CS & Biosciences; M.Tech, PhD",
    fees:"₹4.8L/year; scholarships available",
    campuses:"One 25-acre campus with hostels, sports complex",
    sports:"Sports complex, gym, basketball/volleyball/tennis, indoor games",
    extra:"Cultural/technical fests; clubs for music, dance, drama, robotics",
    placement:"Avg ~₹25–30 LPA; strong in tech firms",
    est:"2008",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "iiit allahabad": {
    name:"IIIT Allahabad", type:"Public Deemed University", location:"Jhalwa, Prayagraj, UP", score:8.0, verdict:"Solid IIIT — Good Value",
    programs:"B.Tech in IT, ECE, IT Business Informatics; M.Tech, MBA, PhD",
    fees:"₹1.5–₹1.8L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 100-acre self-contained campus",
    sports:"Cricket/football, basketball/volleyball/tennis, indoor hall, athletics",
    extra:"Avishkar (cultural/technical); robotics, music, competitive coding clubs",
    placement:"2024-25 avg ₹32 LPA, highest ₹1.11 Cr; Google, Microsoft, Amazon",
    est:"1999",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "iiit gwalior": {
    name:"ABV-IIIT Gwalior", type:"Public Autonomous IIIT", location:"Gwalior, Madhya Pradesh", score:7.5, verdict:"Good IIIT — Strong IT Focus",
    programs:"B.Tech in IT, ICT; M.Tech, MBA, PhD",
    fees:"₹1.5–₹2L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 60-acre campus in Gwalior",
    sports:"Cricket/football, basketball/volleyball, gym, athletics",
    extra:"Aurora (cultural+technical fest); clubs for coding, robotics, music",
    placement:"2024-25 avg ₹15–20 LPA, highest ₹50+ LPA; Microsoft, Amazon, Google",
    est:"1997",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:7.8,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "daiict gandhinagar": {
    name:"DA-IICT Gandhinagar", type:"Private Deemed University", location:"Gandhinagar, Gujarat", score:7.8, verdict:"Gujarat's Best CS/IT Institute",
    programs:"B.Tech in ICT, CS, ICT+CS; M.Tech, M.Sc IT, PhD",
    fees:"₹2.5–₹3L/year; merit scholarships available",
    campuses:"Single 50-acre campus in Gandhinagar IT hub",
    sports:"Cricket/football, basketball/tennis, gym, swimming pool",
    extra:"Synapse (cultural+technical); clubs for coding, robotics, music, entrepreneurship",
    placement:"2024-25 avg ₹12–16 LPA, highest ₹40+ LPA; Microsoft, Google, Amazon",
    est:"2001",
    metrics:[
      {n:"Fits Most Students' Budget",v:6.5,c:"a"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },
  "nit uttarakhand": {
    name:"NIT Uttarakhand", type:"National Institute of Technology", location:"Srinagar, Uttarakhand", score:6.8, verdict:"Himalayan NIT — Scenic Location",
    programs:"B.Tech in 5 branches; M.Tech, PhD",
    fees:"₹1.25L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Campus in Srinagar Garhwal, Himalayan setting",
    sports:"Cricket/football, basketball, gym, trekking",
    extra:"Cultural+technical fests; clubs for adventure, coding, music",
    placement:"2024-25 avg ₹6–10 LPA, highest ₹20+ LPA; TCS, Infosys, Wipro",
    est:"2009",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:6.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.2,c:"a"},{n:"Infrastructure",v:6.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  // ══════════════════════════════════════════
  //  IIITs (10 Colleges)
  // ══════════════════════════════════════════

  "iiit hyderabad": {
    name:"IIIT Hyderabad", type:"Autonomous Deemed University", location:"Gachibowli, Hyderabad", score:9.0, verdict:"Best IIIT — Research + Placements",
    programs:"B.Tech in CSE & ECE, dual B.Tech+MS; M.Tech, MS Research, PhD in AI, VLSI",
    fees:"₹4–5L/year; scholarships for merit/SC/ST",
    campuses:"One modern 66-acre campus with research labs",
    sports:"Basketball/volleyball, cricket/football, indoor badminton/gym",
    extra:"Felicity (cultural/technical, 20K+); robotics, music, dance, entrepreneurship clubs",
    placement:"2024-25 avg ₹38.52 LPA, highest ₹105 LPA; 100% with Google, Microsoft, Amazon",
    est:"1998",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:9.8,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "iiit bangalore": {
    name:"IIIT Bangalore", type:"Private Deemed University", location:"Electronics City, Bengaluru", score:8.0, verdict:"Good for IT — Industry Proximity",
    programs:"B.Tech & integrated B.Tech+M.Tech in CSE, ECE, Data Science; M.Tech, PhD",
    fees:"₹4–6L/year; merit scholarships",
    campuses:"One urban campus in Electronics City (~15 acres)",
    sports:"Basketball/volleyball, indoor badminton/gym, football ground",
    extra:"Cultural/technical fests, hackathons; 50+ startups incubated",
    placement:"2024-25 avg ₹25–30 LPA, highest ₹65+ LPA; Google, Microsoft, Amazon",
    est:"1999",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.0,c:"r"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "iiit delhi": {
    name:"IIIT Delhi", type:"State Public Autonomous Institute", location:"Okhla Phase III, New Delhi", score:8.2, verdict:"Delhi's Best IIIT",
    programs:"B.Tech in CSE, ECE, CS & AI, CS & Design, CS & Biosciences; M.Tech, PhD",
    fees:"₹4.8L/year; scholarships available",
    campuses:"One 25-acre campus with hostels, sports complex",
    sports:"Sports complex, gym, basketball/volleyball/tennis, indoor games",
    extra:"Cultural/technical fests; clubs for music, dance, drama, robotics",
    placement:"Avg ~₹25–30 LPA; strong in tech firms",
    est:"2008",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "iiit allahabad": {
    name:"IIIT Allahabad", type:"Public Deemed University", location:"Jhalwa, Prayagraj, UP", score:8.0, verdict:"Solid IIIT — Good Value",
    programs:"B.Tech in IT, ECE, IT Business Informatics; M.Tech, MBA, PhD",
    fees:"₹1.5–₹1.8L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 100-acre self-contained campus",
    sports:"Cricket/football, basketball/volleyball/tennis, indoor hall, athletics",
    extra:"Avishkar (cultural/technical); robotics, music, competitive coding clubs",
    placement:"2024-25 avg ₹32 LPA, highest ₹1.11 Cr; Google, Microsoft, Amazon",
    est:"1999",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "iiit gwalior": {
    name:"ABV-IIIT Gwalior", type:"Public Autonomous IIIT", location:"Gwalior, Madhya Pradesh", score:7.5, verdict:"Good IIIT — Strong IT Focus",
    programs:"B.Tech in IT, ICT; M.Tech, MBA, PhD",
    fees:"₹1.5–₹2L/year (Gen); reduced for SC/ST/PwD",
    campuses:"Single 60-acre campus in Gwalior",
    sports:"Cricket/football, basketball/volleyball, gym, athletics",
    extra:"Aurora (cultural+technical fest); clubs for coding, robotics, music",
    placement:"2024-25 avg ₹15–20 LPA, highest ₹50+ LPA; Microsoft, Amazon, Google",
    est:"1997",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:7.8,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.2,c:"a"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "daiict gandhinagar": {
    name:"DA-IICT Gandhinagar", type:"Private Deemed University", location:"Gandhinagar, Gujarat", score:7.8, verdict:"Gujarat's Best CS/IT Institute",
    programs:"B.Tech in ICT, CS, ICT+CS; M.Tech, M.Sc IT, PhD",
    fees:"₹2.5–₹3L/year; merit scholarships available",
    campuses:"Single 50-acre campus in Gandhinagar IT hub",
    sports:"Cricket/football, basketball/tennis, gym, swimming pool",
    extra:"Synapse (cultural+technical); clubs for coding, robotics, music, entrepreneurship",
    placement:"2024-25 avg ₹12–16 LPA, highest ₹40+ LPA; Microsoft, Google, Amazon",
    est:"2001",
    metrics:[
      {n:"Fits Most Students' Budget",v:6.5,c:"a"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },
  "iit bombay": {
    name:"IIT Bombay", type:"Indian Institute of Technology", location:"Powai, Mumbai, Maharashtra", score:9.2, verdict:"Top Tier — Highly Recommended",
    programs:"Engineering, Science, Design, Management — 65+ programs across 17 departments",
    fees:"₹2.3L–₹2.8L/year (B.Tech) — subsidized; scholarships widely available",
    campuses:"Single 550-acre campus in Powai, lakeside setting",
    sports:"Olympic pool, cricket, tennis, football, basketball, gym",
    extra:"Mood Indigo (Asia's largest cultural fest), Techfest, 100+ clubs",
    placement:"₹18–22 LPA avg; top packages 1–2 Cr (international)",
    est:"1958",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.2,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.1,c:"g"},{n:"Graduate Salaries",v:9.8,c:"g"},
      {n:"Future Opportunities",v:9.7,c:"g"},{n:"Infrastructure",v:9.3,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.8,c:"g"}
    ]
  },

  "iit madras": {
    name:"IIT Madras", type:"Indian Institute of Technology", location:"Chennai, Tamil Nadu", score:9.3, verdict:"Top Tier — NIRF #1 Engineering",
    programs:"B.Tech in 12 disciplines, Dual Degree (B.Tech+M.Tech), BS+MS in sciences — 135+ courses total",
    fees:"₹2.2–₹2.25L/year (Gen); tuition waived for SC/ST/PwD",
    campuses:"One self-contained wooded campus in Chennai with full facilities",
    sports:"Multiple stadia, indoor/outdoor courts, gym, swimming pool, cricket, football, hockey, athletics",
    extra:"Saarang (cultural, 80,000+ visitors), Shaastra (technical), E-Summit, 36' Wall Street (finance)",
    placement:"₹17.5 LPA median (NIRF 2025); B.Tech CSE avg ₹53.2 LPA in 2025; 764 UG placed in 2023-24",
    est:"1959",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.6,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:9.2,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.7,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:9.4,c:"g"},
      {n:"Bureaucracy",v:6.8,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "iit delhi": {
    name:"IIT Delhi", type:"Indian Institute of Technology", location:"Hauz Khas, New Delhi", score:9.1, verdict:"Top Tier — Great Location Advantage",
    programs:"B.Tech in 13 branches (CSE, EE, Civil etc), B.Des, dual B.Tech-M.Tech; M.Tech, MBA, PhD",
    fees:"₹2L/year (Gen >₹5L income); ₹66K/year (<₹5L income); SC/ST/PwD ~₹24K/year",
    campuses:"Main 325-acre Delhi campus + Sonipat + Jhajjar + Abu Dhabi international",
    sports:"Football/cricket grounds, tennis/basketball/volleyball/hockey, swimming pool, gym, badminton, squash",
    extra:"Rendezvous (cultural, 280+ events), Tryst (technical, 75+ events), Sportech (inter-collegiate sports)",
    placement:"2024 UG avg ₹25.82 LPA, highest ₹41.13 LPA; strong in tech firms like Amazon",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.4,c:"g"},
      {n:"Teaching & Staff",v:9.2,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.5,c:"g"},
      {n:"Future Opportunities",v:9.6,c:"g"},{n:"Infrastructure",v:9.1,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "iit kanpur": {
    name:"IIT Kanpur", type:"Indian Institute of Technology", location:"Kanpur, Uttar Pradesh", score:9.0, verdict:"Top Tier — Strong in CS & Sciences",
    programs:"B.Tech in 9 branches, BS in 6 sciences, dual-degree options; M.Tech, M.Sc, MBA, M.Des, PhD",
    fees:"₹2.2L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"One self-contained 1055-acre campus in Kanpur",
    sports:"Cricket/football fields, tennis/badminton courts, swimming pool, gym, squash, athletics track",
    extra:"Antaragni (cultural, 50K+ attendees), Techkriti (technical), PClub events, robotics, music, drama",
    placement:"2024-25 UG avg ₹26.27 LPA, median ₹21 LPA, highest ₹1.57 Cr; 85%+ with Google, Microsoft",
    est:"1959",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.4,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:9.4,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.2,c:"g"}
    ]
  },

  "iit kharagpur": {
    name:"IIT Kharagpur", type:"Indian Institute of Technology", location:"Kharagpur, West Bengal", score:9.0, verdict:"Oldest IIT — Most Diverse Programs",
    programs:"B.Tech in 15 disciplines, B.Arch, dual B.Tech-M.Tech (35 areas), LLB (IP Laws); M.Tech (42+), MBA, PhD",
    fees:"₹2.24L/year (Gen); reduced for lower income/SC/ST/PwD (~₹20K–₹65K/year)",
    campuses:"Single expansive 2100-acre campus — India's largest IIT campus",
    sports:"Cricket/football stadia, Olympic swimming pool, tennis/badminton, gym, athletic track, indoor hall",
    extra:"Spring Fest (cultural), Kshitij (technical), Innovision (entrepreneurship); music, dance, drama clubs",
    placement:"2024-25 UG median ~₹23 LPA, avg ₹25-27 LPA, highest ₹2 Cr+; 90%+ with Google, Microsoft",
    est:"1951 — India's first IIT",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.2,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:8.9,c:"g"},{n:"Graduate Salaries",v:9.3,c:"g"},
      {n:"Future Opportunities",v:9.3,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "iit roorkee": {
    name:"IIT Roorkee", type:"Indian Institute of Technology", location:"Roorkee, Uttarakhand", score:8.8, verdict:"Historic Institute — Strong Civil & Tech",
    programs:"B.Tech in 12 branches, B.Arch, integrated M.Tech (5 years); M.Tech (50+), M.Sc, MBA, PhD",
    fees:"₹2.2–₹2.25L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"One integrated 365-acre campus with academic blocks, hostels, and research centers",
    sports:"Cricket/football grounds, tennis/basketball/volleyball, swimming pool, hockey, gym, badminton, squash",
    extra:"Cognizance (technical), Thomso (cultural/sports); clubs for arts, literature, astronomy",
    placement:"2024-25 UG avg ₹22–25 LPA, highest ₹1.3 Cr+; 90% rate with Google, Microsoft, Goldman Sachs",
    est:"1847 (IIT status 2001) — India's oldest engineering institute",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.7,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "iit guwahati": {
    name:"IIT Guwahati", type:"Indian Institute of Technology", location:"Guwahati, Assam", score:8.7, verdict:"Scenic Campus — Strong NE Presence",
    programs:"B.Tech in 11 branches incl. Data Science & AI, B.Des, dual B.Tech-M.Tech; M.Tech, M.Sc, PhD",
    fees:"₹2.2L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"Single scenic 700-acre riverside campus on north bank of Brahmaputra",
    sports:"Indoor stadium, 8-lane 50m swimming pool, athletics, football, hockey, cricket, tennis, basketball, gym",
    extra:"Alcheringa (cultural, Asia's largest college fest, 100K+ visitors), Techniche (technical), Robocon",
    placement:"2024-25 UG avg ₹25–28 LPA, highest ₹2 Cr+; 90%+ with Microsoft, Google, Goldman Sachs",
    est:"1994",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:8.7,c:"g"},{n:"Campus Experience",v:9.2,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:8.9,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.3,c:"g"}
    ]
  },

  "iit hyderabad": {
    name:"IIT Hyderabad", type:"Indian Institute of Technology", location:"Kandi, Sangareddy, Telangana", score:8.6, verdict:"New-Gen IIT — Strong in AI & Research",
    programs:"B.Tech in 10 branches incl. AI & Data Science; dual B.Tech-M.Tech; M.Tech, M.Sc, MBA, PhD",
    fees:"₹2.2L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"One integrated 576-acre modern eco-friendly campus near Hyderabad",
    sports:"Cricket/football grounds, basketball/tennis/volleyball/badminton, swimming pool, hockey, gym",
    extra:"Elan (cultural), Vision (technical), SpringSpree; clubs for robotics, music, dance, astronomy",
    placement:"2024-25 UG avg ₹27 LPA, highest ₹2 Cr+; 95%+ with Google, Microsoft, Amazon",
    est:"2008",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.2,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "iit bhu": {
    name:"IIT (BHU) Varanasi", type:"Indian Institute of Technology", location:"Varanasi, Uttar Pradesh", score:8.5, verdict:"Cultural Capital + IIT Quality",
    programs:"B.Tech in 9 branches incl. Mining Engineering, integrated M.Tech; M.Tech (40+), M.Pharm, MBA, PhD",
    fees:"₹2.2L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"One 1300-acre campus shared with BHU — unique cultural setting in Varanasi",
    sports:"Football/tennis/basketball/volleyball, swimming pool, gym, badminton, squash, athletics",
    extra:"Technex (technical), Culrav (cultural), Instahang (sports); clubs for robotics, music, astronomy",
    placement:"2024-25 UG avg ₹25 LPA, highest ₹1.5 Cr+; 90%+ with Google, Microsoft, Amazon",
    est:"1919 (IIT status 2012)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:8.2,c:"g"}
    ]
  },

  "iit indore": {
    name:"IIT Indore", type:"Indian Institute of Technology", location:"Simrol, Indore, Madhya Pradesh", score:8.4, verdict:"Newer IIT — Rapidly Growing",
    programs:"B.Tech in 7-8 branches (CSE, EE, ME, CE, Chemical, Metallurgy), dual-degree B.Tech-M.Tech",
    fees:"₹2.2L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"One permanent 501-acre campus in Simrol, ~25km from Indore city",
    sports:"Cricket/football grounds, basketball/tennis/volleyball, gym, badminton, athletic track",
    extra:"Fluxus (cultural), Nimbus (technical); clubs for robotics, music, dance, entrepreneurship",
    placement:"2024-25 UG avg ₹25–28 LPA, highest ₹68 LPA; 90%+ with Google, Microsoft, Amazon",
    est:"2009",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "iit ism dhanbad": {
    name:"IIT (ISM) Dhanbad", type:"Indian Institute of Technology", location:"Dhanbad, Jharkhand", score:8.2, verdict:"Mining & Petroleum Specialist",
    programs:"B.Tech in 9 branches incl. Petroleum & Mining Engineering; M.Tech (20+), M.Sc, MBA, M.Plan, PhD",
    fees:"₹2.2L/year (Gen); ₹65K/year (<₹5L income); ~₹20K/year SC/ST/PwD",
    campuses:"One main 390-acre campus in Dhanbad",
    sports:"Cricket/football grounds, basketball/tennis/volleyball, indoor stadium, gym, swimming pool",
    extra:"Srijan (cultural), Technovation (technical); clubs for robotics, music, drama",
    placement:"2024-25 UG avg ₹23–25 LPA, highest ₹1.2 Cr+; 92%+ with Google, Microsoft, Schlumberger",
    est:"1926 (IIT status 2016)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  // ── IISc ────────────────────────────────────────────────

  "iisc bangalore": {
    name:"IISc Bangalore", type:"Public Deemed Research University", location:"Bengaluru, Karnataka", score:9.5, verdict:"India's Best for Research",
    programs:"B.Tech (Maths & Computing), B.Sc Research in 6 sciences; M.Tech, M.Sc, M.Des, PhD in 100+ fields",
    fees:"₹2.2L/year (B.Tech Gen); ₹1L/year (B.Sc Research); SC/ST/PwD tuition waived",
    campuses:"Single 400-acre residential campus in north Bangalore",
    sports:"Gymkhana — cricket, tennis, swimming pool, cinder track, badminton, billiards, ping pong, gym",
    extra:"Sangam (cultural fest); Gymkhana tournaments in sports, literary, arts",
    placement:"2023-24 UG avg ₹28 LPA, highest ₹86 LPA, 85%+ placement; top recruiters Amazon, Cisco, Siemens",
    est:"1909 (Institute of Eminence 2018)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.9,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:9.5,c:"g"},
      {n:"Future Opportunities",v:9.9,c:"g"},{n:"Infrastructure",v:9.6,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  // ── NITs ────────────────────────────────────────────────

  "nit trichy": {
    name:"NIT Trichy", type:"National Institute of Technology", location:"Tiruchirappalli, Tamil Nadu", score:8.3, verdict:"Top NIT — Strong Placements",
    programs:"B.Tech in 10 branches, B.Arch, integrated M.Sc (4 areas); M.Tech (30+), MBA, MCA, PhD",
    fees:"₹1.5–₹2L/year (Gen); reduced for SC/ST/PwD and low-income categories",
    campuses:"Single 800-acre campus on the banks of Cauvery River",
    sports:"Cricket/football grounds, basketball/volleyball, tennis, indoor stadium, pool, gym",
    extra:"Festember (cultural), Pragyan (technical), NITTFest (sports); clubs for music, dance, robotics, photography",
    placement:"2024-25 UG avg ₹20–22 LPA, highest ₹1 Cr+; 95%+ with Google, Microsoft, Goldman Sachs",
    est:"1964 (deemed university 2003)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nit surathkal": {
    name:"NIT Surathkal", type:"National Institute of Technology", location:"Surathkal, Mangalore, Karnataka", score:8.2, verdict:"Top NIT — Coastal Campus",
    programs:"B.Tech in 13 branches incl. CSE, ECE, Mechanical, Civil, Chemical, AI; M.Tech (30+), M.Sc, MCA, PhD",
    fees:"₹1.25–₹1.31L/year (Gen); reduced for low-income/SC/ST/PwD",
    campuses:"One integrated 295-acre coastal campus with beach access",
    sports:"Cricket/football grounds, basketball/tennis/volleyball, indoor stadium, swimming pool, water sports",
    extra:"Incident (cultural, 50K+ attendees), Engineer (technical); clubs for music (Cadenza), robotics (Genesis)",
    placement:"2024-25 UG avg ₹23.24 LPA, highest ₹55 LPA; 95%+ with Google, Microsoft, Amazon",
    est:"1960 (NIT status 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.3,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.3,c:"g"},
      {n:"Future Opportunities",v:8.3,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nit warangal": {
    name:"NIT Warangal", type:"National Institute of Technology", location:"Warangal, Telangana", score:8.2, verdict:"Top NIT — Strong Core Engineering",
    programs:"B.Tech in 10 branches incl. CSE, ECE, Mechanical, Civil, Metallurgy; M.Tech (40+), M.Sc, MBA, PhD",
    fees:"₹1.25L/year (Gen/OBC/EWS); reduced for low-income/SC/ST/PwD; hostel ~₹45K-46K/year",
    campuses:"Single integrated 248-acre campus",
    sports:"Cricket/football grounds, basketball/tennis/volleyball, indoor stadium, pool, squash courts",
    extra:"SpringSpree (cultural, 40K+ attendees), Technozion (technical), Aurora (management); Robocon club",
    placement:"2024-25 UG avg ₹21.98 LPA, highest ₹88 LPA; 97% placement with Google, Microsoft, Goldman Sachs",
    est:"1959 (NIT status 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.3,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.3,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.2,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "nit rourkela": {
    name:"NIT Rourkela", type:"National Institute of Technology", location:"Rourkela, Odisha", score:8.0, verdict:"Largest NIT — Most Diverse Programs",
    programs:"B.Tech in 21 branches incl. CSE, ECE, Mining, Biotechnology, B.Arch; M.Tech (50+), M.Sc, MBA, PhD",
    fees:"₹1.25–₹1.35L/year (Gen); reduced for low-income/SC/ST/PwD",
    campuses:"Single expansive 650-acre campus with industrial proximity",
    sports:"Cricket/football stadia, basketball/tennis/volleyball, indoor hall, pool, squash courts",
    extra:"Nitrutsav (cultural), Innovision (technical); clubs for music, dance, robotics, E-Cell",
    placement:"2024-25 UG avg ₹19.66 LPA, highest ₹67 LPA; 95%+ with Google, Microsoft, Deloitte",
    est:"1961 (NIT status 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.2,c:"g"},
      {n:"Student Community",v:8.0,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "nit calicut": {
    name:"NIT Calicut", type:"National Institute of Technology", location:"Kozhikode, Kerala", score:8.1, verdict:"Top NIT — Kerala's Pride",
    programs:"B.Tech in 10 branches incl. CSE, ECE, Mechanical, Civil, Biotechnology; B.Arch; M.Tech (30+), PhD",
    fees:"₹1.25–₹1.31L/year (Gen); reduced for low-income/SC/ST/PwD",
    campuses:"One integrated 125-acre scenic campus with lakeside views",
    sports:"Football/cricket grounds, basketball/tennis/volleyball, indoor stadium, pool, squash courts",
    extra:"Ragam (cultural, Asia's largest student-run fest, 40K+ attendees), Tathva (technical), Graha (management)",
    placement:"2024-25 UG avg ₹20–22 LPA (CSE/EC ~₹36 LPA), highest ₹50.64 LPA; 95%+ with Google, Microsoft, Cisco",
    est:"1961 (NIT status 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.0,c:"g"},{n:"Academic Life",v:8.2,c:"g"},
      {n:"Teaching & Staff",v:8.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:8.2,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  // ── IIITs ───────────────────────────────────────────────

  "iiit hyderabad": {
    name:"IIIT Hyderabad", type:"Autonomous Deemed University (N-PPP)", location:"Gachibowli, Hyderabad, Telangana", score:9.0, verdict:"Best IIIT — Research + Placements",
    programs:"B.Tech in CSE & ECE, dual B.Tech+MS by Research; M.Tech, MS by Research, PhD in AI, VLSI, bioinformatics",
    fees:"₹4–5L/year (B.Tech); scholarships for merit/SC/ST/low-income",
    campuses:"One modern 66-acre campus with research labs and innovation centers",
    sports:"Basketball/volleyball courts, cricket/football grounds, indoor badminton/gym/table tennis",
    extra:"Felicity (cultural/technical, 20K+ attendees); clubs for music, dance, robotics, entrepreneurship (iTIC)",
    placement:"2024-25 UG avg ₹38.52 LPA, highest ₹105 LPA; 100% placement with Google, Microsoft, Amazon",
    est:"1998 (deemed university 2001)",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:9.8,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "iiit bangalore": {
    name:"IIIT Bangalore", type:"Private Deemed University", location:"Electronics City, Bengaluru, Karnataka", score:8.0, verdict:"Good for IT — Industry Proximity",
    programs:"B.Tech & Integrated B.Tech+M.Tech in CSE, ECE, Data Science; M.Tech, MS Research, PhD",
    fees:"₹4–6L/year; scholarships for merit/performance",
    campuses:"One urban campus in Electronics City (~10-15 acres) with modern labs",
    sports:"Basketball/volleyball courts, indoor badminton/gym/table tennis, small football ground",
    extra:"Cultural/technical fests, hackathons; 50+ startups incubated; clubs for music, dance, entrepreneurship",
    placement:"2024-25 UG/PG avg ₹25–30 LPA, highest ₹65+ LPA; 98%+ with Google, Microsoft, Amazon, Goldman Sachs",
    est:"1999",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.0,c:"r"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.0,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "iiit delhi": {
    name:"IIIT Delhi", type:"State Public Autonomous Institute", location:"Okhla Phase III, New Delhi", score:8.2, verdict:"Delhi's Best IIIT — Govt Fees",
    programs:"B.Tech in CSE, ECE, CS & AI, CS & Design, CS & Biosciences; M.Tech, MS Research, PhD",
    fees:"₹4.8L/year (total ~₹19.55L for 4 years); scholarships available",
    campuses:"One 25-acre campus with academics, library, hostels, sports complex",
    sports:"Sports complex, gym, basketball/volleyball/tennis courts, indoor games",
    extra:"Cultural/technical fests; clubs for music, dance, drama, robotics, quizzes",
    placement:"High placement rates; avg ~₹25–30 LPA (strong in tech firms)",
    est:"2008",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.5,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:8.8,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  "iiit allahabad": {
    name:"IIIT Allahabad", type:"Public Deemed University (INI)", location:"Jhalwa, Prayagraj, Uttar Pradesh", score:8.0, verdict:"Solid IIIT — Good Value",
    programs:"B.Tech in IT, ECE, IT Business Informatics; M.Tech, MBA, MS Research, PhD",
    fees:"₹1.5–₹1.8L/year (Gen); reduced for SC/ST/PwD",
    campuses:"One 100-acre self-contained campus",
    sports:"Cricket/football grounds, basketball/volleyball/tennis, indoor hall, athletic track",
    extra:"Avishkar (cultural/technical); clubs for robotics, music, dance, competitive coding",
    placement:"2024-25 UG avg ₹32 LPA, highest ₹1.11 Cr; 98%+ with Google, Microsoft, Amazon",
    est:"1999 (deemed 2000, INI 2014)",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  // ── Central Universities ─────────────────────────────────

  "jnu": {
    name:"Jawaharlal Nehru University", type:"Central Research University", location:"New Delhi", score:8.0, verdict:"Best for Humanities & Research",
    programs:"B.A. (Hons) in 10 foreign languages, Integrated B.Sc-M.Sc; M.A. (20+ fields), M.Tech (CS), PhD",
    fees:"₹360–₹500/year UG — India's most subsidized; hostel ~₹3,000–₹5,000/year",
    campuses:"One expansive 1012-acre green campus in South Delhi",
    sports:"Basketball/volleyball, football/cricket, indoor hall (table tennis, badminton), gym, athletic track, yoga",
    extra:"Vividha (cultural), JNUSS events, strong theatre (IPTF), debating, film clubs, seminars",
    placement:"PG M.Tech avg ₹15–20 LPA (2024), highest ₹40 LPA; strong in academia, consulting (McKinsey, BCG)",
    est:"1969",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.5,c:"g"},{n:"Graduate Salaries",v:6.5,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "delhi university": {
    name:"University of Delhi", type:"Central University", location:"North & South Campus, Delhi", score:7.4, verdict:"Solid Choice — Context Dependent",
    programs:"Arts, Science, Commerce, Law — 500+ courses across 91 affiliated colleges",
    fees:"₹10,000–₹30,000/year (varies by college); highly subsidized for Delhi residents",
    campuses:"North & South campuses + 91 affiliated colleges spread across Delhi",
    sports:"Badminton/basketball/tennis, cricket/football grounds, gym, table tennis, polo ground, kabaddi",
    extra:"Fest circuit (Crossroads at SRCC, Mecca), DUQUAC quizzes, drama/music societies, NSS/NCC",
    placement:"UG avg ₹6–10 LPA; top colleges like SRCC ~₹12 LPA; highest ₹30 LPA+ in consulting/finance",
    est:"1922",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:7.2,c:"a"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:6.5,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:6.8,c:"a"},
      {n:"Bureaucracy",v:4.5,c:"r"},{n:"Hostel Life",v:6.0,c:"a"}
    ]
  },

  "jamia millia islamia": {
    name:"Jamia Millia Islamia", type:"Central University", location:"Okhla, New Delhi", score:7.2, verdict:"Affordable Engineering — Great Value",
    programs:"B.Tech in Civil, Computer, Electrical, Mechanical, ECE; B.A./B.Sc./B.Com Hons; M.Tech, M.A., MBA, PhD",
    fees:"₹16,000–₹18,000/year (B.Tech) — highly subsidized; arts/sciences ~₹10,000/year",
    campuses:"One main 254-acre self-contained campus in Okhla, South Delhi",
    sports:"Cricket/football grounds, basketball/volleyball, indoor hall (badminton/table tennis), gym",
    extra:"Cultural fests, technical events; clubs for drama, music, NSS/NCC",
    placement:"2024-25 UG engineering avg ₹10–12 LPA, highest ₹40+ LPA; 85%+ with TCS, Wipro, public sector",
    est:"1920 (central university 1988)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.2,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:5.0,c:"r"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "aligarh muslim university": {
    name:"Aligarh Muslim University", type:"Central University", location:"Aligarh, Uttar Pradesh", score:7.0, verdict:"Heritage University — Affordable",
    programs:"B.Tech in Civil, Computer, Electrical, ECE, Mechanical, Petrochemical; B.A./B.Sc./B.Com; M.Tech, PhD",
    fees:"₹15,000–₹20,000/year (B.Tech) — highly subsidized",
    campuses:"One main 467-hectare campus with engineering college (ZHCET), medical college (JNMCH)",
    sports:"Cricket/football grounds, basketball/volleyball, indoor gym, athletic track, squash courts",
    extra:"Cultural fests, technical events; clubs for music, drama, robotics, NSS/NCC",
    placement:"2024-25 UG engineering avg ₹6–10 LPA, highest ₹35+ LPA; 80%+ with TCS, Wipro, public sector",
    est:"1875 (university 1920)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:6.0,c:"a"},
      {n:"Future Opportunities",v:6.5,c:"a"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:4.5,c:"r"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  // ── Private Universities ─────────────────────────────────

  "bits pilani": {
    name:"BITS Pilani", type:"Deemed University (Institute of Eminence)", location:"Pilani, Rajasthan", score:8.9, verdict:"Near IIT Level — Great ROI",
    programs:"Engineering, Sciences, Pharmacy, Management — integrated dual degrees; 4 campuses",
    fees:"₹5L–₹6L/year — expensive but strong ROI; top 500 BITSAT rankers get 100% tuition waiver",
    campuses:"4 campuses — Pilani (main, 328 acres), Goa (180 acres), Hyderabad (200 acres), Dubai",
    sports:"Multi-sport complexes across campuses: cricket/football, Olympic pools, tennis, basketball, gym, squash",
    extra:"APOGEE (tech), Oasis (cultural), Waves (technical) — among India's best college fests; 30+ clubs",
    placement:"2024-25 UG avg ₹30 LPA, highest ₹60.75 LPA; 100% with Google, Microsoft, Goldman Sachs",
    est:"1964 (deemed 1986)",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:9.2,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.3,c:"g"},
      {n:"Future Opportunities",v:9.4,c:"g"},{n:"Infrastructure",v:8.7,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.2,c:"g"}
    ]
  },

  "vit vellore": {
    name:"VIT Vellore", type:"Deemed University (Private)", location:"Vellore, Tamil Nadu", score:7.8, verdict:"Good for Placements — Pricey",
    programs:"B.Tech in 50+ specializations, B.Arch, B.Des, B.Sc; M.Tech (50+), MBA, PhD; 4 campuses",
    fees:"₹1.98–₹7.8L/year depending on VITEEE rank; scholarships up to 100% for top rankers",
    campuses:"4 campuses — Vellore (372 acres, main), Chennai (170 acres), Bhopal (250 acres), Amaravati (1000 acres)",
    sports:"International-standard complex: Olympic pool, cricket/football stadia, tennis/basketball, indoor arena",
    extra:"GraVITas (technical), RISE (cultural); 100+ clubs for robotics (Team Abhiyaan), music, dance",
    placement:"2024-25 UG avg ₹9.9 LPA (CSE ₹14 LPA+), highest ₹1 Cr+; 14,000+ offers, 1,000+ super dream (₹30 LPA+)",
    est:"1984 (deemed 2001)",
    metrics:[
      {n:"Fits Most Students' Budget",v:6.0,c:"a"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "manipal institute of technology": {
    name:"Manipal Institute of Technology", type:"Deemed University (Private)", location:"Manipal, Udupi, Karnataka", score:7.9, verdict:"Premium Private — Great Campus Life",
    programs:"B.Tech in 16+ branches incl. CSE, IT, Mechanical, Civil, Biomedical; M.Tech (25+), M.Sc, MCA, PhD",
    fees:"₹2–4.5L/year via MET ranks; scholarships up to 100% available",
    campuses:"One integrated campus within MAHE Manipal (part of network incl. Mangalore, Bengaluru, Jamshedpur)",
    sports:"Marena sports complex (142,000 sq ft): Olympic pool, cricket/football, basketball/tennis, indoor badminton/gym",
    extra:"TechTatva (technical), cultural fests; 100+ clubs for robotics, music, drama, entrepreneurship",
    placement:"2024-25 UG avg ₹12–15 LPA (CSE higher), highest ₹50+ LPA; 90%+ with Microsoft, Google, Amazon",
    est:"1957",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "srm institute": {
    name:"SRM Institute of Science and Technology", type:"Deemed University (Private)", location:"Kattankulathur, Chennai, Tamil Nadu", score:7.0, verdict:"Large Private — Variable Quality",
    programs:"B.Tech in 40+ specializations, B.Arch, B.Des, BBA, MBBS; M.Tech (100+), MBA, PhD; 9+ campuses",
    fees:"₹2–4L/year via SRMJEEE ranks; scholarships up to 100% for top rankers",
    campuses:"9+ campuses: Kattankulathur (main, 250 acres), Ramapuram, Vadapalani, Tiruchirappalli, Delhi-NCR, AP",
    sports:"Multi-sport complexes with Olympic pools, cricket/football stadia, tennis/basketball, indoor arenas",
    extra:"Aaruush (technical), Milan (cultural); 100+ clubs for robotics, dance, music, entrepreneurship",
    placement:"2024-25 UG avg ₹7.5 LPA (CSE ~₹12 LPA), highest ₹52 LPA; 5,000+ offers from MS, Google, TCS",
    est:"1985 (deemed 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:6.5,c:"a"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:6.8,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "amity university": {
    name:"Amity University", type:"Private Deemed University", location:"Noida, Uttar Pradesh", score:6.2, verdict:"Brand Name — Mixed Returns",
    programs:"Engineering, Law, Medicine, Business, Design, Media — 300+ programs",
    fees:"₹2L–₹5L/year — expensive with variable outcomes",
    campuses:"Multiple campuses; Noida main — 150 acres",
    sports:"Good infra at Noida — courts, gym, pool",
    extra:"Amifest, cultural events; structured environment",
    placement:"₹3.5–6 LPA avg; variable by program",
    est:"2005",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.5,c:"r"},{n:"Academic Life",v:6.5,c:"a"},
      {n:"Teaching & Staff",v:6.0,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:5.8,c:"a"},
      {n:"Future Opportunities",v:6.0,c:"a"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:5.0,c:"r"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "thapar university": {
    name:"Thapar Institute of Engineering and Technology", type:"Deemed University (Private)", location:"Patiala, Punjab", score:7.8, verdict:"Strong Private — North India's Best",
    programs:"B.E./B.Tech in 12+ branches incl. CSE, ECE, Mechanical, Civil, Mechatronics; M.E./M.Tech (40+), MBA, PhD",
    fees:"₹4.23L/year; merit scholarships up to 100% tuition waiver available",
    campuses:"One main 250-acre green campus; off-campus at Derabassi",
    sports:"Cricket/football stadia, basketball/tennis courts, swimming pool, indoor gym, squash, athletic track",
    extra:"Satire (cultural), Tech Fest; 50+ clubs for robotics, music, drama, entrepreneurship (E-Cell)",
    placement:"2024-25 UG avg ₹11.9 LPA, highest ₹55 LPA; 95%+ with Microsoft, Google, Amazon",
    est:"1956 (deemed 1985)",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:8.0,c:"g"},
      {n:"Teaching & Staff",v:7.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "chandigarh university": {
    name:"Chandigarh University", type:"Private University", location:"Mohali, Punjab", score:7.0, verdict:"Large Private — Good Value for Cost",
    programs:"B.Tech/B.E. (45 courses), BBA, BCA, B.Com, B.Arch, B.Pharm, LLB; MBA (25 courses), M.Tech, PhD",
    fees:"₹1.5–₹3.7L/year depending on branch via CUCET",
    campuses:"One main integrated campus in Gharuan, Mohali district (600+ acres)",
    sports:"World-class complex with international stadium, Olympic pool, cricket/football, tennis/basketball, indoor arena",
    extra:"Cultural/technical fests; clubs for robotics, music, dance, entrepreneurship; global immersion programs",
    placement:"2024-25 UG avg ₹9 LPA (B.Tech higher), highest ₹1.7 Cr+; 90%+ with Microsoft, Google, Amazon",
    est:"2012",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.0,c:"a"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:6.8,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.0,c:"a"},
      {n:"Future Opportunities",v:7.2,c:"a"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "lpu": {
    name:"Lovely Professional University", type:"Private University", location:"Phagwara, Punjab", score:6.8, verdict:"Affordable Private — Check Branch Carefully",
    programs:"B.Tech, BBA, BCom, BSc/BA, BPharm, BArch, LLB; MBA, MTech, PhD; 200+ programs",
    fees:"₹2–4L/year; scholarships up to 100% via LPUNEST merit",
    campuses:"Single 600-acre unicampus with smart classrooms, 150+ labs, hostels for 30,000+ students",
    sports:"Olympic-standard pool, cricket/football stadiums, athletic track, basketball/tennis courts, indoor arenas",
    extra:"Cultural fests, 100+ clubs, startup incubation; global events with students from 50+ countries",
    placement:"2024-25 UG avg ₹7–10 LPA, highest ₹50+ LPA; 200+ recruiters like Cognizant, Capgemini, Amazon",
    est:"2005",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:6.8,c:"a"},
      {n:"Teaching & Staff",v:6.5,c:"a"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },

  // ── State Universities ────────────────────────────────────

  "jadavpur university": {
    name:"Jadavpur University", type:"Public State University", location:"Kolkata, West Bengal", score:8.0, verdict:"Best State Engineering — Super Affordable",
    programs:"B.E./B.Tech in 14 engineering branches, B.Sc, B.A. (Hons); M.E./M.Tech (40+), M.Sc, MA, MBA, PhD",
    fees:"₹10,000–₹20,000/year (B.Tech) — highly subsidized state university",
    campuses:"Two: Main Jadavpur Campus (58 acres, engineering/arts), Salt Lake Campus (sciences)",
    sports:"Cricket/football grounds, basketball/volleyball courts, indoor gym, table tennis, athletic track",
    extra:"Spring Fest (cultural), Tech Fest (Wissensa); clubs for music, drama, robotics, NSS/NCC",
    placement:"2024-25 UG engineering avg ₹12–15 LPA (CSE ~₹25 LPA), highest ₹85 LPA+; 90%+ with Microsoft, Google, TCS",
    est:"1955 (roots 1906)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.8,c:"g"},{n:"Academic Life",v:8.5,c:"g"},
      {n:"Teaching & Staff",v:8.2,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:7.2,c:"a"},
      {n:"Bureaucracy",v:5.0,c:"r"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "dtu": {
    name:"Delhi Technological University", type:"State Technical University", location:"Bawana, Rohini, Delhi", score:7.5, verdict:"Best State Tech Uni in Delhi",
    programs:"B.Tech in 17 branches incl. CSE, Software Engineering, IT, Mechanical, Automobile, Biotechnology; M.Tech (60+), PhD",
    fees:"₹2.29L/year (Gen); reduced to ~₹1L/year for low-income/SC/ST/PwD",
    campuses:"Two: Main Bawana Campus (164 acres, engineering), East Delhi Campus (USME for management)",
    sports:"Cricket/football grounds, basketball/tennis/volleyball, indoor stadium, pool, athletic track",
    extra:"Engifest (technical/cultural, 50K+ attendees); clubs for robotics, music, drama, entrepreneurship",
    placement:"2024-25 UG avg ₹15.24 LPA, highest ₹85.30 LPA; 90%+ with Microsoft, Google, Amazon",
    est:"1941 (university status 2009)",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:7.8,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.8,c:"a"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.0,c:"g"},{n:"Infrastructure",v:7.8,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:7.0,c:"a"}
    ]
  },

  "nsut": {
    name:"Netaji Subhas University of Technology", type:"State Technical University", location:"Dwarka, Delhi", score:7.3, verdict:"Good Delhi Govt College — Affordable",
    programs:"B.Tech in 12+ branches incl. CSE, IT, ECE, Mechanical, AI; B.Arch, BBA, B.Des; M.Tech (25+), PhD",
    fees:"₹2.1–₹2.3L/year (Gen); reduced to ~₹1L/year for low-income/SC/ST/PwD",
    campuses:"Two: Main Dwarka Campus (145 acres), East Delhi Campus",
    sports:"Cricket/football grounds, basketball/tennis/volleyball, indoor stadium (badminton/gym), athletic track",
    extra:"Moksha (cultural/technical); clubs for robotics, music, drama, entrepreneurship",
    placement:"2024-25 UG avg ₹17–20 LPA, highest ₹1 Cr+; 95%+ with Microsoft, Google, Amazon",
    est:"1983 (university status 2018)",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.2,c:"a"},{n:"Campus Experience",v:7.2,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:7.8,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:5.5,c:"a"},{n:"Hostel Life",v:6.8,c:"a"}
    ]
  },

  "anna university": {
    name:"Anna University", type:"Public State Technical University", location:"Guindy, Chennai, Tamil Nadu", score:7.5, verdict:"Affordable — Best in Tamil Nadu State System",
    programs:"B.E./B.Tech in 25+ branches across 4 constituent colleges; affiliates 500+ colleges",
    fees:"₹50,000–₹60,000/year (Gen) — highly subsidized; ~₹10K-20K/year for SC/ST",
    campuses:"Multiple: Main Guindy Campus (CEG/ACT/SAP), Chromepet (MIT, 50 acres), regional centers",
    sports:"Sports complexes with cricket/football, basketball/tennis, indoor halls, athletic tracks",
    extra:"Saaral (CEG cultural fest), sports meets; clubs for robotics, music, drama, NSS/NCC",
    placement:"2024-25 UG avg ₹7–10 LPA (CSE higher ~₹15 LPA), highest ₹50 LPA+; 85%+ via affiliated colleges",
    est:"1978 (integrating CEG est. 1794)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:7.5,c:"a"},
      {n:"Teaching & Staff",v:7.5,c:"a"},{n:"Campus Experience",v:7.2,c:"a"},
      {n:"Student Community",v:7.5,c:"a"},{n:"Graduate Salaries",v:7.2,c:"a"},
      {n:"Future Opportunities",v:7.5,c:"a"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:5.0,c:"r"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  // ── IIMs ────────────────────────────────────────────────

  "iim ahmedabad": {
    name:"IIM Ahmedabad", type:"Institute of National Importance", location:"Vastrapur, Ahmedabad, Gujarat", score:9.8, verdict:"India's #1 MBA — Dream School",
    programs:"PGP (MBA, 2 years), PGP-FABM (Food & Agri-Business), ePGP (online), FPM (PhD), executive programs",
    fees:"₹25–27L total (2 years); scholarships/need-based aid available",
    campuses:"Single iconic 102-acre campus with Louis Kahn's red-brick architecture",
    sports:"Basketball/tennis courts, football/cricket grounds, gym, squash courts, Olympic-size pool",
    extra:"Chaos (cultural), Insight (business fest), Rendezvous; clubs for consulting, finance, entrepreneurship",
    placement:"2024-25 avg ₹34 LPA, highest ₹1 Cr+; 100% with Goldman Sachs, McKinsey, BCG, Amazon",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.0,c:"r"},{n:"Academic Life",v:9.9,c:"g"},
      {n:"Teaching & Staff",v:9.9,c:"g"},{n:"Campus Experience",v:9.5,c:"g"},
      {n:"Student Community",v:9.8,c:"g"},{n:"Graduate Salaries",v:10.0,c:"g"},
      {n:"Future Opportunities",v:10.0,c:"g"},{n:"Infrastructure",v:9.5,c:"g"},
      {n:"Bureaucracy",v:8.0,c:"g"},{n:"Hostel Life",v:9.0,c:"g"}
    ]
  },

  "iim bangalore": {
    name:"IIM Bangalore", type:"Institute of National Importance", location:"Bannerghatta Road, Bengaluru", score:9.7, verdict:"India's #2 MBA — Tech Hub Advantage",
    programs:"PGP (MBA, 2 years), EPGP (1-year executive), PGPBA (Business Analytics), FPM (PhD)",
    fees:"₹24–26L total (2 years); merit/need-based scholarships available",
    campuses:"Single 100-acre green campus with NSRCEL incubator and 10+ hostels",
    sports:"Basketball/tennis courts, football/cricket grounds, indoor gym, squash, swimming pool",
    extra:"Vista (business fest), Eximius (cultural), Unmaad; clubs for consulting, finance, entrepreneurship",
    placement:"2024-25 avg ₹35 LPA, highest ₹1 Cr+; 100% with McKinsey, Goldman Sachs, Amazon, Microsoft",
    est:"1973",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.0,c:"r"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:9.5,c:"g"},
      {n:"Student Community",v:9.7,c:"g"},{n:"Graduate Salaries",v:10.0,c:"g"},
      {n:"Future Opportunities",v:10.0,c:"g"},{n:"Infrastructure",v:9.5,c:"g"},
      {n:"Bureaucracy",v:8.0,c:"g"},{n:"Hostel Life",v:9.0,c:"g"}
    ]
  },

  "iim kozhikode": {
    name:"IIM Kozhikode", type:"Institute of National Importance", location:"Kunnamangalam, Kozhikode, Kerala", score:9.0, verdict:"Top IIM — Scenic Hilltop Campus",
    programs:"PGP (MBA, 2 years), PGP-BA, PGP-Finance, Executive PGP (2 years), FPM (PhD)",
    fees:"₹20–22L total (2 years); merit/need-based scholarships available",
    campuses:"Single scenic 112-acre hilltop campus designed by architect Joseph Stein",
    sports:"Basketball/tennis courts, football/cricket grounds, indoor gym, volleyball",
    extra:"Insight (management fest), Horizons (cultural), Encore (arts); clubs for consulting, finance",
    placement:"2024-25 avg ₹28–31 LPA, highest ₹65+ LPA; 100% with McKinsey, Deloitte, Accenture, Goldman Sachs",
    est:"1996",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.5,c:"r"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:9.5,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:9.5,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:9.0,c:"g"}
    ]
  },

  "iim indore": {
    name:"IIM Indore", type:"Institute of National Importance", location:"Prabandh Shikhar, Indore, Madhya Pradesh", score:9.0, verdict:"Top IIM — Unique 5-Year IPM Program",
    programs:"PGP (MBA, 2 years), IPM (5-year integrated management), PGP-HRM, EPGP, FPM (PhD)",
    fees:"PGP ₹21–23L total; IPM ₹36L (5 years); hostel included",
    campuses:"Single 193-acre hilltop campus with auditorium, pool, gym, tennis/squash, library",
    sports:"Swimming pool, tennis/squash courts, gym, basketball/volleyball, cricket/football grounds",
    extra:"Limelight (cultural), Invocation (management), Zenith (entrepreneurship); clubs for consulting, finance",
    placement:"2024-25 avg ₹30 LPA, highest ₹1 Cr+; 100% with McKinsey, Goldman Sachs, Deloitte, Amazon",
    est:"1996",
    metrics:[
      {n:"Fits Most Students' Budget",v:4.5,c:"r"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:9.2,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:9.5,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.3,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.8,c:"g"}
    ]
  },

  "fms delhi": {
    name:"FMS Delhi", type:"University of Delhi Department", location:"Kamla Nagar, New Delhi", score:9.2, verdict:"Best ROI MBA in India — Unbeatable",
    programs:"Full-time MBA (2 years), MBA Executive, MBA Executive (Healthcare), PhD in management",
    fees:"₹2–2.2L total (2 years) — lowest fees among top B-schools in India",
    campuses:"Compact urban campus in North Delhi with academic blocks, library, auditorium",
    sports:"Basketball/volleyball courts, indoor table tennis/gym, outdoor grounds",
    extra:"Raíse (entrepreneurship), Sangathan (HR fest), Confluence (marketing); clubs for consulting, finance",
    placement:"2024-25 avg ₹32–34 LPA, highest ₹1.23 Cr; 100% with Goldman Sachs, McKinsey, BCG, Accenture",
    est:"1954",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:9.8,c:"g"},
      {n:"Future Opportunities",v:9.8,c:"g"},{n:"Infrastructure",v:7.0,c:"a"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:6.5,c:"a"}
    ]
  },

  "isb hyderabad": {
    name:"Indian School of Business", type:"Private Non-Profit Business School", location:"Gachibowli, Hyderabad, Telangana", score:9.3, verdict:"World-Class 1-Year MBA",
    programs:"PGP (1-year MBA), PGPMAX (executive MBA), PGPpro (professional MBA), AMP",
    fees:"₹40–42L total (1 year); PGPMAX ~₹45L; merit/need-based scholarships up to 50%",
    campuses:"Main 260-acre Hyderabad campus + Mohali campus (50 acres, started 2012)",
    sports:"Basketball/tennis courts, football/cricket grounds, indoor gym, squash, swimming pool",
    extra:"Celebrity Lectures (global CEOs), Retreat (cultural/sports); clubs for consulting, VC, social impact",
    placement:"2024-25 PGP avg ₹33–35 LPA, highest ₹1 Cr+; 100% with McKinsey, BCG, Goldman Sachs, Amazon",
    est:"2001",
    metrics:[
      {n:"Fits Most Students' Budget",v:3.5,c:"r"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:9.5,c:"g"},
      {n:"Student Community",v:9.8,c:"g"},{n:"Graduate Salaries",v:9.8,c:"g"},
      {n:"Future Opportunities",v:9.9,c:"g"},{n:"Infrastructure",v:9.5,c:"g"},
      {n:"Bureaucracy",v:8.5,c:"g"},{n:"Hostel Life",v:9.0,c:"g"}
    ]
  },

  // ── Law Schools ──────────────────────────────────────────

  "nlsiu bangalore": {
    name:"NLSIU Bangalore", type:"Public Autonomous Law University", location:"Nagarbhavi, Bengaluru, Karnataka", score:9.5, verdict:"India's #1 Law School",
    programs:"BA LLB (Hons, 5 years), LLM (1 year), Master of Public Policy, MSc Business Laws, PhD",
    fees:"₹3.5–4L total (5 years) — highly subsidized; scholarships cover 70%+ students",
    campuses:"Single 45-acre Nagarbhavi campus with Asia's largest law library",
    sports:"Basketball/volleyball courts, football/cricket grounds, indoor badminton/table tennis, gym",
    extra:"Utopia (cultural fest), mooting competitions (world champions), Debating Society, 50+ student bodies",
    placement:"2024-25 UG median ₹15–18 LPA, highest ₹25+ LPA; top firms Cyril Amarchand, AZB, Khaitan & Co.",
    est:"1986 (first batch 1988)",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.7,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "nalsar hyderabad": {
    name:"NALSAR University of Law", type:"Public National Law University", location:"Shamirpet, Hyderabad, Telangana", score:9.2, verdict:"Top 3 NLU — Excellent Value",
    programs:"BA LLB (Hons), BBA LLB (Hons) (5 years), LLM (1 year), MBL, PhD; diplomas in cyber law, IPR",
    fees:"₹3–4L total (5 years); extensive scholarships covering 70%+ students",
    campuses:"Single 55-acre scenic campus near Shamirpet Lake with 7 boys'/7 girls' hostels",
    sports:"Basketball/volleyball courts, football/cricket grounds, indoor badminton/table tennis, gym",
    extra:"Cultural/law fests, mooting competitions (multiple national/international wins), debating society",
    placement:"2024-25 UG median ₹14–16 LPA, highest ₹22+ LPA; top recruiters Cyril Amarchand, AZB, Khaitan",
    est:"1998",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.3,c:"g"},{n:"Campus Experience",v:8.8,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:8.2,c:"g"},
      {n:"Future Opportunities",v:9.2,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.2,c:"g"}
    ]
  },

  "nlu delhi": {
    name:"NLU Delhi", type:"Public National Law University", location:"Dwarka, New Delhi", score:9.3, verdict:"#2 NLU — Delhi Location Advantage",
    programs:"BA LLB (Hons), BBA LLB (Hons) (5 years), LLM (1 year), MSc Legal Metrology, PhD",
    fees:"₹3.5–4L total (5 years); extensive merit/need-based scholarships",
    campuses:"Single modern campus in Dwarka with moot court halls, library, hostels",
    sports:"Basketball/volleyball courts, badminton halls, table tennis, outdoor grounds",
    extra:"Mooting competitions (multiple international wins), cultural/law fests, debating society",
    placement:"2024-25 UG median ₹16–18 LPA, highest ₹26+ LPA; top recruiters Cyril Amarchand, AZB, Supreme Court",
    est:"2008",
    metrics:[
      {n:"Fits Most Students' Budget",v:8.5,c:"g"},{n:"Academic Life",v:9.6,c:"g"},
      {n:"Teaching & Staff",v:9.4,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.3,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:7.5,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  // ── Medical ──────────────────────────────────────────────

  "aiims delhi": {
    name:"AIIMS Delhi", type:"Institute of National Importance", location:"Ansari Nagar, New Delhi", score:9.9, verdict:"India's #1 Medical College — Period",
    programs:"MBBS (5.5 years), MD/MS (3 years), DM/MCh (super-specialty), MDS, PhD, BSc Nursing/Paramedical",
    fees:"₹5,000–₹10,000 total (highly subsidized) — nearly free education",
    campuses:"Single 101-acre South Delhi campus with JPNA Trauma Centre and research labs",
    sports:"Basketball/volleyball courts, cricket/football grounds, indoor gym",
    extra:"Cultural/sports fests, research symposiums, student societies for community service and research",
    placement:"100% placement via INI-CET for PG/residency; alumni in top hospitals globally",
    est:"1956",
    metrics:[
      {n:"Fits Most Students' Budget",v:10.0,c:"g"},{n:"Academic Life",v:10.0,c:"g"},
      {n:"Teaching & Staff",v:10.0,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.5,c:"g"},{n:"Graduate Salaries",v:9.0,c:"g"},
      {n:"Future Opportunities",v:10.0,c:"g"},{n:"Infrastructure",v:9.8,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.5,c:"g"}
    ]
  },

  "kgmu lucknow": {
    name:"King George's Medical University", type:"Autonomous State Medical University", location:"Lucknow, Uttar Pradesh", score:8.5, verdict:"Top Medical College in North India",
    programs:"MBBS (150 seats), BDS, B.Sc Nursing; MD/MS (all specialties), MDS, DM/MCh, M.Sc Medical Biotechnology, PhD",
    fees:"₹1–2L total (highly subsidized); PG ~₹5-10L; hostel ~₹20K-50K/year",
    campuses:"Historic 100+ acre campus near Lucknow center with King George Hospital (3,000 beds)",
    sports:"Cricket/football grounds, basketball/volleyball courts, indoor gym, tennis courts",
    extra:"Cultural/sports fests, research symposiums, student unions, community service programs",
    placement:"High success via NEET-PG; alumni lead major hospitals and research globally",
    est:"1905 (university 2002)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  // ── Design & Architecture ────────────────────────────────

  "nid ahmedabad": {
    name:"NID Ahmedabad", type:"Autonomous Institute of National Importance", location:"Paldi, Ahmedabad, Gujarat", score:9.0, verdict:"India's Best Design School",
    programs:"BDes (4 years) in Product, Furniture, Transportation, Textile, Apparel, Communication, Animation/Film Design; MDes, PhD",
    fees:"₹4–5L total (4 years) — subsidized; MDes ~₹5-6L; scholarships up to 90%",
    campuses:"Main 55-acre Paldi campus (designed by Gautam Sarabhai/Charles Eames); satellite campuses in Gandhinagar, Umreth",
    sports:"Cricket/football grounds, basketball/volleyball courts, indoor gym",
    extra:"Design exhibitions, workshops, industry projects; clubs for prototyping, sustainability, design research",
    placement:"2024-25 avg ₹10–14 LPA, highest ₹25+ LPA; recruiters Flipkart, Titan, TVS, Disney, Microsoft",
    est:"1961",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:9.5,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:9.0,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:9.2,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },
  "bennett university": {
    name:"Bennett University", type:"Private University", location:"Greater Noida, Uttar Pradesh", score:6.8, verdict:"Times Group Backed — Growing Fast",
    programs:"B.Tech in 6 branches (CSE, ECE, ME, Biotech, CS+AI, CS+Data Science), BBA, BA LLB; M.Tech, MBA, PhD",
    fees:"₹4–₹5.5L/year; merit scholarships available",
    campuses:"Single 68-acre campus in Greater Noida with smart classrooms",
    sports:"Cricket/football, basketball/tennis, indoor gym, swimming pool",
    extra:"Cultural+technical fests; clubs for robotics, music, media (Times connection), entrepreneurship",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹30+ LPA; Microsoft, Amazon, Times Group, Wipro",
    est:"2016",
    metrics:[
      {n:"Fits Most Students' Budget",v:5.5,c:"a"},{n:"Academic Life",v:7.0,c:"a"},
      {n:"Teaching & Staff",v:7.0,c:"a"},{n:"Campus Experience",v:7.5,c:"a"},
      {n:"Student Community",v:7.0,c:"a"},{n:"Graduate Salaries",v:6.8,c:"a"},
      {n:"Future Opportunities",v:7.0,c:"a"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.2,c:"a"}
    ]
  },
  "nift delhi": {
    name:"NIFT Delhi", type:"Statutory Deemed University", location:"Hauz Khas, New Delhi", score:8.8, verdict:"India's Top Fashion Institute",
    programs:"BDes (4 years) in Fashion Design, Textile, Knitwear, Leather, Accessory Design, Fashion Communication; MDes, MFM",
    fees:"₹3–5L total (4 years); scholarships up to 100% for merit/SC/ST/need",
    campuses:"HQ + main Delhi campus (Hauz Khas, 7 acres) with 18 satellite campuses nationwide",
    sports:"Basketball/volleyball grounds, indoor facilities; annual sports meets across NIFT network",
    extra:"Design shows, fashion weeks, cultural fests like Whack; student fashion shows, industry collaborations",
    placement:"2024-25 avg ₹8–12 LPA, highest ₹25+ LPA; recruiters Raymond, Aditya Birla, Reliance",
    est:"1986 (statutory 2006)",
    metrics:[
      {n:"Fits Most Students' Budget",v:7.5,c:"a"},{n:"Academic Life",v:9.2,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.0,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:9.0,c:"g"},{n:"Infrastructure",v:8.5,c:"g"},
      {n:"Bureaucracy",v:6.5,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  // ── DU Colleges ──────────────────────────────────────────

  "srcc": {
    name:"Shri Ram College of Commerce", type:"Constituent College — University of Delhi", location:"Maurice Nagar, North Campus, Delhi", score:8.5, verdict:"#1 Commerce College in India",
    programs:"BCom (Hons), BA (Hons) Economics (3 years); MCom, MA Economics, PGDGBO",
    fees:"₹30,000–₹40,000/year (DU fees) — minimal",
    campuses:"Single 16-acre North Campus location with academic blocks, library, auditorium",
    sports:"Cricket/football grounds, basketball/volleyball courts, indoor table tennis/gym",
    extra:"Crossroads (cultural fest), Gracie (commerce fest); societies for dramatics, debates, entrepreneurship",
    placement:"2024-25 UG avg ₹12–15 LPA, highest ₹35+ LPA; top recruiters McKinsey, Goldman Sachs, Deloitte",
    est:"1926",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:8.5,c:"g"},
      {n:"Future Opportunities",v:8.8,c:"g"},{n:"Infrastructure",v:7.5,c:"a"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:5.5,c:"a"}
    ]
  },

  "st stephens": {
    name:"St. Stephen's College Delhi", type:"Constituent College — University of Delhi", location:"University Enclave, North Campus, Delhi", score:8.3, verdict:"Prestige + Liberal Arts — 1% Acceptance",
    programs:"BA (Hons) Economics, English, Hindi, History, Philosophy, Sanskrit, Sociology; BSc (Hons) Chemistry, CS, Maths, Physics",
    fees:"₹25,000–₹40,000/year (DU nominal fees) — minimal",
    campuses:"Single historic campus in DU North Campus designed by architect Walter George",
    sports:"Cricket/football grounds, basketball/volleyball courts, table tennis, gymnasium",
    extra:"Stephanians' cultural fest, History Society (est. 1916), debates, dramatics, music societies",
    placement:"2024-25 UG avg ₹12–14 LPA, highest ₹30+ LPA; placements in consulting, finance, civil services",
    est:"1881",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.2,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.5,c:"g"},{n:"Graduate Salaries",v:8.0,c:"g"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  "miranda house": {
    name:"Miranda House", type:"Constituent College — University of Delhi", location:"North Campus, Delhi", score:8.2, verdict:"NIRF #1 College — Women's Excellence",
    programs:"BA (Hons) Economics, English, Hindi, History, Philosophy, Political Science, Psychology, Sociology; BSc (Hons) Botany, Chemistry, CS, Maths, Physics, Zoology",
    fees:"₹20,000–₹40,000/year (DU nominal fees) — minimal",
    campuses:"Single heritage North Campus site with quadrangle hostel, gardens, library, labs",
    sports:"Basketball/volleyball grounds, badminton courts, table tennis, yoga spaces",
    extra:"Tarang (cultural fest), science exhibitions; societies for debate, dramatics, dance, music, NCC, NSS",
    placement:"2024-25 UG avg ₹12–15 LPA, highest ₹30+ LPA; strong in consulting, finance, research, civil services",
    est:"1948",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:9.0,c:"g"},
      {n:"Teaching & Staff",v:9.0,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.3,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.5,c:"g"},{n:"Infrastructure",v:8.2,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },

  "lsr": {
    name:"Lady Shri Ram College for Women", type:"Constituent College — University of Delhi", location:"Lajpat Nagar IV, South Delhi", score:8.0, verdict:"Top Women's College — Strong Humanities",
    programs:"BA (Hons) Economics, English, Hindi, History, Philosophy, Political Science, Psychology, Sanskrit, Sociology; BSc (Hons) Statistics",
    fees:"₹20,000–₹35,000/year (DU fees) — minimal",
    campuses:"Single 15-acre lush green campus in South Delhi with library, auditorium, gardens",
    sports:"Basketball/volleyball grounds, badminton courts, table tennis, yoga facilities",
    extra:"Tarang (cultural fest), Montage (management fest); societies for debate, dramatics, dance, entrepreneurship",
    placement:"2024-25 UG avg ₹12–15 LPA, highest ₹30+ LPA; strong in consulting, finance, media, NGOs",
    est:"1956",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.5,c:"g"},{n:"Academic Life",v:8.8,c:"g"},
      {n:"Teaching & Staff",v:8.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:9.2,c:"g"},{n:"Graduate Salaries",v:7.8,c:"a"},
      {n:"Future Opportunities",v:8.3,c:"g"},{n:"Infrastructure",v:8.0,c:"g"},
      {n:"Bureaucracy",v:6.0,c:"a"},{n:"Hostel Life",v:7.5,c:"a"}
    ]
  },

  // ── Research Institutes ──────────────────────────────────

  "iiser pune": {
    name:"IISER Pune", type:"Autonomous Public Research Institute (INI)", location:"Pashan, Pune, Maharashtra", score:9.0, verdict:"Best for Pure Science Research",
    programs:"BS-MS dual degree (5 years) in Physics, Chemistry, Mathematics, Biology, Earth Sciences; MSc, Integrated PhD, PhD",
    fees:"₹50,000–₹1L/year — highly subsidized; scholarships/stipends for most students",
    campuses:"Single expansive Pashan campus with research labs, hostels, Central Library",
    sports:"Cricket/football grounds, basketball/tennis courts, indoor gym, volleyball",
    extra:"Science fests, research symposiums; clubs for astronomy, robotics, entrepreneurship",
    placement:"BS-MS graduates pursue PhD abroad (Harvard, MIT, Oxford) or research/industry (~₹10-15 LPA)",
    est:"2006 (INI status 2012)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.8,c:"g"},
      {n:"Teaching & Staff",v:9.8,c:"g"},{n:"Campus Experience",v:8.5,c:"g"},
      {n:"Student Community",v:8.8,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:9.0,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:8.0,c:"g"}
    ]
  },

  "iiser kolkata": {
    name:"IISER Kolkata", type:"Autonomous Public Research Institute (INI)", location:"Haringhata, Nadia, West Bengal", score:8.9, verdict:"Top Science Research — Nature Index #4 India",
    programs:"BS-MS dual degree (5 years) in Biological, Chemical, Geological, Mathematical, Physical Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — subsidized; scholarships/stipends for most",
    campuses:"Single 250-acre Haringhata campus with research labs, hostels, central library",
    sports:"Cricket/football grounds, basketball/tennis courts, indoor gym",
    extra:"Science symposiums, research fests, astronomy clubs, computational science workshops",
    placement:"BS-MS graduates pursue PhD (Stanford, MIT, Cambridge) or research (~₹10-15 LPA)",
    est:"2006 (INI status 2012)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.7,c:"g"},
      {n:"Teaching & Staff",v:9.7,c:"g"},{n:"Campus Experience",v:7.8,c:"a"},
      {n:"Student Community",v:8.5,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.5,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  },
  // ══════════════════════════════════════════
  //  PUNJAB, HARYANA & UTTARAKHAND
  // ══════════════════════════════════════════

  "chitkara university": {
    name:"Chitkara University", type:"Private University", location:"Rajpura, Punjab", score:7.2, verdict:"Placement Machine — Strict Rules",
    programs:"B.E. (CSE is huge), BBA, Pharmacy, Hotel Mgmt",
    fees:"₹1.6–₹1.8L/year",
    campuses:"Clean, disciplined campus on Chandigarh-Patiala highway",
    sports:"Good facilities, active sports culture",
    extra:"Algorythm (fest); very strict on uniforms and attendance",
    placement:"Avg ₹6–8 LPA; massive recruiters like Capgemini/Wipro",
    est:"2002",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "cgc landran": {
    name:"CGC Landran", type:"Private College", location:"Mohali, Punjab", score:6.8, verdict:"Massive Crowds — Decent ROI",
    programs:"B.Tech, MBA, BCA",
    fees:"₹1.1–₹1.3L/year",
    campuses:"Crowded campus, shared by multiple colleges",
    sports:"Limited space due to student volume",
    extra:"Parivartan; known for placement drives (joint campus)",
    placement:"Avg ₹4–6 LPA; hub for pool campus drives",
    est:"2001",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "graphic era": {
    name:"Graphic Era University", type:"Deemed University", location:"Dehradun, Uttarakhand", score:7.0, verdict:"Scenic Campus — Growing Reputation",
    programs:"B.Tech, BBA, Hotel Mgmt",
    fees:"₹2–₹2.5L/year",
    campuses:"Beautiful hilly campus in Clement Town",
    sports:"Good grounds, chilly weather sports",
    extra:"Grafest; active student life",
    placement:"Avg ₹5–7 LPA; good for CS/IT",
    est:"1993",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "upes dehradun": {
    name:"UPES Dehradun", type:"Private University", location:"Bidholi, Dehradun", score:7.3, verdict:"Niche Courses — Expensive but Good",
    programs:"B.Tech (Oil/Gas, Cloud, Cyber), Law, Design",
    fees:"₹3–₹4L/year (High)",
    campuses:"Stunning campus in Himalayan foothills",
    sports:"Good facilities, trekking clubs",
    extra:"Uurja; very posh crowd, modern vibe",
    placement:"Avg ₹6–9 LPA; strong domain specific hiring",
    est:"2003",
    metrics:[{n:"Budget",v:4.0,c:"r"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:9.5,c:"g"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "dit dehradun": {
    name:"DIT University", type:"Private University", location:"Dehradun, Uttarakhand", score:6.7, verdict:"Standard Private — Good Location",
    programs:"B.Tech, B.Arch",
    fees:"₹2L/year",
    campuses:"Mussoorie Road campus, scenic",
    sports:"Basketball, volleyball, gym",
    extra:"Youthopia; decent clubs",
    placement:"Avg ₹4.5–6 LPA; standard IT recruiters",
    est:"1998",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  MAHARASHTRA TIER-2 (NAGPUR/NASHIK/AURANGABAD)
  // ══════════════════════════════════════════

  "rcoem nagpur": {
    name:"Ramdeobaba (RCOEM)", type:"Private Autonomous", location:"Nagpur, Maharashtra", score:7.6, verdict:"Nagpur's No. 1 Private — Reliable",
    programs:"B.E. (CSE, IT, ECE), MBA",
    fees:"₹1.4–₹1.6L/year",
    campuses:"Located on Katol Road, temple inside campus",
    sports:"Good sports culture, huge playground",
    extra:"Pratishruti; disciplined environment",
    placement:"Avg ₹7–10 LPA; dominant in Vidarbha region",
    est:"1984",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "ycce nagpur": {
    name:"YCCE Nagpur", type:"Private Autonomous", location:"Hingna, Nagpur", score:7.0, verdict:"Meghe Group's Best — Mass Recruiters",
    programs:"B.E., M.Tech",
    fees:"₹1.3L/year",
    campuses:"Large campus outskirts of Nagpur",
    sports:"Good grounds, active annual sports",
    extra:"Yash; rigorous academics",
    placement:"Avg ₹4.5–6 LPA; heavy TCS hiring",
    est:"1984",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "geca aurangabad": {
    name:"Govt College of Engineering Aurangabad", type:"State Autonomous", location:"Aurangabad, Maharashtra", score:7.2, verdict:"Govt Tag — Low Fee, Decent Job",
    programs:"B.E. (Civil, Mech, CSE, EEP)",
    fees:"₹70K/year",
    campuses:"Historic city campus",
    sports:"Large open grounds, cricket",
    extra:"Wings; technical focus",
    placement:"Avg ₹5–7 LPA; good for core branches",
    est:"1960",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:5.5,c:"r"}]
  },

  "sandip university": {
    name:"Sandip University", type:"Private University", location:"Nashik, Maharashtra", score:6.5, verdict:"Huge Campus — Nashik's Giant",
    programs:"B.Tech, Law, Management",
    fees:"₹1.2–₹1.5L/year",
    campuses:"Massive 250+ acre green campus",
    sports:"Stadiums, amphitheatres",
    extra:"Sandipotsav; very photogenic campus",
    placement:"Avg ₹3.5–5 LPA; local companies + IT service",
    est:"2017",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.0,c:"a"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:5.5,c:"r"},{n:"Infra",v:8.5,c:"g"}]
  },

  // ══════════════════════════════════════════
  //  KARNATAKA REGIONAL (MYSORE/TUMKUR/MANGALORE)
  // ══════════════════════════════════════════

  "sjce mysore": {
    name:"SJCE Mysore (JSS S&T)", type:"Private Autonomous", location:"Mysuru, Karnataka", score:8.0, verdict:"Mysore's Pride — Excellent Legacy",
    programs:"B.E. (CSE, IS, E&C, Env)",
    fees:"₹50K–₹1L (CET/ComedK)",
    campuses:"Sprawling 102-acre campus, lush green",
    sports:"Cricket stadium, huge grounds",
    extra:"Jayciana (one of Karnataka's biggest fests)",
    placement:"Avg ₹8–11 LPA; tough competition to Bangalore colleges",
    est:"1963",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:8.2,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:8.0,c:"g"}]
  },

  "nie mysore": {
    name:"NIE Mysore", type:"Private Aided Autonomous", location:"Mysuru, Karnataka", score:7.8, verdict:"Core Engineering Excellence",
    programs:"B.E. (Civil & Mech are famous)",
    fees:"₹60K–₹2L (Aided/Unaided)",
    campuses:"Old world charm, city center",
    sports:"Indoor complex, active sports",
    extra:"Technieks; Narayana Murthy is an alumnus",
    placement:"Avg ₹7–10 LPA; very strong alumni network",
    est:"1946",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "sit tumkur": {
    name:"SIT Tumkur", type:"Private Autonomous", location:"Tumakuru, Karnataka", score:7.4, verdict:"Disciplined & Consistent",
    programs:"B.E.",
    fees:"₹2L/year",
    campuses:"65-acre green campus, 70km from Bangalore",
    sports:"Hockey, cricket grounds",
    extra:"Halcyon; strict but good education",
    placement:"Avg ₹5–7 LPA; consistent placements",
    est:"1963",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "sahyadri mangalore": {
    name:"Sahyadri College", type:"Private College", location:"Mangaluru, Karnataka", score:7.0, verdict:"Innovation Hub — Mangalore's Best",
    programs:"B.E.",
    fees:"₹1.5–₹2L/year",
    campuses:"River-side campus, scenic",
    sports:"Cricket ground, boating",
    extra:"Sinchana; huge focus on startups/projects",
    placement:"Avg ₹4.5–7 LPA; growing fast",
    est:"2007",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "sdm dharwad": {
    name:"SDM Dharwad", type:"Private Autonomous", location:"Dharwad, Karnataka", score:7.1, verdict:"North Karnataka's Leader",
    programs:"B.E.",
    fees:"₹1.5L/year",
    campuses:"Clean, disciplined campus",
    sports:"Good facilities",
    extra:"Insignia; cultural hub of region",
    placement:"Avg ₹5–7 LPA; Infosys, TCS, Robert Bosch",
    est:"1979",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  TAMIL NADU REGIONAL (COIMBATORE/MADURAI)
  // ══════════════════════════════════════════

  "cit coimbatore": {
    name:"CIT Coimbatore", type:"Govt Aided Autonomous", location:"Coimbatore, TN", score:7.9, verdict:"Academic Rigor — Govt Aided",
    programs:"B.E., B.Tech",
    fees:"₹50K–₹1L/year",
    campuses:"On Avinashi Road, functional",
    sports:"Hockey, football, athletics",
    extra:"Takshashila; strict academics",
    placement:"Avg ₹7–10 LPA; strong core placements",
    est:"1956",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.2,c:"g"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:6.5,c:"a"}]
  },

  "skcet coimbatore": {
    name:"SKCET Coimbatore", type:"Private Autonomous", location:"Kuniamuthur, Coimbatore", score:7.6, verdict:"Modern & Progressive",
    programs:"B.E., B.Tech",
    fees:"₹1.5L/year",
    campuses:"Beautiful green modern campus",
    sports:"Basketball, gym, lush grounds",
    extra:"Dhruva; liberal compared to others",
    placement:"Avg ₹6–9 LPA; Amazon, Zoho, Accenture",
    est:"1998",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "kct coimbatore": {
    name:"Kumaraguru (KCT)", type:"Private Autonomous", location:"Saravanampatti, Coimbatore", score:7.8, verdict:"Best Infrastructure in Region",
    programs:"B.E., B.Tech",
    fees:"₹1.5–₹2L/year",
    campuses:"Massive 150-acre tech-savvy campus",
    sports:"World class grounds, gym",
    extra:"Yugam; huge focus on leadership (FORGE)",
    placement:"Avg ₹6–9 LPA; very active placement cell",
    est:"1984",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:9.2,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:9.5,c:"g"}]
  },

  "tce madurai": {
    name:"Thiagarajar College (TCE)", type:"Govt Aided Autonomous", location:"Madurai, TN", score:7.9, verdict:"Madurai's Engineering Pride",
    programs:"B.E., B.Arch",
    fees:"₹50K–₹1L/year",
    campuses:"Historic campus near temple",
    sports:"Cricket, ball badminton",
    extra:"Tech fests; architectural beauty",
    placement:"Avg ₹7–10 LPA; Honeywell, Zoho favorites",
    est:"1957",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:7.0,c:"a"}]
  },

  "mepco schlenk": {
    name:"Mepco Schlenk", type:"Private Autonomous", location:"Sivakasi, TN", score:7.5, verdict:"Strict Discipline — Academic Topper",
    programs:"B.E., B.Tech",
    fees:"₹1–₹1.5L/year",
    campuses:"Remote campus, strict rules",
    sports:"Mineral water swimming pool, courts",
    extra:"Legacy of university ranks",
    placement:"Avg ₹5–8 LPA; consistent record",
    est:"1984",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:8.5,c:"g"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  ANDHRA & TELANGANA REGIONAL (VIZAG/WARANGAL)
  // ══════════════════════════════════════════

  "gitam vizag": {
    name:"GITAM University", type:"Deemed University", location:"Visakhapatnam, AP", score:7.4, verdict:"Vizag's Education Hub — Massive",
    programs:"B.Tech, Medical, Science, Law",
    fees:"₹2.5–₹3L/year",
    campuses:"Beach-view campus, one of India's best",
    sports:"Indoor stadiums, cricket grounds",
    extra:"Gusac; huge student activity center",
    placement:"Avg ₹5–7 LPA; mass recruiters mostly",
    est:"1980",
    metrics:[{n:"Budget",v:5.0,c:"r"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "gvp vizag": {
    name:"Gayatri Vidya Parishad (GVP)", type:"Private Autonomous", location:"Madhurawada, Vizag", score:7.3, verdict:"Academic Focused — Best EAPCET Option",
    programs:"B.Tech",
    fees:"₹1.1L/year",
    campuses:"Hillside campus",
    sports:"Limited grounds",
    extra:"Vidya; focus on studies/GATE",
    placement:"Avg ₹5–8 LPA; Amazon, TCS Sol",
    est:"1996",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "vr siddhartha": {
    name:"VR Siddhartha (VRSEC)", type:"Private Autonomous", location:"Vijayawada, AP", score:7.2, verdict:"Vijayawada's Top Engineering",
    programs:"B.Tech",
    fees:"₹1.1L/year",
    campuses:"Urban campus in Kanuru",
    sports:"Basic facilities",
    extra:"AFOSEC; alumni network strong",
    placement:"Avg ₹5–7 LPA; Microsoft, Cisco",
    est:"1977",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "kits warangal": {
    name:"KITSW (Kakatiya Institute)", type:"Private Autonomous", location:"Warangal, Telangana", score:7.0, verdict:"Warangal's Best Private",
    programs:"B.Tech",
    fees:"₹1.25L/year",
    campuses:"Spacious campus",
    sports:"Large grounds",
    extra:"Sumshodhini; decent technical culture",
    placement:"Avg ₹4.5–6.5 LPA; TCS, Infosys",
    est:"1980",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:7.2,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  KERALA (COCHIN/TRIVANDRUM)
  // ══════════════════════════════════════════

  "rajagiri kochi": {
    name:"Rajagiri (RSET)", type:"Private Autonomous", location:"Kakkanad, Kochi", score:7.4, verdict:"Infopark Location — Strict & Good",
    programs:"B.Tech",
    fees:"₹1–₹1.5L/year",
    campuses:"Beautiful architecture in IT hub",
    sports:"Basketball, football, gym",
    extra:"Bharatham; very strict discipline",
    placement:"Avg ₹5–8 LPA; proximity to companies helps",
    est:"2001",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "mec kochi": {
    name:"Model Engineering College", type:"Govt Controlled", location:"Thrikkakara, Kochi", score:7.6, verdict:"Coding Culture — Top in Kerala",
    programs:"B.Tech",
    fees:"₹40K–₹75K/year",
    campuses:"Small but productive",
    sports:"Limited",
    extra:"Excel (tech fest); huge coding reputation",
    placement:"Avg ₹8–12 LPA; product companies love MEC",
    est:"1989",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:5.5,c:"r"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:6.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  PRIVATE MEDICAL & LAW (REAL OPTIONS)
  // ══════════════════════════════════════════

  "ramaiah medical": {
    name:"MS Ramaiah Medical College", type:"Private Medical", location:"Bengaluru, Karnataka", score:8.5, verdict:"Top Tier Private Medical",
    programs:"MBBS, MD/MS, DM",
    fees:"High (Management quota)",
    campuses:"Attached to huge hospital in MSR Nagar",
    sports:"Shared with engineering college",
    extra:"Udbhav; excellent clinical exposure",
    placement:"One of the best in South India",
    est:"1979",
    metrics:[{n:"Budget",v:4.0,c:"r"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:8.0,c:"g"},{n:"Clinical",v:9.0,c:"g"},{n:"Infra",v:8.5,c:"g"}]
  },

  "kims bangalore": {
    name:"Kempegowda Institute (KIMS)", type:"Private Medical", location:"Bengaluru, Karnataka", score:7.8, verdict:"City Center — High Patient Flow",
    programs:"MBBS, MD/MS",
    fees:"Moderate (Govt seats) to High",
    campuses:"VV Puram (College) + Banashankari (Hospital)",
    sports:"Limited space",
    extra:"Atharva; Vokkaliga sangha management",
    placement:"Strong clinical skills due to caseload",
    est:"1980",
    metrics:[{n:"Budget",v:5.0,c:"r"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:5.0,c:"r"},{n:"Clinical",v:8.5,c:"g"},{n:"Infra",v:6.5,c:"a"}]
  },

  "sri ramachandra": {
    name:"Sri Ramachandra Medical", type:"Deemed University", location:"Porur, Chennai", score:8.4, verdict:"Premium Medical Education — Elite",
    programs:"MBBS, MD/MS, BDS",
    fees:"₹25L/year (Very Expensive)",
    campuses:"World class infrastructure, green campus",
    sports:"Top tier grounds and gym",
    extra:"Research focus; Harvard tie-ups",
    placement:"Alumni in US/UK; high quality training",
    est:"1985",
    metrics:[{n:"Budget",v:2.0,c:"r"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:9.5,c:"g"},{n:"Clinical",v:9.0,c:"g"},{n:"Infra",v:9.8,c:"g"}]
  },

  "dy patil medical pune": {
    name:"Dr. D.Y. Patil Medical College", type:"Deemed University", location:"Pimpri, Pune", score:7.5, verdict:"Huge Infra — Very Expensive",
    programs:"MBBS, MD/MS",
    fees:"₹25L+/year",
    campuses:"Massive hi-tech campus, stadium nearby",
    sports:"Stadium access, world class",
    extra:"Opulence; distinct campus culture",
    placement:"Good clinical exposure",
    est:"1996",
    metrics:[{n:"Budget",v:2.0,c:"r"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:9.5,c:"g"},{n:"Clinical",v:8.0,c:"g"},{n:"Infra",v:9.5,c:"g"}]
  },

  "ils pune": {
    name:"ILS Law College", type:"Private Aided", location:"Law College Road, Pune", score:8.8, verdict:"Legendary Law School — High ROI",
    programs:"BA LLB, LLB",
    fees:"₹40K–₹50K/year (Very Low)",
    campuses:"Green 195-acre campus, famous hill",
    sports:"Cricket, swimming pool",
    extra:"Legal Aid, Mooting; relaxed vibe",
    placement:"Strong litigation/judiciary focus + firms",
    est:"1924",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:8.8,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:7.5,c:"a"}]
  },

  "sls pune": {
    name:"Symbiosis Law School (SLS)", type:"Private", location:"Viman Nagar, Pune", score:8.6, verdict:"Top Private Law School",
    programs:"BA LLB, BBA LLB",
    fees:"₹3–₹4L/year",
    campuses:"Modern Viman Nagar campus (near airport)",
    sports:"Shared facilities",
    extra:"Symbhav; corporate culture",
    placement:"Avg ₹8–10 LPA; top law firms recruit",
    est:"1977",
    metrics:[{n:"Budget",v:5.0,c:"r"},{n:"Academics",v:8.8,c:"g"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:8.5,c:"g"}]
  },

  "army law mohali": {
    name:"Army Institute of Law", type:"Private (Army)", location:"Mohali, Punjab", score:8.0, verdict:"Disciplined — Best for Army Kids",
    programs:"BA LLB",
    fees:"₹1.5–₹2L/year",
    campuses:"Compact, secure campus",
    sports:"Basketball, volleyball",
    extra:"Checkmate (moot); disciplined life",
    placement:"Good firm placements; strong alumni",
    est:"1999",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },
    // ══════════════════════════════════════════
  //  UTTAR PRADESH (AKTU/STATE GIANTS)
  // ══════════════════════════════════════════

  "iet lucknow": {
    name:"IET Lucknow", type:"State Government (AKTU)", location:"Sitapur Road, Lucknow", score:7.5, verdict:"Top AKTU College — Low Fees",
    programs:"B.Tech, MBA, MCA",
    fees:"₹80K–₹90K/year",
    campuses:"Green government campus, decent location",
    sports:"Stadium available, annual fest",
    extra:"Encore; studious environment",
    placement:"Avg ₹5–7 LPA; TCS, checking for Govt exams",
    est:"1984",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:6.0,c:"a"}]
  },

  "psit kanpur": {
    name:"PSIT Kanpur", type:"Private College", location:"Bhauti, Kanpur", score:7.0, verdict:"Strict Discipline — 90% Attendance",
    programs:"B.Tech, B.Pharm, BBA, BCA",
    fees:"₹1.5–₹1.8L/year",
    campuses:"Hotel-like infrastructure on highway",
    sports:"Good grounds but limited time due to classes",
    extra:"Ignitia; strict uniform, school-like vibe",
    placement:"Avg ₹4–6 LPA; Infosys/Capgemini bulk hiring",
    est:"2004",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "knit sultanpur": {
    name:"KNIT Sultanpur", type:"State Government", location:"Sultanpur, UP", score:7.0, verdict:"Rural Govt College — Good ROI",
    programs:"B.Tech, MCA",
    fees:"₹65K–₹80K/year",
    campuses:"Large campus on Varanasi-Lucknow highway",
    sports:"Standard government facilities",
    extra:"Anubhuti; strong alumni in PSU/IES",
    placement:"Avg ₹4–6 LPA; mostly off-campus/GATE focus",
    est:"1976",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:5.5,c:"r"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:5.0,c:"r"}]
  },

  "biet jhansi": {
    name:"BIET Jhansi", type:"State Government", location:"Jhansi, UP", score:6.8, verdict:"Bundelkhand's Best Govt Option",
    programs:"B.Tech",
    fees:"₹60K–₹70K/year",
    campuses:"Rocky terrain campus, isolated",
    sports:"Open grounds",
    extra:"Abhinandan; peaceful, low distraction",
    placement:"Avg ₹4–5 LPA; TCS is main recruiter",
    est:"1986",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:5.5,c:"r"}]
  },

  "jss noida": {
    name:"JSS Academy (JSSATE)", type:"Private (AKTU)", location:"Sector 62, Noida", score:7.2, verdict:"Strict — Good Location Advantage",
    programs:"B.Tech (CSE/IT focus)",
    fees:"₹1.4L/year",
    campuses:"Compact campus in IT hub",
    sports:"Limited space",
    extra:"Zealicon; rigorous academics",
    placement:"Avg ₹5–7 LPA; Adobe/Amazon visit occasionally",
    est:"1998",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "abes ghaziabad": {
    name:"ABES Engineering College", type:"Private (AKTU)", location:"Lal Kuan, Ghaziabad", score:6.9, verdict:"Discipline Factory — Reliable",
    programs:"B.Tech",
    fees:"₹1.4L/year",
    campuses:"On NH-24, decent infra",
    sports:"Stadium nearby",
    extra:"Generations; coding clubs active",
    placement:"Avg ₹4.5–6 LPA; consistent mass recruitment",
    est:"2000",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "akgec ghaziabad": {
    name:"Ajay Kumar Garg (AKGEC)", type:"Private (AKTU)", location:"Ghaziabad, UP", score:7.1, verdict:"Technical Discipline — Strict",
    programs:"B.Tech",
    fees:"₹1.4L/year",
    campuses:"Clean, disciplined campus",
    sports:"Football, robotic labs",
    extra:"Scrolls; focus on robotics/automation",
    placement:"Avg ₹5–6.5 LPA; Infosys major recruiter",
    est:"1998",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "niet greater noida": {
    name:"NIET Greater Noida", type:"Private Autonomous", location:"Knowledge Park, Greater Noida", score:6.7, verdict:"Growing Fast — Marketing Heavy",
    programs:"B.Tech, Pharmacy",
    fees:"₹1.3–₹1.5L/year",
    campuses:"Standard private campus",
    sports:"Courts, gym",
    extra:"Ebullience; active placement cell",
    placement:"Avg ₹4–5.5 LPA; Capgemini/TCS",
    est:"2001",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  DELHI IPU & HARYANA GOVT
  // ══════════════════════════════════════════

  "ymca faridabad": {
    name:"JC Bose UST (YMCA)", type:"State Government", location:"Faridabad, Haryana", score:7.6, verdict:"Haryana's Best ROI — Tech Focus",
    programs:"B.Tech",
    fees:"₹80K–₹90K/year",
    campuses:"Urban campus on Mathura Road",
    sports:"Active sports culture",
    extra:"Elements; strong tech clubs",
    placement:"Avg ₹6–9 LPA; Samsung, Adobe recruit here",
    est:"1969",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:6.0,c:"a"}]
  },

  "dcrust murthal": {
    name:"DCRUST Murthal", type:"State Government", location:"Murthal, Sonipat", score:7.0, verdict:"Govt Campus — Relaxed Life",
    programs:"B.Tech, B.Arch",
    fees:"₹60K/year",
    campuses:"Huge 270-acre campus near famous Dhabas",
    sports:"Great grounds",
    extra:"Technova; laid back academic pressure",
    placement:"Avg ₹4–6 LPA; TCS + core companies",
    est:"1987",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "bpit delhi": {
    name:"BPIT Delhi", type:"Private (IPU)", location:"Rohini, Delhi", score:7.2, verdict:"Good IPU College — Value",
    programs:"B.Tech",
    fees:"₹1.2L/year",
    campuses:"Small campus in Rohini",
    sports:"Limited",
    extra:"Corona; coding society is improving",
    placement:"Avg ₹6–8 LPA; ZS Associates, Amazon",
    est:"2007",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:5.0,c:"r"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:6.0,c:"a"}]
  },

  "bvcoe delhi": {
    name:"Bharati Vidyapeeth Delhi", type:"Private (IPU)", location:"Paschim Vihar, Delhi", score:7.3, verdict:"Stable IPU Choice — Metro Connected",
    programs:"B.Tech",
    fees:"₹1.3L/year",
    campuses:"Next to Metro station, compact",
    sports:"Shared grounds",
    extra:"Xstasy; good location advantage",
    placement:"Avg ₹6–8 LPA; TCS, Ion",
    est:"1999",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:5.5,c:"r"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "vips delhi": {
    name:"VIPS Delhi", type:"Private (IPU)", location:"Pitampura, Delhi", score:7.4, verdict:"Best for BCA/BJMC/Law in IPU",
    programs:"BCA, BJMC, BA LLB, BBA",
    fees:"₹1L/year",
    campuses:"Flashy modern building (The Matrix movie vibes)",
    sports:"Indoor focused",
    extra:"Spandan; very active media/law crowds",
    placement:"Decent for non-tech; Avg ₹4–5 LPA",
    est:"2000",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "iitm janakpuri": {
    name:"IITM Janakpuri", type:"Private (IPU)", location:"Janakpuri, Delhi", score:6.5, verdict:"Decent for BCA/BBA",
    programs:"BCA, BBA, MBA",
    fees:"₹90K/year",
    campuses:"Small building based campus",
    sports:"Very limited",
    extra:"Fiesta; academic focused",
    placement:"Avg ₹3–4 LPA; Wipro/Deloitte hire",
    est:"1999",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:4.0,c:"r"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:5.5,c:"r"}]
  },

  // ══════════════════════════════════════════
  //  PUNE & MUMBAI (TIER 2/3 WORKHORSES)
  // ══════════════════════════════════════════

  "pccoe pune": {
    name:"PCCOE Pune", type:"Private (PCET)", location:"Akurdi/Nigdi, Pune", score:7.6, verdict:"Placement Engine of Pune",
    programs:"B.E.",
    fees:"₹1.3–₹1.5L/year",
    campuses:"Disciplined campus in industrial belt",
    sports:"Good grounds",
    extra:"Spectrum; strict attendance policy",
    placement:"Avg ₹6–9 LPA; KPIT, Capgemini favorites",
    est:"1999",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:7.5,c:"a"}]
  },

  "cummins pune": {
    name:"Cummins College of Engineering", type:"Private (Women)", location:"Karve Nagar, Pune", score:7.9, verdict:"Top Women's Engineering College",
    programs:"B.Tech (Women Only)",
    fees:"₹1.6–₹1.8L/year",
    campuses:"Green campus in heart of Pune",
    sports:"Active sports teams",
    extra:"Gandhaar; strong technical focus",
    placement:"Avg ₹8–12 LPA; Goldman, Microsoft, Walmart diversity hiring",
    est:"1991",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:7.5,c:"a"}]
  },

  "sinhgad vadgaon": {
    name:"Sinhgad (SCOE) Vadgaon", type:"Private", location:"Vadgaon Budruk, Pune", score:6.8, verdict:"Massive Campus — Huge Crowd",
    programs:"B.E. (Huge intake)",
    fees:"₹1.1–₹1.3L/year",
    campuses:"Hillside massive campus, famous for crowds",
    sports:"Cricket ground is legendary",
    extra:"Neon (Karandak); lively, party atmosphere",
    placement:"Avg ₹4–5 LPA; Accenture/Cognizant mass hire",
    est:"1996",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.0,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "aissms pune": {
    name:"AISSMS IOIT", type:"Private", location:"Near RTO, Pune", score:7.0, verdict:"Royal Heritage — Central Location",
    programs:"B.E.",
    fees:"₹1.2L/year",
    campuses:"Historic building near station",
    sports:"Shared grounds",
    extra:"Alacrity; Shivaji Maharaj heritage",
    placement:"Avg ₹4.5–6 LPA",
    est:"1992",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "thadomal mumbai": {
    name:"Thadomal Shahani (TSEC)", type:"Private", location:"Bandra West, Mumbai", score:7.5, verdict:"SoBo Crowd — Coding Culture",
    programs:"B.E. (CSE/IT focus)",
    fees:"₹1.8L/year",
    campuses:"Vertical campus in posh Bandra",
    sports:"None (use National College ground)",
    extra:"Trifles; rich lively crowd",
    placement:"Avg ₹8–10 LPA; JP Morgan, Deutsche Bank",
    est:"1983",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:4.0,c:"r"},{n:"Placement",v:7.8,c:"a"},{n:"Infra",v:6.0,c:"a"}]
  },

  "vesit mumbai": {
    name:"VESIT Mumbai", type:"Private", location:"Chembur, Mumbai", score:7.4, verdict:"Disciplined — Sindhi Minority",
    programs:"B.E., MCA",
    fees:"₹1.2L/year",
    campuses:"Spacious (for Mumbai) in Chembur",
    sports:"Playground available",
    extra:"Utsav; strict academic focus",
    placement:"Avg ₹6–9 LPA; consistent IT jobs",
    est:"1984",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "dy patil navi mumbai": {
    name:"RAIT (DY Patil)", type:"Private", location:"Nerul, Navi Mumbai", score:7.2, verdict:"Huge Stadium Campus — Active Life",
    programs:"B.E.",
    fees:"₹1.5–₹1.7L/year",
    campuses:"Famous for DY Patil Stadium",
    sports:"World class cricket stadium access",
    extra:"Horizon; concerts and events",
    placement:"Avg ₹5–7 LPA; mass recruiters",
    est:"1983",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "walchand sangli": {
    name:"Walchand College of Engineering", type:"Govt Aided Autonomous", location:"Sangli, Maharashtra", score:7.7, verdict:"Historic Engineering — Civil/Mech Legacy",
    programs:"B.Tech, M.Tech",
    fees:"₹85K/year",
    campuses:"90-acre old school campus",
    sports:"Huge grounds",
    extra:"Gathering; simple town life",
    placement:"Avg ₹7–9 LPA; very strong alumni base",
    est:"1947",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  KARNATAKA (BANGALORE & REGIONAL TIER 3)
  // ══════════════════════════════════════════

  "acharya bangalore": {
    name:"Acharya Institute of Technology", type:"Private", location:"Soladevanahalli, Bengaluru", score:6.8, verdict:"Massive Campus — Diverse Crowd",
    programs:"B.E., M.Tech, MBA",
    fees:"₹2–₹2.5L/year",
    campuses:"120-acre huge campus, very scenic",
    sports:"Stadium, horse riding",
    extra:"Acharya Habba (huge fest); international students",
    placement:"Avg ₹4–6 LPA; bulk hiring",
    est:"2000",
    metrics:[{n:"Budget",v:6.0,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "mvj bangalore": {
    name:"MVJ College of Engineering", type:"Private", location:"Whitefield, Bengaluru", score:6.5, verdict:"Near IT Parks — Good Infra",
    programs:"B.E.",
    fees:"₹2L/year",
    campuses:"On highway, near Whitefield",
    sports:"Good grounds",
    extra:"Swayam; strict management",
    placement:"Avg ₹4–5.5 LPA",
    est:"1982",
    metrics:[{n:"Budget",v:6.5,c:"a"},{n:"Academics",v:6.2,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "reva university": {
    name:"Reva University", type:"Private University", location:"Yelahanka, Bengaluru", score:7.0, verdict:"Modern & Green — Marketing Heavy",
    programs:"B.Tech, Law, Architecture",
    fees:"₹2.5–₹3.5L/year",
    campuses:"Impeccable green modern campus",
    sports:"Good facilities",
    extra:"Revamp; vibrant student life",
    placement:"Avg ₹5–7 LPA; growing fast",
    est:"2012",
    metrics:[{n:"Budget",v:5.0,c:"r"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "kle tech hubli": {
    name:"KLE Tech (BVB Hubli)", type:"Private University", location:"Hubli, Karnataka", score:7.6, verdict:"Entrepreneurship Hub of North Karnataka",
    programs:"B.E.",
    fees:"₹1.5–₹2L/year",
    campuses:"Spacious, innovation focused",
    sports:"Good grounds",
    extra:"Pleiades; famous for Sudha Murthy alumnus",
    placement:"Avg ₹6–9 LPA; increasing product companies",
    est:"1947",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "git belgaum": {
    name:"KLS Gogte (GIT)", type:"Private Autonomous", location:"Belagavi, Karnataka", score:7.2, verdict:"Belgaum's Best — Landmark",
    programs:"B.E., B.Arch",
    fees:"₹1.2L/year",
    campuses:"Beautiful hilly campus",
    sports:"Active sports culture",
    extra:"Aura; nice weather",
    placement:"Avg ₹5–7 LPA; Mercedes Benz recruits here",
    est:"1979",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  TAMIL NADU (CHENNAI & DISTRICTS)
  // ══════════════════════════════════════════

  "rajalakshmi chennai": {
    name:"Rajalakshmi Engineering (REC)", type:"Private Autonomous", location:"Thandalam, Chennai", score:7.5, verdict:"Yellow Bus Empire — Strict & Good",
    programs:"B.E., B.Tech",
    fees:"₹1.5L/year",
    campuses:"Large campus on highway",
    sports:"Good facilities, morning practice",
    extra:"Recharge; strict on dress code/buses",
    placement:"Avg ₹5–8 LPA; TCS/Pegasystems",
    est:"1997",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "panimalar chennai": {
    name:"Panimalar Engineering College", type:"Private", location:"Poonamallee, Chennai", score:7.0, verdict:"Famous for Food & Discipline",
    programs:"B.E.",
    fees:"₹1.2L/year",
    campuses:"Grand arch, massive mess hall",
    sports:"Limited",
    extra:"Free lunch for all (famous); very strict rules",
    placement:"Avg ₹4–6 LPA; Infosys bulk hire",
    est:"2000",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "sri sairam chennai": {
    name:"Sri Sairam Engineering", type:"Private Autonomous", location:"West Tambaram, Chennai", score:7.4, verdict:"Discipline First — Consistent Results",
    programs:"B.E.",
    fees:"₹1.2L/year",
    campuses:"Green, school-like vibe",
    sports:"Indoor stadium",
    extra:"Strict monitoring; results focus",
    placement:"Avg ₹5–7 LPA; Zoho/TCS",
    est:"1995",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "kongu engineering": {
    name:"Kongu Engineering College", type:"Private Autonomous", location:"Erode, Tamil Nadu", score:7.3, verdict:"Erode's Giant — Rural Tech Hub",
    programs:"B.E., B.Sc",
    fees:"₹1L/year",
    campuses:"167-acre massive campus",
    sports:"Excellent rural sports culture",
    extra:"Enthusia; huge alumni network",
    placement:"Avg ₹4.5–7 LPA; core & IT mix",
    est:"1984",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.2,c:"a"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "sona salem": {
    name:"Sona College of Technology", type:"Private Autonomous", location:"Salem, Tamil Nadu", score:7.2, verdict:"Salem's Best — Textile/Fashion History",
    programs:"B.E., B.Tech (Fashion/Textile)",
    fees:"₹1–₹1.2L/year",
    campuses:"City center campus",
    sports:"Swimming pool, grounds",
    extra:"Sonaria; industry connected",
    placement:"Avg ₹4.5–6.5 LPA; strong in textile/IT",
    est:"1997",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "kalasalingam": {
    name:"Kalasalingam University", type:"Deemed University", location:"Srivilliputhur, Madurai", score:6.8, verdict:"Rural University — Inclusive",
    programs:"B.Tech, Agriculture, B.Arch",
    fees:"₹1–₹1.5L/year",
    campuses:" scenic hill backdrop",
    sports:"Huge grounds, swimming",
    extra:"Special schools for speech/hearing impaired",
    placement:"Avg ₹4–5 LPA; mass hiring",
    est:"1984",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  ANDHRA & TELANGANA (LOCAL GIANTS)
  // ══════════════════════════════════════════

  "malla reddy": {
    name:"Malla Reddy Engineering (MREC)", type:"Private Autonomous", location:"Maisammaguda, Hyderabad", score:6.8, verdict:"Massive Crowd — The 'Group' Effect",
    programs:"B.Tech",
    fees:"₹1L/year",
    campuses:"Multiple colleges in one campus",
    sports:"Cricket grounds",
    extra:"Vishesh; busy campus",
    placement:"Avg ₹4–6 LPA; bulk hiring hub",
    est:"2002",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "vardhaman hyderabad": {
    name:"Vardhaman College", type:"Private Autonomous", location:"Shamshabad, Hyderabad", score:7.4, verdict:"Strict & Disciplined — Near Airport",
    programs:"B.Tech",
    fees:"₹1.3L/year",
    campuses:"Green campus",
    sports:"Good facilities",
    extra:"Technolites; strict on bunking",
    placement:"Avg ₹6–8 LPA; Amazon hires here",
    est:"1999",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:7.2,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "narayanamma": {
    name:"G. Narayanamma (GNITS)", type:"Private (Women)", location:"Shaikpet, Hyderabad", score:7.6, verdict:"Top Women's College in TS",
    programs:"B.Tech (Women Only)",
    fees:"₹1.2L/year",
    campuses:"Secure, green campus",
    sports:"Indoor/Outdoor courts",
    extra:"Cultural fests; Apple/JPMC recruitment",
    placement:"Avg ₹7–10 LPA; diversity hiring advantage",
    est:"1997",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:7.8,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:7.5,c:"a"}]
  },

  "mvgr vizag": {
    name:"MVGR College", type:"Private Autonomous", location:"Vizianagaram, AP", score:7.0, verdict:"North Coastal AP's Reliable Choice",
    programs:"B.Tech",
    fees:"₹1L/year",
    campuses:"Spacious campus",
    sports:"Cricket ground",
    extra:"Aadhrita; industry focus",
    placement:"Avg ₹4.5–6 LPA; TCS/Wipro",
    est:"1997",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  KERALA (TIER 2/3)
  // ══════════════════════════════════════════

  "saintgits kottayam": {
    name:"Saintgits College", type:"Private Autonomous", location:"Kottayam, Kerala", score:7.0, verdict:"Strict — Beautiful Hill Campus",
    programs:"B.Tech, MBA",
    fees:"₹1–₹1.2L/year",
    campuses:"Very scenic, disciplined",
    sports:"Basketball, gym",
    extra:"Nakshatra; uniform mandatory",
    placement:"Avg ₹4–6 LPA; Infosys/IBS",
    est:"2002",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:8.0,c:"g"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "fisat kerala": {
    name:"FISAT", type:"Private Self-Financing", location:"Angamaly, Kochi", score:7.1, verdict:"Federal Bank Funded — Good Infra",
    programs:"B.Tech",
    fees:"₹1L/year",
    campuses:"Well maintained",
    sports:"Cricket/football",
    extra:"Bharatham; bank backed stability",
    placement:"Avg ₹4.5–6.5 LPA; TCS/Cognizant",
    est:"2002",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  // ══════════════════════════════════════════
  //  PUNJAB/MP/GUJARAT/ODISHA (REGIONAL)
  // ══════════════════════════════════════════

  "pcte ludhiana": {
    name:"PCTE Group", type:"Private", location:"Ludhiana, Punjab", score:6.5, verdict:"Management/Tech Mix — Lively",
    programs:"B.Tech, MBA, Hotel Mgmt",
    fees:"₹1L/year",
    campuses:"Compact",
    sports:"Limited",
    extra:"Koshish (cultural); active student life",
    placement:"Avg ₹4–5 LPA",
    est:"1999",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:6.0,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:6.0,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "gne ludhiana": {
    name:"GNE Ludhiana", type:"Govt Aided Autonomous", location:"Ludhiana, Punjab", score:7.2, verdict:"Oldest in Punjab — Core Engg",
    programs:"B.Tech",
    fees:"₹90K/year",
    campuses:"Old brick campus",
    sports:"Hockey, football",
    extra:"Anand Utsav; Sikh minority status",
    placement:"Avg ₹5–7 LPA; good mechanical/civil jobs",
    est:"1956",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:6.0,c:"a"}]
  },

  "oriental bhopal": {
    name:"Oriental (OIST) Bhopal", type:"Private", location:"Raisen Road, Bhopal", score:6.8, verdict:"MP's Oldest Private — Coding Hub",
    programs:"B.E. (CSE)",
    fees:"₹1.1L/year",
    campuses:"Standard architecture",
    sports:"Basic courts",
    extra:"Tech fests; TCS major recruiter",
    placement:"Avg ₹4–6 LPA; consistent mass hiring",
    est:"1995",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:6.5,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "acropolis indore": {
    name:"Acropolis Indore", type:"Private", location:"Bypass Road, Indore", score:6.7, verdict:"School-like Discipline — Safe",
    programs:"B.Tech",
    fees:"₹1.1L/year",
    campuses:"One building mostly",
    sports:"Limited",
    extra:"Ardor; academics first",
    placement:"Avg ₹4–5 LPA; coding focused",
    est:"2005",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:5.5,c:"r"},{n:"Placement",v:6.2,c:"a"},{n:"Infra",v:6.5,c:"a"}]
  },

  "ld engineering": {
    name:"LD College of Engineering", type:"State Government", location:"Ahmedabad, Gujarat", score:7.8, verdict:"Gujarat's Govt Pride — ROI King",
    programs:"B.E.",
    fees:"₹1.5K–₹5K/year (Yes, barely anything)",
    campuses:"Next to Gujarat University, old infra",
    sports:"Shared university grounds",
    extra:"Lakshya; highly competitive entry",
    placement:"Avg ₹6–9 LPA; Reliance, Adani, L&T",
    est:"1948",
    metrics:[{n:"Budget",v:10.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:5.5,c:"r"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:5.0,c:"r"}]
  },

  "indus ahmedabad": {
    name:"Indus University", type:"Private University", location:"Rancharda, Ahmedabad", score:6.5, verdict:"Aircraft Design Niche — Far from City",
    programs:"B.Tech, Architecture, Aviation",
    fees:"₹1.2L/year",
    campuses:"Green, silent campus",
    sports:"Good grounds",
    extra:"Electika; transport is long",
    placement:"Avg ₹4–5 LPA",
    est:"2006",
    metrics:[{n:"Budget",v:7.5,c:"a"},{n:"Academics",v:6.5,c:"a"},{n:"Campus",v:7.5,c:"a"},{n:"Placement",v:5.8,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "cv raman odisha": {
    name:"CV Raman Global University", type:"Private University", location:"Bhubaneswar, Odisha", score:6.8, verdict:"Skills Focused — WorldSkills Winners",
    programs:"B.Tech, Marine Engg",
    fees:"₹1.2–₹1.5L/year",
    campuses:"Green campus",
    sports:"Average",
    extra:"Celegance; focus on vocational skills",
    placement:"Avg ₹4.5–6 LPA",
    est:"1997",
    metrics:[{n:"Budget",v:7.0,c:"a"},{n:"Academics",v:6.8,c:"a"},{n:"Campus",v:7.0,c:"a"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:7.5,c:"a"}]
  },

  "silicon bhubaneswar": {
    name:"Silicon Institute (Silicon Tech)", type:"Private Autonomous", location:"Bhubaneswar, Odisha", score:7.0, verdict:"Academic Rigor — The 'IIT' of Private",
    programs:"B.Tech",
    fees:"₹1.2L/year",
    campuses:"Compact, serious vibe",
    sports:"Limited",
    extra:"Zygon; known for strict studies",
    placement:"Avg ₹5–7 LPA; Infosys/Wipro/Mindtree",
    est:"2001",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:7.5,c:"a"},{n:"Campus",v:6.0,c:"a"},{n:"Placement",v:6.8,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "bit patna": {
    name:"BIT Mesra (Patna Campus)", type:"Extension Centre", location:"Patna, Bihar", score:6.8, verdict:"BIT Brand — Near Airport",
    programs:"B.E., BCA",
    fees:"₹2.5L/year (High)",
    campuses:"Small campus",
    sports:"Very limited",
    extra:"Technika; BIT Mesra degree",
    placement:"Avg ₹6–8 LPA (Combined with Mesra)",
    est:"2006",
    metrics:[{n:"Budget",v:5.0,c:"r"},{n:"Academics",v:7.0,c:"a"},{n:"Campus",v:5.0,c:"r"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:6.0,c:"a"}]
  },

  // ══════════════════════════════════════════
  //  ARTS / SCIENCE / COMMERCE LEGENDS
  // ══════════════════════════════════════════

  "fergusson pune": {
    name:"Fergusson College", type:"Private Autonomous", location:"FC Road, Pune", score:8.5, verdict:"Liberal Arts Legend — Heritage",
    programs:"BA, BSc (Psychology, Economics, Geology, etc.)",
    fees:"₹10K–₹20K/year (Very low)",
    campuses:"135-year-old gothic campus",
    sports:"Cricket, tennis (Deccan Gymkhana nearby)",
    extra:"Spandan; hub of civil services aspirants/artists",
    placement:"Not placement focused; higher studies hub",
    est:"1885",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:5.0,c:"r"},{n:"Infra",v:8.0,c:"g"}]
  },

  "loyola chennai": {
    name:"Loyola College", type:"Private Autonomous", location:"Nungambakkam, Chennai", score:8.8, verdict:"Elite Arts/Commerce — NIRF Top 10",
    programs:"B.Com, B.Sc, BA",
    fees:"₹20K–₹50K/year",
    campuses:"99-acre lush green campus in city center",
    sports:"Famous cricket/football grounds",
    extra:"Ovations; politicians/actors alumni",
    placement:"Avg ₹4–6 LPA; Big 4 audit firms hire",
    est:"1925",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:8.5,c:"g"}]
  },

  "mcc chennai": {
    name:"Madras Christian College", type:"Private Aided", location:"Tambaram, Chennai", score:8.5, verdict:"Campus is a Forest — Heritage",
    programs:"BA, BSc, BCom",
    fees:"₹30K/year",
    campuses:"300-acre forest campus (deer/boars visible)",
    sports:"Huge grounds, historic cricket pavilion",
    extra:"Deep Woods; famous cultural life",
    placement:"Decent; focus on holistic growth",
    est:"1837",
    metrics:[{n:"Budget",v:9.0,c:"g"},{n:"Academics",v:8.5,c:"g"},{n:"Campus",v:9.5,c:"g"},{n:"Placement",v:6.5,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },

  "mithibai mumbai": {
    name:"Mithibai College", type:"Private Autonomous", location:"Vile Parle, Mumbai", score:8.2, verdict:"Glamour & Academics — Cultural Hub",
    programs:"BA, BCom, BMS, BSc",
    fees:"₹30K–₹50K/year",
    campuses:"Shared building, very crowded",
    sports:"None (indoor only)",
    extra:"Kshitij (massive fest); celebrity alumni",
    placement:"Good for BMS/BCom; Avg ₹4–6 LPA",
    est:"1961",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:8.0,c:"g"},{n:"Campus",v:5.0,c:"r"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:7.0,c:"a"}]
  },

  "nm college mumbai": {
    name:"NM College of Commerce", type:"Private Autonomous", location:"Vile Parle, Mumbai", score:8.4, verdict:"CA Factory — Best for Commerce",
    programs:"B.Com, BMS, BAF",
    fees:"₹30K–₹50K/year",
    campuses:"Shared with Mithibai",
    sports:"None",
    extra:"Umang; strictly academic focus",
    placement:"Avg ₹5–7 LPA; Finance/Audit roles",
    est:"1964",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:5.0,c:"r"},{n:"Placement",v:8.0,c:"g"},{n:"Infra",v:7.0,c:"a"}]
  },

  "st xaviers mumbai": {
    name:"St. Xavier's College Mumbai", type:"Private Autonomous", location:"Fort, Mumbai", score:8.7, verdict:"The Hogwarts of Mumbai — Iconic",
    programs:"BA, BSc, BMS",
    fees:"₹10K–₹30K/year",
    campuses:"Gothic architecture, movie shoot favorite",
    sports:"Basketball court (famous)",
    extra:"Malhar (legendary fest); vibrant crowd",
    placement:"Avg ₹5–8 LPA; Consulting/Media",
    est:"1869",
    metrics:[{n:"Budget",v:9.5,c:"g"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:9.5,c:"g"},{n:"Placement",v:7.5,c:"a"},{n:"Infra",v:9.0,c:"g"}]
  },

  "st xaviers kolkata": {
    name:"St. Xavier's College Kolkata", type:"Private Autonomous", location:"Park Street, Kolkata", score:8.6, verdict:"Prestige & Legacy — Park Street",
    programs:"B.Com, BA, BSc, BMS",
    fees:"₹40K–₹60K/year",
    campuses:"Heritage campus, white building",
    sports:"Grounds available",
    extra:"Xavotsav; elite alumni network",
    placement:"Avg ₹6–9 LPA; Deloitte, Google, Futures First",
    est:"1860",
    metrics:[{n:"Budget",v:8.5,c:"g"},{n:"Academics",v:9.0,c:"g"},{n:"Campus",v:9.0,c:"g"},{n:"Placement",v:8.5,c:"g"},{n:"Infra",v:8.5,c:"g"}]
  },

  "mount carmel bangalore": {
    name:"Mount Carmel College", type:"Private Autonomous (Women)", location:"Vasanth Nagar, Bengaluru", score:8.0, verdict:"Top Women's College — Liberal Arts",
    programs:"BA, BSc, BCom",
    fees:"₹50K–₹1L/year",
    campuses:"Posh location, green campus",
    sports:"Stadium nearby",
    extra:"Cul-Ah; fashion/arts culture",
    placement:"Avg ₹4–6 LPA; Goldman Sachs, DE Shaw",
    est:"1948",
    metrics:[{n:"Budget",v:8.0,c:"g"},{n:"Academics",v:8.5,c:"g"},{n:"Campus",v:8.5,c:"g"},{n:"Placement",v:7.0,c:"a"},{n:"Infra",v:8.0,c:"g"}]
  },
  "iiser bhopal": {
    name:"IISER Bhopal", type:"Autonomous Public Research Institute (INI)", location:"Bhauri, Bhopal, Madhya Pradesh", score:8.8, verdict:"Strong Science Research — Growing Fast",
    programs:"BS-MS dual degree (5 years) in Biological, Chemical, Earth, Mathematical, Physical Sciences; MSc, PhD",
    fees:"₹50,000–₹1L/year — highly subsidized; scholarships/stipends for most",
    campuses:"Single expansive 200-acre Bhauri campus with advanced research labs, hostels, central library",
    sports:"Cricket/football grounds, basketball/tennis courts, indoor gym, volleyball courts",
    extra:"Science symposiums, research conferences, astronomy clubs, entrepreneurship cells, cultural fests",
    placement:"BS-MS graduates pursue PhD (Caltech, ETH Zurich, Cambridge) or research/industry (~₹10-15 LPA)",
    est:"2008 (INI status 2014)",
    metrics:[
      {n:"Fits Most Students' Budget",v:9.0,c:"g"},{n:"Academic Life",v:9.6,c:"g"},
      {n:"Teaching & Staff",v:9.5,c:"g"},{n:"Campus Experience",v:8.0,c:"g"},
      {n:"Student Community",v:8.3,c:"g"},{n:"Graduate Salaries",v:7.5,c:"a"},
      {n:"Future Opportunities",v:9.3,c:"g"},{n:"Infrastructure",v:8.8,c:"g"},
      {n:"Bureaucracy",v:7.0,c:"a"},{n:"Hostel Life",v:7.8,c:"a"}
    ]
  }

};

// ── SEARCH ALIASES ───────────────────────────────────────────
const ALIASES = {
  // ── IITs ──
  "iitb":"iit bombay","iit mumbai":"iit bombay",
  "iitm":"iit madras","iit chennai":"iit madras",
  "iitd":"iit delhi",
  "iitk":"iit kanpur",
  "iitkgp":"iit kharagpur","kgp":"iit kharagpur",
  "iitr":"iit roorkee",
  "iitg":"iit guwahati",
  "iith":"iit hyderabad",
  "iit varanasi":"iit bhu","bhu iit":"iit bhu","iit(bhu)":"iit bhu","bhu":"iit bhu",
  "iiti":"iit indore",
  "ism":"iit ism dhanbad","iit ism":"iit ism dhanbad","iit dhanbad":"iit ism dhanbad","ismu":"iit ism dhanbad",
  "iit patna":"iit patna","iitp":"iit patna",
  "iit jodhpur":"iit jodhpur","iitj":"iit jodhpur",
  "iit mandi":"iit mandi",
  "iit ropar":"iit ropar","iit rupnagar":"iit ropar",
  "iit tirupati":"iit tirupati","iitt":"iit tirupati",
  "iit bhilai":"iit bhilai",
  "iit goa":"iit goa",
  "iit jammu":"iit jammu",
  "iit dharwad":"iit dharwad",
  "iit palakkad":"iit palakkad","iit palghat":"iit palakkad",
  "iit bhubaneswar":"iit bbs","iit bbs":"iit bbs","iitbbs":"iit bbs",

  // ── IISc ──
  "iisc":"iisc bangalore","indian institute of science":"iisc bangalore","iisc bengaluru":"iisc bangalore",

  // ── NITs ──
  "nitt":"nit trichy","nit tiruchirappalli":"nit trichy",
  "nitk":"nit surathkal","nit mangalore":"nit surathkal","nit karnataka":"nit surathkal",
  "nitw":"nit warangal",
  "nitr":"nit rourkela","nit odisha":"nit rourkela",
  "nitc":"nit calicut","nit kozhikode":"nit calicut",
  "vnit":"vnit nagpur","nit nagpur":"vnit nagpur",
  "mnnit":"mnnit allahabad","mnnit prayagraj":"mnnit allahabad","nit allahabad":"mnnit allahabad",
  "mnit":"mnit jaipur","nit jaipur":"mnit jaipur","malviya nit":"mnit jaipur",
  "nit durgapur":"nit durgapur","nitdgp":"nit durgapur",
  "nit silchar":"nit silchar","nits":"nit silchar",
  "nit patna":"nit patna","nitp":"nit patna",
  "nit agartala":"nit agartala","nita":"nit agartala",
  "nit hamirpur":"nit hamirpur","nith":"nit hamirpur",
  "nit kurukshetra":"nit kurukshetra","nitkkr":"nit kurukshetra",
  "nit jamshedpur":"nit jamshedpur","nitjsr":"nit jamshedpur",
  "nit raipur":"nit raipur",
  "nit surat":"nit surat","svnit":"nit surat",
  "nit bhopal":"nit bhopal","manit":"nit bhopal",
  "nit jalandhar":"nit jalandhar","nitj":"nit jalandhar",
  "nit srinagar":"nit srinagar",
  "nit goa":"nit goa",
  "nit delhi":"nit delhi",
  "nit puducherry":"nit puducherry",
  "nit andhra pradesh":"nit andhra pradesh",
  "nit uttarakhand":"nit uttarakhand",

  // ── IIITs ──
  "iiit-h":"iiit hyderabad","iiith":"iiit hyderabad",
  "iiit-b":"iiit bangalore","iiitb":"iiit bangalore",
  "iiit-d":"iiit delhi","iiitd":"iiit delhi","indraprastha iiit":"iiit delhi",
  "iiit-a":"iiit allahabad","iiita":"iiit allahabad","iiit prayagraj":"iiit allahabad",
  "iiit gwalior":"iiit gwalior","abv iiit":"iiit gwalior",
  "daiict":"daiict gandhinagar","da-iict":"daiict gandhinagar","dhirubhai ambani":"daiict gandhinagar",

  // ── Central Universities ──
  "jnu delhi":"jnu","jawaharlal nehru":"jnu",
  "du":"delhi university","university of delhi":"delhi university",
  "jamia":"jamia millia islamia","jmi":"jamia millia islamia",
  "amu":"aligarh muslim university","aligarh":"aligarh muslim university",
  "hyderabad university":"university of hyderabad","uoh":"university of hyderabad",
  "banaras hindu":"banaras hindu university",

  // ── Private Universities ──
  "bits":"bits pilani","bitsat":"bits pilani",
  "vit":"vit vellore","viteee":"vit vellore",
  "mit manipal":"manipal institute of technology","manipal":"manipal institute of technology","mahe":"manipal institute of technology",
  "srm":"srm institute","srmist":"srm institute","srmjeee":"srm institute",
  "amity":"amity university",
  "thapar":"thapar university","tiet":"thapar university",
  "cu chandigarh":"chandigarh university","chandigarh uni":"chandigarh university",
  "lovely professional":"lpu","lovely":"lpu",
  "ashoka":"ashoka university",
  "shiv nadar":"shiv nadar university","snu":"shiv nadar university",
  "jiit":"jiit noida","jaypee":"jiit noida",
  "bennett":"bennett university",
  "christ university":"christ bangalore","christ":"christ bangalore",
  "symbiosis":"symbiosis pune","sit":"symbiosis pune",

  // ── State Universities ──
  "ju":"jadavpur university","jadavpur":"jadavpur university",
  "delhi tech":"dtu","delhi technological":"dtu",
  "nsut delhi":"nsut","nsit":"nsut",
  "anna":"anna university","anna uni":"anna university","ceg":"anna university",
  "pec":"pec chandigarh","pec chandigarh":"pec chandigarh",
  "coep":"coep pune","coep technological":"coep pune",
  "rvce":"rvce bangalore","rv college":"rvce bangalore",
  "bmsce":"bms bangalore","bms college":"bms bangalore",
  "msrit":"msrit bangalore","ramaiah":"msrit bangalore",
  "pes university":"pes bangalore","pes":"pes bangalore",

  // ── IIMs & B-Schools ──
  "iima":"iim ahmedabad","iim-a":"iim ahmedabad",
  "iimb":"iim bangalore","iim-b":"iim bangalore",
  "iimc":"iim calcutta","iim-c":"iim calcutta","iim kolkata":"iim calcutta",
  "iiml":"iim lucknow","iim-l":"iim lucknow",
  "iimk":"iim kozhikode","iim-k":"iim kozhikode",
  "iimi":"iim indore","iim-i":"iim indore",
  "iimr":"iim ranchi","iim-r":"iim ranchi",
  "iimu":"iim udaipur","iim-u":"iim udaipur",
  "fms":"fms delhi","faculty of management studies":"fms delhi",
  "isb":"isb hyderabad","indian school of business":"isb hyderabad",
  "xlri":"xlri jamshedpur",
  "spjimr":"spjimr mumbai","sp jain":"spjimr mumbai",
  "mdi":"mdi gurgaon","mdi gurugram":"mdi gurgaon",

  // ── Law Schools ──
  "nls":"nlsiu bangalore","nlsiu":"nlsiu bangalore","national law school":"nlsiu bangalore",
  "nalsar":"nalsar hyderabad",
  "nlu delhi":"nlu delhi","nlu-d":"nlu delhi",
  "nliu":"nliu bhopal","nlu bhopal":"nliu bhopal",
  "wbnujs":"wbnujs kolkata","nujs":"wbnujs kolkata","nujs kolkata":"wbnujs kolkata",
  "gnlu":"gnlu gandhinagar","nlu gandhinagar":"gnlu gandhinagar",
  "nlu jodhpur":"nlu jodhpur",
  "hnlu":"hnlu raipur","nlu raipur":"hnlu raipur",
  "rmlnlu":"rmlnlu lucknow","nlu lucknow":"rmlnlu lucknow",
  "cnlu":"cnlu patna","nlu patna":"cnlu patna",
  "nusrl":"nusrl ranchi","nlu ranchi":"nusrl ranchi",

  // ── Medical ──
  "aiims":"aiims delhi","aiims new delhi":"aiims delhi",
  "kgmu":"kgmu lucknow","king georges":"kgmu lucknow",
  "jipmer":"jipmer puducherry",
  "cmc vellore":"cmc vellore","christian medical":"cmc vellore",
  "mamc":"mamc delhi","maulana azad medical":"mamc delhi",
  "afmc":"afmc pune","armed forces medical":"afmc pune",
  "pgimer":"pgimer chandigarh",
  "nimhans":"nimhans bangalore",
  "sgpgi":"sgpgi lucknow",
  "bhu medical":"ims bhu","ims bhu":"ims bhu",
  "grant medical":"grant medical mumbai",
  "seth gs":"seth gs mumbai",
  "madras medical":"mmc chennai","mmc":"mmc chennai",
  "kasturba medical":"kasturba manipal","kmc":"kasturba manipal",
  "aiims bhopal":"aiims bhopal",

  // ── Design & Architecture ──
  "nid":"nid ahmedabad","national institute of design":"nid ahmedabad",
  "nift":"nift delhi","national institute of fashion":"nift delhi",
  "spa delhi":"spa delhi","school of planning":"spa delhi",
  "cept":"cept ahmedabad","cept university":"cept ahmedabad",

  // ── DU Colleges ──
  "shri ram college":"srcc","shri ram college of commerce":"srcc",
  "st stephens":"st stephens","stephens":"st stephens","st stephen's":"st stephens",
  "miranda":"miranda house","miranda house delhi":"miranda house",
  "lady shri ram":"lsr","lsr college":"lsr",
  "hindu college":"hindu college","hindu college delhi":"hindu college",
  "hansraj":"hansraj college","hansraj college delhi":"hansraj college",
  "ramjas":"ramjas college",
  "kirori mal":"kirori mal college","kmc delhi":"kirori mal college",

  // ── Research Institutes ──
  "iiser":"iiser pune","iiser-p":"iiser pune",
  "iiser-k":"iiser kolkata",
  "iiser-b":"iiser bhopal",
  "iiser mohali":"iiser mohali","iiser-m":"iiser mohali",
  "iiser thiruvananthapuram":"iiser tvm","iiser tvm":"iiser tvm","iiser-tvm":"iiser tvm",
  "isi":"isi kolkata","indian statistical institute":"isi kolkata",
  "cmi":"cmi chennai","chennai mathematical":"cmi chennai",
  "tifr":"tifr mumbai","tata institute":"tifr mumbai",
  "hri":"hri allahabad","harish chandra":"hri allahabad",
  "niser":"niser bhubaneswar",
    // ── Regional Colleges (Add these to existing ALIASES) ──
  "integral":"integral university","integral lucknow":"integral university",
  "bbau":"bbau lucknow","babasaheb bhimrao":"bbau lucknow",
  "bbd":"bbd university","babu banarasi das":"bbd university",
  "ramswaroop":"ramswaroop lucknow","srmu lucknow":"ramswaroop lucknow",
  "hbtu":"hbtu kanpur","harcourt butler":"hbtu kanpur",
  "mmmut":"mmmut gorakhpur","madan mohan malaviya":"mmmut gorakhpur",
  "galgotias":"galgotias university",
  "sharda":"sharda university",
  "gl bajaj":"gl bajaj","glb":"gl bajaj",
  "kiet":"kiet ghaziabad",
  "mait":"mait delhi","maharaja agrasen":"mait delhi",
  "msit":"msit delhi","surajmal":"msit delhi",
  "manav rachna":"manav rachna","mriirs":"manav rachna",
  "vjti":"vjti mumbai","veermata jijabai":"vjti mumbai",
  "spit":"spit mumbai","sardar patel":"spit mumbai",
  "dj sanghvi":"dj sanghvi","djsce":"dj sanghvi",
  "somaiya":"kj somaiya engineering","kj somaiya":"kj somaiya engineering",
  "mit wpu":"mit wpu pune","mit pune":"mit wpu pune",
  "vit pune":"vit pune","vishwakarma":"vit pune",
  "dy patil":"dy patil akurdi","dypcoe":"dy patil akurdi",
  "nirma":"nirma university",
  "pdeu":"pdeu gandhinagar","pdpu":"pdeu gandhinagar",
  "bmsit":"bmsit bangalore",
  "dsce":"dsce bangalore","dayananda sagar":"dsce bangalore",
  "jain":"jain university",
  "new horizon":"new horizon",
  "nmit":"nitte meenakshi","nitte":"nitte meenakshi",
  "cbit":"cbit hyderabad",
  "vasavi":"vasavi hyderabad",
  "vnr":"vnr vjiet","vnr vjiet":"vnr vjiet",
  "griet":"gokaraju rangaraju",
  "ssn":"ssn chennai",
  "sathyabama":"sathyabama chennai",
  "hindustan":"hindustan university",
  "crescent":"crescent chennai","bs abdur rahman":"crescent chennai",
  "psg":"psg tech","psg tech":"psg tech",
  "iem":"iem kolkata",
  "heritage":"heritage kolkata","hitk":"heritage kolkata",
  "techno india":"techno india salt lake",
  "kiit":"kiit bhubaneswar",
  "soa":"soa bhubaneswar","iter":"soa bhubaneswar",
  "sgsits":"sgsits indore",
  "iet davv":"davv indore","davv":"davv indore",
  "medicaps":"medicaps indore",
  "lnct":"lnct bhopal",
  "jecrc":"jecrc jaipur",
  "muj":"manipal jaipur","manipal jaipur":"manipal jaipur",
    // ── Batch 2 Regional Aliases ──
  "chitkara":"chitkara university",
  "cgc":"cgc landran","chandigarh group":"cgc landran",
  "graphic era":"graphic era",
  "upes":"upes dehradun",
  "dit":"dit dehradun",
  "rcoem":"rcoem nagpur","ramdeobaba":"rcoem nagpur",
  "ycce":"ycce nagpur","yeshwantrao chavan":"ycce nagpur",
  "geca":"geca aurangabad","govt aurangabad":"geca aurangabad",
  "sandip":"sandip university",
  "sjce":"sjce mysore","jss mysore":"sjce mysore","jssst":"sjce mysore",
  "nie":"nie mysore","national institute of engineering":"nie mysore",
  "sit":"sit tumkur","siddaganga":"sit tumkur",
  "sahyadri":"sahyadri mangalore",
  "sdm":"sdm dharwad",
  "cit":"cit coimbatore","coimbatore institute":"cit coimbatore",
  "skcet":"skcet coimbatore","sri krishna":"skcet coimbatore",
  "kct":"kct coimbatore","kumaraguru":"kct coimbatore",
  "tce":"tce madurai","thiagarajar":"tce madurai",
  "mepco":"mepco schlenk",
  "gitam":"gitam vizag",
  "gvp":"gvp vizag","gayatri vidya":"gvp vizag",
  "vrsec":"vr siddhartha","siddhartha vijayawada":"vr siddhartha",
  "kits":"kits warangal","kitsw":"kits warangal",
  "rajagiri":"rajagiri kochi","rset":"rajagiri kochi",
  "mec":"mec kochi","model engineering":"mec kochi",
  "ramaiah medical":"ramaiah medical","msr medical":"ramaiah medical",
  "kims":"kims bangalore","kempegowda medical":"kims bangalore",
  "sri ramachandra":"sri ramachandra","srmc":"sri ramachandra",
  "dy patil medical":"dy patil medical pune",
  "ils":"ils pune","ils law":"ils pune",
  "sls":"sls pune","symbiosis law":"sls pune",
  "ail":"army law mohali","army institute of law":"army law mohali",
    // ── Batch 3 Aliases (Paste into ALIASES object) ──
  "iet lucknow":"iet lucknow","iet lko":"iet lucknow",
  "psit":"psit kanpur","pranveer singh":"psit kanpur",
  "knit":"knit sultanpur","kamla nehru":"knit sultanpur",
  "biet":"biet jhansi","bundelkhand engineering":"biet jhansi",
  "jss":"jss noida","jssate":"jss noida",
  "abes":"abes ghaziabad",
  "akgec":"akgec ghaziabad","ajay kumar garg":"akgec ghaziabad",
  "niet":"niet greater noida",
  "ymca":"ymca faridabad","jc bose":"ymca faridabad",
  "dcrust":"dcrust murthal","murthal":"dcrust murthal",
  "bpit":"bpit delhi","bhagwan parshuram":"bpit delhi",
  "bvcoe":"bvcoe delhi","bharati vidyapeeth delhi":"bvcoe delhi",
  "vips":"vips delhi","vivekananda ipU":"vips delhi",
  "iitm":"iitm janakpuri",
  "pccoe":"pccoe pune","impri chinchwad":"pccoe pune",
  "cummins":"cummins pune","cummins college":"cummins pune",
  "sinhgad":"sinhgad vadgaon","scoe":"sinhgad vadgaon",
  "aissms":"aissms pune","ioit":"aissms pune",
  "thadomal":"thadomal mumbai","tsec":"thadomal mumbai",
  "vesit":"vesit mumbai","vivekanand chembur":"vesit mumbai",
  "rait":"dy patil navi mumbai","dy patil nerul":"dy patil navi mumbai",
  "walchand":"walchand sangli","wce":"walchand sangli",
  "acharya":"acharya bangalore",
  "mvj":"mvj bangalore",
  "reva":"reva university",
  "kle tech":"kle tech hubli","bvb hubli":"kle tech hubli",
  "git":"git belgaum","gogte":"git belgaum",
  "rajalakshmi":"rajalakshmi chennai","rec":"rajalakshmi chennai",
  "panimalar":"panimalar chennai",
  "sairam":"sri sairam chennai","sri sairam":"sri sairam chennai",
  "kongu":"kongu engineering",
  "sona":"sona salem",
  "kalasalingam":"kalasalingam",
  "malla reddy":"malla reddy","mrec":"malla reddy",
  "vardhaman":"vardhaman hyderabad",
  "narayanamma":"narayanamma","gnits":"narayanamma",
  "mvgr":"mvgr vizag",
  "saintgits":"saintgits kottayam",
  "fisat":"fisat kerala","federal institute":"fisat kerala",
  "pcte":"pcte ludhiana",
  "gne":"gne ludhiana","guru nanak dev":"gne ludhiana",
  "oriental":"oriental bhopal","oist":"oriental bhopal",
  "acropolis":"acropolis indore",
  "ld":"ld engineering","ld college":"ld engineering",
  "indus":"indus ahmedabad",
  "cv raman":"cv raman odisha",
  "silicon":"silicon bhubaneswar",
  "fergusson":"fergusson pune","fc pune":"fergusson pune",
  "loyola":"loyola chennai",
  "mcc":"mcc chennai","madras christian":"mcc chennai",
  "mithibai":"mithibai mumbai",
  "nm":"nm college mumbai","nm college":"nm college mumbai",
  "xaviers mumbai":"st xaviers mumbai","st xaviers mumbai":"st xaviers mumbai",
  "xaviers kolkata":"st xaviers kolkata","st xaviers kolkata":"st xaviers kolkata",
  "mount carmel":"mount carmel bangalore","mcc bangalore":"mount carmel bangalore"

};