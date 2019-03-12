# easy-mern-with-mysql
## Description
An easy example of MERN server with MySQL, Express, React, Node. 
I Made it just for didactic goals but maybe you can use for start an app. Here i recorded the videotutorial: https://www.youtube.com/watch?v=c8hE83mueFo&t=1759s
The use is very simple, there are two folders. 
In the API folder you have all the node-express-mysql module in the file index.js.
First i created a mysql connection, then started the express server and finally made 3 app.get() requests to CREATE, READ or DELETE values from the db.

##Execute
### Install the App
To install the dependencies:
```
$ cd api
$ npm install
$ cd ../react-front/
$ npm install
```
To create the DB if you want to execute this server just execute the SQL query (you can do it from term or myPhpAdmin:
```
CREATE DATABASE nfu;
CREATE TABLE IF NOT EXISTS teams(id smallint auto_increment, name varchar(40) NOT NULL, description TEXT, PRIMARY KEY(id));
INSERT INTO teams ('Example', 'Description of the example');
```
This query create a database called nfu, makes an easy table with 3 columns: id (Primary-AI-INT), name (VARCHAR40) and description(TEXT). And finally insert one example value (You can add more).
The DB i made is called "Teams", anyway you can rename it to Users, Products or whatever you want. Just edit the querys (ln30col44, ln46col33 and ln59col36).

## Run the server! :D
First run the api. You can execute this on dev mode (PLEASE DONT IN PRODUCTION! Its just an example!) with nodemon. If you haven't nodemon installed just `npm i -G nodemon` for global install or `npm i -D nodemon` to install only on this project and add to devDependencies.
On the second case you may have to add an script to your package.json.
Ok... lets execute:
```
$ cd api
$ nodemon index.js
```
The server is up and listening in port 4000. Now go to front:
```
$ cd ../react-front/
$ npm start
```
Now the react server is up too. You can check if all work fine in `http://localhost:3000`. 
Also you can add values sending GET values to the API `/add?param1=example&param2=example2`. For example: `http://localhost:4000/teams/add?name=Test&description=Another Test Team`
Same for deleting if you pass the id of the team you want to delete: `http://localhost:4000/teams/delete?id=2`.

## Testing
I just added an standard lint to the back. You can test each change on your code with:
```npm run lint ````
and fix eslint suggests with
```npm run lint -- --fix````

## Some tips if you want to dev this more and take serious
You want to use this code to start a serious project? This is just the tip of the iceberg... 
- Make your form to create, read, update or reload values (CRUD) in the React front. And use POST method instead of GET.  In express you would change all the app.get() to app.post(). Maybe you can keep just the read methods with GET and migrate the rest to POST.
- Make a 404 file. Its very easy with express make an `res.status(404).render("404")`
- Add some middlewares. There are some of Hapi framework that we can use, like Joi and Boom to handle errors.
- Make it safety. I just added CORS to admit changes from the same URL... but it still very, very insecure. You can use Helmet and Passport middleware to handle headers and JWT authentication. Also you can automatize the bugs check with snyk.
- Make your imagination fly. The world of node+express+react is huge. You can change mysql to mongoose, you can make a very big and fancy frontend with react, you can add redux to handle all the states in a store, you can add cache handle to make it faster, and of course finally go to production.

As i said before. This is the tip of the iceberg, and i made as part of videotutorial. The interesting work starts here.
