func RemindUserWorkflow(ctx workflow.Context, userId string, intervals []int) error {
	// send reminder emails, e.g. after 1, 7, and 30 days
	for _, interval := range intervals {
		time.Sleep(interval * time.Day)                           // Sleep for days!
		_ = ExecuteActivity(ctx, SendEmail, userId).Get(ctx, nil) // Activities are retried by default!
	}
	// easily modifiable to cancel if the user does an action
}
