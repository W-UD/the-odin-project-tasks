# TODO List

## Using Class for Objects

### Propeties for the todo list:
- title
- description
- dueDate
- Priority
- notes
- checklist

### Should have projects or separe todos
- default project to which all the todos are put.
- should be able to create new project

### Separate the application logic from the dom related stuffs:
- creating new todo
- setting to as complete
- changing to do priority
- etc

### Prerequired look:
- view all project
- view all to dos in each project: title, duedate, changing color
- expand a single todo to see/ediit its details
- delete a todo

### Using webpack to budle module and libraries:
- date-fns

### Using web storage API to save the todos data
- localStorage: set up a function that saves the projects and todo and another function to access it also to display it when the app is first loaded.
  #### tips: 
  - Mke sure the app doesnt crash if ddata you may retrieve from localStorage isn't there|
  - You can isnpect localStorage in devTool by open application > localStorage 
  - localStorage use JSON  to send and store data.

----------------------------------------------------------

### Display project:
  - have directory for a project
    *in a project directory is*:
    - have notes: above 
    - icon, due time and icon : below
  - have 3 dots for editing the project directory

### Creating a note:
  - have due date options
  - have priority option
  - have add task button

### Today list feature:
  - have sorting feature
  - share feature

### See calendar and notes

### have menu drop down
  - when click, the list notes on the project appear.

### Have template