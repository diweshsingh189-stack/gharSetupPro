/* =====================================================
   GHAR.SETUP.PRO | SMART HOME CONSTRUCTION PLANNER ENGINE
===================================================== */

/* =====================================================
   COMPANY BRANDS DATABASE
===================================================== */
const companiesData = {
  "Cement": {
    companies: [
      { name: "UltraTech Cement", logo: "🔵", rate: 420, unit: "Bag", tag: "#1 Brand India" },
      { name: "ACC Cement",       logo: "🟢", rate: 410, unit: "Bag", tag: "Trusted Since 1936" },
      { name: "Ambuja Cement",    logo: "🟡", rate: 415, unit: "Bag", tag: "Premium Strength" },
      { name: "Shree Cement",     logo: "🔴", rate: 400, unit: "Bag", tag: "Value Pick" },
      { name: "Dalmia Cement",    logo: "🟠", rate: 405, unit: "Bag", tag: "Eco Friendly" }
    ],
    tip: "Use OPC 53 for structural RCC and PPC for plastering. Buy in bulk for 5-8% savings."
  },
  "Sand": {
    companies: [
      { name: "M-Sand (Robo Sand)", logo: "🏭", rate: 60, unit: "CFT", tag: "Eco Friendly" },
      { name: "River Sand (Local)", logo: "🏞️", rate: 55, unit: "CFT", tag: "Natural Grade" },
      { name: "P-Sand (Plastering)", logo: "🟤", rate: 50, unit: "CFT", tag: "Smooth Finish" }
    ],
    tip: "M-Sand is more consistent and eco-friendly. Avoid silt-rich sand."
  },
  "Aggregate / Gitti": {
    companies: [
      { name: "20mm Crushed Stone", logo: "⚫", rate: 68, unit: "CFT", tag: "RCC Grade" },
      { name: "40mm Crushed Stone", logo: "⬛", rate: 62, unit: "CFT", tag: "PCC Grade" },
      { name: "M-Sand Aggregate",   logo: "🟫", rate: 65, unit: "CFT", tag: "Uniform Size" }
    ],
    tip: "Use 20mm aggregate for RCC slabs and columns. 40mm for PCC flooring."
  },
  "TMT Steel": {
    companies: [
      { name: "TATA Tiscon",    logo: "🔵", rate: 75, unit: "Kg", tag: "Most Popular" },
      { name: "JSW Steel",      logo: "🟢", rate: 72, unit: "Kg", tag: "Trusted Brand" },
      { name: "SAIL Steel",     logo: "🔴", rate: 70, unit: "Kg", tag: "Govt. Company" },
      { name: "Jindal Panther", logo: "🟡", rate: 73, unit: "Kg", tag: "High Strength" },
      { name: "Kamdhenu Steel", logo: "🟠", rate: 68, unit: "Kg", tag: "Value Pick" }
    ],
    tip: "Always use Fe500D or Fe550D grade for earthquake-resistant construction. Check BIS mark."
  },
  "Bricks": {
    companies: [
      { name: "Red Burnt Bricks", logo: "🟥", rate: 9,  unit: "Piece", tag: "Traditional" },
      { name: "Fly Ash Bricks",   logo: "⬜", rate: 8,  unit: "Piece", tag: "Eco & Lighter" },
      { name: "AAC Blocks",       logo: "🔲", rate: 55, unit: "Piece", tag: "Premium Thermal" },
      { name: "Wire Cut Bricks",  logo: "🟫", rate: 10, unit: "Piece", tag: "Uniform Size" }
    ],
    tip: "Fly Ash Bricks are 30% lighter. AAC Blocks reduce plastering cost significantly."
  },
  "Binding Wire": {
    companies: [
      { name: "TATA Wire",   logo: "🔵", rate: 90, unit: "Kg", tag: "Premium" },
      { name: "JSW Wire",    logo: "🟢", rate: 85, unit: "Kg", tag: "Standard" },
      { name: "Local Brand", logo: "⚫", rate: 78, unit: "Kg", tag: "Budget" }
    ],
    tip: "18 gauge annealed binding wire is standard. 8-10 kg needed per tonne of steel."
  },
  "Stone Dust": {
    companies: [
      { name: "Quarry Dust (Local)", logo: "🟤", rate: 40, unit: "CFT", tag: "Most Used" },
      { name: "M-Sand Dust",         logo: "🟫", rate: 45, unit: "CFT", tag: "Better Quality" }
    ],
    tip: "Use as sub-base filling. Do not use as cement replacement in concrete."
  },
  "Plaster": {
    companies: [
      { name: "Birla White Putty",   logo: "⬜", rate: 30, unit: "Sq.Ft", tag: "Top Brand" },
      { name: "JK Wall Putty",       logo: "🟡", rate: 28, unit: "Sq.Ft", tag: "Popular Choice" },
      { name: "Asian Paints Primer", logo: "🔴", rate: 32, unit: "Sq.Ft", tag: "Premium Finish" }
    ],
    tip: "Use 1:4 cement:sand for outer plaster and 1:6 for inner walls. Two coats recommended."
  },
  "Waterproofing": {
    companies: [
      { name: "Dr. Fixit (Pidilite)", logo: "🔵", rate: 48, unit: "Sq.Ft", tag: "#1 Waterproofing" },
      { name: "Fosroc",              logo: "🟢", rate: 52, unit: "Sq.Ft", tag: "Construction Grade" },
      { name: "Sika India",          logo: "🔴", rate: 55, unit: "Sq.Ft", tag: "Premium" },
      { name: "STP Ltd.",            logo: "🟡", rate: 45, unit: "Sq.Ft", tag: "Cost Effective" }
    ],
    tip: "Apply on roof slab before any further work. Use crystalline waterproofing for basements."
  },
  "Flooring": {
    companies: [
      { name: "Kajaria Tiles", logo: "🔵", rate: 95,  unit: "Sq.Ft", tag: "India's Largest" },
      { name: "Somany Tiles",  logo: "🟢", rate: 90,  unit: "Sq.Ft", tag: "Wide Range" },
      { name: "Asian Granito", logo: "🟡", rate: 85,  unit: "Sq.Ft", tag: "Value Brand" },
      { name: "Nitco Tiles",   logo: "🟠", rate: 100, unit: "Sq.Ft", tag: "Premium" },
      { name: "RAK Ceramics",  logo: "🔴", rate: 110, unit: "Sq.Ft", tag: "Designer" }
    ],
    tip: "Use vitrified tiles for living areas and anti-skid tiles for bathrooms and outdoors."
  },
  "Doors & Windows": {
    companies: [
      { name: "Fenesta UPVC",      logo: "🔵", rate: 220000, unit: "Lot", tag: "Premium UPVC" },
      { name: "Aluplast UPVC",     logo: "🟢", rate: 180000, unit: "Lot", tag: "German Tech" },
      { name: "Godrej Steel Door", logo: "🔴", rate: 160000, unit: "Lot", tag: "High Security" },
      { name: "Local Teak Wood",   logo: "🟤", rate: 200000, unit: "Lot", tag: "Traditional" }
    ],
    tip: "UPVC windows are energy-efficient and low-maintenance. Teak gives premium look."
  },
  "Electrical": {
    companies: [
      { name: "Havells",            logo: "🔵", rate: 115, unit: "Sq.Ft", tag: "Most Trusted" },
      { name: "Finolex",            logo: "🟢", rate: 110, unit: "Sq.Ft", tag: "Wire Specialist" },
      { name: "Polycab",            logo: "🟡", rate: 108, unit: "Sq.Ft", tag: "Market Leader" },
      { name: "Anchor (Panasonic)", logo: "🔴", rate: 112, unit: "Sq.Ft", tag: "Premium" }
    ],
    tip: "Use min 1.5 sqmm for lights, 2.5 sqmm for fans/plugs and 4 sqmm for AC points."
  },
  "Plumbing": {
    companies: [
      { name: "Astral Pipes",  logo: "🔵", rate: 95, unit: "Sq.Ft", tag: "Market Leader" },
      { name: "Supreme CPVC",  logo: "🟢", rate: 90, unit: "Sq.Ft", tag: "Trusted Brand" },
      { name: "Prince Piping", logo: "🟡", rate: 85, unit: "Sq.Ft", tag: "Value Pick" },
      { name: "Finolex Pipes", logo: "🔴", rate: 92, unit: "Sq.Ft", tag: "Quality Assured" }
    ],
    tip: "Use CPVC for hot water lines and PVC for drainage. Always buy ISI marked pipes."
  },
  "Sanitary Fittings": {
    companies: [
      { name: "Jaquar",    logo: "🔵", rate: 130000, unit: "Lot", tag: "Premium Brand" },
      { name: "Hindware",  logo: "🟢", rate: 110000, unit: "Lot", tag: "Most Popular" },
      { name: "Cera",      logo: "🟡", rate: 100000, unit: "Lot", tag: "Value Brand" },
      { name: "Parryware", logo: "🟠", rate: 105000, unit: "Lot", tag: "Durable" },
      { name: "Kohler",    logo: "🔴", rate: 180000, unit: "Lot", tag: "Luxury" }
    ],
    tip: "Choose EWC with dual flush for water savings. Invest in quality fittings - saves long-term."
  },
  "Painting": {
    companies: [
      { name: "Asian Paints",      logo: "🔵", rate: 32, unit: "Sq.Ft", tag: "#1 Paint Brand" },
      { name: "Berger Paints",     logo: "🟢", rate: 30, unit: "Sq.Ft", tag: "Premium Quality" },
      { name: "Nerolac Paints",    logo: "🟡", rate: 28, unit: "Sq.Ft", tag: "Health Friendly" },
      { name: "Indigo Paints",     logo: "🔴", rate: 29, unit: "Sq.Ft", tag: "Value for Money" },
      { name: "Dulux (AkzoNobel)", logo: "🟠", rate: 35, unit: "Sq.Ft", tag: "International" }
    ],
    tip: "Use exterior emulsion with UV protection for outer walls. Acrylic emulsion for interiors."
  },
  "Kitchen": {
    companies: [
      { name: "Hettich Modular", logo: "🔵", rate: 200000, unit: "Lot", tag: "German Quality" },
      { name: "Sleek Kitchens",  logo: "🟢", rate: 170000, unit: "Lot", tag: "Asian Paints" },
      { name: "Livspace",        logo: "🟡", rate: 180000, unit: "Lot", tag: "Design + Fit" },
      { name: "Local Carpenter", logo: "🟤", rate: 120000, unit: "Lot", tag: "Custom Budget" }
    ],
    tip: "Marine plywood with laminate shutters is cost-effective. Quartz countertop lasts longer."
  }
};

