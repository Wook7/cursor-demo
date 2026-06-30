import { extractEmails } from './email.js';

console.log('hello cursor');

const users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
];

console.log(extractEmails(users));
