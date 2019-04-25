
# Design Requirements

## Requirements

Our software requirements are broken into a few different categories:

### Dashboard/General

* This application will be modeled for desktop
* Upon first opening this application, the user will be prompted to either sign up or login. The signup and login page consists of a group name, username, email, and valid password 
  * The password requires at least six alphanumeric characters
  * The group name is needed so that multiple different houses can use this app and share chores with their respective house
  * If a group name is taken, the user will be prompted to type in a new name
* User authentication and data retention will be done using Firebase.
* After login, the user will see a dashboard which consists of the main bulk of this application

### Roommates

* Roommate is defined as:
  * A member that is labelled with a name.
  * Able to create, edit, complete, and delete chores. (Mentioned in chore section)
  * Able to be assigned to and assign others to chores.
  * Has their own corresponding color, chore list, and section on the leaderboard

### Chores
* Add chores
  * Create custom chore name through using a text field that is less than 50 UTF-8 Characters
  * Choose from tick boxes which days of the week to perform the task
  * Be able to select frequency from radio boxes if they want frequency, (weekly, monthly)
  * Display roommates with checkboxes to select which roommate will be assigned the chores
  * If multiple roommates are assigned, radio button appears to choose between:
    * cycling through the group of assigned roommates (Ex. Roommate1 did chore last, Roommate2 does it next)
    * completing the chore as a group (Ex. Assigned roommates do it together)
* Complete a chore by clicking the chore card, then clicking the complete checkbox.
* Must keep track of all chores, completed or not. This history will be persisted using FireBase as its backend service. The custom rules for FireBase will be that every user will be allowed read access and write access
* Adding a roommate:
  * By entering edit mode, and typing a name less than 50 UTF-8 characters into the “add roommate box”
  * No duplicate names are allowed when adding a roommate. A widow alert will be shown if a duplicate is entered, and the user will be prompted to write a new name
* Delete roommates by clicking the minus button next to the roommate's name in edit mode
* Delete chores attached to a roommate when they are deleted. 
* Delete a chore by clicking the chore card, then clicking the delete button. Chores can be deleted by everyone. For safety measures, a popup will open asking if the user is sure about deleting this chore

### Chore Card

* Each roommate will have their names displayed alphabetically.
* Under each name, the chores assigned to the roommate will be listed in cards below their name

### Progression Visuals

* Horizontal percent bar graphs showing tasks completed, late, and missed. Represented with green for complete, yellow for late, and red for missed