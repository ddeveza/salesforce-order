import jsforce from "jsforce";

export const oauth2 = new jsforce.OAuth2({
  loginUrl: "https://login.salesforce.com", // Use 'https://test.salesforce.com' for a sandbox
  clientId: process.env.CLIENT_ID, // From your Connected App
  clientSecret: process.env.CLIENT_SECRET, // From your Connected App
  redirectUri: process.env.REDIRECT_URI, // The same as in your Connected App
});
