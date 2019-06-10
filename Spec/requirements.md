
# Design Requirements

## Requirements

Our software requirements are broken into a few different categories:

### Sign Up / Log In

* The user must be able to create a group. COMPLETE
* The user must be able to sign up with an existing group. COMPLETE
* Users with an existing account must be able log in. COMPLETE
* The signup and login page will consist of a group name, username, email, and valid password COMPLETE
* The group name created must be within 50 UTF-8 characters. COMPLETE
* Group names must be unique across the whole system. COMPLETE
    * REVISION: Users signing up with the same group name will be added to the same group.
* Software must notify user if their inputted group name is already taken. COMPLETE
    * REVISED: Users signing up with the same group name will be added to the same group.
* Software must prompt user to input a new group name if their inputted group name is already taken INCOMPLETE
* The email must be in the format __@__.__ COMPLETE
* The username created must be unique within the group. COMPLETE
* The username created must be within 50 UTF-8 characters COMPLETE
* Software must only accept passwords with at least six alphanumeric characters. COMPLETE
* If the user tries to join a group, it must already exist. COMPLETE
* The application must authenticate users and persist data COMPLETE
* The application will show the user a dashboard after signup/login COMPLETE

### Roommates / Users

* A roommate must only have the option to be deleted by themself IMPOSSIBLE
    * JUSTIFICATION: The complexity of using FireStore rather than FireBase lead us to difficulties that were hard to resolve. We gave read and write access to all users rather than special permissions for one user.
* A roommate must be logged out upon deletion COMPLETE
* A roommate must be removed from their respective group upon deletion COMPLETE
* A roommate must be able to be assigned to chores COMPLETE
* A roommate must be able to assign chores to others in the same group COMPLETE

### Chores

* A user must be able to create a custom chore by using a text field that is less
than 50 UTF-8 characters for the name of the chore COMPLETE
* A user must be be able to select the date the chore needs to be done COMPLETE
* A user must be able to pick which roommate(1) to assign the chore to COMPLETE
* A user must be able to complete a chore by clicking a chore card, then clicking
the "complete" checkbox COMPLETE
    * REVISED: Users click on the checkmark and then verify completion
* The system must display a history of all chores. COMPLETE
* All chores associated with a roommate must be deleted if that roommate is deleted COMPLETE
* A user must be able to delete any existing incomplete chore COMPLETE
* A chore must ask for confirmation from the user deleting it if they're sure they want to delete this chore COMPLETE

### Chore Card

* A list of chore cards must be displayed to the user COMPLETE
* List of chore cards must be ordered based on which chore is due soonest IMPOSSIBLE
    * JUSTIFICATION: FireStore uses many different asynchronous calls. Because of this we had some components that broke as some things rendered before others. Sorting by the soonest due chore required us to do multiple queries, such by house name, then by users, then by due soonest. This was not able to be accomplished so we sorted instead by chore count: how many chores a roommate has.
* A list of chore cards must be listed below the roommate its assigned to COMPLETE
