/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var bio = {
 	"name" : "Vikram Ramchand",
 	"role": "Team Lead",
 	"contact":  {"email": "vikram@makemyreturns.com", "mobile": "9820034740","github":"vikram29","twitter":"@vikram_jr", "location": "Mumbai, India"},
 	"picture": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/030/1ca/2d2ffdc.jpg",
 	"welcomeMessage": "Love building new companies and programming solutions for them!",
 	"skills" : ["solution finder", "leadership", "focussed"]


 };

var education = {
	"schools" : [
	{
		"name": "Georgia Institute of Technology",
		"city": "Atlanta, GA",
		"degree":"Bachelors of Science",
		"majors":["Computer Science"],
		"datesAttended":2004,
		"url":"http://www.gatech.edu"
	} ,
	{
		"name": "London Business School",
		"city": "London",
		"degree":"MBA",
		"majors":["Finance","Entreprenuership"],
		"datesAttended":2013,
		"url":"http://www.london.edu"


	}
	],
	"onlineCourses": [
		{
			"school": "Udacity",
			"course": "Front End Web Developer",
			"dates":2016,
			"courseURL":"https://www.udacity.com"
		},
		{
			"school":"Udacity",
			"course":"Java Script Basics",
			"dates":2016,
			"courseURL":"https://www.udacity.com"
		}
		]


	};


var work =
{
	"jobs": [
		{
			"title":"Managing Director",
			"employer":"JRC Technologies",
			"location":"Mumbai",
			"yearsWorked":"1st June 2012 - Today!",
			"description": "Built an online tax filing firm - makemyreturns.com with 55000 users!. Successfully raised Seed Capital and now looking at expanding our operations to monetize our user base.",
			"workURL":"http://www.makemyreturns.com"

		},

		{
			"title":"Managing Director",
			"employer":"Xplorz.Com Private Limited",
			"location":"Mumbai",
			"yearsWorked":"1st June 2005 - Today!",
			"description":"Built a profitable corporate travel company in a short span of time. Mobilized employees and suppliers to serve clients in the most efficient manner. Designed the Process flows for the company.",
			"workURL":"http://www.xplorz.com"
		},

		{
			"title":"Software Developer",
			"employer":"Siemens Medical Solutions",
			"location":"Malvern, PA",
			"yearsWorked":"06th July 2004 - 26th February 2005",
			"description":"Development work on Soarian Financial and COMPASS. Responsible for the design of 3.0 a/b versions and also delegated development work to SISL (Kolkata).",
			"workURL":"http://www.siemens.com"

		}
	]

};



var projects =
{
	"projects": [
		{
			"title":"Project 1",
			"datesWorked":"1st Jan - 15th June 2015",
			"description":"Ran an online tax filing firm - makemyreturns.com",
			"images":["http://placehold.it/350x350","http://placehold.it/350x350"]
		},

		{
			"title":"Project 2",
			"datesWorked":"1st Jul - 15th Aug 2015",
			"description":"Ran an online tax filing firm - makemyreturns.com",
			"images":["http://placehold.it/350x350","http://placehold.it/350x350"]
		},

		{
			"title":"Project 3",
			"datesWorked":"1st Feb - 15th June 2014",
			"description":"Ran an online tax filing firm - makemyreturns.com",
			"images":["http://placehold.it/350x350","http://placehold.it/350x350"]
		}	]
};


bio.display = function () {

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.picture);
	$("#header").append(formattedBiopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMessage);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	}
	var i = 0;
	while (i < bio.skills.length) {
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
	i++;
	}

};

bio.display();

work.display = function() {

	for (var job in work.jobs) {
		if(work.jobs.hasOwnProperty(job)){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			formattedEmployer = formattedEmployer.replace("#",work.jobs[job].workURL);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].yearsWorked);
			$(".work-entry:last").append(formattedWorkDate);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
			}

		}

	};
work.display();

projects.display = function() {

	for (var project in projects.projects) {
		if(projects.projects.hasOwnProperty(project)){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].datesWorked);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0)
			{
				var i = 0;
				while (i<projects.projects[project].images.length)
				{
					var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[i]);
					$(".project-entry:last").append(formattedImages);
					i++;
				}
			}
		}


	}

};

projects.display();

education.display = function () {

	for (var school in education.schools) {
		if(education.schools.hasOwnProperty(school)){

			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("#",education.schools[school].url);
			formattedName = formattedName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			formattedName = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedName);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].datesAttended);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);

		}
	}

	$("#education").append(HTMLonlineClasses);

	for (var onlineCourse in education.onlineCourses) {
		if(education.onlineCourses.hasOwnProperty(onlineCourse)){

			$("#education").append(HTMLschoolStart);
			var formattedCourseName = HTMLonlineTitle.replace("#",education.onlineCourses[onlineCourse].courseURL);
			formattedCourseName = formattedCourseName.replace("%data%",education.onlineCourses[onlineCourse].course);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			formattedCourseName = formattedCourseName + formattedOnlineSchool;
			$(".education-entry:last").append(formattedCourseName);
			var formattedCourseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedCourseDates);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].courseURL);
			$(".education-entry:last").append(formattedURL);
		}

	}
};

education.display();

$("#mapDiv").append(googleMap);



