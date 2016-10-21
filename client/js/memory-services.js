'use strict';

(function () {

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
        ],

        findById = function (id) {
            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };


    angular.module('myApp.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        return employees;
                    },
                    get: function (employee) {
                        return findById(parseInt(employee.employeeId));
                    }
                }

            }])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        return findByManager(parseInt(employee.employeeId));
                    }
                }

            }]);

}());