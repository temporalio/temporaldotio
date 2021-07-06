func mainWorkflow(ctx workflow.Context, userId string) error {
	// ...
	intervals := [3]int{1, 7, 30}
	for _, i := range intervals {
		time.Sleep(i * time.Day)                                           // sleep for days!
		_ = workflow.ExecuteActivity(ctx, SendEmailActivity).Get(ctx, nil) // timeouts and retries!
	}
	// we can also signal or cancel the workflow as needed
}