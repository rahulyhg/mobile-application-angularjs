var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/angular-directory-db",function(err, mongoClient) {
db = mongoClient.db("angular-directory-db");
db.collection('employees', {strict:true}, function(err, collection) {
if (err) {
console.log("The 'employees' collection doesn't exist. Creating it with sample data...");
populateDB();
}
});
});

exports.findById = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
    db.collection('employees', function(err, collection) {
        collection.findOne({'id': id}, function(err, item) {
            console.log(item);
            res.jsonp(item);
        });
    });
};

exports.findByManager = function(req, res) {
    var id = parseInt(req.params.id);
    console.log('findByManager: ' + id);
    db.collection('employees', function(err, collection) {
        collection.find({'managerId': id}).toArray(function(err, items) {
            console.log(items);
            res.jsonp(items);
        });
    });
};

exports.findAll = function(req, res) {
    var name = req.query["name"];
    db.collection('employees', function(err, collection) {
        if (name) {
            collection.find({"fullName": new RegExp(name, "i")}).toArray(function(err, items) {
                res.jsonp(items);
            });
        } else {
            collection.find().toArray(function(err, items) {
                res.jsonp(items);
            });
        }
    });
};
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
    console.log("Populating employee database...");
    var employees = [
        {"id": 1, "firstName": "Vetri", "lastName": "Pandi", "fullName": "Vetri Pandi", "managerId": 0, "reports": 4, managerName: "", "title": "Self learner", "department": "Information Technology", "cellPhone": "+91-8940379384", "officePhone": "04639-252895", "email": "admin@vetbossel.in", "city": "Tamilnadu, India", "pic": "vetripandi.jpg", "twitterId": "@vetripandi", "blog": "http://www.vetbossel.in"},
        {"id": 2, "firstName": "Ram", "lastName": "Kumar", "fullName": "Ram kumar", "managerId": 1, "reports": 2, managerName: "Vetri Pandi", "title": "Developer", "department": "Software", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "ramkumar@gmail.com", "city": "Tamilnadu, India", "pic": "mohan.jpg", "twitterId": "@ramkumar", "blog": "http://www.vetbossel.in"},
        {"id": 3, "firstName": "Rohit", "lastName": "Kumar", "fullName": "Rohit kumar", "managerId": 1, "reports": 0, managerName: "Vetri Pandi", "title": "Designer", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "rohitkumar@gmail.com", "city": "Tamilnadu, India", "pic": "nirmal.jpg", "twitterId": "@rohitkumar", "blog": "http://www.vetbossel.in"},
        {"id": 4, "firstName": "Boss", "lastName": "Hkaran", "fullName": "Boss Hkaran", "managerId": 1, "reports": 3, managerName: "Vetri Pandi", "title": "Programmar", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "solid.jpg", "twitterId": "@fakejwilliams", "blog": "http://www.vetbossel.in"},
        {"id": 5, "firstName": "Selva", "lastName": "Vetri", "fullName": "Selva Vetri", "managerId": 1, "reports": 2, managerName: "Vetri Pandi", "title": "Programmar", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "rmoore@gmail.com", "city": "Tamilnadu, India", "pic": "vetri.jpg", "twitterId": "@fakermoore", "blog": "http://www.vetbossel.in"},
        {"id": 6, "firstName": "Praveen", "lastName": "Raj", "fullName": "Praveen Raj", "managerId": 4, "reports": 0, managerName: "Rohit Kumar", "title": "Programmar", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "boss.jpg", "twitterId": "@fakepjones", "blog": "http://www.vetbossel.in"},
        {"id": 7, "firstName": "Priya", "lastName": "Jeya", "fullName": "Priya Jeya", "managerId": 4, "reports": 0, managerName: "Rohit Kumar", "title": "Software Architect", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "vetriselvan.jpg", "twitterId": "@fakepgates", "blog": "http://www.vetbossel.in"},
        {"id": 8, "firstName": "Abisheka", "lastName": "Jeya", "fullName": "Abisheka Jeya", "managerId": 2, "reports": 0, managerName: "Rohit Kumar", "title": "Marketing Manager", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "rino.jpg", "twitterId": "@fakelwong", "blog": "http://www.vetbossel.in"},
        {"id": 9, "firstName": "Divya", "lastName": "Mohan", "fullName": "Divya Mohan", "managerId": 2, "reports": 0, managerName: "Boss Hkaran", "title": "Marketing Manager", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "aravinth.jpg", "twitterId": "@fakegdonovan", "blog": "http://www.vetbossel.in"},
        {"id": 10, "firstName": "Jai", "lastName": "Krishnan", "fullName": "Jai Krishnan", "managerId": 5, "reports": 0, managerName: "Selva Vetri", "title": "Sales Representative", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "brother.jpg", "twitterId": "@fakekbyrne", "blog": "http://www.vetbossel.in"},
        {"id": 11, "firstName": "Mahendran", "lastName": "Mahi", "fullName": "Mahendran Mahi", "managerId": 5, "reports": 0, managerName: "Selva Vetri", "title": "Sales Representative", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "bashkaran.jpg", "twitterId": "@fakeajones", "blog": "http://www.vetbossel.in"},
        {"id": 12, "firstName": "Ravi", "lastName": "Indran", "fullName": "Ravi Indran", "managerId": 4, "reports": 0, managerName: "Ram Kumar", "title": "Software Architect", "department": "Information Technology", "cellPhone": "+91-9876543210", "officePhone": "04639-252252", "email": "tamilan@gmail.com", "city": "Tamilnadu, India", "pic": "selva.jpg", "twitterId": "@fakeswells", "blog": "http://www.vetbossel.in"}
    ];
 
    db.collection('employees', function(err, collection) {
        collection.insert(employees, {safe:true}, function(err, result) {});
    });
 
};