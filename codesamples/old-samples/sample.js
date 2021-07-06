// define interactionSignal handler in Express, Next.js, Hapi, Koa, Fastify, etc...
export async function mainWorkflow(userId) {
  const userInteracted = await Promise.race([
    interactionSignal, // receive signals from users!
    sleep(30 * DAY) // sleep for 30 days!
  ]);
  if (!userInteracted) {
    await sendEmailActivity(userId); // timeouts + retries!
  }
}
// Scale to Millions + Write Tests + Encrypt Data + Migrate Versions + ...
