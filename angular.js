angular.module('eggsApp', ['ui.bootstrap'])
    .controller('mainController', function ($scope, $window) {
        $scope.leftPage = "";
        $scope.rightPage = "";
        $scope.navCollapsed = true;
        $scope.resumeOpen = false;
        $scope.downloadedResume = false;
        $scope.badgesLoaded = false;
        $scope.projectImgsLoaded = false;
        $scope.detailImgsLoaded = false;
        $scope.status = {
            isopen: {
                projects: false,
                resume: false
            }
        };

        $window.onload = function () {
            document.getElementById("mainContainer").style.display = "block";
            document.getElementById("mainNav").style.display = "block";
            document.getElementById("loading").style.display = "none";

            var initialize = {};

            initialize.loadEggs = function () {
                var eggs = document.getElementById("me");
                var newImage = new Image();
                newImage.onload = function () {
                    eggs.src = this.src;
                }
                newImage.src = "photos/eggs.jpg";
            };
            initialize.loadEggs();
        }

        $scope.largeScreen = function () {
            return (window.innerWidth < 768 ? false : true);
        };

        $scope.openWindow = function () {
            window.open($scope.projects[$scope.projectIndex].gitLink);
        }

        $scope.loadImg = function (element, place, link) {
            var img = document.getElementsByClassName(element)[place];
            var newImage = new Image();
            newImage.onload = function () {
                img.src = this.src;
            }
            newImage.src = link;
        };

        $scope.showLeftTab = function (page) {
            $scope.leftPage = page;
            $scope.navCollapsed = true;
            if ($scope.leftPage == "contact") {
                if (!$scope.badgesLoaded) {
                    $scope.loadImg("badge", 0, "photos/Facebook.png");
                    $scope.loadImg("badge", 1, "photos/Github.png");
                    $scope.loadImg("badge", 2, "photos/LinkedIn.png");
                }
            }
            document.getElementById("myImage").scrollIntoView({ behavior: "smooth" });
            document.getElementById("about").style.display = "block";     
            document.getElementById("desktop-intro").style.display = "none";                       
        };

        $scope.showRightTab = function (page) {
            $scope.rightPage = page;
            $scope.navCollapsed = true;
            if ($scope.rightPage == "projects") {
                if (!$scope.projectImgsLoaded) {
                    for (var i = 0; i < $scope.projects.length; i++) {
                        $scope.loadImg("sample-image", i, $scope.projects[i].images[0]);
                    }
                }
            }
            document.getElementById("rightSide").scrollIntoView(true);
            document.getElementById("projects").style.display = "block";  
            document.getElementById("desktop-intro").style.display = "none";                                                 
        };

        $scope.loadResume = function () {
            $scope.resumeOpen = !$scope.resumeOpen;
            if (!$scope.downloadedResume) {
                document.getElementById("digiResu").src = 'documents/Zach_Eggleton_Resume.pdf';
                $scope.downloadedResume = true;
            }
        }

        $scope.showProject = function (project) {
            document.getElementById("desktop-intro").style.display = "none";
            $scope.projectIndex = project;
            $scope.showRightTab("projectDetails");
            if (!$scope.detailImgsLoaded) {
                for (var i = 0; i < $scope.projects[project].images.length; i++) {
                    $scope.loadImg("detail-images", i, $scope.projects[project].images[i]);
                }
            }
        };

        $scope.getLevel = function (level) {
            return new Array(level);
        };

        $scope.projectIndex = 0;

        $scope.projects = [
            {
                name: "Digital Travel Map",
                shortDesc: "Mark your travels on this map and save them to your browser!",
                longDesc: "This small program lets you place different markers on the map commemorating " +
                    "your travels across the U.S. Once you've placed your locations on the map, you don't have " +
                    "to worry about losing your data; it automatically saves your markers inside your web browser! " +
                    "This program also allows you to download any markers you placed on the map into a .txt file and " +
                    "import it into a different browser, so you're not stuck with just one browser, or you realize " +
                    "the one you're using isn't compatible with saving browser data",
                technologies: "HTML5, CSS3, JavaScript, Google Maps API, IndexedDB, JSON",
                images: [
                    "photos/ustravelmap.PNG",
                    "photos/ustravelmap1.PNG",
                    "photos/ustravelmap2.PNG"
                ],
                gitLink: "https://github.com/zeggleto/TravelMap"
            },
            {
                name: "This Website",
                shortDesc: "Yes, it's black and white. My mind couldn't build cool color formations, so I just gave up",
                longDesc: "This is my own portfolio of projects and work I have done since college. I built it from " +
                    "scratch so I could understand web hosting a lot better and use the front-end skills I've been saving " +
                    "for a while. I want it to work on both mobile and desktops, so I used Bootstrap in it, and I wanted to " +
                    "keep it to just one page, so I used AngularJS.",
                technologies: "HTML5, CSS3, JavaScript, Bootstrap, AngularJS, PHPMailer",
                images: [
                    "photos/thiswebsite.PNG",
                    "photos/thiswebsite2.PNG"
                ],
                gitLink: "https://github.com/zeggleto/zacheggleton.github.io"
            }
        ];

        $scope.experience = [
            {
                name: "Infosys Limited",
                time: "September 2017 - Present",
                title: "Associate Software Developer",
                place: "Cherry Hill, NJ"
            },
            {
                name: "Eli Lilly and Company",
                time: "Summer 2016",
                title: "Summer Replacement Student",
                place: "Indianapolis, IN"
            },
            {
                name: "DIVSYS International, LLC",
                time: "October 2016 - March 2017",
                title: "Senior Project",
                place: "Indianapolis, IN"
            }
        ];

        $scope.skills = [
            {
                name: "Front-End",
                languages: [
                    {
                        name: "HTML5, CSS3, JavaScript",
                        level: 4
                    },
                    {
                        name: "AngularJS",
                        level: 2
                    },
                    {
                        name: "Bootstrap",
                        level: 2
                    }
                ],
                other: "AJAX, Google Maps API, JSON, XML, " +
                    "IndexedDB"
            },
            {
                name: "Back-End",
                languages: [
                    {
                        name: "C#",
                        level: 2
                    },
                    {
                        name: "Java",
                        level: 1
                    },
                    {
                        name: "SQL",
                        level: 2
                    }
                ],
                other: ".NET Web API, Entity Framework, " +
                    "REST and SOAP Web Services"
            }
        ]
    });