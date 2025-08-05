import fs from 'fs';
import fetch from 'node-fetch';
import Papa from 'papaparse';
import dotenv from 'dotenv';
dotenv.config();

// Map of file name → env var
const sheets = {
//   homePackages: process.env.SHEET_LINK_HOME_PACKAGE,
//   homeDestination: process.env.SHEET_LINK_HOME_DESTINATION,
//   homeReviews: process.env.SHEET_LINK_HOME_REVIEWS,
//   packagePageBasic: process.env.SHEET_LINK_PACKAGE_PAGE_BASIC,
//   packagePageIternary: process.env.SHEET_LINK_PACKAGE_PAGE_ITERNARY,
//   packagePageHighlights: process.env.SHEET_LINK_PACKAGE_PAGE_HIGHGLIGHTS,
//   packagePageInclusion: process.env.SHEET_LINK_PACKAGE_PAGE_INCLUSION,
//   destinationPage: process.env.SHEET_LINK_PACKAGE_PAGE_DESTINATIONS,
//   destinationPageContact: process.env.SHEET_LINK_DESTINATION_CONTACT,
//   aboutPage: process.env.SHEET_LINK_ABOUT_PAGE,
//   contactPage: process.env.SHEET_LINK_CONTACT_PAGE,
//   footer: process.env.SHEET_LINK_FOOTER
  // Add more as needed

  servicePage:process.env.VITE_SHEET_LINK_SERVICES_PAGE
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
