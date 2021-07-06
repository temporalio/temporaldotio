async function main(userId) {
  const intervals = [1, 7, 30]; // Nag user until giving up
  for (const interval of intervals) {
    await sleep(interval * DAYS);
    await activities.sendUserRetentionEmail(interval, userId); // automatic timeouts + retries
  }
  // we can signal or cancel the workflow if the user does an action
}
