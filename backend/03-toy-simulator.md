## Toy Simulator

#### Tasks
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface.

* The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

Create an application that can read in commands of the following form -
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
The origin (0,0) can be considered to be the SOUTH WEST most corner.
The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
MOVE will move the toy robot one unit forward in the direction it is currently facing.
LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
REPORT will announce the X,Y and orientation of the robot.
A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
Provide test data to exercise the application.
Constraints:
The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
Any move that would cause the robot to fall must be ignored.

#### Input
=> first scenario
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH

=> second scenario
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST

=> third scenario
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH

#### Testing Criteria
Advice:
- Choose whatever language you’re comfortable with
- The input/output format is not important, do whatever feels reasonable
- Make sure you include tests
- We expect the see code which you would be happy to put in production
- If something is not clear don’t hesitate to ask or just make an assumption and go with it
Criteria:
- Is the code functional:
  - Are there instructions to setup/install?
  - Does it meet the minimum requirements in the specification?
  - Does it return appropriate results in other circumstances?
- Is the code readable:
  - Sensible naming of variables and methods?
  - Sensible method sizes (<20 lines)?
  - Low complexity methods?
- Is the code tested:
  - Units tests for at least major classes?
  - End to end functional or integration tests?
