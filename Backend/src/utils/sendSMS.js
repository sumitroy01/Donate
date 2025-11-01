import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

/**
 * Send OTP via SMS
 * @param {string} to - recipient phone number (+91xxxx for India)
 * @param {string} otp - the OTP code
 */
export const sendOTPSMS = async (to, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
      from: process.env.TWILIO_PHONE,
      to,
    });
    console.log(`OTP SMS sent to ${to}`);
  } catch (error) {
    console.error("Error sending OTP SMS:", error);
    throw new Error("Failed to send OTP SMS");
  }
};
