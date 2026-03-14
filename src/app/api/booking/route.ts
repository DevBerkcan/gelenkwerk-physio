import { NextRequest, NextResponse } from "next/server";
import { buildCustomerEmail, buildPracticeNotificationEmail } from "@/lib/email-templates";
import { BookingEmailData } from "@/types";

/**
 * POST /api/booking
 *
 * Processes a new booking:
 * 1. Validates the request payload
 * 2. Sends a confirmation email to the customer
 * 3. Sends a notification email to the practice
 * 4. Returns the booking confirmation
 *
 * In production, configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * in your environment variables.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      bookingId,
      service,
      duration,
      price,
      date,
      time,
      customerName,
      email,
      phone,
      message,
    } = body;

    // ─── Validation ───
    if (!service || !date || !time || !customerName || !email || !phone) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    const emailData: BookingEmailData = {
      customerName,
      serviceName: service,
      date,
      time,
      duration,
      price,
      phone,
      email,
      message,
    };

    // ─── Send emails ───
    // Uses nodemailer in production. Configure via environment variables.
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER;

    if (smtpConfigured) {
      const nodemailer = require("nodemailer");

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Send customer confirmation
      await transporter.sendMail({
        from: `"Gelenkwerk Physiotherapie" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Buchungsbestätigung – ${service} am ${date}`,
        html: buildCustomerEmail(emailData),
      });

      // Send practice notification
      const practiceEmail =
        process.env.PRACTICE_EMAIL || process.env.SMTP_USER;

      await transporter.sendMail({
        from: `"Buchungssystem" <${process.env.SMTP_USER}>`,
        to: practiceEmail,
        subject: `🔔 Neue Buchung: ${customerName} – ${service} am ${date}`,
        html: buildPracticeNotificationEmail(emailData),
      });

      console.log(`[Booking] Emails sent for booking ${bookingId}`);
    } else {
      // Development fallback: log to console
      console.log("═══════════════════════════════════════════");
      console.log("📧 NEUE BUCHUNG EINGEGANGEN");
      console.log("═══════════════════════════════════════════");
      console.log(`Buchungs-ID:  ${bookingId}`);
      console.log(`Patient:      ${customerName}`);
      console.log(`E-Mail:       ${email}`);
      console.log(`Telefon:      ${phone}`);
      console.log(`Leistung:     ${service}`);
      console.log(`Datum:        ${date}`);
      console.log(`Uhrzeit:      ${time}`);
      console.log(`Dauer:        ${duration}`);
      console.log(`Preis:        ${price}`);
      if (message) console.log(`Nachricht:    ${message}`);
      console.log("═══════════════════════════════════════════");
      console.log(
        "⚠️  SMTP nicht konfiguriert – E-Mails wurden nicht versendet."
      );
      console.log(
        "    Setze SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local"
      );
    }

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Buchung erfolgreich erstellt.",
    });
  } catch (error) {
    console.error("[Booking] Error:", error);
    return NextResponse.json(
      { error: "Buchung konnte nicht verarbeitet werden." },
      { status: 500 }
    );
  }
}
