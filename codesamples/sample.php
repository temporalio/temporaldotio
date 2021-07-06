public function main(string $userID) {
    $intervals = array(1, 7, 30);
    foreach ($intervals as &$interval) {
        yield Workflow::timer($interval * DAYS); // sleep for days!
        yield $this->user->sendEmail($userID); // timeouts + retries!
    }
    // we can also signal or cancel the workflow as needed
}
