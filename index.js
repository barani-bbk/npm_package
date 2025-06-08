#!/usr/bin/env node
import chalk from "chalk";
import open from "open";

const arg = process.argv[2];

if (arg === "web") {
  open("https://resume-gamma-neon.vercel.app/");
} else {
  const divider = chalk.gray("─".repeat(60));
  const header = chalk.bold.bgBlue.white;
  const label = chalk.cyan.bold;
  const bullet = chalk.yellow("•");

  console.log(header("\n     Barani Kumar Naidu Bandaru     \n"));
  console.log(`${label("📞 Phone:")} 9100167445`);
  console.log(`${label("📧 Email:")} bharani.bbk@gmail.com`);
  console.log(
    `${label(
      "🔗 LinkedIn:"
    )} linkedin.com/in/barani-kumar-naidu-bandaru-671521227/\n`
  );
  console.log(divider);

  console.log(chalk.bold.green("\n💻 Technical Skills\n"));

  console.log(
    `${label("Languages:")} HTML, CSS, SCSS, JavaScript, TypeScript, MySQL`
  );
  console.log(
    `${label(
      "Libraries / Frameworks:"
    )} React.js, Node.js, Express, Jest, ReactQuery, Zustand`
  );
  console.log(
    `${label(
      "Developer Tools:"
    )} Git, Github Actions, DBT, Terraform, Firebase, cloudflare, VS Code, JIRA`
  );
  console.log(
    `${label(
      "Other:"
    )} Agile Methodologies, Responsive Design, Debugging, Analytics, Code Reviews, Data Structures`
  );

  console.log(chalk.bold.green("\n💼 Experience\n"));

  console.log(
    chalk.bold("Software Developer"),
    chalk.gray(" | December 2023 – April 2025")
  );
  console.log(`${chalk.italic("GSynergy (Remote)")}`);
  console.log(
    `${bullet} Designed VS Code extension and proprietary libraries to automate code generation using domain-specific models, reducing manual effort by 40%`
  );
  console.log(
    `${bullet} Built React UI components for database schema visualization/editing, enhancing user efficiency by 40%`
  );
  console.log(
    `${bullet} Designed a SQL generation service that automatically creates code for data storage and transformations, reducing data pipeline creation time by 60%`
  );
  console.log(
    `${bullet} Automated cloud infrastructure provisioning via Terraform (Azure/Snowflake), cutting deployment time by 50%`
  );
  console.log(
    `${bullet} Implemented CI/CD pipelines using GitHub Actions, achieving 95% test coverage with Jest\n`
  );

  console.log(
    chalk.bold("Software Developer"),
    chalk.gray(" | February 2022 – December 2023")
  );
  console.log(`${chalk.italic("ADP (Hyderabad, Telangana)")}`);
  console.log(
    `${bullet} Revamped document management dashboard, enabling bulk processing of 10k+ employee records in a single batch with 25% faster load times`
  );
  console.log(
    `${bullet} Integrated e-signature service, reducing HR approval cycles by 50% through automated workflows`
  );
  console.log(
    `${bullet} Developed and optimized backend services with Node.js and Express, improving data processing efficiency and handling over 10,000 API requests per day`
  );
  console.log(
    `${bullet} Collaborated with US teams to resolve 10+ critical client issues, maintaining 98% SLA compliance`
  );

  console.log(chalk.bold.green("\n🚀 Projects\n"));

  console.log(
    chalk.bold("VS Code Extension for Data Analytics Automation"),
    chalk.gray(" | December 2023 – Present")
  );
  console.log(
    `${bullet} Spearheaded the development of a VS Code extension, allowing users to create and validate complex data models in real-time, enhancing data accuracy by 40%`
  );
  console.log(
    `${bullet} Proposed an integrated model validation service that provided instant feedback, reducing model errors by 30% before submission`
  );
  console.log(
    `${bullet} Created a backend service that auto-generates code and deploys user models as DBT projects, saving 60% in deployment time`
  );

  console.log(
    chalk.bold("Audit Reporting System"),
    chalk.gray(" | February 2022 – December 2023")
  );
  console.log(
    `${bullet} Implemented over 10 customizable audit report templates, streamlining data analysis and improving client reporting time by 35%`
  );
  console.log(
    `${bullet} Redesigned a service that automated raw data conversion into user-friendly formats, supporting over 1,000 successful audit report generations`
  );

  console.log(
    chalk.bold("Document Management System"),
    chalk.gray(" | February 2022 – December 2023")
  );
  console.log(
    `${bullet} Managed document lifecycles for 15+ clients, optimizing processes from hiring through termination and ensuring 100% compliance with regulatory requirements`
  );
  console.log(
    `${bullet} Enhanced the bulk document import process, increasing data throughput from 6,000 to 10,000 records per import and accelerating client onboarding by 50%`
  );

  console.log(chalk.bold.green("\n🎓 Education\n"));

  console.log(
    `${chalk.bold("Andhra University College of Engineering")}`,
    chalk.gray(" | June 2017 – July 2021")
  );
  console.log(
    `Bachelor of Technology (B.Tech) in Civil Engineering, CGPA: 8.61`,
    chalk.gray("   Visakhapatnam, Andhra Pradesh")
  );
}
