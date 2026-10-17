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
            line-height: 1.44;
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
            padding: 13mm 17mm 11mm 17mm;
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
            padding-bottom: 9px;
            margin-bottom: 11px;
        }

        .cv-header h1 {
            font-size: 1.72rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0 0 3px 0;
            letter-spacing: -0.3px;
            line-height: 1.15;
            text-transform: uppercase;
        }

        .cv-header .cv-headline {
            font-size: 0.89rem;
            font-weight: 600;
            color: var(--accent);
            margin: 0 0 7px 0;
            letter-spacing: 0.1px;
        }

        .cv-contact-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 6px 15px;
            font-size: 0.78rem;
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
            font-size: 0.86rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin: 11px 0 6px 0;
            padding-bottom: 2.5px;
            border-bottom: 1.2px solid var(--border);
        }

        /* Summary */
        .cv-summary-text {
            font-size: 0.79rem;
            color: var(--text-body);
            margin: 0 0 6px 0;
            line-height: 1.46;
            text-align: justify;
        }

        /* Technical Skills Section */
        .cv-skills-grid {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 7px;
            font-size: 0.78rem;
        }

        .cv-skill-line {
            line-height: 1.40;
        }

        .cv-skill-line strong {
            color: var(--primary);
            font-weight: 700;
            display: inline-block;
            min-width: 160px;
        }

        .cv-skill-line span {
            color: var(--text-body);
        }

        /* Experience Section */
        .cv-job {
            margin-bottom: 10px;
        }

        .cv-job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 3.5px;
        }

        .cv-job-title-group {
            font-size: 0.84rem;
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
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-job-bullets {
            margin: 0;
            padding-left: 15px;
            font-size: 0.775rem;
            color: var(--text-body);
            line-height: 1.42;
        }

        .cv-job-bullets li {
            margin-bottom: 4.5px;
            text-align: justify;
        }

        .cv-job-bullets li strong {
            color: var(--primary);
            font-weight: 600;
        }

        /* Leadership / Practices Bullets */
        .cv-leadership-bullets {
            margin: 0;
            padding-left: 15px;
            font-size: 0.775rem;
            color: var(--text-body);
            line-height: 1.42;
        }

        .cv-leadership-bullets li {
            margin-bottom: 5px;
            text-align: justify;
        }

        .cv-leadership-bullets li strong {
            color: var(--primary);
            font-weight: 600;
        }

        /* Education & Certifications */
        .cv-item-block {
            margin-bottom: 7px;
        }

        .cv-item-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.80rem;
            margin-bottom: 2.5px;
        }

        .cv-item-title {
            font-weight: 700;
            color: var(--primary);
        }

        .cv-item-inst {
            color: var(--text-muted);
            font-size: 0.77rem;
        }

        .cv-item-date {
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-item-details {
            font-size: 0.76rem;
            color: var(--text-body);
            line-height: 1.38;
        }

        /* Sheet Footer */
        .cv-sheet-footer {
            margin-top: auto;
            padding-top: 5px;
            border-top: 1px solid var(--border-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.68rem;
            color: var(--text-muted);
        }

        /* Print Media Styles */
        @media print {
            @page {
                size: A4 portrait;
                margin: 0 !important;
            }

            html, body {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: 100% !important;
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
                width: 210mm !important;
                height: 297mm !important;
                min-height: 297mm !important;
                max-height: 297mm !important;
                padding: 13mm 17mm 11mm 17mm !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                overflow: hidden !important;
            }

            #page-1 {
                page-break-after: always !important;
                break-after: page !important;
            }

            #page-2 {
                page-break-after: avoid !important;
                break-after: avoid !important;
            }

            #control-panel, .edit-trigger {
                display: none !important;
            }
        }
    `;

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
                <!-- Header (Single Column, ATS Clean, No Photo) -->
                <header class="cv-header">
                    <h1>${DATA.profile.name}</h1>
                    <div class="cv-headline">Senior Backend Software Engineer | Java | Spring Boot | Microservices | Distributed Systems</div>
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
                <div class="cv-skills-grid">
                    <div class="cv-skill-line">
                        <strong>Languages:</strong>
                        <span>Java (8 / 11 / 17), SQL</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>Backend Frameworks:</strong>
                        <span>Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>Messaging & Streaming:</strong>
                        <span>Apache Kafka</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>Databases & Search:</strong>
                        <span>MySQL, Oracle, Elasticsearch, Redis</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>Testing & Quality:</strong>
                        <span>JUnit, Mockito, SonarQube, CodeQL Static Analysis</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>DevOps & Tools:</strong>
                        <span>Git, Docker, Jenkins CI/CD Pipelines, Maven</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>Architecture & Design:</strong>
                        <span>Microservices Architecture, Event-Driven Architecture, SOLID Principles, Design Patterns</span>
                    </div>
                    <div class="cv-skill-line">
                        <strong>Cloud:</strong>
                        <span>Microsoft Azure (AZ-900 Certified)</span>
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
                    <span>${DATA.profile.name} — Senior Backend Software Engineer</span>
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
                        <li>Integrated third-party carrier tracking webhooks and asynchronous status notification handlers to ensure reliable end-to-end shipment visibility.</li>
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
                        <li>Authored data migration utilities and SQL batch scripts to support database transformation tasks across client staging environments.</li>
                    </ul>
                </div>

                <!-- Technical Leadership & Engineering Practices -->
                <div class="cv-sec-title">Technical Ownership & Engineering Practices</div>
                <ul class="cv-leadership-bullets" style="margin-bottom: 9px;">
                    <li><strong>Code Craftsmanship & Standards:</strong> Conducted comprehensive Low-Level Design (LLD) reviews and peer pull-request evaluations, enforcing clean architecture, SOLID design principles, and automated SonarQube quality gates across releases.</li>
                    <li><strong>Engineering Mentorship & Onboarding:</strong> Mentored junior and mid-level software engineers on Java concurrency best practices, Spring Boot service decomposition, unit test writing with JUnit/Mockito, and defensive coding techniques.</li>
                    <li><strong>API Design & Contract Governance:</strong> Collaborated closely with frontend engineers, product managers, and QA teams to establish standardized RESTful API contracts, predictable error response payloads, and pagination models across microservices.</li>
                    <li><strong>Production Reliability & Incident Management:</strong> Participated in on-call engineering rotations, triaged high-priority production defects, and conducted blameless Root Cause Analysis (RCA) meetings to implement preventative engineering measures.</li>
                </ul>

                <!-- Education -->
                <div class="cv-sec-title">Education</div>
                <div class="cv-item-block" style="margin-bottom: 9px;">
                    <div class="cv-item-row">
                        <div>
                            <span class="cv-item-title">Bachelor of Engineering (B.E.) in Information Technology</span><br>
                            <span class="cv-item-inst">Shri Govindram Seksaria Institute of Technology and Science (SGSITS Indore, MP)</span>
                        </div>
                        <div style="text-align: right;">
                            <span class="cv-item-date">2013 – 2017</span><br>
                            <span style="font-size: 0.77rem; font-weight: 600; color: var(--primary);">CGPA: 7.1 / 10.0</span>
                        </div>
                    </div>
                    <div class="cv-item-details" style="margin-top: 3px;">
                        <strong>Key Academic Foundations:</strong> Data Structures & Algorithms, Object-Oriented Analysis & Design (OOAD), Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.
                    </div>
                </div>

                <!-- Certifications -->
                <div class="cv-sec-title">Certifications</div>
                <div class="cv-item-block">
                    <div class="cv-item-row">
                        <div>
                            <span class="cv-item-title">Microsoft Certified: Azure Fundamentals (AZ-900)</span><br>
                            <span class="cv-item-inst">Microsoft • Cloud Concepts, Azure Architecture, Security, Governance & Compliance</span>
                        </div>
                        <span class="cv-item-date">Certified, 2023</span>
                    </div>
                    <div class="cv-item-details" style="margin-top: 2px;">
                        Verified foundational proficiency in Cloud Architecture, Azure Core Services (Compute, Storage, Networking), Identity, and Security.
                    </div>
                </div>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Backend Software Engineer</span>
                    <span>Page 2 of 2</span>
                </div>
            </section>
        </div>
    `;
};
