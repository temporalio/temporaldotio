class RemindUserWorkflow implements RemindUserWorkflowInterface {
  public function emailUser($userID, $intervals) {
      // send reminder emails, e.g. after 1, 7, and 30 days
      foreach ($intervals as &$interval) {
          Workflow::timer($interval * DAYS);                  // Sleep for days!
          $this->userActivity->sendEmail($interval, $userID); // Activities retried by default!
      }
      // easily modifiable to cancel if the user does an action
  }
}