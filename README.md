# Bookmark Application
This is an application for managing Bookmarks (create & delete), written in Angular 8.  
For the generation of the project [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20 was used.


## How to Run
In order to run the application, clone this repo and run the command ```ng serve```. The application is accessible at [localhost:4200](http://localhost:4200).

## Documentation

### Components
Two components were created for this application:

#### 1. Bookmarks
* **Button** to create a new Bookmark
* A group of **Tabs** which displays the available groups. The content of each tab consists of a **Table** with the pertinent bookmarks for each specific group. The table displays the name and the url of the bookmark, and a button for the deletion of the bookmark.  

![Bookmark Component](https://github.com/ioarampatzis/bookmarks-app/blob/master/screenshots/Screenshot_1.png?raw=true)	

#### 2. Bookmark Dialog
* **Form** for the creation of a new bookmark (all fields are required).  

![Bookmark Dialog Component](https://github.com/ioarampatzis/bookmarks-app/blob/master/screenshots/Screenshot_2.png?raw=true)


* After pressing the save button, the bookmark is added to the table and a success message is displayed.

![Bookmark Component Creation](https://github.com/ioarampatzis/bookmarks-app/blob/master/screenshots/Screenshot_3.png?raw=true)	

* After pressing the delete button of the Bookmarks component, the bookmark is removed from the table and a notification message is displayed.

![Bookmark Component Deletion](https://github.com/ioarampatzis/bookmarks-app/blob/master/screenshots/Screenshot_4.png?raw=true)	

### Model
The model of the application consists of two entities:   
1. **Bookmark** ```(id: string(UUID), name: string, url: string, groupId: string)```.  
2. **Group** ```(id: string(UUID), name: string)```.

### NgRx and Angular Material 
The state for the bookmark consists of the following:  
1. ```bookmarkList``` - List of all available bookmarks.  
2. ```groupList``` - List of all available groups.  
Please note that test data were used in the initialization of the state.

In the bookmark reducer two actions were implemented, one for the creation and one for the deletion of a bookmark.  
  
In the bookmark selector two selector were implemented, one to select all available bookmarks, and one to get all the available bookmarks grouped by ```groupId``` in an Object.  
  
From the Angular Material the following components were used:   
```MatToolbar```, ```MatFlatButton```, ```MatTabGroup```, ```MatTable```, ```MatList```, ```MatInput```, ```MatSelect```  

