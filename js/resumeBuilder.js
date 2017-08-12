
 var name = "Hanan Saad Alharbi";
 var role = "Siebel Software Developer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole)
 //$("#header").prepend(formattedRole);
 //$("#header").prepend(formattedName);
 /*var email ="is-is2009@hotmail.com";
 var newmail= email.replace("is-is2009@hotmail.com","hanan.saad.h@gmail.com");

 console.log(email);
 console.log(newmail);
 */
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
      biopic: ""
    //  display: function
};
if (bio.skills.length > 0 ){

  $("#header").append(HTMLskillsStart );
  var formattedSkill = HTMLskills.replace("%data", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill =HTMLskills.replace("%data",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill =HTMLskills.replace("%data",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill =HTMLskills.replace("%data",bio.skills[3]);
  $("#skills").append(formattedSkill);
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
