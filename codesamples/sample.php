public function main(string $userID) {
    $intervals = array(1, 7, 30);
    foreach ($intervals as &$interval) {
        yield Workflow::timer($interval * DAYS); // sleep for days!
        yield $this->user->sendEmail($interval, $userID); // timeouts + retries!
    }
    // we can signal or cancel the workflow if the user does an action
}
