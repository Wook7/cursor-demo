// WHATWG HTML Standard: valid e-mail address (ABNF from RFC 5322 §3.2.3 atext + RFC 1034 labels).
// https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// RFC 5321 §4.5.3.1.3 — 최대 길이 254 octets.
const MAX_EMAIL_LENGTH = 254;

/**
 * 사용자 배열에서 이메일 주소만 추출한다.
 * @param {unknown} users - 사용자 객체 배열
 * @returns {string[]} 이메일 주소 배열
 */
export function extractEmails(users) {
  if (!Array.isArray(users)) {
    return [];
  }
  return users.map((user) => user.email);
}

/**
 * 이메일 주소 형식이 유효한지 검사한다.
 * @param {unknown} email - 검사할 이메일 주소
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
  if (typeof email !== 'string' || email.length === 0 || email.length > MAX_EMAIL_LENGTH) {
    return false;
  }
  return EMAIL_REGEX.test(email);
}

/**
 * 사용자 배열에서 유효한 이메일만 추출한다.
 * @param {unknown} users - 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 주소 배열
 */
export function getValidEmails(users) {
  return extractEmails(users).filter(isValidEmail);
}

/**
 * 이메일 주소를 비교·저장용으로 정규화한다 (앞뒤 공백 제거, 소문자 변환).
 * @param {unknown} email - 정규화할 이메일 주소
 * @returns {string} 정규화된 이메일. 문자열이 아니면 빈 문자열
 */
export function normalizeEmail(email) {
  if (typeof email !== 'string') {
    return '';
  }
  return email.trim().toLowerCase();
}
