class MainWorkflow implements MainWorkflowInterface {
    private bool $value = false;
    public function main(string $userID) {
        yield Workflow::await(fn()=> $this->value); // wait for $value to become true
        yield Workflow::timer(2592000); // sleep for 30 days!
        yield $this->user->sendEmail($userID); // timeouts + retries!
    }

    public function userSignal(bool $value) {
        $this->value = $value; // receive signals from users!
    }
<!-- Scale to Millions + Write Tests + Encrypt Data + Migrate Versions + ...  -->
}
