
 var name = "Hanan Saad Alharbi";
 var role = "Siebel Software Developer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole)

 var bio = {
 name : "Hanan Saad Alharbi",
      role : "Siebel Software Developer",
      contacts : {
            mobile: "0537870959",
            email: "hanan.saad.h@gmail.com" ,
            github: "https://github.com/HananAlharbi",
            twitter: "",
            location: "Riyadh"
          },
      welcomeMessage: "Hi , I am Hanan",
      skills: ["Programming","Analyzing","Communication"],
      biopic: "images/fry.jpg"
    //  display: function
};

var formattedWel = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWel);

var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedPic);

if (bio.skills.length > 0 ){

  $("#header").append(HTMLskillsStart );
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill =HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill =HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill =HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}
var work = {
jobs : [
          {
        employer: "Systems Engineer",
        title: "Siebel CRM Developer",
        location: "Riyadh",
        dates: "Apr 2016 - Present",
        description: "Working in Siebel development as CRM developer",
        //display: function
          },
         {
        employer: "Web Developer",
        title: "Web Developer",
        location: "Riyadh",
        dates: "Mar 2015 - Dec 2015",
        description: "Front end development in Imar Urban Consultant",
        //display: function
         }
       ]
       };


       for ( job in work.jobs)
      {
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

      var projects = {
       project: [
         {
           title: "Graduation Project",
           dates: "Jun 2014 - Dec 2014",
           description: "Development Live Islam hybrid application for iOS, android and windows phone by using PhoneGap.",
           images: []
      //  display: function
         },
         {
           title:"Database Project Build",
           dates: "Jan 2014 - Feb 2014",
           description: "Oracle database using SQL and PL/SQL.",
           images: []
        //display: function
         }
       ]
     };

     for ( proj in projects.project)
    {
     $("#projects").append(HTMLprojectStart);
     var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
    var formattedProjectDes = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
    //var formattedProjectImag = HTMLprojectImage.replace("%data%", projects.project[proj].images);
      $("header").append(formattedProjectTitle);
      $("projects").append(formattedProjectDate);
      $("projects").append(formattedProjectDes);
    }
/*
var education = {
 schools: [
   {
     name: "Imam Muhammed Ibn Saud",
     location: "Riyadh",
     degree: "bachelor degree",
     majors: ["Information Systems"],
    dates: "2009-2015",
    url: ""
  },
  {
   name: "91 High School",
   location: "Riyadh",
   degree: "High School",
   majors: ["Scinece"],
   dates: "2006-2009",
   url: ""
 }
 ]
  onlineCourses:
  [
    {
      title: "Siebel Configration Foundation",
      school: "Oracle",
      dates: "Nov-2016",
      url: "string"
    //display: function
   },
   {
    title: "PL/SQL Foundation",
    school: "Oracle ",
    dates: "Jul - 2016",
    url: ""
  //display: function
  }
  ]
};
$("#main").append(education.schools);
/*
var work ={
     jobs: array of objects with
           employer: string
           title: string
           location: string
           dates: string (Can be 'in progress')
           description: string
      display: function
    };
var projects = {
  projects: array of objects with
            title: string
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
      display: function
};
 //$("#main").append(bio.Name);
 //$("#main").append(work["position"]);
 //$("#main").append(education.name);
 /*
 This is empty on purpose! Your code to build the resume will go here.
  */
