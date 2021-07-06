func mainWorkflow(ctx workflow.Context, userId string) error {
	// ...
	intervals := [3]int{1, 7, 30}
	for _, interval := range intervals {
		time.Sleep(interval * time.Day)                                                           // sleep for days!
		_ = workflow.ExecuteActivity(ctx, SendUserRetentionEmail, userId, interval).Get(ctx, nil) // timeouts and retries!
	}
	// we can signal or cancel the workflow if the user does an action
}
