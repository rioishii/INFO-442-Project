
# Design Requirements

## Requirements

Our software requirements are broken into a few different categories:

### Dashboard/General

* This application will be modeled for desktop
* The user will be prompted for signup or login when first opening this application
* The signup and login page will consist of a group name, username, email, and valid password
* The password the user creates will need to be at least six alphanumeric characters
* The groups will be created uniquely so that each house can have their own set of respective roommates
* The application will prompt the user for a new group name if the filled out group name is taken
* The application will authenticate users and persist data using FireBase
* The application will show the user a dashboard after signup/login

### Roommates / Users

* A roommate will have a labelled name upon creation
* A user will be able to add a roommate by entering edit mode, and typing a name less than 50 UTF-8 characters into the "add roommate box"
* A roommate will not be allowed duplicate names upon creation. If a duplicate name is filled out, the user will be alerted to write a new name
* A roommate is a user and will be able to create, edit, complete, and delete chores. This is mentioned further in the chore section
* A roommate will have the ability to be assigned to chores as well as assign chores to others
* A roommate will have their own corresponding color, chore list, and section on the leaderboard
* A roommate will be able to be deleted by clicking the minus button next to the roommate's name in edit mode

### Chores

* A user will be able to create a custom chore by using a text field that is less than 50 UTF-8 characters for the name of the chore
* A user will be be able to select which days of the week the chore needs to be done
* A user will be able to select the frequency of how often they must do the chore they create. This will either be weekly or monthly. If the user does not select any radio box, then the "frequency" attribute does not apply to this chore
* A user will be able to see all the roommates with checkboxes next to each roommate to select who will be assigned the chore
* If multiple roommates are assigned a chore, a user will be able to choose between cycling through the group of assigned roommates (ex. roommate #1 does chore, then roommate #2 does chore next, and so on) or complete the chore as a group (ex. assign all roommates to do it together.) This will be radio button to select between the two options
* A user will be able to complete a chore by clicking a chore card, then clicking the "complete" checkbox
* The system will display a history of all chores, completed or not. This history will be persisted using FireBase as its backend service. The custom rules for FireBase will be that every user will be allowed read access to this history page
* All chores associated with a roommate will be deleted if that roommate is deleted
* A chore will be able to be deleted by clicking the chore card, then clicking the "delete" button"
* A chore can be deleted by everyone
* A chore will ask for confirmation from the user deleting it if they're sure they want to delete this chore

### Chore Card

* A list of chore cards will be displayed alphabetically to the user
* A list of chore cards will be listed below the roommate its assigned to

### Progression Visuals

* A horizontal bar graph will be shown to a user upon opening of a progress page
* The horizontal bar graph will be labelled with an x-axis with labels for completed, late, and missed chores
* The horizontal bar graph will have green represent completed chores
* The horizontal bar graph will have yellow represent late chores
* The horizontal bar graph will have red represent missed chores