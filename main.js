var currentLevel = 0;
var Blackout;
var canMove;
var ended;
var mainCharPos;
var lightPos;
var walls;
var doors;
function init() {
    currentLevel = 0;
    Blackout = false;
    canMove = false;
    ended = false;
    mainCharPos = {x: -1, y: -1};
    lightPos = [];
    walls = [];
    doors = [];
    clearEngine();
    WriteToScreen('BlackOut', 99, 6, 0, 5);
    
    WriteToScreen('controls', 99, 0, 3, 5);
    WriteToScreen(' Arrow keys to move', 99, 0, 5, 5);
    WriteToScreen(' Space bar to toggle', 99, 0, 7, 5);
    WriteToScreen(' the electric grid', 99, 0, 8, 5);
    WriteToScreen(' offline or online', 99, 0, 9, 5);
    WriteToScreen(' including ', 99, 0, 10, 5);
    WriteToScreen(' flashlights', 99, 0, 11, 5);
    
    
    WriteToScreen('Press space bar', 99, 0, 13, 5);
    WriteToScreen(' to start', 99, 0, 14, 5);
    startDrawing();
    if(!ListRun){
        startListener();
        ListRun = true;
    
    }
    postDrawQueue.push(function() {
        checkIfEnded();
    });
}
let ListRun = false;
function startListener() {
    document.addEventListener('keydown', (event) => {
        let key = event.keyCode
        if(ended && key === 32){
            init();
            return
        }
        
        if (key === 32) {
            switch (currentLevel) {
                case 0:
                StartLvl1();
                    break;
                default:
                    if (Blackout) {
                        removefromDrawQueue(50);
                        removefromDrawQueue(99);

                    } else {
                        WriteToScreen('BlackOut', 99, 6, 1, 1);
                        addToDrawQueue('#181425', 50, -1, -1, 2);

                    }
                    Blackout = !Blackout
                    break;

            }
        }
        if ((key === 37 || key === 38 || key === 39 || key === 40) && canMove) {
            moveChar(key)
        }

    })
}


