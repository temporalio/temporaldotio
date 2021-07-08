// workflows/remind-user.js
async function main(userId, intervals) {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for (const interval of intervals) {
    await sleep(interval * DAYS); // Sleep for days!
    await activities.sendEmail(interval, userId); // Activities retried by default!
  }
  // Easily modifiable to cancel if the user unsubscribes
}
