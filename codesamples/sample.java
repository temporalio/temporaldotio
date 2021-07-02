public class SampleWorkflow {
  public static void main(String[] args) {
    // ...
    WorkflowClient.start(workflow::initWorkflow);
    Workflow.sleep(Duration.ofDays(30)); // sleep for 30 days!
    workflow.waitForName("UserInteraction"); // block on signals from users!
    workflow.sendEmail(userId) // timeouts + retries!
  }
  // Scale to Millions + Write Tests + Encrypt Data + Migrate Versions + ... 
}