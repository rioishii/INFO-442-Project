# Design Specification

## Problem
&nbsp;&nbsp;&nbsp;&nbsp;When living in a shared spaces, it is often difficult to manage tasks for house chores. What becomes of this is an unfair division of tasks. Additionally, some shirk their responsibilities onto other roommates who cannot tolerate dirty dishes, not vacuuming common space, and taking out trash. Since the days in which people have been living with one another, these struggles have always been present. It is no wonder that college students, who often rent out or dorm with strangers or acquaintances, get their fair share of arguments relating to unfinished chores.

&nbsp;&nbsp;&nbsp;&nbsp;[A study done by Arizona State University](https://phys.org/news/2013-11-division-household-chores-mess-tolerance.html) cites that the division of labor is due to the fact that people have differing levels of tolerance threshold. The higher one's tolerance threshold, the longer they'll hold off on completing a task until it reaches a crisis points. Oppositely, the lower one's threshold means they will likely take action before others in doing a chore. Another factor that made undone chores a burden was a student's living situation, which heightened the severity of the problem.

&nbsp;&nbsp;&nbsp;&nbsp;The living situation during college is a very tense environment. As most students entering a university setting are likely to live at local dorms, it can be seen that chores piled up is likely to cause quarrels. Sara Sanchez, who [studied the experiences of Freshman year living arrangements](https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1092&context=cehsedaddiss), found that roommates were most of the negative experiences during that year. She notes that in one instance that one roommate had lashed out to the other about doing chores, and quickly ruined their relationship for the rest of the year.

&nbsp;&nbsp;&nbsp;&nbsp;As one can see, division of labor is a problem in a collegiate environment. Unfinished chores can build up, and subsequently diminish connections with others. Everyone has their own varying levels of a tolerance threshold that does not mesh well with those they live with.

## Solution
&nbsp;&nbsp;&nbsp;&nbsp;Our solution will be in the form of a responsive web application in order to appeal to a diverse audience. This will include popular operating systems such as Android, iOS, and Windows. This web application will take on modern design principles, such as the mobile-first design approach, to ensure that this application caters towards accessibility and ease of access.

### Functionality
&nbsp;&nbsp;&nbsp;&nbsp;This section goes over functionality inside of this application. This will go into detail about what the function is and how the user will interact to achieve this function.

* chore list
    * Important to each individual user. Helps them stay organized and stay on top of their own chore.
    * It will be a listview, with every single chore the person has to do. It will say the name of the chore and when it's due. It'll be ordered by priority, such as when the chore is due to be finished.
    * When opening the listview, the chores that need to be done immediately are shown first. If the user scrolls up, they'll see chores that have been done before.
    * Chores have a strike-through through their text and are made into a shade lighter than the color that represents the person.
* dashboard
    * This will be the core way to have an overview of all chores. This will help users visualize the distribution of chores across a shared living space.
    * The view of this calendar will have weekly format because users naturally see the chores they want to do in a weekly. It doesn't make sense to see chores in a monthly format, since that would show the week you have to do something. This is opposed to the week view, which shows the day in which you have to do something.
    ![dashboard mockup](./img/dashboard.jpg)
    * The calendar will be color-coded based on the person, and if they finish a chore then the color is shaded a lighter color.
    * The user will be able to delete and add roommates through the dashboard after clicking the "edit" button
    ![adding and deleting roommmates](./img/deleteAddRoommate.jpg)
    * The user will be able to edit a chore through the dashboard
    ![editing chore](./img/editTask.jpg)
* create and assign chore
    * You should be able to create a chore from anywhere on the web application.
    * The chore will be able to be assigned to a single or multiple people.
    * If assigning a chore to multiple people, the user will have the ability to choose between rotating the roommate that has to do that chore.
    * When assigning a task to someone, the form will give the option to assign the task anonymously to have the creator be more comfortable in giving out tasks.
    * This will a button floating on the webpage that'll be intuitive to the user, where the button will be something the user will see easily.
    * When adding a chore, a modal pops up over the dashboard with information the user must fill out.
    ![modal](./img/modal.jpg)
* filter
    * This will have the ability to select a view of completed chores incompleted chores, and chores responsible to a selected individual.
    * The filters will be a checkbox menu shown on the left of the screen.

### Points of Interaction
&nbsp;&nbsp;&nbsp;&nbsp; This section will go over the main points of interaction a user will go over to achieve their goals in this application.

* Add/delete roommates
* Create task
    * Create name of chore
    * Assign frequency level (weekly)
    * Assign to days of the week
    * Assign to people
    * Rotate/Share tasks
* Edit task
    * Same subinteractions as create task
* Delete task
* Mark task as complete


### Errors
&nbsp;&nbsp;&nbsp;&nbsp;There will be few errors that can happen within our software since it is a minimum viable product. Here are instances of errors and how we'll handle it:

| Error                | Handling
| -------------        |:-------------:
| Blank task made      | Input does not allow submission until all areas are filled
| User deletes chore assigned to them | The only people that can delete a chore is the one who made it
| Duplicate tasks made | Input does not allow submission until valid entry is made