const defaultItems = [
    { name: "Cement", icon: "🧱", purpose: "Concrete, mortar, plaster and masonry work.", quantity: 450, unit: "Bag", rate: 415, type: "material", step: 10 },
    { name: "Sand", icon: "🏖️", purpose: "Concrete, mortar and plaster.", quantity: 2500, unit: "CFT", rate: 55, type: "material", step: 50 },
    { name: "Aggregate / Gitti", icon: "🪨", purpose: "Concrete for RCC and PCC.", quantity: 1800, unit: "CFT", rate: 65, type: "material", step: 50 },
    { name: "TMT Steel", icon: "🏗️", purpose: "Reinforcement inside columns, beams and slabs.", quantity: 4000, unit: "Kg", rate: 72, type: "material", step: 50 },
    { name: "Bricks", icon: "🧱", purpose: "Internal and external walls.", quantity: 18000, unit: "Piece", rate: 9, type: "material", step: 500 },
    { name: "Binding Wire", icon: "🪢", purpose: "Tying steel reinforcement bars.", quantity: 70, unit: "Kg", rate: 85, type: "material", step: 5 },
    { name: "Stone Dust", icon: "🪨", purpose: "Filling, bedding and selected construction work.", quantity: 500, unit: "CFT", rate: 40, type: "material", step: 50 },
    { name: "Excavation", icon: "🚜", purpose: "Foundation trenches and pits.", quantity: 450, unit: "CFT", rate: 45, type: "labour", step: 25 },
    { name: "PCC", icon: "🏗️", purpose: "Stable base below foundation.", quantity: 120, unit: "CFT", rate: 90, type: "labour", step: 10 },
    { name: "RCC Work", icon: "🏗️", purpose: "Slabs, beams, columns and structural elements.", quantity: 1500, unit: "CFT", rate: 320, type: "labour", step: 50 },
    { name: "Brick Masonry", icon: "🧱", purpose: "Construction of walls and partitions.", quantity: 6000, unit: "CFT", rate: 95, type: "labour", step: 100 },
    { name: "Plaster", icon: "🪵", purpose: "Smooth protective surface for walls and ceilings.", quantity: 7500, unit: "Sq.Ft", rate: 28, type: "other", step: 100 },
    { name: "Waterproofing", icon: "💧", purpose: "Protects roofs, bathrooms and wet areas.", quantity: 1000, unit: "Sq.Ft", rate: 45, type: "other", step: 50 },
    { name: "Flooring", icon: "🪨", purpose: "Finished walking surface.", quantity: 1500, unit: "Sq.Ft", rate: 90, type: "other", step: 50 },
    { name: "Doors & Windows", icon: "🚪", purpose: "Access, ventilation, daylight and security.", quantity: 1, unit: "Lot", rate: 220000, type: "other", step: 1 },
    { name: "Electrical", icon: "⚡", purpose: "Wiring, switches, sockets and lighting.", quantity: 1500, unit: "Sq.Ft", rate: 110, type: "other", step: 50 },
    { name: "Plumbing", icon: "🚰", purpose: "Fresh water and wastewater systems.", quantity: 1500, unit: "Sq.Ft", rate: 90, type: "other", step: 50 },
    { name: "Sanitary Fittings", icon: "🚿", purpose: "WC, basin, shower and bathroom fittings.", quantity: 1, unit: "Lot", rate: 120000, type: "other", step: 1 },
    { name: "Painting", icon: "🎨", purpose: "Surface protection and final appearance.", quantity: 5000, unit: "Sq.Ft", rate: 30, type: "other", step: 100 },
    { name: "Kitchen", icon: "🍳", purpose: "Cabinets, countertop and kitchen fittings.", quantity: 1, unit: "Lot", rate: 180000, type: "other", step: 1 },
    { name: "General Labour", icon: "👷", purpose: "Masonry, material handling and general work.", quantity: 450, unit: "Worker-Day", rate: 850, type: "labour", step: 10 },
    { name: "Miscellaneous", icon: "📦", purpose: "Tools, transport, wastage and minor expenses.", quantity: 1, unit: "Lot", rate: 100000, type: "other", step: 1 }
];

let items = JSON.parse(JSON.stringify(defaultItems));

/* Tools / Calculators Catalog */
const toolsCatalog = [
    { id: "floor-calc", name: "Floor Area Calculator", icon: "📐", targetId: "floorLength", page: "measurements", description: "Calculate square footage for rooms and floors." },
    { id: "wall-calc", name: "Wall & Plaster Area Calculator", icon: "🧱", targetId: "wallLength", page: "measurements", description: "Calculate wall area deducting doors and windows." },
    { id: "concrete-calc", name: "Concrete Volume Calculator", icon: "🏗️", targetId: "concreteLength", page: "measurements", description: "Calculate rectangular concrete volume in cubic ft." },
    { id: "cost-calc", name: "Area Cost Estimator", icon: "💰", targetId: "costArea", page: "measurements", description: "Estimate overall budget for any specific area." }
];

/* Pages / Sections Catalog */
const pagesCatalog = [
    { id: "dashboard", name: "Dashboard & Overview", icon: "🏠", description: "Project summary, built-up area and quick tools." },
    { id: "estimate", name: "Construction Estimate", icon: "💰", description: "Detailed itemized costs, quantities and unit rates." },
    { id: "materials", name: "Material Guide & Library", icon: "🧱", description: "Detailed purpose, specifications and rates for materials." },
    { id: "measurements", name: "Measurements & Calculators", icon: "📐", description: "Floor, wall, concrete volume and area cost tools." },
    { id: "construction", name: "Construction Roadmap (14 Stages)", icon: "🏗️", description: "Complete phase-by-phase building sequence." },
    { id: "checklist", name: "Project Checklist", icon: "✅", description: "Track 27+ critical inspection tasks." },
    { id: "reports", name: "Reports & Print Summary", icon: "📄", description: "Generate and print PDF summary of construction costs." },
    { id: "feedback", name: "Feedback & Suggestions", icon: "⭐", description: "Submit reviews and feature requests." }
];

/* =====================================================
            SOUND ENGINE (WEB AUDIO API)
===================================================== */
let audioCtx = null;
let soundEnabled = localStorage.getItem("gharsetu-sound") !== "false";

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    return audioCtx;
}

function playSound(type) {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        if (type === "click") {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(350, now + 0.04);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.045);
        } else if (type === "success") {
            [523.25, 659.25, 783.99].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const start = now + idx * 0.06;
                osc.type = "triangle";
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.15, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(start);
                osc.stop(start + 0.26);
            });
        } else if (type === "error") {
            [220, 180].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const start = now + idx * 0.07;
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(freq, start);
                const filter = ctx.createBiquadFilter();
                filter.type = "lowpass";
                filter.frequency.setValueAtTime(450, start);
                gain.gain.setValueAtTime(0.16, start);
                gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);
                osc.start(start);
                osc.stop(start + 0.13);
            });
        } else if (type === "switch") {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        }
    } catch (e) {
        console.log("Audio playback error", e);
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem("gharsetu-sound", soundEnabled);

    const btn = document.getElementById("soundBtn");
    if (btn) {
        btn.innerText = soundEnabled ? "🔊" : "🔇";
        btn.classList.toggle("muted", !soundEnabled);
    }

    if (soundEnabled) {
        playSound("switch");
        showToast("Sound Effects: ON 🔊");
    } else {
        showToast("Sound Effects: OFF 🔇");
    }
}

// Global click listener for sounds
document.addEventListener("click", (e) => {
    const target = e.target.closest("button, a, .nav-item, input[type='checkbox'], .search-result-item, .qty-btn, .stars button");
    if (target && !target.id.includes("soundBtn")) {
        playSound("click");
    }
});

