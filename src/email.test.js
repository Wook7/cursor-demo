import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractEmails, isValidEmail, getValidEmails, normalizeEmail } from './email.js';

test('extractEmails returns emails from users', () => {
  const users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ];
  assert.deepEqual(extractEmails(users), ['john@example.com', 'jane@example.com']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepEqual(extractEmails(null), []);
  assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail validates email format', () => {
  assert.equal(isValidEmail('john@example.com'), true);
  assert.equal(isValidEmail('user+tag@example.com'), true);
  assert.equal(isValidEmail('user.name@sub.example.co.uk'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('@example.com'), false);
  assert.equal(isValidEmail('user @example.com'), false);
  assert.equal(isValidEmail('a'.repeat(250) + '@b.com'), false);
});

test('getValidEmails returns only valid emails', () => {
  const users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Bad', email: 'not-an-email' },
    { name: 'Jane', email: 'jane@example.com' },
  ];
  assert.deepEqual(getValidEmails(users), ['john@example.com', 'jane@example.com']);
});

test('getValidEmails filters out missing, null, and empty emails', () => {
  const users = [
    { name: 'Valid', email: 'valid@example.com' },
    { name: 'Missing' },
    { name: 'Null', email: null },
    { name: 'Empty', email: '' },
    { name: 'Undefined', email: undefined },
  ];
  assert.deepEqual(getValidEmails(users), ['valid@example.com']);
});

test('getValidEmails returns empty array for non-array input', () => {
  assert.deepEqual(getValidEmails(null), []);
  assert.deepEqual(getValidEmails(undefined), []);
});

test('normalizeEmail trims whitespace and lowercases', () => {
  assert.equal(normalizeEmail('  John@Example.COM  '), 'john@example.com');
  assert.equal(normalizeEmail('USER+TAG@EXAMPLE.COM'), 'user+tag@example.com');
});

test('normalizeEmail returns empty string for non-string input', () => {
  assert.equal(normalizeEmail(null), '');
  assert.equal(normalizeEmail(undefined), '');
  assert.equal(normalizeEmail(123), '');
});
