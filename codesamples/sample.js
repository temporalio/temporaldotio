async function main(userId) {
  const intervals = [1, 7, 30]; // Nag user until giving up
  for (const interval of intervals) {
    await sleep(interval * DAYS);
    await sendEmailActivity(interval, userId); // automatic timeouts + retries
  }
  // we can also signal or cancel the workflow as needed
}