/* =====================================================
            INPUT VALIDATION & ERROR BADGES
===================================================== */
function markInputError(inputEl, errorMsg = "Required") {
    if (!inputEl) return;
    inputEl.classList.add("input-error");

    let badge = inputEl.nextElementSibling;
    if (!badge || !badge.classList.contains("input-error-badge")) {
        badge = document.createElement("div");
        badge.className = "input-error-badge";
        inputEl.parentNode.insertBefore(badge, inputEl.nextSibling);
    }
    badge.innerHTML = `⚠️ <span>${errorMsg}</span>`;
}

function clearInputError(inputEl) {
    if (!inputEl) return;
    inputEl.classList.remove("input-error");
    const badge = inputEl.nextElementSibling;
    if (badge && badge.classList.contains("input-error-badge")) {
        badge.remove();
    }
}

document.addEventListener("input", (e) => {
    if (e.target && e.target.classList.contains("input-error")) {
        clearInputError(e.target);
    }
});

/* =====================================================
                    FORMAT MONEY
===================================================== */
function money(value) {
    return "₹" + Math.round(value || 0).toLocaleString("en-IN");
}

/* =====================================================
                    NAVIGATION
===================================================== */
function showPage(page, button = null) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

    const target = document.getElementById(page);
    if (!target) return;
    target.classList.add("active");

    if (page === "checklist") {
        const searchInput = document.getElementById("globalSearch");
        const searchDropdown = document.getElementById("searchDropdown");
        const clearSearchButton = document.getElementById("clearSearchBtn");
        if (searchInput) searchInput.value = "";
        if (searchDropdown) searchDropdown.style.display = "none";
        if (clearSearchButton) clearSearchButton.style.display = "none";
        filterCurrentPage("", "checklist");
    }

    document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));

    if (button) {
        button.classList.add("active");
    } else {
        document.querySelectorAll(".nav-item").forEach(btn => {
            const attr = btn.getAttribute("onclick") || "";
            if (attr.includes(`'${page}'`) || attr.includes(`"${page}"`)) {
                btn.classList.add("active");
            }
        });
    }

    const titles = {
        dashboard: "Dashboard",
        estimate: "Construction Estimate",
        materials: "Materials",
        measurements: "Measurements",
        construction: "Construction",
        checklist: "Checklist",
        reports: "Reports",
        feedback: "Feedback"
    };

    const titleEl = document.getElementById("pageTitle");
    if (titleEl) {
        titleEl.innerText = titles[page] || "ghar.setup.pro";
    }

    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.remove("open");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (page === "reports") {
        renderReport();
    }

    const query = (document.getElementById("globalSearch")?.value || "").toLowerCase().trim();
    if (query) {
        filterCurrentPage(query, page);
    }
}

/* =====================================================
                    SIDEBAR
===================================================== */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.toggle("open");
    }
}

// Close sidebar on mobile when clicking outside
document.addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");
    if (sidebar && sidebar.classList.contains("open")) {
        if (!sidebar.contains(e.target) && (!menuBtn || !menuBtn.contains(e.target))) {
            sidebar.classList.remove("open");
        }
    }
});

/* =====================================================
                    THEME
===================================================== */
function setTheme(theme) {
    playSound("switch");
    document.body.classList.toggle("dark", theme === "dark");

    const lightBtn = document.getElementById("lightBtn");
    const darkBtn = document.getElementById("darkBtn");

    if (lightBtn) lightBtn.classList.toggle("active", theme === "light");
    if (darkBtn) darkBtn.classList.toggle("active", theme === "dark");

    localStorage.setItem("gharsetu-theme", theme);
}

/* =====================================================
                    PROJECT AREA & DIMENSIONS
===================================================== */
function getProjectArea() {
    const length = Number(document.getElementById("length")?.value || 50);
    const width = Number(document.getElementById("width")?.value || 30);
    const floors = Number(document.getElementById("floors")?.value || 1);
    return Math.max(0, length * width * floors);
}

function updateProject() {
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    const floorsInput = document.getElementById("floors");

    let hasError = false;

    if (!lengthInput?.value || Number(lengthInput.value) <= 0) {
        markInputError(lengthInput, "Enter valid length");
        hasError = true;
    } else {
        clearInputError(lengthInput);
    }

    if (!widthInput?.value || Number(widthInput.value) <= 0) {
        markInputError(widthInput, "Enter valid width");
        hasError = true;
    } else {
        clearInputError(widthInput);
    }

    if (!floorsInput?.value || Number(floorsInput.value) < 1) {
        markInputError(floorsInput, "Min 1 floor required");
        hasError = true;
    } else {
        clearInputError(floorsInput);
    }

    if (hasError) {
        return;
    }

    const area = getProjectArea();

    const areaDisplay = document.getElementById("areaDisplay");
    if (areaDisplay) areaDisplay.innerText = area.toLocaleString("en-IN");

    const overviewArea = document.getElementById("overviewArea");
    if (overviewArea) overviewArea.innerText = area.toLocaleString("en-IN") + " sq.ft";

    saveProject();
    calculateEstimate();
}

/* =====================================================
                    CALCULATE ESTIMATE
===================================================== */
function calculateEstimate() {
    let total = 0;
    let material = 0;
    let labour = 0;
    let other = 0;

    items.forEach((item, index) => {
        const qty = Number(item.quantity) || 0;
        const rate = Number(item.rate) || 0;
        const amount = qty * rate;

        total += amount;

        if (item.type === "material") material += amount;
        if (item.type === "labour") labour += amount;
        if (item.type === "other") other += amount;

        const rowAmount = document.getElementById(`item-amount-${index}`);
        if (rowAmount) {
            rowAmount.innerText = money(amount);
        }
    });

    const area = getProjectArea();
    const perSqft = area > 0 ? total / area : 0;

    const setIf = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    setIf("totalStat", money(total));
    setIf("materialStat", money(material));
    setIf("labourStat", money(labour));
    setIf("otherStat", money(other));

    setIf("overviewCost", money(total));
    setIf("overviewSqft", money(perSqft));

    setIf("estimateTotal", money(total));
    setIf("estimatePerSqft", money(perSqft));

    setIf("reportTotal", money(total));
    setIf("reportPerSqft", money(perSqft));
    setIf("reportArea", area.toLocaleString("en-IN") + " sq.ft");
}

/* =====================================================
                    ESTIMATE TABLE
===================================================== */
function renderEstimate() {
    const body = document.getElementById("estimateBody");
    if (!body) return;

    body.innerHTML = "";

    items.forEach((item, index) => {
        const step = item.step || 1;
        const amount = (Number(item.quantity) || 0) * (Number(item.rate) || 0);

        body.innerHTML += `
            <tr id="estimate-row-${index}" data-search="${item.name.toLowerCase()} ${item.purpose.toLowerCase()}">
                <td>${index + 1}</td>
                <td>
                    ${item.icon}
                    <strong>${item.name}</strong>
                </td>
                <td>${item.purpose}</td>
                <td>
                    <div class="qty-control">
                        <button
                            type="button"
                            class="qty-btn"
                            title="Decrease quantity"
                            onclick="stepQuantity(${index}, -${step})"
                        >−</button>

                        <input
                            id="item-qty-${index}"
                            type="number"
                            min="0"
                            step="any"
                            value="${item.quantity}"
                            oninput="updateQuantity(${index}, this.value)"
                            onchange="updateQuantity(${index}, this.value)"
                        >

                        <button
                            type="button"
                            class="qty-btn"
                            title="Increase quantity"
                            onclick="stepQuantity(${index}, ${step})"
                        >+</button>
                    </div>
                </td>
                <td><strong>${item.unit}</strong></td>
                <td>
                    <div class="rate-input-wrap">
                        <input
                            id="item-rate-${index}"
                            type="number"
                            min="0"
                            step="any"
                            value="${item.rate}"
                            oninput="updateRate(${index}, this.value)"
                            onchange="updateRate(${index}, this.value)"
                        >
                        <small>/ ${item.unit}</small>
                    </div>
                </td>
                <td class="amount" id="item-amount-${index}">
                    ${money(amount)}
                </td>
            </tr>
        `;
    });
}

function stepQuantity(index, delta) {
    if (!items[index]) return;

    const current = Number(items[index].quantity) || 0;
    const nextVal = Math.max(0, Math.round((current + delta) * 100) / 100);

    items[index].quantity = nextVal;

    const input = document.getElementById(`item-qty-${index}`);
    if (input) {
        input.value = nextVal;
    }

    saveProject();
    calculateEstimate();
}

function updateQuantity(index, value) {
    if (!items[index]) return;

    const parsed = parseFloat(value);
    items[index].quantity = !isNaN(parsed) && parsed >= 0 ? parsed : 0;

    saveProject();
    calculateEstimate();
}

function updateRate(index, value) {
    if (!items[index]) return;

    const parsed = parseFloat(value);
    items[index].rate = !isNaN(parsed) && parsed >= 0 ? parsed : 0;

    saveProject();
    calculateEstimate();
}

