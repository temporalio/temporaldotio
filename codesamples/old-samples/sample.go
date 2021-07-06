func mainWorkflow(ctx workflow.Context, userId) error {
		// ...
		selector.AddReceive(signalChannel, func(c workflow.ReceiveChannel, more bool) {
				c.Receive(ctx, &signalVal) // receive user signals!
		})
		timerFuture := workflow.NewTimer(childCtx, 30 * time.Day) // sleep for 30 days!
		selector.AddFuture(timerFuture, func(f workflow.Future) {
				_ = workflow.ExecuteActivity(ctx, SendEmailActivity).Get(ctx, nil) // timeouts and retries!
		})
		// Scale to Millions + Write Tests + Encrypt Data + Migrate Versions + ... 
}