async function remindUserWorkflow(userId, intervals) {
  // send reminder emails, e.g. after 1, 7, and 30 days
  for (const interval of intervals) {
    await sleep(interval * DAYS); // Sleep for days!
    await activities.sendEmail(interval, userId); // Activities retried by default!
  }
  // easily modifiable to cancel if the user performs an action
}