/* =====================================================
                    MATERIALS GUIDE
===================================================== */
function renderMaterials() {
    const grid = document.getElementById("materialGrid");
    if (!grid) return;

    grid.innerHTML = "";

    items.forEach((item, index) => {
        const comp = companiesData[item.name];
        const topCompanies = comp ? comp.companies.slice(0, 3) : [];
        const compBadgesHTML = topCompanies.map(c =>
            '<span class="company-badge">' + c.logo + ' ' + c.name.split(' ')[0] + '</span>'
        ).join('');

        grid.innerHTML += `
            <article
                class="material-card material-card-clickable"
                id="material-card-${index}"
                data-search="${item.name.toLowerCase()} ${item.purpose.toLowerCase()}"
                onclick="showMaterialModal(${index})"
                onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showMaterialModal(${index}); }"
                tabindex="0"
                role="button"
                aria-label="View company rates for ${item.name}"
                title="Click to see brand-wise rates"
            >
                <div class="material-icon">
                    ${item.icon}
                </div>
                <h2>${item.name}</h2>
                <p>
                    <strong>Used for:</strong>
                    ${item.purpose}
                </p>
                ${topCompanies.length > 0 ? '<div class="company-badges-row">' + compBadgesHTML + '<span class="more-brands-hint">+ more brands</span></div>' : ''}
                <div class="material-rate">
                    Approx. Rate
                    <strong>
                        ${money(item.rate)}
                        / ${item.unit}
                    </strong>
                </div>
                <div class="card-click-hint">👆 Tap to see all brand rates</div>
            </article>
        `;
    });
}

