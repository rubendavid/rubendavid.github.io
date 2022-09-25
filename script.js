    var world = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 0, 6, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 4, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 0, 5, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2],
        [1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1],
        [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
        [2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2],
        [2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
        [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
    var score = 0;

    var pacman = {
        x:1,
        y:1
    };

    function displayWorld() {
        var output = '';

        for (var i = 0; i < world.length; i++) {
            output += "\n<div class='row'>\n";
            for (var j = 0; j < world[i].length; j++) {
                if (world[i][j] == 2)
                    output += "<div class='brick'></div>";
                else if (world[i][j] == 1)
                    output += "<div class='coin'></div>";
                if (world[i][j] == 0)
                    output += "<div class='empty'></div>";
                if (world[i][j] == 3)
                    output += "<div class='pacman'></div>";
                if (world[i][j] == 4)
                    output += "<div class='a_ghost'></div>";
                if (world[i][j] == 5)
                    output += "<div class='b_ghost'></div>";
                if (world[i][j] == 6)
                    output += "<div class='c_ghost'></div>";
                if (world[i][j] == 7)
                    output += "<div class='d_ghost'></div>";
            }
            output += "\n</div>"
        }
        document.getElementById('world').innerHTML = output;
    }
    function displayPacman() {
        document.getElementById('pacman').style.top = pacman.y*20+"px";
        document.getElementById('pacman').style.left = pacman.x*20+"px";
    }
    function displayScore() {
        document.getElementById('score').style.top = pacman.y * 20 + "px";
    }
    displayWorld();
    displayPacman();
    displayScore();

	document.onkeydown = function (e) {
        if ( e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2 && pacman.x == 0) {
            document.getElementById("pacman").style.transform = "rotate(-180deg)";
            pacman.x = world[0].length - 1;
        } else if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2 && pacman.x > 0) {
            document.getElementById("pacman").style.transform = "rotate(-180deg)";
            pacman.x--;
        } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2 && pacman.x == world[0].length - 1) {
            document.getElementById("pacman").style.transform = "none";
            pacman.x = 0;
        } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
            document.getElementById("pacman").style.transform = "none";
            pacman.x++;
        } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2 && pacman.y > 0) {
            document.getElementById("pacman").style.transform = "rotate(-90deg)";
            pacman.y--;
        } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
            document.getElementById("pacman").style.transform = "rotate(90deg)";
            pacman.y++;
        } if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0;
            score += 10;
            displayWorld();
            displayScore();
        }
            //console.log(e.keyCode);
            displayPacman();
    };
