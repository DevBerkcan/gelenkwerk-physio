import { BookingEmailData } from "@/types";
import { SITE_CONFIG, CONTACT } from "@/config/site";

/**
 * Generates the HTML email body for a customer booking confirmation.
 */
export function buildCustomerEmail(data: BookingEmailData): string {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fdfbf7; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #1a8a7d, #14695f); padding: 32px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 28px; margin: 0 0 8px;">Gelenkwerk</h1>
        <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0; letter-spacing: 2px;">PHYSIOTHERAPIE & MASSAGE</p>
      </div>

      <div style="padding: 32px;">
        <h2 style="color: #1e2a2a; font-size: 22px; margin: 0 0 8px;">Buchungsbestätigung</h2>
        <p style="color: #5a6b6b; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
          Guten Tag ${data.customerName},<br><br>
          Vielen Dank für Ihre Buchung. Hier sind Ihre Termindetails:
        </p>

        <div style="background: #e8f5f2; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #5a6b6b; font-size: 14px;">Leistung</td>
              <td style="padding: 8px 0; color: #1e2a2a; font-size: 14px; font-weight: 600; text-align: right;">${data.serviceName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5a6b6b; font-size: 14px; border-top: 1px solid rgba(26,138,125,0.15);">Datum</td>
              <td style="padding: 8px 0; color: #1e2a2a; font-size: 14px; font-weight: 600; text-align: right; border-top: 1px solid rgba(26,138,125,0.15);">${data.date}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5a6b6b; font-size: 14px; border-top: 1px solid rgba(26,138,125,0.15);">Uhrzeit</td>
              <td style="padding: 8px 0; color: #1e2a2a; font-size: 14px; font-weight: 600; text-align: right; border-top: 1px solid rgba(26,138,125,0.15);">${data.time} Uhr</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #5a6b6b; font-size: 14px; border-top: 1px solid rgba(26,138,125,0.15);">Dauer</td>
              <td style="padding: 8px 0; color: #1e2a2a; font-size: 14px; font-weight: 600; text-align: right; border-top: 1px solid rgba(26,138,125,0.15);">${data.duration}</td>
            </tr>
            ${data.price ? `
            <tr>
              <td style="padding: 8px 0; color: #5a6b6b; font-size: 14px; border-top: 1px solid rgba(26,138,125,0.15);">Preis</td>
              <td style="padding: 8px 0; color: #1a8a7d; font-size: 14px; font-weight: 700; text-align: right; border-top: 1px solid rgba(26,138,125,0.15);">${data.price}</td>
            </tr>` : ""}
          </table>
        </div>

        <div style="background: #f7f4ef; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <p style="color: #5a6b6b; font-size: 13px; margin: 0; line-height: 1.6;">
            📍 <strong>${CONTACT.address.street}, ${CONTACT.address.zip} ${CONTACT.address.city}</strong><br>
            📞 ${CONTACT.phone[0]}
          </p>
        </div>

        <p style="color: #5a6b6b; font-size: 13px; line-height: 1.6;">
          Bei Fragen oder zur Terminänderung erreichen Sie uns telefonisch unter ${CONTACT.phone[0]}.<br><br>
          Freundliche Grüsse<br>
          <strong>Ihr Gelenkwerk-Team</strong>
        </p>
      </div>

      <div style="background: #1a2626; padding: 20px; text-align: center;">
        <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">
          © ${new Date().getFullYear()} ${SITE_CONFIG.name} · ${CONTACT.address.street}, ${CONTACT.address.zip} ${CONTACT.address.city}
        </p>
      </div>
    </div>
  `.trim();
}

/**
 * Generates the HTML email body for the practice notification.
 */
export function buildPracticeNotificationEmail(data: BookingEmailData): string {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a8a7d; padding: 20px; border-radius: 12px 12px 0 0;">
        <h2 style="color: #ffffff; font-size: 20px; margin: 0;">🔔 Neue Buchung eingegangen</h2>
      </div>

      <div style="background: #ffffff; padding: 24px; border: 1px solid #e8f5f2; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">Patient</td><td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.customerName}</td></tr>
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">E-Mail</td><td style="padding: 10px 0; font-size: 14px; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.email}</td></tr>
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">Telefon</td><td style="padding: 10px 0; font-size: 14px; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.phone}</td></tr>
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">Leistung</td><td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.serviceName}</td></tr>
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">Datum</td><td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.date}</td></tr>
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">Uhrzeit</td><td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.time} Uhr</td></tr>
          <tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px; border-bottom: 1px solid #e8f5f2;">Dauer</td><td style="padding: 10px 0; font-size: 14px; text-align: right; border-bottom: 1px solid #e8f5f2;">${data.duration}</td></tr>
          ${data.message ? `<tr><td style="padding: 10px 0; color: #5a6b6b; font-size: 14px;">Nachricht</td><td style="padding: 10px 0; font-size: 14px; text-align: right;">${data.message}</td></tr>` : ""}
        </table>
      </div>
    </div>
  `.trim();
}