function showMaterialModal(index) {
    const item = items[index];
    if (!item) return;

    const comp = companiesData[item.name];

    let companiesHTML = '';
    if (comp && comp.companies.length > 0) {
        const rows = comp.companies.map(c => `
            <div class="modal-company-row">
                <span class="modal-company-logo">${c.logo}</span>
                <div class="modal-company-info">
                    <strong>${c.name}</strong>
                    <span class="modal-company-tag">${c.tag}</span>
                </div>
                <div class="modal-company-rate">
                    ${money(c.rate)} / ${c.unit}
                </div>
            </div>
        `).join('');

        companiesHTML = `
            <div class="modal-companies-section">
                <h4>🏢 Trending Brands &amp; Market Rates</h4>
                <div class="modal-company-list">${rows}</div>
                ${comp.tip ? '<div class="modal-tip">💡 <strong>Pro Tip:</strong> ' + comp.tip + '</div>' : ''}
            </div>
        `;
    } else {
        companiesHTML = '<p style="color:var(--muted);margin-top:12px;">Rates vary by location. Get 3 quotes from local suppliers before buying.</p>';
    }

    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = item.icon + ' ' + item.name;

    const bodyEl = document.getElementById('modalBody');
    if (bodyEl) {
        bodyEl.innerHTML = `
            <div class="modal-overview">
                <div class="modal-overview-row">
                    <span>📋 Purpose</span>
                    <span>${item.purpose}</span>
                </div>
                <div class="modal-overview-row">
                    <span>💰 Approx. Rate</span>
                    <span><strong>${money(item.rate)} / ${item.unit}</strong></span>
                </div>
                <div class="modal-overview-row">
                    <span>📦 Category</span>
                    <span class="modal-type-badge modal-type-${item.type}">${item.type.toUpperCase()}</span>
                </div>
            </div>
            ${companiesHTML}
        `;
    }

    const modal = document.getElementById('materialModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeMaterialModal(event = null) {
    if (event && event.target && event.target.id !== "materialModal") return;
    const modal = document.getElementById('materialModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
}

/* =====================================================
            01. FLOOR CALCULATOR (WITH VALIDATION)
===================================================== */
function calculateFloor() {
    const lengthInput = document.getElementById("floorLength");
    const widthInput = document.getElementById("floorWidth");

    const lengthVal = lengthInput?.value.trim();
    const widthVal = widthInput?.value.trim();

    let hasError = false;

    if (!lengthVal || isNaN(lengthVal) || Number(lengthVal) <= 0) {
        markInputError(lengthInput, "Please enter Length (ft)");
        hasError = true;
    } else {
        clearInputError(lengthInput);
    }

    if (!widthVal || isNaN(widthVal) || Number(widthVal) <= 0) {
        markInputError(widthInput, "Please enter Width (ft)");
        hasError = true;
    } else {
        clearInputError(widthInput);
    }

    if (hasError) {
        playSound("error");
        showToast("⚠️ Please fill all required fields!");
        return;
    }

    const result = Number(lengthVal) * Number(widthVal);

    const resEl = document.getElementById("floorResult");
    if (resEl) {
        resEl.innerText = result.toLocaleString("en-IN") + " sq.ft";
    }

    playSound("success");
    showToast(`✅ Floor Area: ${result.toLocaleString("en-IN")} sq.ft`);
}

/* =====================================================
            02. WALL CALCULATOR (WITH VALIDATION)
===================================================== */
function calculateWall() {
    const lengthInput = document.getElementById("wallLength");
    const heightInput = document.getElementById("wallHeight");
    const openingInput = document.getElementById("wallOpening");

    const lengthVal = lengthInput?.value.trim();
    const heightVal = heightInput?.value.trim();
    const openingVal = openingInput?.value.trim() || "0";

    let hasError = false;

    if (!lengthVal || isNaN(lengthVal) || Number(lengthVal) <= 0) {
        markInputError(lengthInput, "Please enter Wall Length (ft)");
        hasError = true;
    } else {
        clearInputError(lengthInput);
    }

    if (!heightVal || isNaN(heightVal) || Number(heightVal) <= 0) {
        markInputError(heightInput, "Please enter Wall Height (ft)");
        hasError = true;
    } else {
        clearInputError(heightInput);
    }

    if (hasError) {
        playSound("error");
        showToast("⚠️ Please fill all required fields!");
        return;
    }

    const length = Number(lengthVal);
    const height = Number(heightVal);
    const opening = Math.max(0, Number(openingVal) || 0);

    const result = Math.max(length * height - opening, 0);

    const resEl = document.getElementById("wallResult");
    if (resEl) {
        resEl.innerText = result.toLocaleString("en-IN") + " sq.ft";
    }

    playSound("success");
    showToast(`✅ Wall Area: ${result.toLocaleString("en-IN")} sq.ft`);
}

/* =====================================================
        03. CONCRETE CALCULATOR (WITH VALIDATION)
===================================================== */
function calculateConcrete() {
    const lengthInput = document.getElementById("concreteLength");
    const widthInput = document.getElementById("concreteWidth");
    const depthInput = document.getElementById("concreteDepth");

    const lengthVal = lengthInput?.value.trim();
    const widthVal = widthInput?.value.trim();
    const depthVal = depthInput?.value.trim();

    let hasError = false;

    if (!lengthVal || isNaN(lengthVal) || Number(lengthVal) <= 0) {
        markInputError(lengthInput, "Please enter Length (ft)");
        hasError = true;
    } else {
        clearInputError(lengthInput);
    }

    if (!widthVal || isNaN(widthVal) || Number(widthVal) <= 0) {
        markInputError(widthInput, "Please enter Width (ft)");
        hasError = true;
    } else {
        clearInputError(widthInput);
    }

    if (!depthVal || isNaN(depthVal) || Number(depthVal) <= 0) {
        markInputError(depthInput, "Please enter Depth (ft)");
        hasError = true;
    } else {
        clearInputError(depthInput);
    }

    if (hasError) {
        playSound("error");
        showToast("⚠️ Please fill all required fields!");
        return;
    }

    const result = Number(lengthVal) * Number(widthVal) * Number(depthVal);

    const resEl = document.getElementById("concreteResult");
    if (resEl) {
        resEl.innerText = result.toLocaleString("en-IN") + " cubic ft";
    }

    playSound("success");
    showToast(`✅ Concrete Volume: ${result.toLocaleString("en-IN")} cu.ft`);
}

/* =====================================================
            04. AREA COST (WITH VALIDATION)
===================================================== */
function calculateAreaCost() {
    const areaInput = document.getElementById("costArea");
    const rateInput = document.getElementById("costRate");

    const areaVal = areaInput?.value.trim();
    const rateVal = rateInput?.value.trim();

    let hasError = false;

    if (!areaVal || isNaN(areaVal) || Number(areaVal) <= 0) {
        markInputError(areaInput, "Please enter Area (sq.ft)");
        hasError = true;
    } else {
        clearInputError(areaInput);
    }

    if (!rateVal || isNaN(rateVal) || Number(rateVal) <= 0) {
        markInputError(rateInput, "Please enter Rate / sq.ft");
        hasError = true;
    } else {
        clearInputError(rateInput);
    }

    if (hasError) {
        playSound("error");
        showToast("⚠️ Please fill all required fields!");
        return;
    }

    const total = Number(areaVal) * Number(rateVal);

    const resEl = document.getElementById("areaCostResult");
    if (resEl) {
        resEl.innerText = money(total);
    }

    playSound("success");
    showToast(`✅ Estimated Cost: ${money(total)}`);
}

/* =====================================================
                    CONSTRUCTION STAGES
===================================================== */
const constructionImages = [
    "images/gallery/house_1.jpg",  // 01 Planning
    "images/gallery/house_2.jpg",  // 02 Site investigation
    "images/gallery/house_3.jpg",  // 03 Site prep
    "images/gallery/house_4.jpg",  // 04 Foundation
    "images/gallery/house_5.jpg",  // 05 Plinth
    "images/gallery/house_6.jpg",  // 06 Columns & Beams
    "images/gallery/house_7.jpg",  // 07 Brick Masonry
    "images/gallery/house_8.jpg",  // 08 Slab / Roof
    "images/gallery/house_9.jpg",  // 09 MEP
    "images/gallery/house_10.jpg", // 10 Plaster
    "images/gallery/house_1.jpg",  // 11 Flooring
    "images/gallery/house_2.jpg",  // 12 Painting
    "images/gallery/house_3.jpg",  // 13 Testing
    "images/gallery/house_4.jpg"   // 14 Handover
];

const stages = [
    ["01", "Planning & Design", "Finalize requirements, floor plan, architectural drawings, structural design and preliminary budget."],
    ["02", "Site Investigation", "Check site levels, soil conditions, access, drainage and basic site requirements."],
    ["03", "Site Preparation", "Clear the plot, establish levels and prepare the construction area."],
    ["04", "Foundation", "Excavation, PCC, footing reinforcement, concrete and foundation-related work."],
    ["05", "Plinth", "Complete plinth-related masonry, filling, damp protection and floor preparation."],
    ["06", "Columns & Beams", "Construct the structural frame according to approved structural drawings."],
    ["07", "Brick Masonry", "Construct external walls, internal walls and partitions."],
    ["08", "Slab / Roof", "Complete shuttering, reinforcement, embedded services and concrete work."],
    ["09", "Electrical & Plumbing", "Install conduits, wiring routes, water supply and drainage systems."],
    ["10", "Plaster & Waterproofing", "Finish wall surfaces and waterproof bathrooms, roofs and wet areas."],
    ["11", "Flooring & Openings", "Install flooring, tiles, doors, windows and hardware."],
    ["12", "Painting & Finishing", "Complete putty, primer, paint, fixtures and final finishing."],
    ["13", "Testing & Inspection", "Check electrical, plumbing, drainage, doors, windows and visible defects."],
    ["14", "Final Handover", "Complete snag list, cleaning, documentation and final handover."]
];

const twentyDayPlan = [
    ["01", "Planning", "Freeze drawings, grid lines and levels", "Cement 2 bags · Marking powder 5 Kg", constructionImages[0], "Approved drawings", "Grid and benchmark ready"],
    ["02", "Site setup", "Barricading, access and material storage", "Sand 10 CFT · Water 500 L", constructionImages[1], "Day 01", "Safe work zone ready"],
    ["03", "Excavation", "Excavate foundation trenches to design depth", "Stone dust 20 CFT · Sand 10 CFT", constructionImages[2], "Site setup", "Formation level achieved"],
    ["04", "PCC", "Lay lean concrete below footings", "Cement 12 bags · Aggregate 40 CFT · Sand 20 CFT", constructionImages[3], "Excavation", "Clean, level PCC bed"],
    ["05", "Footing steel", "Fix reinforcement with cover blocks", "Steel 140 Kg · Binding wire 4 Kg", constructionImages[4], "PCC cured", "Steel inspected before pour"],
    ["06", "Footing concrete", "Pour, compact and finish isolated footings", "Cement 35 bags · Aggregate 110 CFT", constructionImages[5], "Footing steel", "Footings poured and logged"],
    ["07", "Plinth beam steel", "Fix plinth beam reinforcement and shuttering", "Steel 120 Kg · Binding wire 3 Kg", constructionImages[6], "Footing concrete", "Beam cage ready"],
    ["08", "Plinth beam", "Concrete plinth beam and damp-proof course", "Cement 18 bags · Aggregate 55 CFT · Bricks 500", constructionImages[4], "Beam steel", "Plinth line established"],
    ["09", "Filling", "Backfill in controlled layers and compact", "Stone dust 100 CFT", constructionImages[2], "Plinth beam", "Compacted filling complete"],
    ["10", "Floor base", "Prepare soling and ground floor base", "Stone dust 80 CFT · Sand 60 CFT", constructionImages[3], "Filling", "Floor base level checked"],
    ["11", "Column steel", "Fix starter bars and column reinforcement", "Steel 190 Kg · Binding wire 5 Kg", constructionImages[4], "Plinth level", "Vertical alignment checked"],
    ["12", "Columns", "Erect shuttering and cast columns", "Cement 22 bags · Aggregate 70 CFT", constructionImages[5], "Column steel", "Column pour complete"],
    ["13", "Beam steel", "Fix beams, lintels and slab supports", "Steel 260 Kg · Binding wire 7 Kg", constructionImages[6], "Columns cured", "Beam reinforcement inspected"],
    ["14", "Roof shuttering", "Level slab shuttering and edge forms", "Props 80 nos · Plywood 300 Sq.Ft", constructionImages[7], "Beam steel", "Slab formwork level"],
    ["15", "Roof services", "Place sleeves, conduits and slab steel", "Steel 420 Kg · Conduit 180 m", constructionImages[8], "Roof shuttering", "Embedded services recorded"],
    ["16", "Roof concrete", "Pour slab, vibrate and start curing", "Cement 48 bags · Aggregate 150 CFT · Sand 75 CFT", constructionImages[7], "Roof inspection", "Slab pour completed"],
    ["17", "Masonry", "Build external and internal brick walls", "Bricks 4,000 · Cement 18 bags · Sand 120 CFT", constructionImages[6], "Slab curing", "Wall alignment checked"],
    ["18", "MEP rough-in", "Install electrical conduits and plumbing lines", "PVC pipe 120 m · Conduit 180 m", constructionImages[8], "Masonry openings", "Pressure and route test ready"],
    ["19", "Plaster & waterproofing", "Plaster surfaces and waterproof wet areas", "Cement 25 bags · Sand 160 CFT · Waterproofing 500 Sq.Ft", constructionImages[9], "MEP rough-in", "Wet-area test passed"],
    ["20", "Handover checks", "Flooring sample, paint touch-up, testing and snag list", "Tiles 1,000 Sq.Ft · Putty 20 bags · Paint 40 L", constructionImages[13], "All prior inspections", "Snag list and handover record"]
];

function renderStages() {
    const roadmap = document.getElementById("roadmap");
    if (!roadmap) return;

    roadmap.innerHTML = "";

    stages.forEach((stage, index) => {
        const imgUrl = constructionImages[index % constructionImages.length];
        roadmap.innerHTML += `
            <div
                class="stage stage-clickable"
                id="stage-card-${index}"
                data-search="${stage[1].toLowerCase()} ${stage[2].toLowerCase()}"
                onclick="showConstructionPreview('${stage[1].replace(/'/g, "\\'")}', '${stage[2].replace(/'/g, "\\'")}', 'Stage ${stage[0]}', '${imgUrl}')"
                tabindex="0"
                role="button"
            >
                <span class="stage-number">STAGE ${stage[0]}</span>
                <h2>${stage[1]}</h2>
                <p>${stage[2]}</p>
            </div>
        `;
    });

    renderTwentyDayPlan();
}

function renderTwentyDayPlan() {
    const plan = document.getElementById("dayPlan");
    if (!plan) return;

    plan.innerHTML = twentyDayPlan.map((day, index) => `
        <button
            class="day-card"
            title="${day[1]}: ${day[2]}"
            style="--bar-width: ${((index + 1) / twentyDayPlan.length) * 100}%"
            onclick="showConstructionPreview('${day[1].replace(/'/g, "\\'")}', '${day[2].replace(/'/g, "\\'")}', 'Day ${day[0]}', '${day[4]}', '${day[3].replace(/'/g, "\\'")}')"
            aria-label="View ${day[1]} for day ${day[0]}"
        >
            <span class="day-label">DAY ${day[0]}</span>
            <span class="day-card-content"><strong>${day[1]}</strong><small>${day[2]}</small><em>${day[3]}</em></span>
            <span class="day-graph-track"><span class="day-graph-bar"></span></span>
        </button>
    `).join('');

    const technicalPlan = document.getElementById('technicalPlan');
    if (technicalPlan) {
        technicalPlan.innerHTML = `<div class="technical-plan-head"><span>EXECUTION REGISTER</span><strong>Daily work packages</strong></div>` + twentyDayPlan.map(day => `
            <button
                class="technical-row"
                onclick="showConstructionPreview('${day[1].replace(/'/g, "\\'")}', '${day[2].replace(/'/g, "\\'")}', 'DAY ${day[0]} · ${day[1].replace(/'/g, "\\'")}', '${day[4]}', '${day[3].replace(/'/g, "\\'")}')"
            >
                <span class="technical-day">DAY ${day[0]}</span>
                <span class="technical-work"><strong>${day[1]}</strong><small>${day[2]}</small></span>
                <span class="technical-material"><b>MATERIAL</b>${day[3]}</span>
                <span class="technical-dependency"><b>DEPENDENCY</b>${day[5]}</span>
                <span class="technical-output"><b>OUTPUT</b>${day[6]}</span>
            </button>
        `).join('');
    }
}

function showConstructionPreview(title, text, label, image, material = 'Material details appear here') {
    const imageEl = document.getElementById('constructionPreviewImage');
    const titleEl = document.getElementById('constructionPreviewTitle');
    const textEl = document.getElementById('constructionPreviewText');
    const labelEl = document.querySelector('#constructionPreview .preview-content > span');
    const materialEl = document.getElementById('constructionPreviewMaterial');
    if (!imageEl || !titleEl || !textEl || !materialEl) return;

    imageEl.src = image;
    imageEl.alt = title + ' reference photo';
    titleEl.textContent = title;
    textEl.textContent = text;
    materialEl.textContent = material;
    if (labelEl) labelEl.textContent = label;
    document.getElementById('constructionPreview')?.classList.add('preview-active');
}

/* =====================================================
                    CHECKLIST
===================================================== */
const checklist = [
    "House requirements finalized",
    "Architectural plan finalized",
    "Structural drawings checked",
    "Soil/site investigation completed",
    "Budget and contingency planned",
    "Contractor / labour arrangements checked",
    "Material suppliers compared",
    "Foundation excavation checked",
    "PCC completed",
    "Footing reinforcement inspected",
    "Footing concrete completed",
    "Plinth work checked",
    "Column reinforcement checked",
    "Beam reinforcement checked",
    "Slab reinforcement checked",
    "Brick wall alignment checked",
    "Electrical conduits checked",
    "Plumbing lines checked",
    "Waterproofing checked",
    "Plaster quality checked",
    "Flooring level checked",
    "Doors and windows checked",
    "Painting completed",
    "Electrical testing completed",
    "Plumbing testing completed",
    "Final cleaning completed",
    "Final inspection completed"
];

function renderChecklist() {
    const container = document.getElementById("checklistContainer");
    if (!container) return;

    container.innerHTML = "";

    checklist.forEach((task, index) => {
        const checked = localStorage.getItem("check-" + index) === "true";

        container.innerHTML += `
            <label class="check-item ${checked ? "done" : ""}" id="check-item-${index}" data-search="${task.toLowerCase()}">
                <input
                    type="checkbox"
                    ${checked ? "checked" : ""}
                    onchange="toggleCheck(${index}, this.checked, this)"
                >
                <span>${task}</span>
            </label>
        `;
    });

    updateChecklistSummary();
}

function updateChecklistSummary() {
    const summary = document.getElementById("checklistSummary");
    const clearButton = document.getElementById("clearChecklistFilter");
    if (!summary || !clearButton) return;

    const query = (document.getElementById("globalSearch")?.value || "").trim();
    const completed = checklist.filter((task, index) => localStorage.getItem("check-" + index) === "true").length;
    summary.textContent = query ? `${checklist.length} total tasks · Showing matching results` : `${checklist.length} total tasks · ${completed} completed`;
    clearButton.style.display = query ? "inline-flex" : "none";
}

function toggleCheck(index, checked, checkbox) {
    localStorage.setItem("check-" + index, checked);
    checkbox.closest(".check-item")?.classList.toggle("done", checked);
    if (checked) {
        playSound("success");
    } else {
        playSound("click");
    }
    showToast(checked ? "Task completed ✅" : "Task unchecked");
    updateChecklistSummary();
}

/* =====================================================
                    REPORT
===================================================== */
function renderReport() {
    const total = items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.rate) || 0), 0);
    const area = getProjectArea();
    const perSqft = area > 0 ? total / area : 0;

    const dateEl = document.getElementById("reportDate");
    if (dateEl) dateEl.innerText = new Date().toLocaleDateString("en-IN");

    const areaEl = document.getElementById("reportArea");
    if (areaEl) areaEl.innerText = area.toLocaleString("en-IN") + " sq.ft";

    const totalEl = document.getElementById("reportTotal");
    if (totalEl) totalEl.innerText = money(total);

    const perSqftEl = document.getElementById("reportPerSqft");
    if (perSqftEl) perSqftEl.innerText = money(perSqft);

    const list = document.getElementById("reportItems");
    if (!list) return;

    list.innerHTML = "";

    items.forEach(item => {
        const amount = (Number(item.quantity) || 0) * (Number(item.rate) || 0);
        list.innerHTML += `
            <div class="report-item">
                <span>${item.icon} ${item.name}</span>
                <strong>${money(amount)}</strong>
            </div>
        `;
    });
}

