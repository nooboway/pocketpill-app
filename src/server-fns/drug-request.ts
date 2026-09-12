import { createServerFn } from "@tanstack/react-start";

export const submitDrugRequest = createServerFn({ method: "POST" })
  .validator((data: FormData) => {
    return data;
  })
  .handler(async ({ data }) => {
    const drugDetails = data.get("drugDetails") as string;
    const contactInfo = data.get("contactInfo") as string;
    const screenshot = data.get("screenshot") as File | null;

    console.log("=== NEW DRUG SOURCING REQUEST ===");
    console.log(`Contact: ${contactInfo}`);
    console.log(`Details: ${drugDetails}`);
    if (screenshot && screenshot.size > 0) {
      console.log(`Attached File: ${screenshot.name} (${screenshot.size} bytes)`);
    }
    console.log("=================================");

    // In a real application, you would:
    // 1. Upload the image to an S3 bucket or cloud storage.
    // 2. Trigger an email via Resend/Nodemailer containing the details and image link.
    // 3. Save the request to a database.

    // Mock delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, message: "Request received successfully." };
  });
