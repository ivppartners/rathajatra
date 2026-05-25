export const prerender = false; // SSR endpoint for real-time contact form processing

export async function POST({ request }) {
  try {
    // 1. Protection against Denial of Service (DoS) via huge payloads
    const contentLength = parseInt(request.headers.get("content-length") || "0", 10);
    if (contentLength > 10240) { // Limit payload to 10KB
      return new Response(
        JSON.stringify({ message: "Užklausa viršija leistiną dydį (maks. 10KB)." }), 
        {
          status: 413,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // 2. Validate Content-Type
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ message: "Neteisingas užklausos tipas." }), 
        {
          status: 415,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    const body = await request.json();
    const { name, email, message, website } = body;

    // 3. Honeypot check (anti-spam bot protection)
    if (website) {
      // Silently discard spam without throwing an error to confuse the spambot
      return new Response(
        JSON.stringify({ 
          message: "Jūsų žinutė buvo sėkmingai išsiųsta! Netrukus su jumis susisieksime." 
        }), 
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // 4. Validate inputs exist
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Prašome užpildyti visus formos laukus." }), 
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // 5. Input length validation to prevent buffer overflows / DB abuse
    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return new Response(
        JSON.stringify({ message: "Įvesti laukai viršija maksimalų leistiną ilgį." }), 
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // 6. Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Prašome įvesti teisingą el. pašto adresą." }), 
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // 7. Sanitize inputs to prevent Log Injection / Log Splitting
    const safeName = name.replace(/[\r\n]/g, "").substring(0, 100);
    const safeEmail = email.replace(/[\r\n]/g, "").substring(0, 100);
    const safeMessage = message.substring(0, 5000); // Limit message size but preserve formatting

    // Server-side logging of sanitized email content
    console.log(`[Rathajatra Email API] New message from: ${safeName} <${safeEmail}>`);
    console.log(`Message body: ${safeMessage}`);

    // Standard SMTP mock/stub
    // Transporter config and actual mail delivery code would go here:
    // e.g. using nodemailer or resend client.
    
    return new Response(
      JSON.stringify({ 
        message: "Jūsų žinutė buvo sėkmingai išsiųsta! Netrukus su jumis susisieksime." 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("[Rathajatra Email API Error]:", error);
    return new Response(
      JSON.stringify({ message: "Įvyko serverio klaida siunčiant žinutę. Prašome pabandyti vėliau." }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