/* =====================================================
                    FEEDBACK
===================================================== */
let selectedRating = 0;

function setRating(value) {
    selectedRating = value;
    playSound("click");
    document.querySelectorAll(".stars button").forEach((button, index) => {
        button.classList.toggle("selected", index < value);
    });
}

function submitFeedback() {
    const nameInput = document.getElementById("feedbackName");
    const textInput = document.getElementById("feedbackText");
    const categorySelect = document.getElementById("feedbackCategory");

    const name = nameInput?.value.trim() || "Anonymous";
    const category = categorySelect?.value || "General";
    const text = textInput?.value.trim() || "";

    if (!text) {
        markInputError(textInput, "Please write your feedback message");
        playSound("error");
        showToast("⚠️ Please write your feedback message.");
        return;
    }
    clearInputError(textInput);

    const feedback = {
        name,
        rating: selectedRating || 5,
        category,
        text,
        date: new Date().toLocaleString("en-IN")
    };

    localStorage.setItem("gharsetu-feedback", JSON.stringify(feedback));

    if (textInput) textInput.value = "";
    if (nameInput) nameInput.value = "";
    setRating(0);

    const msgEl = document.getElementById("feedbackMessage");
    if (msgEl) {
        msgEl.innerText = "✅ Thank you! Your feedback has been recorded successfully.";
        msgEl.style.color = "var(--green)";
        setTimeout(() => {
            if (msgEl) msgEl.innerText = "";
        }, 5000);
    }

    playSound("success");
    showToast("Feedback submitted successfully ✅");
}

/* =====================================================
        ENHANCED MULTI-CATEGORY GLOBAL SEARCH
===================================================== */
let searchResultsCache = [];
let selectedSearchIndex = -1;

function highlightMatch(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
}

