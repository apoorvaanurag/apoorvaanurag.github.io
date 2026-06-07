// --- CANVAS PARTICLE BACKGROUND (DATA STREAM) ---
// Minimalist monochrome: background animation disabled to prioritize clear content layout.



// --- NAVIGATION HEADER ON SCROLL ---
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// --- ACTIVE NAV LINK MONITORING & MOBILE MENU ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const icon = navToggle.querySelector('i');
  if (navMenu.classList.contains('open')) {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.querySelector('i').setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});


// --- SCROLL REVEAL OBSERVER ---
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => observer.observe(el));


// --- ETL SANDBOX STATE MACHINE ---
const pipelineData = {
  colending: {
    title: 'Colending Data Platform',
    desc: 'Architected PySpark pipelines on Databricks processing 30k+ daily records. Migrated legacy workloads from S3/Redshift to EMR-on-EKS Spark, and ultimately to Databricks (PySpark) for stability, securing near-zero downtime and a 75% compute cost savings.',
    throughput: '30k / day',
    impact: '75% cost saved',
    logs: [
      { type: 'info', text: 'Initializing Databricks PySpark Session...' },
      { type: 'info', text: 'Connecting to AWS S3 landing bucket...' },
      { type: 'info', text: 'Extracting: Found daily borrower records CSV files. Reading into DataFrame.' },
      { type: 'success', text: 'Extract Phase Complete. 32,450 records loaded into memory.' },
      { type: 'info', text: 'Transforming: Checking schemas and parsing dates...' },
      { type: 'info', text: 'Transforming: Joining against credit scoring risk matrices...' },
      { type: 'info', text: 'Transforming: Computing cumulative AUM and tier-level pricing...' },
      { type: 'info', text: 'Transforming: Running SCD Type 2 merges on historical logs...' },
      { type: 'success', text: 'Transform Phase Complete. Schema validated. 0 records rejected.' },
      { type: 'info', text: 'Loading: Writing Delta Lake tables to S3 storage partition...' },
      { type: 'info', text: 'Loading: Rebuilding materialized SQL views for Finance analytics...' },
      { type: 'success', text: 'Loading Phase Complete. Redshift data warehouse updated.' },
      { type: 'success', text: 'PIPELINE EXECUTED SUCCESSFULLY. 75% compute cost saved & Rs.80L+ monthly value unlocked!' }
    ]
  },
  ucic: {
    title: 'UCIC Borrower Identification',
    desc: 'Developed an RBI-compliant entity resolution engine in PySpark. Deduplicates over 13 million borrower records via hybrid deterministic and fuzzy string matching, integrating automated data mismatch alerts for system auditors.',
    throughput: '13M+ records',
    impact: 'RBI-Compliant',
    logs: [
      { type: 'info', text: 'Starting UCIC Dedup Spark Cluster (12 executors)...' },
      { type: 'info', text: 'Fetching master records from database and loan registries...' },
      { type: 'info', text: 'Extracting: Reading borrower demographics dataframe (13.4M rows)...' },
      { type: 'success', text: 'Extract Phase Complete. Ingested all records.' },
      { type: 'info', text: 'Transforming: Standardizing addresses, phone numbers, and IDs...' },
      { type: 'info', text: 'Transforming: Executing blocking rules on PAN and Aadhaar records...' },
      { type: 'info', text: 'Transforming: Running Soundex and Levenshtein Distance computations...' },
      { type: 'info', text: 'Transforming: Flagging ambiguous profiles for manual audit queues...' },
      { type: 'success', text: 'Transform Phase Complete. Identified 1.2M duplicate accounts.' },
      { type: 'info', text: 'Loading: Writing unified records back to production master registry...' },
      { type: 'info', text: 'Loading: Publishing mismatch audit logs to compliance datalake...' },
      { type: 'success', text: 'Loading Phase Complete. RBI guidelines check passed.' },
      { type: 'success', text: 'PIPELINE EXECUTED SUCCESSFULLY. 13M+ Profiles deduplicated.' }
    ]
  },
  onepos: {
    title: 'OnePOS Reconciliation Engine',
    desc: 'Automated manual cash/ledger book reconciliations for core banking books against external statements. Handled high-complexity match sets via PySpark SQL arrays and eliminated manual account closure workflows.',
    throughput: '1 ledger cycle',
    impact: '72+ hours saved',
    logs: [
      { type: 'info', text: 'Booting OnePOS reconciliation scheduler...' },
      { type: 'info', text: 'Retrieving core banking ledger journal entries (current cycle)...' },
      { type: 'info', text: 'Retrieving bank statement settlements (current cycle)...' },
      { type: 'success', text: 'Extract Phase Complete. Ingested ledgers and bank statement data.' },
      { type: 'info', text: 'Transforming: Mapping transaction references using regex arrays...' },
      { type: 'info', text: 'Transforming: Performing double-entry validation calculations...' },
      { type: 'info', text: 'Transforming: Aggregating credit and debit balances per sub-account...' },
      { type: 'warn', text: 'Transforming: Detected 3 unmatched transactions. Flagging in discrepancy db.' },
      { type: 'success', text: 'Transform Phase Complete. Reconciliation run completed.' },
      { type: 'info', text: 'Loading: Updating core ledger balancing statuses...' },
      { type: 'info', text: 'Loading: Dispatching reports to risk, treasury, and audit teams...' },
      { type: 'success', text: 'Loading Phase Complete. All databases updated.' },
      { type: 'success', text: 'PIPELINE EXECUTED SUCCESSFULLY. 72+ hours manual labor saved.' }
    ]
  },
  llm: {
    title: 'LLM-Powered Ingestion Pipeline',
    desc: 'Designed a GPT-based standardization engine to parse collection sheets with highly inconsistent structures. By feeding file previews, the engine generates JSON-mapped schemas with confidence scores and logs decisions for audit compliance.',
    throughput: '30+ sheets/mo',
    impact: 'Auto-mapping',
    logs: [
      { type: 'info', text: 'Initializing LLM file processing node...' },
      { type: 'info', text: 'Reading incoming collection excel files from landing bucket...' },
      { type: 'info', text: 'Extracting: Parsing file metadata. Extracting top 10 preview rows...' },
      { type: 'success', text: 'Extract Phase Complete. Schema preview extracted.' },
      { type: 'info', text: 'Transforming: Formatting preview rows into JSON payload...' },
      { type: 'info', text: 'Transforming: Call LLM API with strict schema mapping template...' },
      { type: 'info', text: 'Transforming: LLM returned mapping structure with 98.4% average confidence...' },
      { type: 'info', text: 'Transforming: Mapping column headers to database targets...' },
      { type: 'success', text: 'Transform Phase Complete. File mapped to standard format.' },
      { type: 'info', text: 'Loading: Ingesting standardized data rows to clean Databricks tables...' },
      { type: 'info', text: 'Loading: Saving LLM confidence logs and mapping mappings to metadata store...' },
      { type: 'success', text: 'Loading Phase Complete. System updated.' },
      { type: 'success', text: 'PIPELINE EXECUTED SUCCESSFULLY. Excel ingested with auto-mapped schemas.' }
    ]
  }
};

