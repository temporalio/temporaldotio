public class SampleWorkflow {
  public static void main(String[] args) {
    // ...
    WorkflowClient.start(workflow::initWorkflow);
    int intervals[] = { 1, 7, 30 };
    for (int i : intervals) {   
      Workflow.sleep(Duration.ofDays(i)); // sleep for days!
      workflow.sendEmail(userId) // automatic timeouts + retries!
    }
    // we can also signal or cancel the workflow as needed
  }
}