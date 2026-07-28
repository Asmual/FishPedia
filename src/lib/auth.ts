import dns from 'node:dns';
import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import clientPromise from './mongodb';

try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (error) {
  console.warn('DNS servers set warning:', error);
}

const client = await clientPromise;
const db = client.db('FishPedia');

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'buyer', // Default Role: buyer
        required: false,
      },
    },
  },
});