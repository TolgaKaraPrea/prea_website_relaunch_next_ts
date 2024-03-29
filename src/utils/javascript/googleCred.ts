export const bqSecrets = {
  type: process.env.GOOGLE_CRED_TYPE,
  project_id: process.env.GOOGLE_CRED_PROJECT_ID,
  private_key_id: process.env.GOOGLE_CRED_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_CRED_PRIVATE_KEY,
  client_email: process.env.GOOGLE_CRED_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CRED_CLIENT_ID,
  auth_uri: process.env.GOOGLE_CRED_AUTH_URI,
  token_uri: process.env.GOOGLE_CRED_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_CRED_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CRED_CLIENT_X509_CERT_URL
};