function StartLvl1() {
    currentLevel = 1;
    canMove = true;
    removefromDrawQueue(99);
    //MainChar
    addToDrawQueue(maincharacter_Front_topleft, 2, 10, 17, 5);
    addToDrawQueue(maincharacter_Front_topright, 3, 11, 17, 5);
    addToDrawQueue(maincharacter_Vertical_standleft, 4, 10, 18, 5);
    addToDrawQueue(maincharacter_Vertical_standright, 5, 11, 18, 5);

    mainCharPos = {x:11, y:18}
    
    //Police
    addPolice(10, 6,10,false, 5)
    addLightSquare(10, 7,11,15,11)
    lightPos.push({x:6,y:10})
    lightPos.push({x:7,y:11})

        for (let index = 0; index < boardwidth; index++) {
        for (let index2 = 0; index2 < boardheight; index2++) {
            let sprite;
            if(index > 5 && index <= 15 && index2 > 1 && index2 < 19 ){
                sprite = redFloor
            }else{
                sprite = grayWall
                walls.push({x: index,y:index2})
            }
            addToDrawQueue(sprite, 10, index, index2, 6);
        }  
        
    }
    addToDrawQueue(doorLeft, 10, 10, 1, 5);
    addToDrawQueue(doorRight, 10, 11, 1, 5);
    doors.push({x: 10, y: 1});
    doors.push({x: 11, y: 1});
    
}
function StartLvl2(){
addToDrawQueue(maincharacter_Front_topleft, 2, 4, 17, 5);
addToDrawQueue(maincharacter_Front_topright, 3, 5, 17, 5);
addToDrawQueue(maincharacter_Vertical_standleft, 4, 4, 18, 5);
addToDrawQueue(maincharacter_Vertical_standright, 5, 5, 18, 5);

mainCharPos = {x:5, y:18}

  //Police
  addPolice(10, 1,4,false, 5)
  addLightSquare(10, 2,5,18,5)
  lightPos.push({x:1,y:4})
  lightPos.push({x:2,y:5})

  addPolice(10, 3,6,true, 5)
  addLightSquare(10, 3,7,3,18)
  lightPos.push({x:3,y:6})
  lightPos.push({x:4,y:7})


  for (let index = 0; index < boardwidth; index++) {
    for (let index2 = 0; index2 < boardheight; index2++) {
        let sprite;
        if((index > 2 && index < 8 && index2 > 1 && index2 < 19) || (index2 > 1 && index2 < 6 && index > 0 && index < 19)){
            sprite = redFloor
        }else{
            sprite = grayWall
            walls.push({x: index,y:index2})
        }
        addToDrawQueue(sprite, 10, index, index2, 6);
    }  
    
}
addToDrawQueue(doorLeft, 10, 16, 1, 5);
addToDrawQueue(doorRight, 10, 17, 1, 5);
doors.push({x: 16, y: 1});
doors.push({x: 17, y: 1});
}
function StartLvl3(){
    addToDrawQueue(maincharacter_Front_topleft, 2, 9, 17, 5);
    addToDrawQueue(maincharacter_Front_topright, 3, 10, 17, 5);
    addToDrawQueue(maincharacter_Vertical_standleft, 4, 9, 18, 5);
    addToDrawQueue(maincharacter_Vertical_standright, 5, 10, 18, 5);
    mainCharPos = {x:10, y:18}


    addPolice(10, 6,2,true, 5)
    addLightSquare(10, 6,3,6,18)
    lightPos.push({x:6,y:2})
    lightPos.push({x:7,y:3})

    addPolice(10, 12,2,true, 5)
    addLightSquare(10, 12,3,12,18)
    lightPos.push({x:12,y:2})
    lightPos.push({x:13,y:3})

    addPolice(10, 2,7,false, 5)
    addLightSquare(10, 3,8,18,8)
    lightPos.push({x:2,y:7})
    lightPos.push({x:3,y:8})

    addPolice(10, 2,12,false, 5)
    addLightSquare(10, 3,13,18,13)
    lightPos.push({x:2,y:12})
    lightPos.push({x:3,y:13})

    for (let index = 0; index < boardwidth; index++) {
        for (let index2 = 0; index2 < boardheight; index2++) {
            let sprite;
            if((index > 5 && index < 14 && index2 > 1 && index2 < 19) || (index2 > 5 && index2 < 14 && index > 0 && index < 19)){
                sprite = redFloor
            }else{
                sprite = grayWall
                walls.push({x: index,y:index2})
            }
            addToDrawQueue(sprite, 10, index, index2, 6);
        } 
    }
    addToDrawQueue(doorLeft, 10, 16, 5, 5);
addToDrawQueue(doorRight, 10, 17, 5, 5);
doors.push({x: 16, y: 5});
doors.push({x: 17, y: 5});
}
function StartLvl4(){
    addToDrawQueue('#181425', 50, -1, -1, 2);
    WriteToScreen('Congratulations', 97, 2, 9, 1);
}


function addPolice(id, x,y, frontOrSide, layer){
    let topleft,topright,botleft,botright;

    if(frontOrSide){
        topleft = police_Front_topleft;
        topright =police_Front_topright;
        botleft = police_Front_botleft;
        botright = police_Front_botright;
    }else{
        topleft = police_Side_topleft;
        topright =police_Side_topright;
        botleft = police_Side_botleft;
        botright = police_Side_botright;
    }

    addToDrawQueue(topleft, id, x, y, 5);
    addToDrawQueue(topright, id, x+1, y, 5);
    addToDrawQueue(botleft, id, x, y+1, 5);
    addToDrawQueue(botright, id, x+1, y+1, 5);
}
function addLightSquare(id, xStart,yStart, xEnd, yEnd, layer){
    for (let index = xStart; index <= xEnd; index++) {
        for (let index2 = yStart; index2 <= yEnd; index2++) {
            addToDrawQueue(light, id, index, index2, layer);
            lightPos.push({x:index,y:index2})

}}}


