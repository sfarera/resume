window.renderTwoPage = (DATA, ROOT, STYLE) => {
    STYLE.innerHTML = `
        :root {
            --primary: #0f172a;
            --primary-dark: #020617;
            --accent: #1e40af;
            --accent-subtle: #2563eb;
            --text-dark: #0f172a;
            --text-body: #1e293b;
            --text-muted: #475569;
            --border: #cbd5e1;
            --border-light: #e2e8f0;
            --bg-page: #ffffff;
            --bg-canvas: #f1f5f9;
        }

        body {
            background-color: var(--bg-canvas);
            color: var(--text-body);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            margin: 0;
            padding: 1.5rem 0;
            line-height: 1.42;
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
            height: 297mm;
            padding: 12mm 16mm 10mm 16mm;
            box-sizing: border-box;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
            overflow: hidden;
        }

        /* ATS Header - Clean Single Column */
        .cv-header {
            text-align: center;
            border-bottom: 1.5px solid var(--primary);
            padding-bottom: 8px;
            margin-bottom: 9px;
        }

        .cv-header h1 {
            font-size: 1.68rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0 0 3px 0;
            letter-spacing: -0.3px;
            line-height: 1.15;
            text-transform: uppercase;
        }

        .cv-header .cv-headline {
            font-size: 0.86rem;
            font-weight: 600;
            color: var(--accent);
            margin: 0 0 6px 0;
            letter-spacing: 0.1px;
        }

        .cv-contact-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px 14px;
            font-size: 0.77rem;
            color: var(--text-muted);
        }

        .cv-contact-bar a {
            color: var(--text-body);
            text-decoration: none;
            font-weight: 500;
        }

        .cv-contact-bar a:hover {
            color: var(--accent);
            text-decoration: underline;
        }

        .cv-contact-sep {
            color: var(--border);
            user-select: none;
        }

        /* Standard ATS Headings */
        .cv-sec-title {
            font-size: 0.84rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin: 9px 0 5px 0;
            padding-bottom: 2px;
            border-bottom: 1.2px solid var(--border);
        }

        /* Summary */
        .cv-summary-text {
            font-size: 0.775rem;
            color: var(--text-body);
            margin: 0 0 5px 0;
            line-height: 1.42;
            text-align: justify;
        }

        /* Technical Skills Section */
        .cv-skills-subgroup {
            margin-bottom: 4px;
        }

        .cv-skills-subtitle {
            font-size: 0.76rem;
            font-weight: 700;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 0.4px;
            margin: 3px 0 2px 0;
        }

        .cv-skills-grid {
            display: flex;
            flex-direction: column;
            gap: 3px;
            font-size: 0.765rem;
        }

        .cv-skill-line {
            line-height: 1.38;
        }

        .cv-skill-line strong {
            color: var(--primary);
            font-weight: 700;
            display: inline-block;
            min-width: 150px;
        }

        .cv-skill-line span {
            color: var(--text-body);
        }

        /* Experience Section */
        .cv-job {
            margin-bottom: 8px;
        }

        .cv-job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 3px;
        }

        .cv-job-title-group {
            font-size: 0.82rem;
        }

        .cv-job-role {
            font-weight: 700;
            color: var(--primary);
        }

        .cv-job-company {
            color: var(--text-body);
            font-weight: 600;
        }

        .cv-job-meta {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-job-bullets {
            margin: 0;
            padding-left: 15px;
            font-size: 0.765rem;
            color: var(--text-body);
            line-height: 1.39;
        }

        .cv-job-bullets li {
            margin-bottom: 3.5px;
            text-align: justify;
        }

        .cv-job-bullets li strong {
            color: var(--primary);
            font-weight: 600;
        }

        /* Project Entry */
        .cv-project-item {
            margin-bottom: 7px;
        }

        .cv-project-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 2.5px;
            font-size: 0.81rem;
        }

        .cv-project-name {
            font-weight: 700;
            color: var(--primary);
        }

        .cv-project-tech {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--accent);
            margin-left: 6px;
        }

        .cv-project-link {
            font-size: 0.74rem;
            color: var(--text-muted);
            text-decoration: none;
            font-weight: 500;
        }

        .cv-project-link:hover {
            color: var(--accent);
            text-decoration: underline;
        }

        .cv-project-bullets {
            margin: 0;
            padding-left: 15px;
            font-size: 0.76rem;
            color: var(--text-body);
            line-height: 1.38;
        }

        .cv-project-bullets li {
            margin-bottom: 3px;
            text-align: justify;
        }

        /* Education & Certifications */
        .cv-item-block {
            margin-bottom: 6px;
        }

        .cv-item-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.79rem;
            margin-bottom: 2px;
        }

        .cv-item-title {
            font-weight: 700;
            color: var(--primary);
        }

        .cv-item-inst {
            color: var(--text-muted);
            font-size: 0.76rem;
        }

        .cv-item-date {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-item-details {
            font-size: 0.75rem;
            color: var(--text-body);
            line-height: 1.36;
        }

        /* Sheet Footer */
        .cv-sheet-footer {
            margin-top: auto;
            padding-top: 4px;
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
                margin: 8mm 14mm 8mm 14mm !important;
            }

            html, body {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: auto !important;
                min-height: 0 !important;
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
                height: auto !important;
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
                box-sizing: border-box !important;
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

    const tcsJob = DATA.journey[0]; // TCS (Oct 2023 - Present)
    const accSrAnalyst = DATA.journey[1]; // Accenture Sr Analyst (Sept 2021 - Aug 2023)
    const accAnalyst = DATA.journey[2]; // Accenture Analyst (May 2020 - Aug 2021)
    const accAssociate = DATA.journey[3]; // Accenture Associate (Feb 2018 - Apr 2020)

    const githubSocial = DATA.profile.social.find(s => s.platform.toLowerCase().includes('github'));
    const linkedinSocial = DATA.profile.social.find(s => s.platform.toLowerCase().includes('linkedin'));

    ROOT.innerHTML = `
        <div class="cv-wrapper">
            <!-- ================= PAGE 1 ================= -->
            <section class="cv-sheet" id="page-1">
                <!-- Header (Single Column, ATS Clean, No Photo) -->
                <header class="cv-header">
                    <h1>${DATA.profile.name}</h1>
                    <div class="cv-headline">Senior Java Backend Developer | Java | Spring Boot | REST APIs | Microservices | SQL</div>
                    <div class="cv-contact-bar">
                        <span>${DATA.profile.contact.location}</span>
                        <span class="cv-contact-sep">•</span>
                        <span>${DATA.profile.contact.phone}</span>
                        <span class="cv-contact-sep">•</span>
                        <a href="mailto:${DATA.profile.contact.email}">${DATA.profile.contact.email}</a>
                        ${linkedinSocial ? `<span class="cv-contact-sep">•</span><a href="${linkedinSocial.url}" target="_blank">LinkedIn</a>` : ''}
                        ${githubSocial ? `<span class="cv-contact-sep">•</span><a href="${githubSocial.url}" target="_blank">GitHub</a>` : ''}
                    </div>
                </header>

                <!-- Professional Summary -->
                <div class="cv-sec-title">Professional Summary</div>
                <p class="cv-summary-text">${DATA.summary.summary[0]}</p>

                <!-- Technical Skills -->
                <div class="cv-sec-title">Technical Skills</div>

                <div class="cv-skills-subgroup">
                    <div class="cv-skills-subtitle">Professional Technical Skills (Production Experience)</div>
                    <div class="cv-skills-grid">
                        <div class="cv-skill-line">
                            <strong>Core Java & Fundamentals:</strong>
                            <span>Java 8 / 11 / 17, Object-Oriented Programming (OOP), Collections Framework, Streams API, Exception Handling, Multithreading</span>
                        </div>
                        <div class="cv-skill-line">
                            <strong>Backend & Frameworks:</strong>
                            <span>Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST API Development, Dependency Injection, Transaction Management</span>
                        </div>
                        <div class="cv-skill-line">
                            <strong>Databases & Caching:</strong>
                            <span>SQL, Relational Databases (MySQL, Oracle), Redis</span>
                        </div>
                        <div class="cv-skill-line">
                            <strong>Testing & Code Quality:</strong>
                            <span>JUnit, Mockito, Unit Testing, Debugging & Troubleshooting, SonarQube</span>
                        </div>
                        <div class="cv-skill-line">
                            <strong>DevOps & Infrastructure:</strong>
                            <span>Kubernetes, NGINX Ingress, Docker, Git, Maven, Jenkins CI/CD</span>
                        </div>
                    </div>
                </div>

                <div class="cv-skills-subgroup" style="margin-top: 4px;">
                    <div class="cv-skills-subtitle">Additional Technical Knowledge (Ongoing Self-Study & Hands-On Practice)</div>
                    <div class="cv-skills-grid">
                        <div class="cv-skill-line">
                            <strong>Distributed Systems & Design:</strong>
                            <span>Apache Kafka, Elasticsearch, Microservices Architecture, Distributed Systems Concepts, High-Level Design (HLD) & Low-Level Design (LLD)</span>
                        </div>
                    </div>
                </div>

                <!-- Professional Experience -->
                <div class="cv-sec-title">Professional Experience</div>

                <!-- TCS -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div class="cv-job-title-group">
                            <span class="cv-job-role">${tcsJob.role}</span> — <span class="cv-job-company">${tcsJob.company}</span>
                        </div>
                        <span class="cv-job-meta">${tcsJob.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${tcsJob.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <!-- Accenture: Senior Analyst -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div class="cv-job-title-group">
                            <span class="cv-job-role">${accSrAnalyst.role}</span> — <span class="cv-job-company">${accSrAnalyst.company}</span>
                        </div>
                        <span class="cv-job-meta">${accSrAnalyst.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${accSrAnalyst.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Java Backend Developer</span>
                    <span>Page 1 of 2</span>
                </div>
            </section>

            <!-- ================= PAGE 2 ================= -->
            <section class="cv-sheet" id="page-2">
                <!-- Professional Experience Continued -->
                <div class="cv-sec-title">Professional Experience (Continued)</div>

                <!-- Accenture: Analyst -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div class="cv-job-title-group">
                            <span class="cv-job-role">${accAnalyst.role}</span> — <span class="cv-job-company">${accAnalyst.company}</span>
                        </div>
                        <span class="cv-job-meta">${accAnalyst.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${accAnalyst.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <!-- Accenture: Associate -->
                <div class="cv-job">
                    <div class="cv-job-header">
                        <div class="cv-job-title-group">
                            <span class="cv-job-role">${accAssociate.role}</span> — <span class="cv-job-company">${accAssociate.company}</span>
                        </div>
                        <span class="cv-job-meta">${accAssociate.date}</span>
                    </div>
                    <ul class="cv-job-bullets">
                        ${accAssociate.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <!-- Selected Hands-On Projects -->
                <div class="cv-sec-title">Selected Hands-On Projects</div>

                <div class="cv-project-item">
                    <div class="cv-project-header">
                        <div>
                            <span class="cv-project-name">Parking Lot System</span>
                            <span class="cv-project-tech">| Java, Spring Boot, REST APIs, Object-Oriented Design</span>
                        </div>
                        <a href="https://github.com/sfarera" target="_blank" class="cv-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="cv-project-bullets">
                        <li>Implemented low-level object-oriented design applying Creational and Behavioral design patterns (Factory, Strategy) to manage parking spots, vehicle types, and dynamic fee calculation strategies.</li>
                        <li>Developed REST APIs to handle parking ticket issuance, vehicle check-in/checkout workflows, and real-time slot availability tracking.</li>
                    </ul>
                </div>

                <div class="cv-project-item">
                    <div class="cv-project-header">
                        <div>
                            <span class="cv-project-name">Movie Ticket Booking System</span>
                            <span class="cv-project-tech">| Java, Spring Boot, JPA, Transaction Management</span>
                        </div>
                        <a href="https://github.com/sfarera" target="_blank" class="cv-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="cv-project-bullets">
                        <li>Engineered a booking service with relational data modeling, handling concurrent seat reservations, show scheduling, and pricing tiers.</li>
                        <li>Utilized Spring transaction management (@Transactional) and database locking mechanisms to prevent double-booking and maintain transactional integrity.</li>
                    </ul>
                </div>

                <div class="cv-project-item">
                    <div class="cv-project-header">
                        <div>
                            <span class="cv-project-name">Expense Sharing Application</span>
                            <span class="cv-project-tech">| Java, Spring Boot, Object-Oriented Design</span>
                        </div>
                        <a href="https://github.com/sfarera" target="_blank" class="cv-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="cv-project-bullets">
                        <li>Modeled split-expense domain logic supporting multiple split strategies (equal, exact amounts, percentage) among user groups.</li>
                        <li>Exposed RESTful endpoints for group management, expense creation, and calculating consolidated balances to minimize settlement transactions.</li>
                    </ul>
                </div>

                <!-- Education -->
                <div class="cv-sec-title">Education</div>
                <div class="cv-item-block">
                    <div class="cv-item-row">
                        <div>
                            <span class="cv-item-title">Bachelor of Engineering (B.E.) in Information Technology</span><br>
                            <span class="cv-item-inst">Shri Govindram Seksaria Institute of Technology and Science (SGSITS Indore)</span>
                        </div>
                        <div style="text-align: right;">
                            <span class="cv-item-date">2013 – 2017</span><br>
                            <span style="font-size: 0.77rem; font-weight: 600; color: var(--primary);">CGPA: 7.1 / 10.0</span>
                        </div>
                    </div>
                </div>

                <!-- Certifications -->
                <div class="cv-sec-title">Certifications</div>
                <div class="cv-item-block">
                    <div class="cv-item-row">
                        <div>
                            <span class="cv-item-title">Microsoft Certified: Azure Fundamentals (AZ-900)</span><br>
                            <span class="cv-item-inst">Microsoft • Cloud Concepts, Azure Architecture, Security & Governance</span>
                        </div>
                        <span class="cv-item-date">Certified, 2023</span>
                    </div>
                </div>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Java Backend Developer</span>
                    <span>Page 2 of 2</span>
                </div>
            </section>
        </div>
    `;
};