function globalSearch() {
    const input = document.getElementById("globalSearch");
    const dropdown = document.getElementById("searchDropdown");
    const clearBtn = document.getElementById("clearSearchBtn");

    if (!input) return;

    const query = input.value.toLowerCase().trim();

    if (clearBtn) {
        clearBtn.style.display = query ? "flex" : "none";
    }

    const activePage = document.querySelector(".page.active")?.id || "dashboard";
    filterCurrentPage(query, activePage);

    if (!query) {
        if (dropdown) dropdown.style.display = "none";
        searchResultsCache = [];
        selectedSearchIndex = -1;
        return;
    }

    // 1. Search Materials
    const matchedMaterials = items
        .map((item, index) => ({ item, index }))
        .filter(({ item }) =>
            item.name.toLowerCase().includes(query) ||
            item.purpose.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
        );

    // 2. Search Calculators & Tools
    const matchedTools = toolsCatalog.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
    );

    // 3. Search Construction Stages
    const matchedStages = stages
        .map((stg, index) => ({ stg, index }))
        .filter(({ stg }) =>
            stg[1].toLowerCase().includes(query) ||
            stg[2].toLowerCase().includes(query) ||
            stg[0].includes(query)
        );

    // 4. Search Checklist
    const matchedChecklist = checklist
        .map((task, index) => ({ task, index }))
        .filter(({ task }) => task.toLowerCase().includes(query));

    // 5. Search Navigation Pages
    const matchedPages = pagesCatalog.filter(pg =>
        pg.name.toLowerCase().includes(query) ||
        pg.description.toLowerCase().includes(query)
    );

    searchResultsCache = [];
    let html = "";
    let totalCount = 0;

    if (matchedMaterials.length > 0) {
        html += `<div class="search-category-title">🧱 Materials & Items (${matchedMaterials.length})</div>`;
        matchedMaterials.slice(0, 5).forEach(({ item, index }) => {
            const cacheIdx = searchResultsCache.length;
            searchResultsCache.push({
                page: "materials",
                targetId: `material-card-${index}`,
                title: item.name,
                msg: `${item.name} found in Materials Guide`
            });
            html += `
                <div class="search-result-item" onclick="selectSearchResult(${cacheIdx})">
                    <div class="search-res-left">
                        <span class="search-res-icon">${item.icon}</span>
                        <div class="search-res-info">
                            <div class="search-res-name">${highlightMatch(item.name, query)}</div>
                            <div class="search-res-detail">${item.purpose}</div>
                        </div>
                    </div>
                    <span class="search-res-badge">${money(item.rate)}/${item.unit}</span>
                </div>
            `;
            totalCount++;
        });
    }

    if (matchedTools.length > 0) {
        html += `<div class="search-category-title">📐 Calculators & Tools (${matchedTools.length})</div>`;
        matchedTools.slice(0, 3).forEach(tool => {
            const cacheIdx = searchResultsCache.length;
            searchResultsCache.push({
                page: tool.page,
                targetId: tool.targetId,
                title: tool.name,
                msg: `Opened ${tool.name}`
            });
            html += `
                <div class="search-result-item" onclick="selectSearchResult(${cacheIdx})">
                    <div class="search-res-left">
                        <span class="search-res-icon">${tool.icon}</span>
                        <div class="search-res-info">
                            <div class="search-res-name">${highlightMatch(tool.name, query)}</div>
                            <div class="search-res-detail">${tool.description}</div>
                        </div>
                    </div>
                    <span class="search-res-badge">Tool</span>
                </div>
            `;
            totalCount++;
        });
    }

    if (matchedStages.length > 0) {
        html += `<div class="search-category-title">🏗️ Construction Roadmap (${matchedStages.length})</div>`;
        matchedStages.slice(0, 3).forEach(({ stg, index }) => {
            const cacheIdx = searchResultsCache.length;
            searchResultsCache.push({
                page: "construction",
                targetId: `stage-card-${index}`,
                title: `Stage ${stg[0]}: ${stg[1]}`,
                msg: `Stage ${stg[0]}: ${stg[1]}`
            });
            html += `
                <div class="search-result-item" onclick="selectSearchResult(${cacheIdx})">
                    <div class="search-res-left">
                        <span class="search-res-icon">🏗️</span>
                        <div class="search-res-info">
                            <div class="search-res-name">Stage ${stg[0]}: ${highlightMatch(stg[1], query)}</div>
                            <div class="search-res-detail">${stg[2]}</div>
                        </div>
                    </div>
                    <span class="search-res-badge">Stage ${stg[0]}</span>
                </div>
            `;
            totalCount++;
        });
    }

    if (matchedChecklist.length > 0) {
        html += `<div class="search-category-title">✅ Checklist Tasks (${matchedChecklist.length})</div>`;
        matchedChecklist.slice(0, 3).forEach(({ task, index }) => {
            const cacheIdx = searchResultsCache.length;
            searchResultsCache.push({
                page: "checklist",
                targetId: `check-item-${index}`,
                title: task,
                msg: `Checklist task highlighted`
            });
            html += `
                <div class="search-result-item" onclick="selectSearchResult(${cacheIdx})">
                    <div class="search-res-left">
                        <span class="search-res-icon">✅</span>
                        <div class="search-res-info">
                            <div class="search-res-name">${highlightMatch(task, query)}</div>
                        </div>
                    </div>
                    <span class="search-res-badge">Task</span>
                </div>
            `;
            totalCount++;
        });
    }

    if (matchedPages.length > 0) {
        html += `<div class="search-category-title">🧭 Pages & Navigation (${matchedPages.length})</div>`;
        matchedPages.slice(0, 3).forEach(pg => {
            const cacheIdx = searchResultsCache.length;
            searchResultsCache.push({
                page: pg.id,
                targetId: null,
                title: pg.name,
                msg: `Navigated to ${pg.name}`
            });
            html += `
                <div class="search-result-item" onclick="selectSearchResult(${cacheIdx})">
                    <div class="search-res-left">
                        <span class="search-res-icon">${pg.icon}</span>
                        <div class="search-res-info">
                            <div class="search-res-name">${highlightMatch(pg.name, query)}</div>
                            <div class="search-res-detail">${pg.description}</div>
                        </div>
                    </div>
                    <span class="search-res-badge">Page</span>
                </div>
            `;
            totalCount++;
        });
    }

    if (totalCount === 0) {
        html = `<div class="search-empty">🔍 No matching items found for "<strong>${query}</strong>"</div>`;
    }

    if (dropdown) {
        dropdown.innerHTML = html;
        dropdown.style.display = "block";
    }
}

function filterCurrentPage(query, pageId) {
    if (pageId === "materials") {
        let matchCount = 0;
        document.querySelectorAll("#materialGrid .material-card").forEach(card => {
            const searchData = card.getAttribute("data-search") || "";
            const isMatch = !query || searchData.includes(query);
            card.style.display = isMatch ? "block" : "none";
            if (isMatch) matchCount++;
        });

        const feedbackMsg = document.getElementById("materialsSearchMsg");
        if (feedbackMsg) {
            if (query && matchCount === 0) {
                feedbackMsg.style.display = "block";
                feedbackMsg.innerHTML = `🔍 No materials match "<strong>${query}</strong>". Try Cement, Sand, Steel, Paint, etc.`;
            } else if (query) {
                feedbackMsg.style.display = "block";
                feedbackMsg.innerHTML = `Showing ${matchCount} matching material${matchCount > 1 ? "s" : ""} for "<strong>${query}</strong>"`;
            } else {
                feedbackMsg.style.display = "none";
            }
        }
    } else if (pageId === "estimate") {
        document.querySelectorAll("#estimateBody tr").forEach(row => {
            const searchData = row.getAttribute("data-search") || "";
            const isMatch = !query || searchData.includes(query);
            row.style.display = isMatch ? "" : "none";
        });
    } else if (pageId === "construction") {
        document.querySelectorAll("#roadmap .stage").forEach(card => {
            const searchData = card.getAttribute("data-search") || "";
            const isMatch = !query || searchData.includes(query);
            card.style.display = isMatch ? "block" : "none";
        });
    } else if (pageId === "checklist") {
        let matchCount = 0;
        document.querySelectorAll("#checklistContainer .check-item").forEach(item => {
            const searchData = item.getAttribute("data-search") || "";
            const isMatch = !query || searchData.includes(query);
            item.style.display = isMatch ? "flex" : "none";
            if (isMatch) matchCount++;
        });
        updateChecklistSummary();
    }
}

function selectSearchResult(index) {
    const result = searchResultsCache[index];
    if (!result) return;

    showPage(result.page);

    const dropdown = document.getElementById("searchDropdown");
    if (dropdown) dropdown.style.display = "none";

    if (result.targetId) {
        setTimeout(() => {
            const el = document.getElementById(result.targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.classList.add("search-highlight-pulse");
                if (el.tagName === "INPUT") {
                    el.focus();
                }
                setTimeout(() => {
                    el.classList.remove("search-highlight-pulse");
                }, 2500);
            }
        }, 150);
    }

    if (result.msg) {
        showToast(result.msg);
    }
}

function clearSearch() {
    playSound("click");
    const input = document.getElementById("globalSearch");
    const dropdown = document.getElementById("searchDropdown");
    const clearBtn = document.getElementById("clearSearchBtn");

    if (input) input.value = "";
    if (clearBtn) clearBtn.style.display = "none";
    if (dropdown) dropdown.style.display = "none";

    searchResultsCache = [];
    selectedSearchIndex = -1;

    const activePage = document.querySelector(".page.active")?.id || "dashboard";
    filterCurrentPage("", activePage);

    if (input) input.focus();
}

function showSearchDropdown() {
    const input = document.getElementById("globalSearch");
    if (input && input.value.trim().length > 0) {
        globalSearch();
    }
}

function handleSearchKey(event) {
    const dropdown = document.getElementById("searchDropdown");
    if (!dropdown || dropdown.style.display === "none") return;

    const domItems = dropdown.querySelectorAll(".search-result-item");
    if (!domItems || domItems.length === 0) return;

    if (event.key === "ArrowDown") {
        event.preventDefault();
        selectedSearchIndex = (selectedSearchIndex + 1) % domItems.length;
        updateSelectedSearchItem(domItems);
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        selectedSearchIndex = (selectedSearchIndex - 1 + domItems.length) % domItems.length;
        updateSelectedSearchItem(domItems);
    } else if (event.key === "Enter") {
        event.preventDefault();
        if (selectedSearchIndex >= 0 && selectedSearchIndex < searchResultsCache.length) {
            selectSearchResult(selectedSearchIndex);
        } else if (searchResultsCache.length > 0) {
            selectSearchResult(0);
        }
    } else if (event.key === "Escape") {
        dropdown.style.display = "none";
    }
}

function updateSelectedSearchItem(domItems) {
    domItems.forEach((item, idx) => {
        item.classList.toggle("selected", idx === selectedSearchIndex);
        if (idx === selectedSearchIndex) {
            item.scrollIntoView({ block: "nearest" });
        }
    });
}

document.addEventListener("click", (e) => {
    const searchWrapper = document.querySelector(".search-wrapper");
    const dropdown = document.getElementById("searchDropdown");
    if (dropdown && searchWrapper && !searchWrapper.contains(e.target)) {
        dropdown.style.display = "none";
    }
});

/* =====================================================
            PROJECT STORAGE & MANAGEMENT MODAL
===================================================== */
function saveProject() {
    const project = {
        length: document.getElementById("length")?.value || 50,
        width: document.getElementById("width")?.value || 30,
        floors: document.getElementById("floors")?.value || 1,
        items
    };

    localStorage.setItem("gharsetu-project", JSON.stringify(project));
}

