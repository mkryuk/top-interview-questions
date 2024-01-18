export function numUniqueEmails(emails: string[]): number {
  let emailsSet = new Set<string>();
  for (const email of emails) {
    let atIndex = email.indexOf("@");
    let plusIndex = email.indexOf("+");
    let index = plusIndex === -1 ? atIndex : plusIndex;
    let name = email.substring(0, index);
    name = name.replace(/\./g, "");
    emailsSet.add(name + email.substring(atIndex));
  }
  return emailsSet.size;
}
