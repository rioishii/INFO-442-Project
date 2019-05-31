
# Design Requirements

## Requirements

Our software requirements are broken into a few different categories:

### Sign Up / Log In

* The user must be able to create a group.
* The user must be able to sign up with an existing group.
* Users with an existing account must be able log in.
* The signup and login page will consist of a group name, username, email, and
valid password
* The group name created must be within 50 UTF-8 characters.
* Group names must be unique across the whole system.
* Software must notify user if their inputted group name is already taken.
* Software must prompt user to input a new group name if their inputted group
name is already taken
* The email must be in the format __@__.__
* The username created must be unique within the group.
* The username created must be within 50 UTF-8 characters
* Software must only accept passwords with at least six alphanumeric characters.
* If the user tries to join a group, it must already exist.
* The application must authenticate users and persist data
* The application will show the user a dashboard after signup/login

### Roommates / Users

* A roommate must only have the option to be deleted by themself
* A roommate must be logged out upon deletion
* A roommate must be removed from their respective group upon deletion
* A roommate must be able to be assigned to chores
* A roommate must be able to assign chores to others in the same group

### Chores

* A user must be able to create a custom chore by using a text field that is less
than 50 UTF-8 characters for the name of the chore
* A user must be be able to select the date the chore needs to be done
* A user must be able to pick which roommate(1) to assign the chore to
* A user must be able to complete a chore by clicking a chore card, then clicking
the "complete" checkbox
* The system must display a history of all chores.
* All chores associated with a roommate must be deleted if that roommate is
deleted
* A user must be able to delete any existing incomplete chore
* A chore must ask for confirmation from the user deleting it if they're sure they
want to delete this chore

### Chore Card

* A list of chore cards must be displayed to the user
* List of chore cards must be ordered based on which chore is due soonest
* A list of chore cards must be listed below the roommate its assigned to