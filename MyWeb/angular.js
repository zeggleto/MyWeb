angular.module('eggsApp', ['ui.bootstrap', 'ngAnimate'])
    .controller('mainController', function($scope) {
        $scope.leftPage = "about";
        $scope.rightPage = "projects";
        $scope.status = {
            isopen: {
                projects: false,
                resume: false
            }
        };
        $scope.navCollapsed = true;
        $scope.largeScreen = function() {
            return (window.innerWidth < 768 ? false : true);
        };
        $scope.showLeftTab = function(page) {
            $scope.leftPage = page;
            $scope.navCollapsed = true;
            document.getElementById("myImage").scrollIntoView({behavior: "smooth"});
        };

        $scope.showRightTab = function(page) {
            $scope.rightPage = page;
            $scope.navCollapsed = true;
            document.getElementById("rightSide").scrollIntoView({behavior: "smooth"});
        };

        $scope.showProject = function(project) {
            $scope.projectIndex = project;
            $scope.showRightTab("projectDetails");
        };

        $scope.projects = [
            {
                name: "Digital Travel Map",
                shortDesc: "Mark your travels on this map and save them to your browser!",
                longDesc: "This small program lets you place different markers on the map commemorating " +
                "your travels across the U.S. Once you've placed your locations on the map, you don't have " + 
                "to worry about losing your data; it automatically saves your markers inside your web browser! " + 
                "This program also allows you to download any markers you placed on the map into a .txt file and " +
                "import it into a different browser, so you're not stuck with just one browser, or you realize " +
                "the one you're using isn't compatible with saving data",
                technologies: "HTML5, CSS3, JavaScript, Google Maps API, IndexedDB, JSON",
                images: [
                    "photos/ustravelmap.png",
                    "photos/ustravelmap1.png",
                    "photos/ustravelmap2.png"
                ]
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
                    "photos/thiswebsite.png"
                ]
            }
        ]

        $scope.projectIndex = 0;        
});
    
