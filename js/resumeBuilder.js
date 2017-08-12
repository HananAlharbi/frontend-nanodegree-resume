/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Hanan Saad Alharbi";
 var role = "Siebel Software Developer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole)
 //$("#header").prepend(formattedRole);
 //$("#header").prepend(formattedName);

 var AwesomThouts = " I am Hanan And I am awesome!";
 console.log(AwesomThouts);

 var email ="is-is2009@hotmail.com";
 var newmail= email.replace("is-is2009@hotmail.com","hanan.saad.h@gmail.com");

 console.log(email);
 console.log(newmail);

 var skills = ["Programming","HHhh",];
 var bio = {
   "Name": "Hanan Saad Alharbi",
   "Role": "Siebel Software Development",
   "Contact": {
   "Mobile" : "0537870959",
   "email" : "hanan.saad.h@gmail.com"
   },
   "WecomeMsg" : " Wecome to My CV !",
   "Picture": "images/fry.jpg",
   "Skills": skills
 };

 $("#main").append(bio.Name);

 var work = {};
 work.position = "CRM developer";
 work.employer = "STC";
 work.years = 2;

 var education = {};
 education["name"]  = "Imam Muhammed";
 education["years"]  = "2009-2015";
 education["City"]  = "Riyadh";


 $("#main").append(work["position"]);
 $("#main").append(education.name);
 /*
 This is empty on purpose! Your code to build the resume will go here.
  */
