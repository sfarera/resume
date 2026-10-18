window.renderTwoPage = (DATA, ROOT, STYLE) => {
    STYLE.innerHTML = `
        body {
            background-color: #f1f5f9;
            color: #000000;
            font-family: "Times New Roman", Times, "TeX Gyre Termes", STIXGeneral, serif;
            margin: 0;
            padding: 1.5rem 0;
            line-height: 1.30;
            -webkit-font-smoothing: antialiased;
        }

        .cv-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.25rem;
        }

        .cv-sheet {
            background: #ffffff;
            width: 210mm;
            min-height: 297mm;
            height: 297mm;
            padding: 12mm 16mm 10mm 16mm;
            box-sizing: border-box;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            overflow: hidden;
            font-family: "Times New Roman", Times, "TeX Gyre Termes", STIXGeneral, serif;
            color: #000000;
        }

        /* LaTeX Header (Two Column Justified, Exactly like Sagar Farera's resume) */
        .latex-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 7px;
        }

        .latex-header-left {
            display: flex;
            flex-direction: column;
        }

        .latex-name {
            font-size: 1.80rem;
            font-weight: 700;
            color: #000000;
            line-height: 1.1;
            margin: 0 0 4px 0;
            letter-spacing: -0.2px;
        }

        .latex-contact-left, .latex-contact-right {
            font-size: 0.83rem;
            line-height: 1.35;
            color: #000000;
        }

        .latex-contact-right {
            text-align: right;
        }

        .latex-contact-left a, .latex-contact-right a {
            color: #000000;
            text-decoration: none;
        }

        .latex-contact-left a:hover, .latex-contact-right a:hover {
            text-decoration: underline;
        }

        /* LaTeX Section Title: Bold with 1px black underline */
        .latex-sec-title {
            font-size: 1.02rem;
            font-weight: 700;
            color: #000000;
            border-bottom: 1px solid #000000;
            margin: 8px 0 5px 0;
            padding-bottom: 1px;
            letter-spacing: 0.1px;
        }

        /* Education Entry */
        .latex-edu-item {
            margin-bottom: 4px;
        }

        .latex-edu-row1 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.86rem;
            font-weight: 700;
            color: #000000;
        }

        .latex-edu-row2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.83rem;
            color: #000000;
        }

        .latex-edu-degree {
            font-style: italic;
        }

        .latex-edu-date {
            font-style: italic;
        }

        /* Skills Summary: Bulleted lines with bold category */
        .latex-skills-list {
            margin: 0;
            padding-left: 17px;
            font-size: 0.81rem;
            line-height: 1.34;
            list-style-type: disc;
        }

        .latex-skills-list li {
            margin-bottom: 2px;
        }

        .latex-skills-list strong {
            font-weight: 700;
            color: #000000;
        }

        /* Work Experience */
        .latex-job {
            margin-bottom: 6px;
        }

        .latex-company-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.86rem;
            font-weight: 700;
            color: #000000;
            margin-bottom: 1.5px;
        }

        .latex-role-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.83rem;
            color: #000000;
            margin-bottom: 2px;
        }

        .latex-role-title {
            font-weight: 700;
            font-style: italic;
        }

        .latex-role-date {
            font-style: italic;
        }

        /* Sub-bullets with open circle ◦ */
        .latex-bullets {
            margin: 0;
            padding-left: 20px;
            font-size: 0.80rem;
            line-height: 1.32;
            list-style-type: circle;
        }

        .latex-bullets li {
            margin-bottom: 2.5px;
            text-align: justify;
        }

        /* Project Entry */
        .latex-project {
            margin-bottom: 6px;
        }

        .latex-project-row1 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.85rem;
            font-weight: 700;
            color: #000000;
            margin-bottom: 1px;
        }

        .latex-project-row2 {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.81rem;
            color: #000000;
            margin-bottom: 2px;
        }

        .latex-project-tech {
            font-style: italic;
        }

        .latex-project-link {
            font-style: italic;
            color: #000000;
            text-decoration: none;
        }

        .latex-project-link:hover {
            text-decoration: underline;
        }

        /* Sheet Footer */
        .cv-sheet-footer {
            margin-top: auto;
            padding-top: 3px;
            border-top: 0.5px solid #cccccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.68rem;
            color: #555555;
            font-family: "Times New Roman", Times, serif;
        }

        /* Print Media Styles - Zero Rasterization, Pure Vector Text */
        @media print {
            @page {
                size: A4 portrait;
                margin: 8mm 14mm 8mm 14mm !important;
            }

            html, body {
                background: white !important;
                color: #000000 !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: auto !important;
                min-height: 0 !important;
                overflow: visible !important;
                font-family: "Times New Roman", Times, serif !important;
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
                font-family: "Times New Roman", Times, serif !important;
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

    ROOT.innerHTML = `
        <div class="cv-wrapper">
            <!-- ================= PAGE 1 ================= -->
            <section class="cv-sheet" id="page-1">
                <!-- LaTeX Header (Exactly Sagar Farera Style) -->
                <header class="latex-header">
                    <div class="latex-header-left">
                        <div class="latex-name">${DATA.profile.name}</div>
                        <div class="latex-contact-left">
                            LinkedIn: <a href="https://www.linkedin.com/in/shubham-farera-343b5111b" target="_blank">www.linkedin.com/in/shubham-farera-343b5111b</a><br>
                            GitHub: <a href="https://github.com/sfarera" target="_blank">github.com/sfarera</a>
                        </div>
                    </div>
                    <div class="latex-contact-right">
                        Email: <a href="mailto:${DATA.profile.contact.email}">${DATA.profile.contact.email}</a><br>
                        Mobile: ${DATA.profile.contact.phone}<br>
                        Location: ${DATA.profile.contact.location}
                    </div>
                </header>

                <!-- Education (Sagar Farera Layout) -->
                <div class="latex-sec-title">Education</div>
                <div class="latex-edu-item">
                    <div class="latex-edu-row1">
                        <span>• Shri Govindram Seksaria Institute of Technology and Science (SGSITS)</span>
                        <span>Indore, Madhya Pradesh, India</span>
                    </div>
                    <div class="latex-edu-row2">
                        <span class="latex-edu-degree">Bachelor of Engineering in Information Technology | GPA: 7.10/10</span>
                        <span class="latex-edu-date">July 2013 – June 2017</span>
                    </div>
                </div>

                <!-- Skills Summary (Sagar Farera Layout) -->
                <div class="latex-sec-title">Skills Summary</div>
                <ul class="latex-skills-list">
                    <li><strong>• Languages :</strong> Java (8 / 11 / 17), SQL</li>
                    <li><strong>• Backend :</strong> Spring Boot, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Microservices</li>
                    <li><strong>• Databases & Caching :</strong> MySQL, Oracle, Redis</li>
                    <li><strong>• DevOps & Cloud :</strong> Kubernetes, NGINX Ingress, Docker, Jenkins CI/CD, Git, Maven, Microsoft Azure (AZ-900)</li>
                    <li><strong>• Testing & Quality :</strong> JUnit, Mockito, SonarQube, Unit Testing, Debugging & Troubleshooting</li>
                    <li><strong>• Additional Knowledge :</strong> Apache Kafka, Elasticsearch, Distributed Systems Concepts, HLD & LLD</li>
                </ul>

                <!-- Work Experience (Sagar Farera Layout) -->
                <div class="latex-sec-title">Work Experience</div>

                <!-- Tata Consultancy Services -->
                <div class="latex-job">
                    <div class="latex-company-row">
                        <span>• Tata Consultancy Services — Software Development (Backend)</span>
                        <span>Pune, India</span>
                    </div>
                    <div class="latex-role-row">
                        <span class="latex-role-title">IT Analyst (Senior Backend Engineer)</span>
                        <span class="latex-role-date">Oct 2023 – Present</span>
                    </div>
                    <ul class="latex-bullets">
                        ${tcsJob.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <!-- Accenture: Senior Analyst & Analyst -->
                <div class="latex-job">
                    <div class="latex-company-row">
                        <span>• Accenture — Software Development (Backend)</span>
                        <span>Pune, India</span>
                    </div>
                    
                    <!-- Role 1: Senior Analyst -->
                    <div class="latex-role-row">
                        <span class="latex-role-title">Application Development Senior Analyst</span>
                        <span class="latex-role-date">Sept 2021 – Aug 2023</span>
                    </div>
                    <ul class="latex-bullets" style="margin-bottom: 5px;">
                        ${accSrAnalyst.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>

                    <!-- Role 2: Analyst -->
                    <div class="latex-role-row">
                        <span class="latex-role-title">Application Development Analyst</span>
                        <span class="latex-role-date">May 2020 – Aug 2021</span>
                    </div>
                    <ul class="latex-bullets">
                        ${accAnalyst.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Java Backend Developer</span>
                    <span>Page 1 of 2</span>
                </div>
            </section>

            <!-- ================= PAGE 2 ================= -->
            <section class="cv-sheet" id="page-2">
                <!-- Work Experience Continued -->
                <div class="latex-sec-title">Work Experience (Continued)</div>

                <!-- Accenture: Associate -->
                <div class="latex-job" style="margin-bottom: 8px;">
                    <div class="latex-company-row">
                        <span>• Accenture — Software Development (Backend) (Continued)</span>
                        <span>Pune, India</span>
                    </div>
                    <div class="latex-role-row">
                        <span class="latex-role-title">Associate Software Engineer</span>
                        <span class="latex-role-date">Feb 2018 – Apr 2020</span>
                    </div>
                    <ul class="latex-bullets">
                        ${accAssociate.details.map(d => `<li>${d}</li>`).join('')}
                        <li>Authored technical documentation, unit test suites, and release deployment notes adhering to enterprise SDLC processes.</li>
                    </ul>
                </div>

                <!-- Competitions and Projects (Sagar Farera Layout) -->
                <div class="latex-sec-title">Projects and Technical Systems</div>

                <!-- Parking Lot System -->
                <div class="latex-project">
                    <div class="latex-project-row1">
                        <span>• Parking Lot System — Object-Oriented Design & Backend Service</span>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, REST APIs, Design Patterns (Factory, Strategy)</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="latex-bullets">
                        <li>Implemented low-level object-oriented design applying Creational and Behavioral design patterns (Factory, Strategy) to manage parking spots, vehicle types, and dynamic fee calculation strategies.</li>
                        <li>Developed REST APIs to handle parking ticket issuance, vehicle check-in/checkout workflows, and real-time slot availability tracking.</li>
                        <li>Applied thread-safe synchronization and concurrent collections to ensure atomic spot reservations under concurrent vehicle entry requests.</li>
                    </ul>
                </div>

                <!-- Movie Ticket Booking System -->
                <div class="latex-project">
                    <div class="latex-project-row1">
                        <span>• Movie Ticket Booking System — Transaction Management & Booking Service</span>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, JPA, Concurrency & Seat Locking</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="latex-bullets">
                        <li>Engineered a booking service with relational data modeling, handling concurrent seat reservations, show scheduling, and pricing tiers.</li>
                        <li>Utilized Spring transaction management (@Transactional) and database locking mechanisms to prevent double-booking and maintain transactional integrity.</li>
                        <li>Implemented RESTful payment reconciliation endpoints and automated booking expiration timers using Spring scheduling.</li>
                    </ul>
                </div>

                <!-- Expense Sharing Application -->
                <div class="latex-project">
                    <div class="latex-project-row1">
                        <span>• Expense Sharing Application — Domain Modeling & Split Engine</span>
                    </div>
                    <div class="latex-project-row2">
                        <span class="latex-project-tech">Java, Spring Boot, REST APIs, Object-Oriented Design</span>
                        <a href="https://github.com/sfarera" target="_blank" class="latex-project-link">github.com/sfarera</a>
                    </div>
                    <ul class="latex-bullets">
                        <li>Modeled split-expense domain logic supporting multiple split strategies (equal, exact amounts, percentage) among user groups.</li>
                        <li>Exposed RESTful endpoints for group management, expense creation, and calculating consolidated balances to minimize settlement transactions.</li>
                        <li>Designed graph-based debt simplification logic to compute net balances and minimize total cash flow settlements among group participants.</li>
                    </ul>
                </div>

                <!-- Certifications -->
                <div class="latex-sec-title">Certifications</div>
                <div class="latex-edu-item">
                    <div class="latex-edu-row1">
                        <span>• Microsoft Certified: Azure Fundamentals (AZ-900)</span>
                        <span>Certified, 2023</span>
                    </div>
                    <div class="latex-edu-row2">
                        <span class="latex-edu-degree">Microsoft • Cloud Concepts, Azure Architecture, Security & Governance</span>
                    </div>
                    <ul class="latex-bullets" style="margin-top: 2px;">
                        <li>Demonstrated foundational knowledge of cloud services, Azure resource management, security, and governance.</li>
                    </ul>
                </div>

                <div class="cv-sheet-footer">
                    <span>${DATA.profile.name} — Senior Java Backend Developer</span>
                    <span>Page 2 of 2</span>
                </div>
            </section>
        </div>
    `;
};
