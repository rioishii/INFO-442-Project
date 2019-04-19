
# Design Requirements

### Requirements

Software must:

* have functionality to add/delete roommates by clicking a plus button or the minus button next to the roommate's name
* have functionality to add chores
  * with a custom name through using a text field
  * and choose from a checkbox which days of the week to perform the task
  * with a custom frequency using a dropdown menu, specifying if it should repeat weekly, biweekly, etc.
  * and assign roommates to chore using checkboxes
    * if multiple roommates are assigned, radio button appears to choose between
      * cycling through the group of assigned roommates (Ex. Roommate1 did chore last, Roommate2 does it next)
      * completing the chore as a group (Ex. Assigned roommates do it together)
* have functionality to delete chores after clicking on the Chore card
* have leaderboard to show roommates with highest completion rate of chores in descending order
  * displayed with bar charts showing percentage of all completed chores
* include data persistence, where leaving the page will not result in the loss of data history