let currentPipeline = 'colending';
let isRunning = false;

const tabs = document.querySelectorAll('.etl-tab-btn');
const runBtn = document.getElementById('run-pipeline-btn');
const consoleLogs = document.getElementById('console-logs');

// Flow nodes & lines
const nodeExtract = document.getElementById('node-extract');
const nodeTransform = document.getElementById('node-transform');
const nodeLoad = document.getElementById('node-load');
const lineExtractTransform = document.getElementById('line-extract-transform');
const lineTransformLoad = document.getElementById('line-transform-load');

// Tab click listener
tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    if (isRunning) return; // Prevent switching mid-run
    
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    currentPipeline = tab.getAttribute('data-pipeline');
    updatePipelineUI();
  });
});

function updatePipelineUI() {
  const data = pipelineData[currentPipeline];
  document.getElementById('pipeline-title').textContent = data.title;
  document.getElementById('pipeline-desc').textContent = data.desc;
  document.getElementById('pipeline-throughput').textContent = data.throughput;
  document.getElementById('pipeline-impact').textContent = data.impact;
  
  // Reset visualizer nodes
  nodeExtract.className = 'flow-node';
  nodeTransform.className = 'flow-node';
  nodeLoad.className = 'flow-node';
  lineExtractTransform.className = 'flow-line';
  lineTransformLoad.className = 'flow-line';
  
  // Reset console
  consoleLogs.innerHTML = `
    <div class="console-log info">System idle. Select a pipeline tab and click "Run Pipeline" to begin.</div>
    <div class="console-input-line">$ <span class="cursor"></span></div>
  `;
}

