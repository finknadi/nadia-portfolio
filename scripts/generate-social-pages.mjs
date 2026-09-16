import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const sourceFile = path.join(distDir, "index.html");

const html = fs.readFileSync(sourceFile, "utf8");

const localLoopHtml = html
  .replace(
    "<title>Nadin Fink — UX/UI Designer & Web Designer</title>",
    "<title>Local Loop — UX/UI Case Study | Nadin Fink</title>",
  )
  .replace(
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta
      name="description"
      content="Local Loop is an end-to-end UX/UI case study by Nadin Fink including research, user flows and responsive design"
    />`,
  )
  .replace(
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta
      property="og:title"
      content="Local Loop — UX/UI Case Study"
    />`,
  )
  .replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta
      property="og:description"
      content="An end-to-end UX/UI case study shaped by research, user flows and responsive design"
    />`,
  )
  .replace(
    /<meta\s+property="og:url"[\s\S]*?\/>/,
    `<meta
      property="og:url"
      content="https://nadin-fink-portfolio.vercel.app/projects/local-loop"
    />`,
  )
  .replace(
    /<meta\s+property="og:image"[\s\S]*?\/>/,
    `<meta
      property="og:image"
      content="https://nadin-fink-portfolio.vercel.app/images/projects/local-loop/local-loop-responsive.webp"
    />`,
  )
  .replace(
    '<link rel="canonical" href="https://nadin-fink-portfolio.vercel.app/" />',
    '<link rel="canonical" href="https://nadin-fink-portfolio.vercel.app/projects/local-loop" />',
  );

const targetDir = path.join(distDir, "projects", "local-loop");

fs.mkdirSync(targetDir, { recursive: true });

fs.writeFileSync(path.join(targetDir, "index.html"), localLoopHtml);

console.log("Local Loop social page generated");
