/**
 * Created by luizmiccieli on 23/07/17.
 */

if (bio.skills.length > 0) {
    //language=JQuery-CSS
    $("#header").append(HTMLskillsStart);

    //running over all skills
    bio.skills.forEach(function (skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));
    });
}

var formattedContat = HTMLcontactGeneric.replace("%contact%", "email").replace("%data%", bio.contact.email);
$("#topContacts").append(formattedContat);

/*************************
 *
 * WORK
 *
 *************************/
bio.works.display = function (){
    //running over works
    bio.works.forEach(function (work) {
        //inserting the work-entry div inside of work experience
        $("#workExperience").append(HTMLworkStart);

        //concatenating the Employer and Title
        var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.employer) +
            HTMLworkTitle.replace("%data%", work.title);

        //putting the title
        $(".work-entry:last").append(formattedEmployerTitle);

        //putting the dates from - to
        var formattedDates = HTMLworkDates.replace("%data%", work.dates.start+", "+work.dates.end);
        $(".work-entry:last").append(formattedDates);

        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.description));

    });
};

bio.works.display();



$(document).click(function (loc) {
    logClicks(loc.pageX,loc.pageY);
});


$("#main").append(internationalizeButton);
function inName(name){
    tmp = name.split(" ");
    tmp[0] = tmp[0].slice(0,1).toUpperCase() + tmp[0].slice(1).toLowerCase();

    return tmp[0] +" "+tmp[1].toUpperCase();
}

/*$("#main").append(HTMLworkLocation.replace("%data%", bio.works[work].location));
 $("#main").append(HTMLworkDates.replace("%data%", bio.works[work].dates.start));
 $("#main").append(HTMLworkDescription.replace("%data%", bio.works[work].description));*/

/*************************************
 *
 * PROJECTS
 *
 **************************************/
bio.projects.display = function(){
    bio.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
        var formattedDate  = project.dates.start+" - "+project.dates.end;
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", formattedDate));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));

        project.images.forEach(function (image) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",image));

        });
    });
};


bio.projects.display();



/*************************************
 *
 * MAP
 *
 **************************************/

$("#mapDiv").append(googleMap);