// Run Pipeline
runBtn.addEventListener('click', async () => {
  if (isRunning) return;
  isRunning = true;
  runBtn.disabled = true;
  runBtn.style.opacity = '0.5';
  runBtn.innerHTML = '<i data-lucide="loader"></i> Executing...';
  lucide.createIcons();

  // Reset visual state
  nodeExtract.className = 'flow-node';
  nodeTransform.className = 'flow-node';
  nodeLoad.className = 'flow-node';
  lineExtractTransform.className = 'flow-line';
  lineTransformLoad.className = 'flow-line';
  
  consoleLogs.innerHTML = '';
  
  const logs = pipelineData[currentPipeline].logs;
  
  // Phase 1: Extract (Logs 0-3)
  nodeExtract.classList.add('active');
  await printLogChunk(logs.slice(0, 4), 600);
  nodeExtract.classList.remove('active');
  nodeExtract.classList.add('completed');
  
  // Phase 2: Flow Extract -> Transform
  lineExtractTransform.classList.add('active');
  await sleep(1500);
  lineExtractTransform.classList.remove('active');
  lineExtractTransform.classList.add('completed');
  
  // Phase 3: Transform (Logs 4-8)
  nodeTransform.classList.add('active');
  await printLogChunk(logs.slice(4, 9), 600);
  nodeTransform.classList.remove('active');
  nodeTransform.classList.add('completed');
  
  // Phase 4: Flow Transform -> Load
  lineTransformLoad.classList.add('active');
  await sleep(1500);
  lineTransformLoad.classList.remove('active');
  lineTransformLoad.classList.add('completed');
  
  // Phase 5: Load (Logs 9-12)
  nodeLoad.classList.add('active');
  await printLogChunk(logs.slice(9), 600);
  nodeLoad.classList.remove('active');
  nodeLoad.classList.add('completed');
  
  // End of Pipeline
  appendInputLine();
  
  isRunning = false;
  runBtn.disabled = false;
  runBtn.style.opacity = '1';
  runBtn.innerHTML = '<i data-lucide="play"></i> Run Pipeline';
  lucide.createIcons();
});

async function printLogChunk(logList, delay) {
  for (let log of logList) {
    const logElement = document.createElement('div');
    logElement.className = `console-log ${log.type}`;
    logElement.textContent = `[${new Date().toLocaleTimeString()}] ${log.text}`;
    consoleLogs.appendChild(logElement);
    consoleLogs.scrollTop = consoleLogs.scrollHeight;
    await sleep(delay);
  }
}

function appendInputLine() {
  const inputLine = document.createElement('div');
  inputLine.className = 'console-input-line';
  inputLine.innerHTML = '$ <span class="cursor"></span>';
  consoleLogs.appendChild(inputLine);
  consoleLogs.scrollTop = consoleLogs.scrollHeight;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// --- CONTACT FORM HANDLER ---
const contactForm = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const message = document.getElementById('form-message').value;
  
  sendBtn.disabled = true;
  sendBtn.innerHTML = '<i data-lucide="loader"></i> Sending...';
  lucide.createIcons();
  
  setTimeout(() => {
    // Show mock confirmation
    alert(`Thank you, ${name}! Your mock message has been dispatched successfully. Apoorva will connect with you via ${email} soon.`);
    contactForm.reset();
    
    sendBtn.disabled = false;
    sendBtn.innerHTML = '<i data-lucide="send"></i> Send Message';
    lucide.createIcons();
  }, 1200);
});
