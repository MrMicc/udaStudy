/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Luiz Miccieli",
    role: "Consultant",
    aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    contact: {
        email: "luiz.miccieli@gmail.com",
        mobile: "+5561992584303",
        github: "MrMicc",
        twitter: "@Mricc",
        location: "Never land"
    },
    biopic: "images/fry.jpg",
    logo: {
        mobileLogo: "http://via.placeholder.com/50x50",
        tabletLogo: "http://via.placeholder.com/70x70",
        desktopLogo: "http://via.placeholder.com/100x100"
    },

    mainImage: {
        mobile: "http://via.placeholder.com/265x150",
        phablet: "http://via.placeholder.com/565x250",
        tablet: "http://via.placeholder.com/768x350",
        desktop: "http://via.placeholder.com/965x350"

    },
    welcomeMessage: "Hello Niggas",
    skills: ["consultant", "telcom", "nego doido"],
    works :[{
        title: "Title of first job",
        jobPosition: "manager",
        employer: "Seguradora",
        description: "Lorem Lorem Lorem Lorem lorem huahaii lore",
        dates: {
            start: "Setember - 2013",
            end: "Until now"
        },
        location: "Brasilia",
        projects: [{
            title: "Title of first project",
            client: "XPTO",
            dates: {
                start: 2012,
                end: 2015
            },
            country: {
                name: 'Esse nome',
                city: 'essa ai',
                flag: '🇧🇷'
            },
            description: "Lorem ipsum lorem lorem aleluia",
            image: {
                mobile: "http://via.placeholder.com/250x100",
                destkop: "https://via.placeholder.com/300x150",
                alt: "lorem lorem"
            }
        }]
        },
        {
            title: "Title of Second  job",
            jobPosition: "programmer",
            employer: "ACN",
            description: "Lorem Lorem Lorem Lorem lorem huahaii lore",
            dates: {
                start: "Setember - 2007",
                end: "Setember - 2013"
            },
            location: "Brasilia",
            projects: [{
                title: "Title of second project",
                client: "XPTO",
                dates: {
                    start: 2012,
                    end: 2015
                },
                country: {
                    name: 'Esse nome',
                    city: 'I dont know',
                    flag: '🇧🇷'
                },
                description: "Lorem ipsum lorem lorem aleluia",
                image: {
                    mobile: "http://via.placeholder.com/250x100",
                    destkop: "https://via.placeholder.com/300x150",
                    alt: "lorem lorem"
                }
            }]
        },

    ],


    education: {
        schools: [
            {
                name: "CECAP",
                location: "Brasilia",
                degreeDates: {
                    start: 1995,
                    end: 1999
                },
                ulr: "uol.com",
                majors: "I dont remember"
            },
            {
                name: "Marista",
                location: "Brasilia",
                degreeDates: {
                    start: 2000,
                    end: 2002
                },
                ulr: "google.com",
                majors: "None"
            }
        ]
    }
};

function hasObject(obj){
    if(obj === undefined){
        return false;
    }else{
        return true;
    }
}


/*************************
 *
 * HEADER
 *
 *************************/
$(header);
function header(){
    "use strict";
    /**
     * setting up the logo
     */

    function mountLogo() {
       $('header').prepend(HTMLheaderLogo);
        var formattedLogoImages = HTMLheaderLogoImages.replace('%dataDesktop%', bio.logo.desktopLogo);
        $('#headerLogo').append(formattedLogoImages);
       if(hasObject(bio.logo.mobileLogo)){
           $('#headerLogo').find('picture').prepend(HTMLheaderLogoImagesMobile.replace('%dataMobile%', bio.logo.mobileLogo ))
        }
        if(hasObject(bio.logo.tabletLogo)){
           //it was done with before, to fix the problem of load picture precedence in the browsers
           $('#headerLogo').find('img').before(HTMLheaderLogoImagesTablet.replace('%dataTablet%', bio.logo.tabletLogo));
        }
    }

    if(hasObject(bio.logo)){
        mountLogo();

    }

    /**
     * setting up the header name
     */
    if($('#headerLogo').length){ //Logo Exist?
        $('#headerName').addClass('header_title');

    }else{
        $('#headerName').removeClass('header_title'); //if we dont have Logo then whe remove the text alignment class
    }
}
/*************************
 *
 * HEADER END
 *
 *************************/




/*************************
 *
 * MAIN SECTION
 *
 *************************/
$(mainSection);
function mainSection() {

    function mountMainImage(){
        "use strict";
        $('#mainSection').prepend(HTMLmainSectionImage.replace('%dataDesktop%',bio.mainImage.desktop));
        if(hasObject(bio.mainImage.mobile)){
            $('#mainSection').find('picture').prepend(HTMLmainSectionImageMobile.replace('%dataMobile%',bio.mainImage.mobile));
        }
        if(hasObject(bio.mainImage.phablet)){
            $('#mainSection').find('img').before(HTMLmainSectionImagePhablet.replace('%dataPhablet%', bio.mainImage.phablet));
        }
        if(hasObject(bio.mainImage.tablet)){
            $('#mainSection').find('img').before(HTMLmainSectionImageTablet.replace('%dataTablet%', bio.mainImage.tablet));
        }
    }


    if(hasObject(bio.aboutMe)){
        $('#mainSection').append(HTMLmainSectionTextDiv);
        $('#mainContentText').append(HTMLmainSectionTextSpan.replace('%data%', bio.aboutMe));
    }

    if(hasObject(bio.mainImage)){
        mountMainImage();
    }
}

/*************************
 *
 * FEATURED WORK SECTION
 *
 *************************/
//TODO needs to be done :)
$(featuredWorkSection);
function featuredWorkSection() {
    $('#featuredWork').prepend(HTMLfeaturedWorkTitle);
    var count =1;

    bio.works.forEach(function (work) {
       work.projects.forEach(function (project) {
           var workCount= '#work-'+count;
           $('#featuredWork').append(HTMLfeaturedWorkCard.replace('%projectName%',project.title).replace('%id%',count).replace(
                '%workEmployer%',work.employer));
           if(hasObject(project.image)){
                $(workCount).find('p').after(HTMLfeaturedWorkCardImage.replace('%dataDesktop%',project.image.destkop).replace(
                    '%altImage%', project.image.alt));
                if(hasObject(project.image.mobile)){
                    $(workCount).find('picture').prepend(HTMLfeaturedWorkCardImageMobile.replace('%dataMobile%',project.image.mobile));
                }
           }

           $(workCount).find('.works').append(HTMLfeaturedWorkCardDescription.replace('%projectDescription%', project.description));
           $(workCount).find('.work_description').append(HTMLfeaturedWorkItems);

           if(hasObject(project.client)){
               $(workCount).find('.work_items').append(HTMLClientName.replace('%data%',project.client));
           }
           if(hasObject(work.jobPosition)){
                $(workCount).find('.work_items').append(HTMLMainRole.replace('%data%',work.jobPosition));
           }
           if(hasObject(project.dates)){
                $(workCount).find('.work_items').append(HTMLStartDate.replace('%data%',project.dates.start));
                $(workCount).find('.work_items').append(HTMLEndDate.replace('%data%',project.dates.end));
           }
           if(hasObject(project.country)){
               $(workCount).find('.work_items').append(HTMLCity.replace('%data%',project.country.city));
               $(workCount).find('.work_items').append(HTMLCountry.replace('%data%',project.country.name).replace('%dataFlag%',
                   project.country.flag));
           }


           count++;
       });
    });
}