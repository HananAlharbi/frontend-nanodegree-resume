var name = "Hanan Saad Alharbi";
var role = "Siebel Software Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var bio = {
    name: "Hanan Saad Alharbi",
    role: "Siebel Software Developer",
    contacts: {
        mobile: "0537870959",
        email: "hanan.saad.h@gmail.com",
        github: "https://github.com/HananAlharbi",
        twitter: "Hanan_B_IS",
        location: "Riyadh"
    },
    welcomeMessage: "Hi , I am Hanan",
    skills: ["Programming", "Analyzing", "Communication", "PhoneGap development"],
    biopic: "images/fry.jpg"
    //  display: function
};
//$("#topContacts").append(ContactInfo);
var ContactInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(ContactInfo);
var ContactInfo = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(ContactInfo);
var ContactInfo = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(ContactInfo);
var ContactInfo = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").prepend(ContactInfo);


// print welcomeMessage
var formattedWel = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWel);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

// footer contaacts

var ContactInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(ContactInfo);
var ContactInfo = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(ContactInfo);
var ContactInfo = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(ContactInfo);
var ContactInfo = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(ContactInfo);

//print skills
if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

var work = {
    jobs: [{
            employer: "Systems Engineer",
            title: "Siebel CRM Developer",
            location: "Riyadh",
            dates: "Apr 2016 - Present",
            description: "Working in Siebel development as CRM developer",

        },
        {
            employer: "Web Developer",
            title: "Web Developer",
            location: "Riyadh",
            dates: "Mar 2015 - Dec 2015",
            description: "Front end development in Imar Urban Consultant",
        }
    ]
};

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDes = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLoc);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedDes);
    }
};
displayWork();

var projects = {
    project: [{
            title: "Graduation Project",
            dates: "Jun 2014 - Dec 2014",
            description: "Development Live Islam hybrid application for iOS, android and windows phone by using PhoneGap.",
            images: ["images/phonegap.jpg"]
        },
        {
            title: "Database Project Build",
            dates: "Jan 2014 - Feb 2014",
            description: "Oracle database using SQL and PL/SQL.",
            images: ["images/phonegap.jpg"]
        }
    ]
};

function displayProject() {
    for (proj in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
        var formattedProjectDes = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
        var formattedProjectImag = HTMLprojectImage.replace("%data%", projects.project[proj].images);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDate);
        $(".project-entry:last").append(formattedProjectDes);
        $(".project-entry:last").append(formattedProjectImag);
    }
}
displayProject();
/*
if(projects.projects[project].images.length > 0){
          for (image in projects.projects[project].images){
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedImage);
          }
      }
      */
//$("#main").append(internationalizeButton);

var education = {
    "schools": [{
            name: "Imam Muhammed Ibn Saud",
            location: "Jeddah",
            degree: "Bachelor degree",
            major: ["Information Systems"],
            dates: "2009-2015",
            url: "https://www.udacity.com/"
        },
        {
            name: "91 High School",
            location: "Riyadh",
            degree: "High School",
            major: ["Scinece"],
            dates: "2006-2009",
            url: "https://www.udacity.com/"
        }
    ],
    "onlineCourses": [{
            title: "Siebel Configration Foundation",
            school: "Oracle",
            dates: "Nov-2016",
            url: "https://www.udacity.com/"
        },
        {
            title: "PL/SQL Foundation",
            school: "Oracle ",
            dates: "Jul - 2016",
            url: "https://www.udacity.com/"
        }
    ]
};

function displayEducation() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDeg = formattedName + formattedDeg;
        $(".education-entry:last").append(formattedNameDeg);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
  // $("#education").prepend(HTMLonlineClasses);$("#education").append(HTMLonlineClasses);

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (school in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedSchoolTitle = formattedSchool + formattedTitle;
        $(".education-entry:last").append(formattedSchoolTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        $(".education-entry:last").append(formattedURL);
    }
}
displayEducation();


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//$("#header").append(internationalizeButton);
/*
$(document).click(function(Loc){
    var x=Loc.pageX;
    var y=Loc.pageY;

    logClicks(x,y);
});
*/
$("#mapDiv").append(googleMap);
/*
        education.display = function (){
      //    for(var i =0; i < education.shcools.length; i++)

           $("#education").append(HTMLschoolStart);
           var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", shcool.major[i]);
              $("#education-entry:last").append(HTMLschoolMajor);
         }


/*

var education = HTMLschoolName.replace("%data%", education.shcools.name);
$("#main").append(education);

 /*
 This is empty on purpose! Your code to build the resume will go here.
  */
