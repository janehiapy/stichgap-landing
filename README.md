# StichGap landing page

A coming-soon landing page for StichGap, an AI-powered F&B profit control system for owner-operated restaurants. The site uses a bright geometric brand palette: Full Spectrum Blue, Regal Navy, Coral Glow, and Pearl Aqua.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Waitlist setup with Google Sheets

The form posts to `app/api/waitlist/route.ts`, which validates the payload and forwards it to a Google Apps Script webhook. This keeps the webhook URL out of the browser.

### 1. Create the Sheet

Create a Google Sheet with the first row:

```text
timestamp | email | name | role | business_type
```

### 2. Add Apps Script

Open Extensions > Apps Script and paste this entire script:

```javascript
const NOTIFICATION_RECIPIENT = "jane.hiapy@gmail.com";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  const submittedAt = data.timestamp || new Date().toISOString();

  sheet.appendRow([
    submittedAt,
    data.email || "",
    data.name || "",
    data.role || "",
    data.business_type || "",
  ]);

  sendWaitlistNotification_(data, submittedAt);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendWaitlistNotification_(data, submittedAt) {
  const subject = "New StichGap waitlist submission";
  const body = [
    "A new waitlist submission was received.",
    "",
    "Submitted: " + submittedAt,
    "Email: " + (data.email || ""),
    "Name: " + (data.name || ""),
    "Role: " + (data.role || ""),
    "Business type: " + (data.business_type || ""),
  ].join("\n");

  try {
    MailApp.sendEmail({
      to: NOTIFICATION_RECIPIENT,
      subject: subject,
      body: body,
    });
    Logger.log("Waitlist notification sent via MailApp.");
    return;
  } catch (mailError) {
    Logger.log("MailApp failed: " + mailError.message);
  }

  try {
    GmailApp.sendEmail(NOTIFICATION_RECIPIENT, subject, body);
    Logger.log("Waitlist notification sent via GmailApp fallback.");
  } catch (gmailError) {
    Logger.log("GmailApp fallback failed: " + gmailError.message);
    Logger.log("Sheet row was saved, but no email was sent.");
  }
}
```

Important behavior:

- The sheet row is always saved first.
- Email failures are caught and logged; they no longer fail the webhook response.
- If `MailApp` fails, the script tries `GmailApp.sendEmail` as a fallback.

The first time the script sends an email, Google will ask you to authorize mail permissions for the account that owns the script.

### 3. Deploy the webhook

In Apps Script:

1. Click Deploy > New deployment.
2. Select Web app.
3. Execute as: Me.
4. Who has access: Anyone.
5. Review and authorize the requested permissions, including sending email as the script owner.
6. Copy the Web App URL.

If you change the script later, use Deploy > Manage deployments > Edit (pencil icon) > New version > Deploy. Existing webhook URLs keep working after a new version is deployed.

### 4. Configure environment variables

Create `.env.local` locally or add this in Vercel project settings:

```bash
GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

## Troubleshooting email notifications

If rows appear in the sheet but no email arrives:

1. **Check Apps Script executions**
   - Open Apps Script > Executions.
   - Open the latest `doPost` run and read the logs.
   - Look for `MailApp failed:` or `GmailApp fallback failed:` messages.

2. **Re-authorize the script**
   - Run any function once from the editor, or redeploy the web app.
   - Accept both Spreadsheet and Gmail / Mail permissions when prompted.
   - If permissions were added after the first deployment, create a new deployment version.

3. **Confirm the recipient address**
   - `NOTIFICATION_RECIPIENT` must exactly match `jane.hiapy@gmail.com`.
   - A typo causes silent send failures in some cases.

4. **Check Gmail quota and spam**
   - Free Gmail accounts have daily send limits for Apps Script mail.
   - Check spam/promotions for messages from your Google account.

5. **Use the same Google account**
   - The script must run as the Google account that owns the Sheet and is allowed to send mail.
   - Deploy with Execute as: Me, not a different account.

6. **Test email manually**
   - In Apps Script, run this once from the editor after saving:

```javascript
function testWaitlistEmail() {
  sendWaitlistNotification_(
    {
      email: "test@example.com",
      name: "Test User",
      role: "Owner",
      business_type: "Restaurant",
    },
    new Date().toISOString()
  );
}
```

   - If the test function fails, fix authorization before testing the live form again.

## Vercel deployment

1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Add `GOOGLE_SHEETS_WEBHOOK_URL` in Project Settings > Environment Variables.
4. Purchase `stichgap.com` and add it in Vercel Project Settings > Domains.
5. Point DNS records at Vercel as instructed in the domain screen.
6. Test one waitlist submission and confirm it appears in your Google Sheet and sends a notification to `jane.hiapy@gmail.com`.

## Form fields

The waitlist captures:

- Email
- Name
- Role
- Business type

The privacy note on the page states that these details are used only for product updates and early access notes.
