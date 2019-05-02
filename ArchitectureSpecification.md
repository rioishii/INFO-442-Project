# Architecture Specification

## Signup / Login - Handles Creating or Authenticating a User
* Connections:
  * Inputs: Username, Email, Password, Group Name
  * Outputs: User Object
### Properties
| Name     | Type    | Description                                |
|----------|---------|--------------------------------------------|
| email    | string  | Email of user, stored from user input      |
| username | string  | Name of the user, stored from user input   |
| loggedIn | boolean | True if sign up / login has been completed |

### Functionality
| Name     | Parameters                            | Return      | Behavior                                 |
|----------|---------------------------------------|-------------|------------------------------------------|
| signUp() | string username, string password, string email, string groupName | User Object | Creates user and puts user into database |
| login()  | string username, string password, string groupName        | None        | Logs in authenticated user               |

<br/><br/>
## DayView - Displays the chores that are supposed to be completed by that weekday
* Connections:
  * Inputs: Chore Objects
  * Outputs: None
### Properties
| Name     | Type    | Description                                |
|----------|---------|--------------------------------------------|
| choreList|ArrayList<Chore>|Describes the list of chores passed into this DayView object. This choreList will be manipulated to output information for each chore. A Chore object is a JSON object pulled from the Chore Database|
| dayOfWeek |string|Describes the day of the week this DayView represents|


### Functionality
| Name               | Parameters       | Return | Behavior                                             |
|--------------------|------------------|--------|------------------------------------------------------|
| getDayOfWeek()     | None             | string | Returns what day of the week this DayView represents |
| displayChoreList() | None             | void   | Renders a display of the chores for this day         |
| updateChoreList()  | ArrayList<Chore> | void   | Contacts database to get chores for dayOfWeek        |

<br/><br/>
## User Database - Takes care of storing groups, which users are in which group, and user information
* Connections:
  * Inputs: email, username, password, group
  * Outputs: None
### Properties
| Name     | Type    | Description                                |
|----------|---------|--------------------------------------------|
| - | - | - |


### Functionality
| Name               | Parameters       | Return | Behavior                                             |
|--------------------|------------------|--------|------------------------------------------------------|
| - | - | - | - |

<br/><br/>
## Dashboard - Handles storing the individual components for the user to see
* Connections:
  * Inputs: WeekView, roommate list, chore list, group
  * Outputs: None
### Properties
| Name       | Type                 | Description                                  |
|------------|----------------------|----------------------------------------------|
| roomates   | ArrayList<User>       | Keeps track of roommates within the group. A User object is a JSON object pulled from the User Database |
| group      | string               | Which group this dashboard is displaying for |
| choreCards | ArrayList<ChoreCard> | List of chores in card form to be displayed  |
| week       | weekView             | Keeps track of chores for week               |


### Functionality
| Name                | Parameters                          | Return               | Behavior                                                                           |
|---------------------|-------------------------------------|----------------------|------------------------------------------------------------------------------------|
| makeChoreCards()    | ArrayList<Chore> chores                   | ArrayList<ChoreCard> | Renders display of chore cards, where chore cards show the chore and when it’s due |
| displayChoreLanes() | ArrayList<User> roommates, ArrayList<ChoreCard> choreCards | Void                 | Renders display of roommate lanes and their respective chores                      |

<br/><br/>
## Chore Database - Takes care of storing a chore name, who it’s assigned to, and when it’s due
* Connections:
  * Inputs: group name, chore description, due date, who the chore is assigned to
  * Outputs: None
### Properties
| Name       | Type                 | Description                                  |
|------------|----------------------|----------------------------------------------|
| - | - | - |

### Functionality
| Name                | Parameters                          | Return               | Behavior                                                                           |
|---------------------|-------------------------------------|----------------------|------------------------------------------------------------------------------------|
| - | - | - | - |

<br/><br/>
## ChoreHandler - Communicates with databases for CRUD operations
* Connections:
  * Inputs: Operation type of CRUD, chore description, chore due date, user assigned to chore, chore ID, if chore is finished
  * Outputs: Chore object for create operation, boolean for all other operations
### Properties
| Name       | Type                 | Description                                  |
|------------|----------------------|----------------------------------------------|
| - | - | - |

### Functionality
| Name          | Parameters                                                                     | Return       | Behavior                                                                                                                                                                                                                  |
|---------------|--------------------------------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getChore()    | int choreID                                                                    | Chore Object | Returns a Chore object                                                                                                                                                                                                    |
| addChore()    | string choreDesc, Date dueDate, string userAssigned                            | boolean      | Adds a chore into the Chore Database, and returns whether or not this operation was successful                                                                                                                            |
| updateChore() | int choreID, string choreDesc, Date dueDate, string userAssigned, boolean done | boolean      | Updates a chore in the Chore Database. dueDate, userAssigned, choreDesc, and done are all optional parameters since you don’t need to update every single thing. This returns whether or not the operation was successful |
| removeChore() | int choreID                                                                    | boolean      | Removes a chore from the Chore Database given a choreID. Returns whether or not                                                                                                                                           |

<br/><br/>
## User Handler - Handles CRUD operations for users, where users are roommates or the person logging into the software
* Connections:
  * Inputs: Operation type of CRUD, username, email, group, password
  * Outputs: None
### Properties
| Name       | Type                 | Description                                  |
|------------|----------------------|----------------------------------------------|
| - | - | - |

### Functionality
| Name         | Parameters                       | Return      | Behavior                                                                                                                                      |
|--------------|----------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| getUser()    | string email, string groupName                     | User Object | Returns a user object based on given parameters                                                                                               |
| addUser()    | string username, string email, string groupName, string password | boolean     | Adds user to database and returns success or not                                                                                              |
| updateUser() | string email, string password                  | boolean     | Updates a user in the database based off email and password. Other arguments can be given to actually update the User. Returns success or not |
| removeUser() | string email, string password                  | boolean     | Removes a user when credentials are given. Returns whether successful or not                                                                             |




