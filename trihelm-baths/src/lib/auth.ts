const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

export async function verifyAdmin(email: string, password: string) {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}
