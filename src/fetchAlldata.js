import fs from 'fs';
import fetch from 'node-fetch';
import Papa from 'papaparse';
import dotenv from 'dotenv';
dotenv.config();

// Map of file name → env var
const sheets = {
  servicePage:process.env.VITE_SHEET_LINK_SERVICES_PAGE,
  faqSection:process.env.VITE_SHEET_FAQ_SECTION,
  contactBar:process.env.VITE_SHEET_CONTACT_BAR,
  servciesSection:process.env.VITE_SHEET_SERVICES_SECTION,
  testimonialSection:process.env.VITE_SHEET_TESTIMONIAL_SECTION,
  contactSection:process.env.VITE_SHEET_CONTACT_US,
};

// Function to fetch and filter data from Google Sheet
async function fetchSheetData(url) {
  const response = await fetch(url);
  const csv = await response.text();
  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim(),
    transform: (v) => v.trim(),
  });

  // Filter out rows where all values are empty
  const cleanedData = parsed.data.filter(row =>
    Object.values(row).some(value => value !== "")
  );

  return cleanedData;
}

// Run the main script
async function run() {
  for (const [key, url] of Object.entries(sheets)) {
    if (!url) {
      console.warn(`⚠️  Missing URL for ${key}. Check your .env file.`);
      continue;
    }
    try {
      const data = await fetchSheetData(url);
      fs.writeFileSync(`src/data/${key}.json`, JSON.stringify(data, null, 2));
      console.log(`✅ ${key} data saved to src/data/${key}.json`);
    } catch (err) {
      console.error(`❌ Failed to fetch ${key}:`, err.message);
    }
  }
}

run();
