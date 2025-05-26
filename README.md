# WSAA-project  
  
WSAA Project Type A to create a basic flask server.  
  
Requirements:  
 - Python  
 - Modules installed from requirements.txt  
 - MySQL server running
  
Pythonanywhere was also set up: [link](https://samedo1999.pythonanywhere.com/)  
  
**Github folder structure**
- 
Static and Template folders
 - Contains the .js functions and .html pages  

bookDAO.py  
 - Contains the functions for getting information from the mySQL database  

dbconfig_template.py  
 - Authentication information for connecting to your MySQL server can be changed here **(make sure to rename folder to dbconfig.py)**  

requirements.txt  
 - Can use this command in the console to download the needed modules:   
 **>pip install -r /path/to/requirements.txt**  

rest_server.py  
 - The main application that you run in the console to start the web server **(important that requirements are installed and MySQL is running and set up)**