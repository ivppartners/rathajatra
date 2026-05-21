export const prerender = false; // SSR endpoint for real-time contact form processing

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Prašome užpildyti visus formos laukus." }), 
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Basic email format check
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

    // Server-side logging of email content
    console.log(`[Rathajatra Email API] New message from: ${name} <${email}>`);
    console.log(`Message body: ${message}`);

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
