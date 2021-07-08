class RemindUserWorkflow implements RemindUserWorkflowInterface {
  public function emailUser($userID, $intervals) {
      // Send reminder emails, e.g. after 1, 7, and 30 days
      foreach ($intervals as &$interval) {
          yield Workflow::timer($interval * DAYS);                  // Sleep for days!
          yield $this->userActivity->sendEmail($interval, $userID); // Activities retried by default!
      }
      // Easily modifiable to cancel if the user unsubscribes
  }
}