function moveChar(key) {
    canMove = false;
    let verticalOrHorizontal;
    let postive;
    let steps = 5;
    let timeToMove = .5;
    let animationcycle = .2

    let topLeft;
    let topRight;
    let botLeftStand;
    let botRightStand;
    let botLeftWalk;
    let botRightWalk;
    
    let newX,newY;

    switch (key) {
        case 37:
        verticalOrHorizontal = false;
        positive = false;
        topLeft = maincharacter_Left_topleft;
        topRight = maincharacter_Left_topright;
        botLeftStand = maincharacter_Horizontal_standleft;
        botRightStand = maincharacter_Horizontal_standright;
        botLeftWalk = maincharacter_Horizontal_moveleft;
        botRightWalk = maincharacter_Horizontal_moveright
        newX = -2;
        newY = 0;

            break;
        case 38:
        verticalOrHorizontal = true;
        positive = false;
        topLeft = maincharacter_Back_topleft;
        topRight = maincharacter_Back_topright;
        botLeftStand = maincharacter_Vertical_standleft;
        botRightStand = maincharacter_Vertical_standright;
        botLeftWalk = maincharacter_Vertical_moveleft;
        botRightWalk = maincharacter_Vertical_moveright
        newX = 0;
        newY = -2;
        break;
        case 39:
        verticalOrHorizontal = false;
        positive = true;
        topLeft = maincharacter_Right_topleft;
        topRight = maincharacter_Right_topright;
        botLeftStand = maincharacter_Horizontal_standleft;
        botRightStand = maincharacter_Horizontal_standright;
        botLeftWalk = maincharacter_Horizontal_moveleft;
        botRightWalk = maincharacter_Horizontal_moveright
        newX = 1;
        newY = 0;
            break;
        case 40:

        verticalOrHorizontal = true;
        positive = true;
        topLeft = maincharacter_Front_topleft;
        topRight = maincharacter_Front_topright;
        botLeftStand = maincharacter_Vertical_standleft;
        botRightStand = maincharacter_Vertical_standright;
        botLeftWalk = maincharacter_Vertical_moveleft;
        botRightWalk = maincharacter_Vertical_moveright
        newX = 0;
        newY = 1;
            break;
    }
    
    for(let index = 0; index < doors.length; index++){
        if(doors[index].x === mainCharPos.x+newX && doors[index].y === mainCharPos.y+newY){
            MoveUpLevel();
            canMove = true;
            return;
        }
    }

    for(let index = 0; index < walls.length; index++){
    if(walls[index].x === mainCharPos.x+newX && walls[index].y === mainCharPos.y+newY){
    canMove = true;
    return
    }
}

    moveSpriteinDrawQueue(2, verticalOrHorizontal, positive,timeToMove,steps, animationcycle, [topLeft], topLeft, null)
    moveSpriteinDrawQueue(3, verticalOrHorizontal, positive,timeToMove,steps, animationcycle, [topRight], topRight, null)
    moveSpriteinDrawQueue(4, verticalOrHorizontal, positive,timeToMove,steps, animationcycle, [botLeftStand, botLeftWalk], botLeftStand, null)
    moveSpriteinDrawQueue(5, verticalOrHorizontal, positive,timeToMove,steps, animationcycle, [botRightWalk, botRightWalk], botRightStand, function(sprite){setTimeout(function(){canMove = true;mainCharPos = {x: Math.round(sprite.x), y:Math.round(sprite.y)};},20)})
}

function MoveUpLevel(){
    currentLevel++;
    walls = [];
    doors = [];
    lightPos = [];

    clearEngine();
    postDrawQueue.push(function() {
        checkIfEnded();
    });
    switch(currentLevel){
        case 2:
        StartLvl2();
        break;
        case 3:
        StartLvl3();
        break;
        case 4:
        StartLvl4();
        break;
    }
}

function checkIfEnded(){
    for(let index = 0; index < lightPos.length; index++){
        let light = lightPos[index];
        let matchX = mainCharPos.x === light.x || mainCharPos.x-1 === light.x;
        let matchY = mainCharPos.y === light.y || mainCharPos.y-1 === light.y

        if(matchX && matchY && Blackout === false){
            addToDrawQueue('#181425', 50, -1, -1, 2);
            WriteToScreen('You got Caught', 98, 0, 0, 1);
            WriteToScreen('Game over', 98, 0, 1, 1);
            WriteToScreen('Press space bar', 97, 0, 9, 1);
            WriteToScreen('to resart', 97, 0, 10, 1);
            postDrawQueue.push(function() {
                setTimeout(function (){
                    stopDrawing();
                ended = true;
            }, 200)
            });
            
        }
    }
}