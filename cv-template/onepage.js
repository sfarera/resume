window.renderOnePage = (DATA, ROOT, STYLE) => {
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
            line-height: 1.34;
            -webkit-font-smoothing: antialiased;
        }

        .cv-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .cv-sheet-onepage {
            background: var(--bg-page);
            width: 210mm;
            min-height: 297mm;
            max-height: 297mm;
            padding: 8mm 12mm 7mm 12mm;
            box-sizing: border-box;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
            overflow: hidden;
        }

        /* Header */
        .cv-header-onepage {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid var(--accent);
            padding-bottom: 5px;
            margin-bottom: 5px;
        }

        .cv-header-text h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.62rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0 0 1px 0;
            letter-spacing: -0.5px;
            line-height: 1.1;
        }

        .cv-header-text .cv-title {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--accent);
            margin: 0 0 4px 0;
            letter-spacing: 0.1px;
        }

        .cv-contact-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 3px 13px;
            font-size: 0.74rem;
            color: var(--text-body);
        }

        .cv-contact-bar a {
            color: var(--text-body);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 3px;
            font-weight: 500;
        }

        .cv-contact-bar a:hover {
            color: var(--accent);
        }

        .cv-avatar-onepage {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--accent);
            box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }

        /* Section Headings */
        .cv-sec-title-onepage {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.81rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 5px 0 3px 0;
            padding-bottom: 1.5px;
            border-bottom: 1.4px solid var(--accent);
        }

        .cv-sec-title-onepage i {
            color: var(--accent);
            font-size: 0.76rem;
        }

        /* Summary */
        .cv-summary-onepage {
            font-size: 0.75rem;
            color: var(--text-body);
            margin: 0 0 3px 0;
            text-align: justify;
            line-height: 1.30;
        }

        /* Grouped Skills Table */
        .cv-skills-table-onepage {
            display: flex;
            flex-direction: column;
            gap: 2px;
            margin-bottom: 4px;
            font-size: 0.73rem;
        }

        .cv-skill-row-onepage {
            display: grid;
            grid-template-columns: 130px 1fr;
            align-items: baseline;
            gap: 6px;
            padding: 0;
        }

        .cv-skill-label-onepage {
            font-weight: 700;
            color: var(--primary);
            font-size: 0.72rem;
            display: flex;
            align-items: center;
            gap: 3px;
        }

        .cv-skill-label-onepage::after {
            content: ':';
        }

        .cv-skill-values-onepage {
            color: var(--text-body);
            line-height: 1.28;
        }

        /* Job Entry */
        .cv-job-onepage {
            margin-bottom: 4px;
        }

        .cv-job-header-onepage {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 1.5px;
        }

        .cv-job-role-onepage {
            font-size: 0.81rem;
            font-weight: 700;
            color: var(--primary);
        }

        .cv-job-company-onepage {
            color: var(--accent);
            font-weight: 600;
            font-size: 0.80rem;
            margin-left: 3px;
        }

        .cv-job-date-onepage {
            font-size: 0.72rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-job-bullets-onepage {
            margin: 0;
            padding-left: 14px;
            font-size: 0.73rem;
            color: var(--text-body);
            line-height: 1.28;
        }

        .cv-job-bullets-onepage li {
            margin-bottom: 1.5px;
            text-align: justify;
        }

        .cv-job-bullets-onepage li strong {
            color: var(--primary);
        }

        /* Bottom 2-Column Grid (Platforms + Education/Distinctions) */
        .cv-bottom-grid {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 10px;
            margin-top: 3px;
        }

        .cv-platform-mini-card {
            background: #f8fafc;
            border-left: 2.5px solid var(--accent);
            padding: 3px 6px;
            border-radius: 3px;
            font-size: 0.71rem;
            color: var(--text-body);
            line-height: 1.25;
            margin-bottom: 3px;
        }

        .cv-platform-mini-card strong {
            color: var(--primary);
            font-size: 0.73rem;
        }

        .cv-meta-item {
            font-size: 0.72rem;
            margin-bottom: 3.5px;
            line-height: 1.26;
            color: var(--text-body);
        }

        .cv-meta-item strong {
            color: var(--primary);
        }

        /* Sheet Footer */
        .cv-sheet-footer-onepage {
            margin-top: auto;
            padding-top: 3px;
            border-top: 1px solid var(--border-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.66rem;
            color: var(--text-muted);
        }

        /* Print Media Styles */
        @media print {
            @page {
                size: A4 portrait;
                margin: 5mm 8mm 4mm 8mm !important;
            }

            html, body {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: 100% !important;
                overflow: hidden !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            #app-root, .cv-wrapper {
                padding: 0 !important;
                margin: 0 !important;
                gap: 0 !important;
                display: block !important;
                width: 100% !important;
                height: 100% !important;
            }

            .cv-sheet-onepage {
                width: 100% !important;
                max-width: 100% !important;
                height: 100% !important;
                max-height: 297mm !important;
                min-height: 0 !important;
                padding: 0 !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                page-break-after: avoid !important;
                break-after: avoid !important;
                overflow: hidden !important;
            }

            #control-panel, .edit-trigger {
                display: none !important;
            }
        }
    `;

    const githubSocial = DATA.profile.social.find(s => s.platform.toLowerCase().includes('github'));
    const linkedinSocial = DATA.profile.social.find(s => s.platform.toLowerCase().includes('linkedin'));

    ROOT.innerHTML = `
        <div class="cv-wrapper">
            <section class="cv-sheet-onepage" id="page-1">
                <!-- Header -->
                <header class="cv-header-onepage">
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
                    <img src="${DATA.profile.profilePic}" alt="${DATA.profile.name}" class="cv-avatar-onepage">
                </header>

                <!-- Professional Summary -->
                <div class="cv-sec-title-onepage"><i class="fas fa-user-check"></i> Executive Professional Summary</div>
                <p class="cv-summary-onepage">
                    Senior Software Engineer with <strong>8.5+ years of experience</strong> architecting high-throughput, fault-tolerant distributed systems and enterprise microservices. Specialist in event-driven architectures with <strong>Apache Kafka (10M+ daily events)</strong>, distributed transaction workflows via <strong>Saga (Orchestration & Choreography) & Outbox patterns</strong>, low-latency search with <strong>Elasticsearch (<150ms p99 latency)</strong>, and database scaling via MySQL/Oracle read replication & multi-tier Redis caching across Healthcare, FinTech, and Logistics.
                </p>

                <!-- Grouped Technical Expertise -->
                <div class="cv-sec-title-onepage"><i class="fas fa-layer-group"></i> Technical Competencies & Architecture</div>
                <div class="cv-skills-table-onepage">
                    <div class="cv-skill-row-onepage">
                        <span class="cv-skill-label-onepage"><i class="fas fa-code"></i> Languages & Core</span>
                        <span class="cv-skill-values-onepage"><strong>Java (8 / 11 / 17)</strong>, Data Structures & Algorithms (DSA), Object-Oriented Analysis & Design (OOAD), Multithreading & Concurrency.</span>
                    </div>
                    <div class="cv-skill-row-onepage">
                        <span class="cv-skill-label-onepage"><i class="fas fa-network-wired"></i> Distributed Systems</span>
                        <span class="cv-skill-values-onepage"><strong>Apache Kafka</strong>, Saga Pattern (Orchestration & Choreography), Transactional Outbox, <strong>Elasticsearch</strong>, Redis Caching, Consistent Hashing, CAP & PACELC Theorems.</span>
                    </div>
                    <div class="cv-skill-row-onepage">
                        <span class="cv-skill-label-onepage"><i class="fas fa-cubes"></i> Architecture & LLD</span>
                        <span class="cv-skill-values-onepage"><strong>Microservices Architecture</strong>, High-Level Design (HLD), Low-Level Design (LLD), <strong>SOLID Principles</strong>, GoF Design Patterns (Strategy, Factory, Observer, State), Clean Architecture.</span>
                    </div>
                    <div class="cv-skill-row-onepage">
                        <span class="cv-skill-label-onepage"><i class="fas fa-database"></i> Frameworks & DB</span>
                        <span class="cv-skill-values-onepage"><strong>Spring Boot</strong>, Spring Cloud, Hibernate / JPA, RESTful APIs, <strong>MySQL</strong>, <strong>Oracle</strong>, PostgreSQL, Database Sharding & Master-Slave Replication.</span>
                    </div>
                    <div class="cv-skill-row-onepage">
                        <span class="cv-skill-label-onepage"><i class="fas fa-cloud"></i> Cloud & DevOps</span>
                        <span class="cv-skill-values-onepage"><strong>Microsoft Azure (AZ-900 Certified)</strong>, Docker, CI/CD (Jenkins), CodeQL Static Analysis, SonarQube Quality Gates, Git, JUnit, Mockito, Agile / Scrum.</span>
                    </div>
                </div>

                <!-- Professional Experience -->
                <div class="cv-sec-title-onepage"><i class="fas fa-briefcase"></i> Professional Experience</div>

                <!-- Current Role: TCS -->
                <div class="cv-job-onepage">
                    <div class="cv-job-header-onepage">
                        <div>
                            <span class="cv-job-role-onepage">IT Analyst (Senior Backend Engineer)</span>
                            <span class="cv-job-company-onepage">@ Tata Consultancy Services</span>
                        </div>
                        <span class="cv-job-date-onepage"><i class="far fa-calendar-alt"></i> Oct 2023 – Present</span>
                    </div>
                    <ul class="cv-job-bullets-onepage">
                        <li>Architected event-driven microservices using <strong>Java 17, Spring Boot, and Apache Kafka</strong>, processing <strong>10M+ daily events</strong> for healthcare claims workflows with 99.99% availability.</li>
                        <li>Implemented distributed transactions across billing & policy underwriting services using the <strong>Saga Pattern & Outbox Pattern</strong>, guaranteeing eventual consistency without 2PC overhead.</li>
                        <li>Engineered search retrieval pipelines using <strong>Elasticsearch</strong> with custom analyzer mappings, reducing p99 latency by <strong>65% (from 450ms to <150ms)</strong>.</li>
                        <li>Scaled database architecture with MySQL/Oracle <strong>Master-Slave read replication</strong> and multi-tier <strong>Redis caching</strong>, reducing database read contention by <strong>55%</strong>.</li>
                        <li>Refactored legacy monolith into extensible microservices applying <strong>SOLID principles</strong> and GoF patterns; increased JUnit/Mockito test coverage from 45% to <strong>88%</strong>.</li>
                    </ul>
                </div>

                <!-- Accenture: Senior Analyst -->
                <div class="cv-job-onepage">
                    <div class="cv-job-header-onepage">
                        <div>
                            <span class="cv-job-role-onepage">Application Development Senior Analyst</span>
                            <span class="cv-job-company-onepage">@ Accenture</span>
                        </div>
                        <span class="cv-job-date-onepage"><i class="far fa-calendar-alt"></i> Sept 2021 – Aug 2023</span>
                    </div>
                    <ul class="cv-job-bullets-onepage">
                        <li><strong>Singapore Wealth & Asset Management:</strong> Architected backend microservices for automated portfolio rebalancing workflows, executing real-time allocation calculations for <strong>$500M+ in AUM</strong>.</li>
                        <li>Engineered idempotent RESTful APIs with financial settlement networks, reducing API failure rates by <strong>40%</strong>; optimized SQL queries and Hibernate ORM, improving batch settlement by <strong>35%</strong>.</li>
                    </ul>
                </div>

                <!-- Accenture: Analyst & Associate -->
                <div class="cv-job-onepage">
                    <div class="cv-job-header-onepage">
                        <div>
                            <span class="cv-job-role-onepage">Software Engineer Progression (Analyst & Associate)</span>
                            <span class="cv-job-company-onepage">@ Accenture</span>
                        </div>
                        <span class="cv-job-date-onepage"><i class="far fa-calendar-alt"></i> Feb 2018 – Aug 2021</span>
                    </div>
                    <ul class="cv-job-bullets-onepage">
                        <li><strong>Australia Logistics Platform:</strong> Developed order tracking REST APIs (Java, Spring Boot, JPA) handling <strong>200K+ daily orders</strong>; applied State/Strategy patterns reducing latency by <strong>30%</strong>.</li>
                        <li><strong>US Healthcare System:</strong> Developed core Java batch transformation utilities; authored JUnit/Mockito test suites achieving <strong>85%+ code coverage</strong> within Agile sprints.</li>
                    </ul>
                </div>

                <!-- Bottom 2-Column Section: Platforms & Education/Credentials -->
                <div class="cv-bottom-grid">
                    <div>
                        <div class="cv-sec-title-onepage"><i class="fas fa-rocket"></i> Key Distributed Platforms</div>
                        <div class="cv-platform-mini-card">
                            <strong>Claims Event Platform:</strong> Kafka + Saga microservices handling 10M+ daily events (99.99% uptime).
                        </div>
                        <div class="cv-platform-mini-card">
                            <strong>Elasticsearch Query Engine:</strong> Member search with custom typeahead DSL (&lt;150ms p99 latency).
                        </div>
                        <div class="cv-platform-mini-card">
                            <strong>Asset Rebalancing Engine:</strong> Real-time portfolio calculation pipeline managing $500M+ AUM idempotently.
                        </div>
                        <div class="cv-platform-mini-card">
                            <strong>Logistics Order Engine:</strong> Real-time event pipeline handling 200K+ daily shipments with zero race conditions.
                        </div>
                    </div>
                    <div>
                        <div class="cv-sec-title-onepage"><i class="fas fa-graduation-cap"></i> Education & Honors</div>
                        <div class="cv-meta-item">
                            <strong>B.E. – Information Technology</strong><br>
                            SGSITS Indore (2013–2017) | <strong>CGPA: 7.1</strong>
                        </div>
                        <div class="cv-meta-item">
                            <strong>Higher Secondary (Class XII, CBSE)</strong>: <strong>87.0%</strong>
                        </div>
                        <div class="cv-meta-item">
                            <strong><i class="fab fa-microsoft" style="color:#00a4ef;"></i> Azure Certified (AZ-900)</strong> | Cloud Architecture
                        </div>
                        <div class="cv-meta-item" style="font-size: 0.70rem; color: var(--text-body);">
                            <strong>Distinctions:</strong> National Table Tennis (BITS Pilani Goa); Captain CBSE Football; NSO AIR 370.
                        </div>
                    </div>
                </div>

                <!-- Sheet Footer -->
                <div class="cv-sheet-footer-onepage">
                    <span>${DATA.profile.name} — Senior Software Engineer (SDE-3)</span>
                    <span>1-Page Executive Resume</span>
                </div>
            </section>
        </div>
    `;
};
