/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
// $("#main").append("Jayant Sahewal");
 var email = "jayant.sahewal@gmail.com";

 var name = "Jayant Sahewal";

 var role = "Data Scientist";

 var newEmail = email.replace("gmail.com", "lewisu.edu");

 //console.log(email);
 //console.log(newEmail);

 var awesomeThoughts = "I am Jayant and I am AWESOME!";
// $("#main").append(awesomeThoughts)
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 //$("#main").append(funThoughts);
 */



 var name = "Jayant Sahewal";

 var bio = {
 	"name" : "Jayant Sahewal",
 	"role" : "Data Scientist",
 	"contacts" : {
 		"mobile" : "407-288-2600",
 		"email" : "jayant.sahewal@gmail.com",
 		"github" : "jayantsahewal",
 		"location" : "Orlando"
 	},
 	"welcomeMessage" : "Welcome to my interactive online Portfolio",
 	"skills" : [
 	"Oracle EPM Essbase and Planning", "Teradata", "Business Objects",
 	"Informatica", "Python", "R", "Data Science"],
 	"bioPic" : "imagess/fry.jpg"

 }
 var projects = {
	"projects": [{
		"title": "News Website",
		"dates": "November 2013",
		"description": "Implemented a website which gathers the latest news feeds from xml format of different news agencies and has the ability to share news in Facebook. Using Node.js in server side running in Amazon EC2 cloud platform. For client side used Backbone.js, HTML5, Twitter bootstrap framework.",
		"images": ['http://i.imgur.com/PhC5STL.png']

	}],
	//Display projects in resume page
	display: function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImages);
				}
			}

		}

	}
}

 var work = {
 	"jobs" : [{
 		"employer" : "Deloitte Consulting LLP",
 		"title" : "Solution Engineer",
 		"location" : "Lake Mary, Florida, USA",
 		"dates" : "Feb 2015 - Present",
 		"description" : "blah blah"
 	},
 	{
 		"employer" : "Tata Consulting Services",
 		"title" : "IT Analyst",
 		"location" : "New Delhi, India and Chicago, IL",
 		"dates" : "Jul 2010 - Feb 2015",
 		"description" : "blah blah" 		
 	}]
 }


 var education = {
 	"schools" : [
 	{
 		"name" : "Lewis University",
 		"location" : "Chicago, IL",
 		"degree" : "Masters",
 		"majors" : ["Data Science"],
 		"dates" : 2015,
 		"url" : "http://www.lewisu.edu"
 	},
 	{
 		"name" : "Thapar University",
 		"location" : "Patiala, Punjab, India",
 		"degree" : "Bachelors",
 		"majors" : ["Electronics and Communication"],
 		"dates" : 2010,
 		"url" : "http://www.thapar.edu" 		
 	}],
 	"onlineCourses" : [
 	{
 		"title" : "Data Analyst Nanodegree",
 		"school" : "Udacity",
 		"dates" : 2015,
 		"url" : "http://www.udacity.com"
 	}]
 }

 var formattedName = HTMLheaderName.replace("%data%", bio.name);

 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 $("#header").append(formattedName);
 $("#header").append(formattedRole);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkills);
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", 
		work.jobs[job].employer);

	var formattedTitle = HTMLworkTitle.replace("%data%", 
		work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",
		work.jobs[job].dates);

	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%",
		work.jobs[job].description);

	$(".work-entry:last").append(formattedDescription);

}

function locationizer(work_obj){
	var locationArray = [];

	for (var job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;

}

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display();