function loadProject() {
    const saved = localStorage.getItem("gharsetu-project");
    if (!saved) return;

    try {
        const project = JSON.parse(saved);

        const lengthEl = document.getElementById("length");
        if (lengthEl && project.length) lengthEl.value = project.length;

        const widthEl = document.getElementById("width");
        if (widthEl && project.width) widthEl.value = project.width;

        const floorsEl = document.getElementById("floors");
        if (floorsEl && project.floors) floorsEl.value = project.floors;

        if (Array.isArray(project.items)) {
            project.items.forEach((savedItem, index) => {
                if (items[index]) {
                    if (savedItem.quantity !== undefined) items[index].quantity = savedItem.quantity;
                    if (savedItem.rate !== undefined) items[index].rate = savedItem.rate;
                }
            });
        }
    } catch(error) {
        console.log("Could not load project from localStorage.");
    }
}

function resetProject() {
    if (!confirm("Are you sure you want to reset all quantities, rates, and dimensions to default values?")) return;
    localStorage.removeItem("gharsetu-project");
    items = JSON.parse(JSON.stringify(defaultItems));

    const lengthEl = document.getElementById("length");
    if (lengthEl) lengthEl.value = 50;
    const widthEl = document.getElementById("width");
    if (widthEl) widthEl.value = 30;
    const floorsEl = document.getElementById("floors");
    if (floorsEl) floorsEl.value = 1;

    renderEstimate();
    renderMaterials();
    updateProject();
    renderReport();
    closeProjectModal();
    playSound("success");
    showToast("Project reset to default standards 🔄");
}

function exportProjectData() {
    const project = {
        name: "ghar.setup.pro Construction Plan",
        exportedAt: new Date().toISOString(),
        dimensions: {
            length: document.getElementById("length")?.value || 50,
            width: document.getElementById("width")?.value || 30,
            floors: document.getElementById("floors")?.value || 1,
            builtUpArea: getProjectArea()
        },
        items,
        checklistState: checklist.map((_, i) => localStorage.getItem("check-" + i) === "true")
    };

    const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ghar-setup-pro-estimate-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    playSound("success");
    showToast("Project plan downloaded as JSON 💾");
}

function importProjectData(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.dimensions) {
                if (data.dimensions.length) document.getElementById("length").value = data.dimensions.length;
                if (data.dimensions.width) document.getElementById("width").value = data.dimensions.width;
                if (data.dimensions.floors) document.getElementById("floors").value = data.dimensions.floors;
            }
            if (Array.isArray(data.items)) {
                items = data.items;
            }
            if (Array.isArray(data.checklistState)) {
                data.checklistState.forEach((val, i) => {
                    localStorage.setItem("check-" + i, val);
                });
            }
            saveProject();
            renderEstimate();
            renderMaterials();
            renderChecklist();
            updateProject();
            renderReport();
            closeProjectModal();
            playSound("success");
            showToast("Project plan imported successfully ✅");
        } catch (err) {
            playSound("error");
            showToast("⚠️ Invalid JSON project file.");
        }
    };
    reader.readAsText(file);
}

function openProjectModal() {
    playSound("click");
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeProjectModal(event = null) {
    if (event && event.target && event.target.id !== "projectModal") return;
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

function openShortcutsModal() {
    playSound("click");
    const modal = document.getElementById("shortcutsModal");
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeShortcutsModal(event = null) {
    if (event && event.target && event.target.id !== "shortcutsModal") return;
    const modal = document.getElementById("shortcutsModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

/* =====================================================
                    TOAST
===================================================== */
let toastTimer;
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

/* =====================================================
        TRENDING 2026 HOUSE GALLERY & LIGHTBOX
===================================================== */
const galleryPhotos = [
    { src: 'images/gallery/house_1.jpg', fallback: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop&q=90', label: '🏠 01. Minimalist White Villa', area: '4BHK • 3,200 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_2.jpg', fallback: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop&q=90', label: '✨ 02. Luxury Pool Villa', area: '5BHK • 4,500 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_3.jpg', fallback: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop&q=90', label: '🤖 03. Smart Contemporary Home', area: '3BHK • 2,400 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_4.jpg', fallback: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=1200&h=800&fit=crop&q=90', label: '🪟 04. Glass & Steel Design', area: '4BHK • 3,600 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_5.jpg', fallback: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=800&fit=crop&q=90', label: '🏠 05. Premium Bungalow', area: '4BHK • 3,000 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_6.jpg', fallback: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=90', label: '🌿 06. Eco Green Smart Home', area: '3BHK • 2,100 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_7.jpg', fallback: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop&q=90', label: '🏔 07. Ultra Modern Duplex', area: '5BHK • 4,800 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_8.jpg', fallback: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=90', label: '💎 08. White Luxury Mansion', area: '6BHK • 6,000 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_9.jpg', fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&q=90', label: '❄ 09. Scandinavian Style Home', area: '3BHK • 2,200 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_10.jpg', fallback: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&h=800&fit=crop&q=90', label: '🌴 10. Tropical Resort Villa', area: '4BHK • 3,500 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_11.jpg', fallback: 'https://images.unsplash.com/photo-160058515526-990dced4db0d?w=1200&h=800&fit=crop&q=90', label: '🏠 11. Warm Courtyard House', area: '3BHK • 2,700 sq.ft • 2026 Trending' },
    { src: 'images/gallery/house_12.jpg', fallback: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=90', label: '🏡 12. Modern Family Residence', area: '4BHK • 3,800 sq.ft • 2026 Trending' }
];

let galleryOpen = false;
let currentLightboxIdx = 0;

function togglePhotoGallery() {
    const section = document.getElementById('photoGallerySection');
    const btnIcon = document.getElementById('galleryBtnIcon');
    if (!section) return;

    galleryOpen = !galleryOpen;

    if (galleryOpen) {
        section.style.display = 'block';
        if (btnIcon) btnIcon.textContent = '▲';
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        section.style.display = 'none';
        if (btnIcon) btnIcon.textContent = '▼';
    }
    playSound('click');
}

function openGalleryLightbox(index) {
    currentLightboxIdx = index;
    const modal = document.getElementById('galleryLightboxModal');
    const img = document.getElementById('lightboxImgFull');
    const caption = document.getElementById('lightboxCaption');

    if (!modal || !img) return;

    const photo = galleryPhotos[currentLightboxIdx];
    img.src = photo.src;
    img.alt = photo.label;
    img.onerror = function() {
        if (photo.fallback && this.src !== photo.fallback) {
            this.src = photo.fallback;
        }
    };
    if (caption) caption.textContent = `[${currentLightboxIdx + 1}/${galleryPhotos.length}] ${photo.label} — ${photo.area}`;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    playSound('click');
}

function closeGalleryLightbox() {
    const modal = document.getElementById('galleryLightboxModal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = '';
}

function closeGalleryLightboxOutside(event) {
    if (event.target === document.getElementById('galleryLightboxModal')) {
        closeGalleryLightbox();
    }
}

function galleryLightboxNav(direction) {
    currentLightboxIdx = (currentLightboxIdx + direction + galleryPhotos.length) % galleryPhotos.length;
    const photo = galleryPhotos[currentLightboxIdx];
    const img = document.getElementById('lightboxImgFull');
    const caption = document.getElementById('lightboxCaption');

    if (img) {
        img.style.opacity = '0';
        setTimeout(() => {
            img.src = photo.src;
            img.alt = photo.label;
            img.onerror = function() {
                if (photo.fallback && this.src !== photo.fallback) {
                    this.src = photo.fallback;
                }
            };
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.25s ease';
        }, 120);
    }
    if (caption) caption.textContent = `[${currentLightboxIdx + 1}/${galleryPhotos.length}] ${photo.label} — ${photo.area}`;
    playSound('click');
}

function openLightbox(imgSrc, title, desc) {
    playSound("click");
    const modal = document.getElementById("imageLightbox");
    const img = document.getElementById("lightboxImg");
    const titleEl = document.getElementById("lightboxTitle");
    const subEl = document.getElementById("lightboxSub");

    if (modal && img && titleEl && subEl) {
        img.src = imgSrc;
        titleEl.innerText = title;
        subEl.innerText = desc;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeLightbox(event = null) {
    if (event && event.target && event.target.id !== "imageLightbox") return;
    playSound("click");
    const modal = document.getElementById("imageLightbox");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}

// Global Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGalleryLightbox();
        closeLightbox();
        closeMaterialModal();
        closeProjectModal();
        closeShortcutsModal();
    }

    const galleryModal = document.getElementById('galleryLightboxModal');
    if (galleryModal && galleryModal.style.display === 'flex') {
        if (e.key === 'ArrowRight') galleryLightboxNav(1);
        if (e.key === 'ArrowLeft') galleryLightboxNav(-1);
    }
});

/* =====================================================
                    INITIALIZATION
===================================================== */
function init() {
    const savedTheme = localStorage.getItem("gharsetu-theme") || "light";
    setTheme(savedTheme);

    const soundBtn = document.getElementById("soundBtn");
    if (soundBtn) {
        soundBtn.innerText = soundEnabled ? "🔊" : "🔇";
        soundBtn.classList.toggle("muted", !soundEnabled);
    }

    loadProject();
    renderEstimate();
    renderMaterials();
    renderStages();
    renderChecklist();
    updateProject();
    renderReport();
}

// Start app
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
