Project Todo and notes
## TODO
- project setup 
  - eslint (configure eslint to drive prettier)
  - jest
- implement most basic solution 
- implement basic error handling
- implement more production like solution
  - layer architecture 
- investigate TypeScript

## NOTES
 - implement controllers and service;
    - could have left everything in the controller given its such a small example, but good to separate concerns before getting to large and complex (i know, never going to happen here!)
    - controllers are now just really responsible for send back response/error
    - services are the place for business logic
    - common pattern
    - could use dependency injection to pass services and integration into each other, this would make testing a little easier (less need for mocking) and the services more reusable and composable, but of course this would complicate the scenario further.
- a couple of small TypeScript issues remaining but ran out of time
- classes in some places might make an improvement