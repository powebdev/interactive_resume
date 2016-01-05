/* 
 * bio object 
 */
var bio = {
	'name': 'Po Tong',
	'role': 'Front End Developer',
	'contacts': {
		'mobile': '555-867-5309',
		'email': 'potong616@gmail.com',
		'github': 'powebdev',
		'location': 'Richmond, CA'
	},
	'welcomeMessage': 'Happy feast of winter veil',
	'skills': ['Python', 'HTML5', 'CSS3', 'JS', 'jQuery', 'AJAX', 'Jasmine', 'Java', 'SQLite', 'PostgreSQL', 'Google App Engine', 'AWS', 'Flask', 'Django', 'OAuth', 'Linux', 'Apache', 'Polymer', 'bootstrap', 'API', 'GIMP', 'Inkscape', 'Git', 'Android'],
	'biopic': 'images/fry.jpg'
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedContactGeneric = '';
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

	var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedSkills = '';

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	for (var key in bio.contacts) {
		if (bio.contacts.hasOwnProperty(key)) {
			formattedContactGeneric = HTMLcontactGeneric.replace('%contact%', key);
			formattedContactGeneric = formattedContactGeneric.replace('%data%', bio.contacts[key]);
			$("#topContacts").append(formattedContactGeneric);
			$("#footerContacts").append(formattedContactGeneric);
		}
	}

	$("#header").append(formattedBiopic);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);

	for (var skills_i = 0; skills_i < bio.skills.length; skills_i++) {
		formattedSkills = HTMLskills.replace('%data%', bio.skills[skills_i]);
		$("#skills").append(formattedSkills);
	}
};

/* education object */
var education = {};

education.schools = [{
	'name': 'University of California, Berkeley',
	'location': 'Berkeley, CA',
	'degree': 'Bachelor of Arts',
	'majors': ['Physics', 'Astrophysics'],
	'dates': 2012,
	'url': 'http://www.berkeley.edu/'
}];

education.onlineCourses = [
	{
		'title': 'Intro to HTML and CSS',
		'school': 'Udacity',
		'date': 2015,
		'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
	},
	{
		'title': 'JavaScript Basics',
		'school': 'Udacity',
		'date': 2015,
		'url': 'https://www.udacity.com/course/javascript-basics--ud804'
	},
	{
		'title': 'Intro to Relational Database',
		'school': 'Udacity',
		'date': 2015,
		'url': 'https://www.udacity.com/course/intro-to-relational-databases--ud197'
	}
];

