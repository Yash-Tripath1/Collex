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
  "niser":"niser bhubaneswar"
};