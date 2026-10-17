window.renderOnePage = (DATA, ROOT, STYLE) => {
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
            line-height: 1.36;
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
            padding: 10mm 15mm 8mm 15mm;
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
        .cv-header-onepage {
            text-align: center;
            border-bottom: 1.5px solid var(--primary);
            padding-bottom: 6px;
            margin-bottom: 8px;
        }

        .cv-header-onepage h1 {
            font-size: 1.60rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0 0 2px 0;
            letter-spacing: -0.3px;
            line-height: 1.15;
            text-transform: uppercase;
        }

        .cv-header-onepage .cv-headline {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--accent);
            margin: 0 0 5px 0;
            letter-spacing: 0.1px;
        }

        .cv-contact-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 4px 14px;
            font-size: 0.76rem;
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
        .cv-sec-title-onepage {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin: 8px 0 4px 0;
            padding-bottom: 2px;
            border-bottom: 1.2px solid var(--border);
        }

        /* Summary */
        .cv-summary-onepage {
            font-size: 0.76rem;
            color: var(--text-body);
            margin: 0 0 5px 0;
            line-height: 1.38;
            text-align: justify;
        }

        /* Skills */
        .cv-skills-grid-onepage {
            display: flex;
            flex-direction: column;
            gap: 2.5px;
            margin-bottom: 6px;
            font-size: 0.75rem;
        }

        .cv-skill-line-onepage {
            line-height: 1.34;
        }

        .cv-skill-line-onepage strong {
            color: var(--primary);
            font-weight: 700;
            display: inline-block;
            min-width: 155px;
        }

        /* Job Entry */
        .cv-job-onepage {
            margin-bottom: 6px;
        }

        .cv-job-header-onepage {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 2.5px;
        }

        .cv-job-role-onepage {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--primary);
        }

        .cv-job-company-onepage {
            color: var(--text-body);
            font-weight: 600;
            font-size: 0.81rem;
        }

        .cv-job-date-onepage {
            font-size: 0.74rem;
            font-weight: 600;
            color: var(--text-muted);
            white-space: nowrap;
        }

        .cv-job-bullets-onepage {
            margin: 0;
            padding-left: 14px;
            font-size: 0.745rem;
            color: var(--text-body);
            line-height: 1.34;
        }

        .cv-job-bullets-onepage li {
            margin-bottom: 2.5px;
            text-align: justify;
        }

        .cv-job-bullets-onepage li strong {
            color: var(--primary);
            font-weight: 600;
        }

        /* Bottom Grid: Education & Certifications */
        .cv-bottom-grid-onepage {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 14px;
            margin-top: 4px;
        }

        .cv-meta-item-onepage {
            font-size: 0.75rem;
            line-height: 1.34;
            color: var(--text-body);
        }

        .cv-meta-item-onepage strong {
            color: var(--primary);
        }

        /* Sheet Footer */
        .cv-sheet-footer-onepage {
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
                margin: 6mm 12mm 6mm 12mm !important;
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

            .cv-sheet-onepage {
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
                page-break-after: avoid !important;
                break-after: avoid !important;
                overflow: visible !important;
                box-sizing: border-box !important;
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
            <section class="cv-sheet-onepage">
                <header class="cv-header-onepage">
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
                <div class="cv-sec-title-onepage">Professional Summary</div>
                <p class="cv-summary-onepage">${DATA.summary.summary[0]}</p>

                <!-- Technical Skills -->
                <div class="cv-sec-title-onepage">Technical Skills</div>
                <div class="cv-skills-grid-onepage">
                    <div class="cv-skill-line-onepage">
                        <strong>Languages & Backend:</strong>
                        <span>Java (8 / 11 / 17), SQL, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs</span>
                    </div>
                    <div class="cv-skill-line-onepage">
                        <strong>Messaging & Databases:</strong>
                        <span>Apache Kafka, MySQL, Oracle, Elasticsearch, Redis</span>
                    </div>
                    <div class="cv-skill-line-onepage">
                        <strong>Testing & DevOps:</strong>
                        <span>JUnit, Mockito, SonarQube, CodeQL, Git, Docker, Jenkins CI/CD, Maven</span>
                    </div>
                    <div class="cv-skill-line-onepage">
                        <strong>Architecture & Cloud:</strong>
                        <span>Microservices Architecture, Event-Driven Architecture, SOLID Principles, Azure (AZ-900)</span>
                    </div>
                </div>

                <!-- Professional Experience -->
                <div class="cv-sec-title-onepage">Professional Experience</div>

                <!-- TCS -->
                <div class="cv-job-onepage">
                    <div class="cv-job-header-onepage">
                        <div>
                            <span class="cv-job-role-onepage">${tcsJob.role}</span> — <span class="cv-job-company-onepage">${tcsJob.company}</span>
                        </div>
                        <span class="cv-job-date-onepage">${tcsJob.date}</span>
                    </div>
                    <ul class="cv-job-bullets-onepage">
                        <li>Developed Java 17 and Spring Boot microservices supporting healthcare claims processing and policy underwriting workflows with high availability.</li>
                        <li>Implemented Kafka producers and consumers for asynchronous service communication with schema validation, serialization, and error recovery.</li>
                        <li>Contributed to distributed workflow implementation across billing and policy services using Kafka event-driven messaging and retry handling.</li>
                        <li>Optimized Elasticsearch queries, index mappings, and analyzer configurations for policy lookup, improving response times from ~450ms to sub-150ms.</li>
                        <li>Optimized relational database queries, table indexing, and supported MySQL/Oracle primary-replica configurations with Redis caching.</li>
                    </ul>
                </div>

                <!-- Accenture: Senior Analyst -->
                <div class="cv-job-onepage">
                    <div class="cv-job-header-onepage">
                        <div>
                            <span class="cv-job-role-onepage">${accSrAnalyst.role}</span> — <span class="cv-job-company-onepage">${accSrAnalyst.company}</span>
                        </div>
                        <span class="cv-job-date-onepage">${accSrAnalyst.date}</span>
                    </div>
                    <ul class="cv-job-bullets-onepage">
                        <li>Developed backend RESTful microservices for automated portfolio rebalancing within a wealth management platform supporting $500M+ in AUM.</li>
                        <li>Engineered secure, idempotent REST APIs to integrate internal workflows with external banking gateways and financial settlement networks.</li>
                        <li>Optimized Spring Data JPA queries and database indexing for batch settlement processing, reducing execution times by ~35%.</li>
                    </ul>
                </div>

                <!-- Accenture: Analyst & Associate -->
                <div class="cv-job-onepage">
                    <div class="cv-job-header-onepage">
                        <div>
                            <span class="cv-job-role-onepage">Software Engineer Progression (Analyst & Associate)</span> — <span class="cv-job-company-onepage">Accenture</span>
                        </div>
                        <span class="cv-job-date-onepage">Feb 2018 – Aug 2021</span>
                    </div>
                    <ul class="cv-job-bullets-onepage">
                        <li>Developed REST APIs (Java, Spring Boot, JPA) for an order tracking platform handling up to 200K+ daily orders; applied State/Strategy patterns.</li>
                        <li>Developed core Java batch utilities for public assistance case management; authored JUnit/Mockito test suites achieving reliable coverage.</li>
                    </ul>
                </div>

                <!-- Bottom 2-Column: Education & Certifications -->
                <div class="cv-bottom-grid-onepage">
                    <div>
                        <div class="cv-sec-title-onepage">Education</div>
                        <div class="cv-meta-item-onepage">
                            <strong>Bachelor of Engineering (B.E.) in Information Technology</strong><br>
                            SGSITS Indore (2013 – 2017) | <strong>CGPA: 7.1 / 10.0</strong>
                        </div>
                    </div>
                    <div>
                        <div class="cv-sec-title-onepage">Certifications</div>
                        <div class="cv-meta-item-onepage">
                            <strong>Microsoft Certified: Azure Fundamentals (AZ-900)</strong><br>
                            Microsoft • Certified, 2023
                        </div>
                    </div>
                </div>

                <!-- Sheet Footer -->
                <div class="cv-sheet-footer-onepage">
                    <span>${DATA.profile.name} — Senior Backend Software Engineer</span>
                    <span>1-Page Executive Resume</span>
                </div>
            </section>
        </div>
    `;
};