education.display = function() {
	var formattedSchoolName = '';
	var formattedSchoolLocation = '';
	var formattedDegree = '';
	var formattedSchoolMajor = '';
	var formattedSchoolDates;
	var formattedSchoolUrl = '';
	var formattedSchoolAndDegree = '';

	// inserting school(s)
	for (var schools_i = 0; schools_i < education.schools.length; schools_i++) {
		formattedSchoolName = HTMLschoolName.replace(
			'%data%', education.schools[schools_i].name);
		formattedSchoolLocation = HTMLschoolLocation.replace(
			'%data%', education.schools[schools_i].location);
		formattedDegree = HTMLschoolDegree.replace(
			'%data%', education.schools[schools_i].degree);
		formattedSchoolAndDegree = formattedSchoolName + formattedDegree;
		formattedSchoolDates = HTMLschoolDates.replace(
			'%data%', education.schools[schools_i].dates);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolAndDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last > a").attr("href", education.schools[schools_i].url);

		for (var majors_i = 0; majors_i < education.schools[schools_i].majors.length; majors_i++) {
			formattedSchoolMajor = HTMLschoolMajor.replace(
				'%data%', education.schools[schools_i].majors[majors_i]);
				$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	var formattedCourseTitle = '';
	var formattedOnlineSchool = '';
	var formattedCourseDate = '';
	var formattedCourseUrl = '';
	var formattedTitleAndSchool = '';
	var courseUrl = '';
	$("#education").append(HTMLonlineClasses);
	//inserting online courses
	for (var courses_i = 0; courses_i < education.onlineCourses.length; courses_i++) {
		formattedCourseTitle = HTMLonlineTitle.replace(
			'%data%', education.onlineCourses[courses_i].title);
		formattedOnlineSchool = HTMLonlineSchool.replace(
			'%data%', education.onlineCourses[courses_i].school);
		formattedTitleAndSchool = formattedCourseTitle + formattedOnlineSchool;
		formattedCourseDate = HTMLonlineDates.replace(
			'%data%', education.onlineCourses[courses_i].date);
		courseUrl = education.onlineCourses[courses_i].url;
		formattedCourseUrl = HTMLonlineURL.replace(
			'%data%', courseUrl);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedTitleAndSchool);
		$(".education-entry:last").append(formattedCourseDate);
		$(".education-entry:last").append(formattedCourseUrl);
		$(".education-entry:last > a").last().attr("href", courseUrl);
	}
};

/* work object */
var work = {};
work.jobs = [
	{
		'employer': 'First Order',
		'title': 'Starkiller Base Janitor',
		'location': 'Richmond, CA',
		'dates': 'July 2014 - December 2015',
		'description': 'something something darkside'
	},
	{
		'employer': 'Galactic Empire',
		'title': 'Handrail installer',
		'location': 'Tacoma, WA',
		'dates': 'November 2013 - July 2014',
		'description': 'something something complete'
	},
	{
		'employer': 'The Old Republic',
		'title': 'Force Dude',
		'location': 'Pensacola, FL',
		'dates': '2012 - 2013',
		'description': 'nooooooooooooooooooooooooooooo'
	}
];

work.display = function() {
	var formattedEmployer = '';
	var formattedTitle = '';
	var formattedEmployerTitle = '';
	var formattedWorkLocation = '';
	var formattedDates = '';
	var foramttedDescription = '';

	for (var jobs_i = 0; jobs_i < work.jobs.length; jobs_i++) {
		formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[jobs_i].employer);
		formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[jobs_i].title);
		formattedEmployerTitle = formattedEmployer + formattedTitle;
		formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[jobs_i].location);
		formattedDates = HTMLworkDates.replace('%data%', work.jobs[jobs_i].dates);
		foramttedDescription = HTMLworkDescription.replace('%data%', work.jobs[jobs_i].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(foramttedDescription);
	}
};

/* projects */
var projects = {};
projects.projects = [
	{
		'title': 'Portfolio Page',
		'dates': 2016,
		'description': 'My portfolio page',
		'images': ['images/portfolio.png']
	},
	{
		'title': 'Video Game Catalog',
		'dates': 2015,
		'description': 'Project 3 for Udacity Full Stack Nanodegree. A database backed website for video game cataloging',
		'images': ['images/vgdb.png']
	},
	{
		'title': 'Conference Organization App',
		'dates': 2015,
		'description': 'Project 4 for Udacity Full Stack Nanodegree. An app built using Google App Engine which allows user to organize and signup for conferences',
		'images': ['images/conference.png']
	}
];

projects.display = function() {
	var formattedProjectTitle = '';
	var formattedProjectDates = '';
	var formattedProjectDescription = '';
	var formattedProjectImage = '';
	var numberOfImages = 0;
	for (var projects_i = 0; projects_i < projects.projects.length; projects_i++) {
		formattedProjectTitle = HTMLprojectTitle.replace(
			'%data%', projects.projects[projects_i].title);
		formattedProjectDates = HTMLprojectDates.replace(
			'%data%', projects.projects[projects_i].dates);
		formattedProjectDescription = HTMLprojectDescription.replace(
			'%data%', projects.projects[projects_i].description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		numberOfImages = projects.projects[projects_i].images.length;
		if (numberOfImages > 0) {
			for (var images_i = 0; images_i < numberOfImages; images_i++) {
				formattedProjectImage = HTMLprojectImage.replace(
					'%data%', projects.projects[projects_i].images[images_i]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

/*
 * construct the page by calling each object's display function.
 */
bio.display();
projects.display();
education.display();
work.display();

/*
 * adding google map to resume
 */
$("#mapDiv").append(googleMap);

$("div.card").mouseover(function() {
	$(this).find(".project-description").toggleClass("show");
});
$("div.card").mouseout(function() {
	$(this).find(".project-description").toggleClass("show");
});
