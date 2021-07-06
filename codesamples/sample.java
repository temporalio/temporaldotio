
public static class MainWorkflowImpl implements MainWorkflow {
    public void PollUser(String[] args) {
      int intervals[] = { 1, 7, 30 };
      for (int interval: intervals) {   
        Workflow.sleep(Duration.ofDays(interval)); // sleep for days!
        activities.sendUserRetentionEmail(interval, userId) // automatic timeouts + retries!
      }
      // we can signal or cancel the workflow if the user does an action
    }
}