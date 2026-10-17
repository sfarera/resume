window.renderTwoPage = (DATA, ROOT, STYLE) => {
    STYLE.innerHTML = `
        :root {
            --primary: #0f172a;
            --primary-dark: #020617;
            --accent: #1d4ed8;
            --accent-light: #2563eb;
            --accent-bg: #eff6ff;
            --text-dark: #0f172a;
            --text-body: #334155;
            --text-muted: #64748b;
            --border: #cbd5e1;
            --border-light: #e2e8f0;
            --bg-page: #ffffff;
            --bg-canvas: #e2e8f0;
        }

        body {
            background-color: var(--bg-canvas);
            color: var(--text-body);
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 1.5rem 0;
            line-height: 1.36;
            -webkit-font-smoothing: antialiased;
        }

        .cv-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .cv-sheet {
            background: var(--bg-page);
            width: 210mm;
            min-height: 297mm;
            padding: 7mm 12mm 5mm 12mm;
            box-sizing: border-box;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
        }

        /* Header */
        .cv-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid var(--accent);
            padding-bottom: 5px;
            margin-bottom: 5px;
        }

        .cv-header-text h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.70rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0 0 2px 0;
            letter-spacing: -0.5px;
            line-height: 1.1;
        }

        .cv-header-text .cv-title {
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--accent);
            margin: 0 0 4px 0;
            letter-spacing: 0.1px;
        }

        .cv-contact-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 4px 14px;
            font-size: 0.76rem;
            color: var(--text-body);
        }

        .cv-contact-bar a {
            color: var(--text-body);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-weight: 500;
        }

        .cv-contact-bar a:hover {
            color: var(--accent);
        }

        .cv-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent);
            box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }

        /* Section Headings */
        .cv-sec-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.4px;
            display: flex;
            align-items: center;
            gap: 6px;
            margin: 7px 0 3px 0;
            padding-bottom: 2px;
            border-bottom: 1.5px solid var(--accent);
        }

        .cv-sec-title i {
            color: var(--accent);
            font-size: 0.78rem;
        }

        /* Summary */
        .cv-summary-p {
            font-size: 0.76rem;
            color: var(--text-body);
            margin: 0 0 3.5px 0;
            text-align: justify;
            line-height: 1.34;
        }

        /* Grouped Skills Table */
        .cv-skills-table {
            display: flex;
            flex-direction: column;
            gap: 2.5px;
            margin-bottom: 4px;
            font-size: 0.74rem;
        }

        .cv-skill-row {
            display: grid;
            grid-template-columns: 135px 1fr;
            align-items: baseline;
            gap: 8px;
            padding: 1px 0;
        }

        .cv-skill-label {
            font-weight: 700;
            color: var(--primary);
            font-size: 0.74rem;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .cv-skill-label::after {
            content: ':';
        }

        .cv-skill-values {
            color: var(--text-body);
            line-height: 1.32;
        }

        /* Job Entry */
        .cv-job {
            margin-bottom: 4px;
        }

        .cv-job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 1.5px;
        }

        .cv-job-role {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--primary);
        }

        .cv-job-company {
            color: var(--accent);
            font-weight: 600;
            font-size: 0.81rem;
            margin-left: 4px;
        }

        .cv-job-date {
            font-size: 0.73rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-job-bullets {
            margin: 0;
            padding-left: 13px;
            font-size: 0.74rem;
            color: var(--text-body);
            line-height: 1.31;
        }

        .cv-job-bullets li {
            margin-bottom: 2px;
            text-align: justify;
        }

        .cv-job-bullets li strong {
            color: var(--primary);
        }

        /* Architectural Platforms Grid */
        .cv-platforms-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
            margin-bottom: 4px;
        }

        .cv-platform-card {
            background: #f8fafc;
            border: 1px solid var(--border-light);
            border-left: 3px solid var(--accent);
            padding: 4px 7px;
            border-radius: 4px;
            font-size: 0.72rem;
            color: var(--text-body);
            line-height: 1.26;
        }

        .cv-platform-card strong {
            color: var(--primary);
            display: block;
            margin-bottom: 1px;
            font-size: 0.75rem;
        }

        .cv-platform-card .tech-stack {
            font-size: 0.68rem;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 2px;
            display: block;
        }

        /* Education */
        .cv-edu-container {
            display: flex;
            flex-direction: column;
            gap: 1.5px;
            margin-bottom: 3px;
        }

        .cv-edu-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: 1px 0;
            font-size: 0.74rem;
        }

        .cv-edu-degree {
            font-weight: 700;
            color: var(--primary);
        }

        .cv-edu-school {
            color: var(--text-muted);
            font-size: 0.73rem;
        }

        .cv-edu-grade {
            font-weight: 700;
            color: var(--accent);
            font-size: 0.74rem;
        }

        /* Achievements & Leadership */
        .cv-achieve-list {
            margin: 1px 0 0 0;
            padding-left: 13px;
            font-size: 0.74rem;
            color: var(--text-body);
            line-height: 1.28;
        }

        .cv-achieve-list li {
            margin-bottom: 1.5px;
            text-align: justify;
        }

        /* Sheet Footer */
        .cv-sheet-footer {
            margin-top: auto;
            padding-top: 3px;
            border-top: 1px solid var(--border-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.67rem;
            color: var(--text-muted);
        }

        /* Print Media Styles */
        @media print {
            @page {
                size: A4 portrait;
                margin: 6mm 10mm 5mm 10mm !important;
            }

            html, body {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: auto !important;
                overflow: visible !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            #app-root, .cv-wrapper {
                padding: 0 !important;
                margin: 0 !important;
                gap: 0 !important;
                display: block !important;
                width: 100% !important;
            }

            .cv-sheet {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                min-height: 0 !important;
                max-height: none !important;
                padding: 0 !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                overflow: visible !important;
            }

            #page-1 {
                page-break-after: always !important;
                break-after: page !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
            }

            #page-2 {
                page-break-after: avoid !important;
                break-after: avoid !important;
                page-break-before: avoid !important;
                break-before: avoid !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
            }

            #control-panel, .edit-trigger {
                display: none !important;
            }
        }
    `;

    // Roles
    const tcsJob = DATA.journey[0]; // TCS
    const accSrAnalyst = DATA.journey[1]; // Accenture Sr Analyst (Sept 2021 - Aug 2023)
    const accAnalyst = DATA.journey[2]; // Accenture Analyst (May 2020 - Aug 2021)
    const accAssociate = DATA.journey[3]; // Accenture Associate (Feb 2018 - Apr 2020)

    const githubSocial = DATA.profile.social.find(s => s.platform.toLowerCase().includes('github'));
    const linkedinSocial = DATA.profile.social.find(s => s.platform.toLowerCase().includes('linkedin'));

    ROOT.innerHTML = `
        <div class="cv-wrapper">
            <!-- ================= PAGE 1 ================= -->
            <section class="cv-sheet" id="page-1">
                <header class="cv-header">
                    <div class="cv-header-text">
                        <h1>${DATA.profile.name}</h1>
                        <div class="cv-title">${DATA.profile.taglines.join(' &nbsp;•&nbsp; ')}</div>
                        <div class="cv-contact-bar">
                            <span><i class="fas fa-map-marker-alt"></i> ${DATA.profile.contact.location}</span>
                            <span><i class="fas fa-phone"></i> ${DATA.profile.contact.phone}</span>
                            <a href="mailto:${DATA.profile.contact.email}"><i class="fas fa-envelope"></i> ${DATA.profile.contact.email}</a>
                            ${linkedinSocial ? `<a href="${linkedinSocial.url}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>` : ''}
                            ${githubSocial ? `<a href="${githubSocial.url}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        </div>
                    </div>
                    <img src="${DATA.profile.profilePic}" alt="${DATA.profile.name}" class="cv-avatar">
                </header>

                <!-- Professional Summary -->
                <div class="cv-sec-title"><i class="fas fa-user-check"></i> Executive Professional Summary</div>
                ${DATA.summary.summary.map(p => `<p class="cv-summary-p">${p}</p>`).join('')}

                <!-- Grouped Technical Expertise -->
                <div class="cv-sec-title"><i class="fas fa-layer-group"></i> Technical Competencies & Architecture</div>
                <div class="cv-skills-table">
                    <div class="cv-skill-row">
                        <span class="cv-skill-label"><i class="fas fa-code"></i> Languages & Core</span>
                        <span class="cv-skill-values"><strong>Java (8 / 11 / 17)</strong>, Data Structures & Algorithms (DSA), Object-Oriented Analysis & Design (OOAD), Multithreading & Concurrency, Memory Management & JVM Tuning.</span>
                    </div>
                    <div class="cv-skill-row">
                        <span class="cv-skill-label"><i class="fas fa-network-wired"></i> Distributed Systems</span>
                        <span class="cv-skill-values"><strong>Apache Kafka</strong> (Event Streaming, Partitioning), Saga Pattern (Orchestration & Choreography), Transactional Outbox, <strong>Elasticsearch</strong>, Redis Caching, Consistent Hashing, CAP & PACELC Theorems, ZooKeeper.</span>
                    </div>
                    <div class="cv-skill-row">
                        <span class="cv-skill-label"><i class="fas fa-cubes"></i> Architecture & LLD</span>
                        <span class="cv-skill-values"><strong>Microservices Architecture</strong>, High-Level Design (HLD), Low-Level Design (LLD), <strong>SOLID Principles</strong>, GoF Design Patterns (Strategy, Factory, Observer, Decorator, State), Domain-Driven Design (DDD), Clean Architecture.</span>
                    </div>
                    <div class="cv-skill-row">
                        <span class="cv-skill-label"><i class="fas fa-database"></i> Frameworks & DB</span>
                        <span class="cv-skill-values"><strong>Spring Boot</strong>, Spring Cloud, Hibernate / JPA, RESTful APIs, <strong>MySQL</strong>, <strong>Oracle</strong>, PostgreSQL, Database Sharding & Master-Slave Replication, SQL Optimization, HikariCP Connection Pools.</span>
                    </div>
                    <div class="cv-skill-row">
                        <span class="cv-skill-label"><i class="fas fa-cloud"></i> Cloud & DevOps</span>
                        <span class="cv-skill-values"><strong>Microsoft Azure (AZ-900 Certified)</strong>, Docker, CI/CD (Jenkins Pipelines), CodeQL Static Analysis, SonarQube Quality Gates, Git & GitHub, JUnit, Mockito, TDD, Agile / Scrum Leadership.</span>
                    </div>
                </div>

                <!-- Professional Experience: Current SDE-3 Role at TCS -->
                <div class="cv-sec-title"><i class="fas fa-briefcase"></i> Professional Experience</div>

                <!-- TCS Role -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div>
                            <span class="cv-job-role">${tcsJob.role}</span>
                            <span class="cv-job-company">@ ${tcsJob.company}</span>
                        </div>
                        <span class="cv-job-date"><i class="far fa-calendar-alt"></i> ${tcsJob.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${tcsJob.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <!-- Accenture Senior Analyst Role -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div>
                            <span class="cv-job-role">${accSrAnalyst.role}</span>
                            <span class="cv-job-company">@ ${accSrAnalyst.company}</span>
                        </div>
                        <span class="cv-job-date"><i class="far fa-calendar-alt"></i> ${accSrAnalyst.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${accSrAnalyst.details.map(d => `<li>${d}</li>`).join('')}
                        <li><strong>Engineering Standards & Mentorship:</strong> Conducted Low-Level Design (LLD) reviews and mentored junior engineers on SOLID principles and clean code practices, ensuring 0 defect escapes across 4 major production releases.</li>
                    </ul>
                </div>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Software Engineer (SDE-3)</span>
                    <span>Page 1 of 2</span>
                </div>
            </section>

            <!-- ================= PAGE 2 ================= -->
            <section class="cv-sheet" id="page-2">
                <!-- Professional Experience Continued -->
                <div class="cv-sec-title"><i class="fas fa-briefcase"></i> Professional Experience (Continued)</div>

                <!-- Accenture Analyst -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div>
                            <span class="cv-job-role">${accAnalyst.role}</span>
                            <span class="cv-job-company">@ ${accAnalyst.company}</span>
                        </div>
                        <span class="cv-job-date"><i class="far fa-calendar-alt"></i> ${accAnalyst.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${accAnalyst.details.map(d => `<li>${d}</li>`).join('')}
                        <li><strong>Asynchronous Event Handling:</strong> Integrated messaging queues for asynchronous event dispatching across billing and carrier notification services, achieving 99.95% delivery success rate under surge traffic.</li>
                    </ul>
                </div>

                <!-- Accenture Associate -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div>
                            <span class="cv-job-role">${accAssociate.role}</span>
                            <span class="cv-job-company">@ ${accAssociate.company}</span>
                        </div>
                        <span class="cv-job-date"><i class="far fa-calendar-alt"></i> ${accAssociate.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${accAssociate.details.map(d => `<li>${d}</li>`).join('')}
                        <li><strong>Agile Delivery & RCA:</strong> Collaborated with cross-functional teams to define user stories, perform root cause analysis (RCA), and deliver bi-weekly sprint commitments on schedule.</li>
                    </ul>
                </div>

                <!-- Key Architectural Platforms & Systems -->
                <div class="cv-sec-title"><i class="fas fa-rocket"></i> Key Architectural Platforms & Distributed Systems</div>
                <div class="cv-platforms-grid">
                    <div class="cv-platform-card">
                        <strong>Distributed Event-Driven Insurance Platform</strong>
                        <span class="tech-stack">Java 17 • Spring Boot • Apache Kafka • Saga Pattern</span>
                        High-throughput microservices handling 10M+ daily events with 99.99% availability, employing Saga choreography & Transactional Outbox for cross-service consistency.
                    </div>
                    <div class="cv-platform-card">
                        <strong>Elasticsearch Search & Indexing Engine</strong>
                        <span class="tech-stack">Elasticsearch 7.x • Spring Data ES • Custom Analyzers</span>
                        Low-latency policy and member search with custom analyzers, n-gram tokenization, and typeahead lookup, slashing p99 query latency by 65% (450ms → &lt;150ms).
                    </div>
                    <div class="cv-platform-card">
                        <strong>Asset Rebalancing & Investment Platform</strong>
                        <span class="tech-stack">Java • Spring Boot • Oracle DB • Idempotent REST</span>
                        Real-time portfolio rebalancing engine executing automated allocations for $500M+ in assets under management (AUM) with strict idempotent guarantees and batch optimization.
                    </div>
                    <div class="cv-platform-card">
                        <strong>Logistics Order Lifecycle Engine</strong>
                        <span class="tech-stack">Java • Spring Boot • HikariCP • State & Strategy Patterns</span>
                        High-throughput order tracking and event handling pipeline managing 200K+ daily shipments with zero race conditions and 30% faster peak response times.
                    </div>
                </div>

                <!-- Architectural Principles & System Design Mastery -->
                <div class="cv-sec-title"><i class="fas fa-microchip"></i> Architectural Principles & System Design Mastery</div>
                <ul class="cv-job-bullets" style="margin-bottom: 4px;">
                    <li><strong>Event-Driven Microservices & Saga Pattern:</strong> Designed asynchronous event streaming architectures with Apache Kafka; implemented Saga orchestration and choreographies with Transactional Outbox patterns to guarantee eventual consistency across distributed microservices.</li>
                    <li><strong>Low-Level Design (LLD) & Clean Craftsmanship:</strong> Strict adherence to SOLID principles and Gang of Four (GoF) design patterns (Strategy, Factory, Observer, Decorator, State); established automated CodeQL static analysis and SonarQube quality gates.</li>
                    <li><strong>High-Scale Persistence & Caching Tier:</strong> Scaled persistence architectures utilizing MySQL/Oracle read replicas, horizontal table partitioning, and multi-tier Redis caching; applied Resilience4j circuit breakers and CAP/PACELC trade-offs.</li>
                    <li><strong>Distributed Consensus & Coordination:</strong> Applied distributed systems fundamentals including Consistent Hashing, ZooKeeper coordination, distributed locking, and graceful degradation to guarantee fault tolerance under high-concurrency loads.</li>
                </ul>

                <!-- Engineering Leadership & Governance -->
                <div class="cv-sec-title"><i class="fas fa-users-cog"></i> Engineering Leadership, Mentorship & Governance</div>
                <ul class="cv-job-bullets" style="margin-bottom: 4px;">
                    <li><strong>Technical Mentorship:</strong> Mentored 10+ junior and mid-level engineers in Data Structures & Algorithms (DSA), Low-Level Design (LLD), SOLID principles, and clean code architecture.</li>
                    <li><strong>Architecture & Design Reviews:</strong> Spearheaded technical architecture reviews, High-Level Design (HLD) specifications, API contracts, and design doc walkthroughs for mission-critical microservices.</li>
                    <li><strong>Quality & Security Champions:</strong> Enforced test-driven development (TDD), comprehensive JUnit/Mockito test suites (88% coverage), automated SonarQube quality gates, and zero-vulnerability security pipelines.</li>
                </ul>

                <!-- Education -->
                <div class="cv-sec-title"><i class="fas fa-graduation-cap"></i> Education</div>
                <div class="cv-edu-container">
                    <div class="cv-edu-row">
                        <div>
                            <span class="cv-edu-degree">Bachelor of Engineering – Information Technology</span> &nbsp;•&nbsp;
                            <span class="cv-edu-school">Shri Govindram Seksaria Institute of Technology and Science (SGSITS Indore, MP)</span>
                        </div>
                        <div>
                            <span style="font-size:0.73rem; color:var(--text-muted);">2013 – 2017</span> &nbsp;|&nbsp;
                            <span class="cv-edu-grade">CGPA: 7.1</span>
                        </div>
                    </div>
                    <div class="cv-edu-row">
                        <div>
                            <span class="cv-edu-degree">Higher Secondary School Certificate (Class XII, PCM)</span> &nbsp;•&nbsp;
                            <span class="cv-edu-school">Vivekanand Vidya Vihar, Maral Sarovar (CBSE)</span>
                        </div>
                        <div>
                            <span style="font-size:0.73rem; color:var(--text-muted);">2011 – 2012</span> &nbsp;|&nbsp;
                            <span class="cv-edu-grade">87.0%</span>
                        </div>
                    </div>
                </div>

                <!-- Certifications & Key Distinctions -->
                <div class="cv-sec-title"><i class="fas fa-award"></i> Certifications & Leadership Distinctions</div>
                <div class="cv-edu-container" style="margin-bottom: 2px;">
                    <div class="cv-edu-row">
                        <div>
                            <span class="cv-edu-degree"><i class="fab fa-microsoft" style="color:#00a4ef;"></i> Microsoft Certified: Azure Fundamentals (AZ-900)</span> &nbsp;•&nbsp;
                            <span class="cv-edu-school">Cloud Concepts, Architecture, Governance & Compliance</span>
                        </div>
                        <span class="cv-edu-grade">[Certified]</span>
                    </div>
                </div>

                <ul class="cv-achieve-list">
                    <li><strong>National Sports Representation:</strong> Represented SGSITS Indore at National-Level Table Tennis Tournament (BITS Pilani Goa); Captain of state-level CBSE Football Cluster Team (2009–2011).</li>
                    <li><strong>Competitive Academic Honors:</strong> Achieved All India Rank <strong>370 (AIR)</strong> in the National Science Olympiad (NSO).</li>
                </ul>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Software Engineer (SDE-3)</span>
                    <span>Page 2 of 2</span>
                </div>
            </section>
        </div>
    `;
};
