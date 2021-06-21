Project Todo notes

- project setup 
  - eslint (configure eslint to drive prettier)
  - jest
- implement most basic solution 
- implement basic error handling
- implement more production like solution
  - layer architecture 
- investigate TypeScript

NOTES
 - implement controllers and service,
    - this way the controllers is just handling the final response
    - this is also a well know pattern
    - could have left in the controller given its such a small example (for now)
    - could use dependency injection to pass services and integration into each other, this would make testing a little easier (less need for mocking), but of course complicate the scenario further.
- a couple of small TypeScript issues remaining but ran out of time
- classes in some places might make an improvement