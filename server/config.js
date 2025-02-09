'use strict';

module.exports = {
  // App name
  appName: 'Rocket Rides',

  // Public domain of Rocket Rides
  publicDomain: 'http://localhost:3000',

  // Server port
  port: 3000,

  // Secret for cookie sessions
  secret: 'ca_GJ5rFG4WcZKHi7WDbLFhNDsdSRpTnfbe',

  // Configuration for Stripe
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Connect Settings: https://dashboard.stripe.com/account/applications/settings
  stripe: {
    secretKey: 'sk_test_Mkg1sff5R8Gr6u3dQgL8d7Mb007uWMrPwD',
    publishableKey: 'pk_test_sMt2yxi5g8d7iMaGFPWy9Yak00Q3EfI84c',
    apiVersion: '2022-08-01'
  },

  // Configuration for MongoDB
  mongoUri: 'mongodb+srv://alex:9SmNh69MesJMFr3s@cluster0.pgaoae3.mongodb.net/peopledroppers',

  // Configuration for Google Cloud (only useful if you want to deploy to GCP)
  gcloud: {
    projectId: 'YOUR_PROJECT_ID'
  }
};
