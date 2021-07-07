public static class RemindUserWorkflowImpl implements RemindUserWorkflow {
    public void EmailUser(string userId, int[] intervals) {
      // send reminder emails, e.g. after 1, 7, and 30 days
      for (int interval: intervals) {   
        Workflow.sleep(Duration.ofDays(interval)); // Sleep for days!
        activities.sendEmail(interval, userId)     // Activities retried by default!
      }
      // easily modifiable to cancel if the user does an action
    }
}