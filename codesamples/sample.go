func RemindUserWorkflow(ctx workflow.Context, userId string, intervals []int) error {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for interval := range intervals {
    _ = workflow.Sleep(interval * time.Day)                            // Sleep for days!
    _ = workflow.ExecuteActivity(ctx, SendEmail, userId).Get(ctx, nil) // Activities are retried by default!
  }
  // Easily modifiable to cancel if the user unsubscribes
}
