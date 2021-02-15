 var canvas = new fabric.Canvas("myCanvas");

 image_width = 30;
 image_height = 30;

 player_x = 10;
 player_y = 10;

 var player_object = "";
 var image_object = "";

 function player_update() {
     fabric.Image.fromURL("messi_player.png", function (Img) {
         player_object = Img;

         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set({
             top: player_y,
             left: player_x
         });
         canvas.add(player_object);
     });
 }

 function new_image(get_image) {
     fabric.Image.fromURL(get_image, function (Img) {
         image_object = Img;

         image_object.scaleToWidth(image_width);
         image_object.scaleToHeight(image_height);
         image_object.set({
             top: player_y,
             left: player_x
         });
         canvas.add(image_object);
     });
 }
 window.addEventListener("keydown", my_keydown);

 function my_keydown(e) {
     keypressed = e.keyCode
     console.log(keypressed);
     if (e.shiftKey == true && keypressed == "80") {
         console.log("p & Shift key pressed together");
         image_width = image_width + 10;
        image_height = image_height + 10;
         document.getElementById("current_Width").innerHTML = image_width;
         document.getElementById("current_Height").innerHTML = image_height;

     }

     if (e.shiftKey == true && keypressed == "77") {
         console.log("m & Shift key pressed together");
         image_width = image_width - 10;
         image_height = image_height - 10;
         document.getElementById("current_Width").innerHTML = image_width;
         document.getElementById("current_Height").innerHTML = image_height;

     }

     if (keypressed == "38") {
         Up();
         console.log("up");
     }

     if (keypressed == "40") {
         down();
         console.log("down");
     }
     if (keypressed == "39") {
         right();
         console.log("right");
     }

     if (keypressed == "37") {
         left();
         console.log("left");
     }

     if (keypressed == "66") {
         new_image("ronaldo chest.png");
         console.log(" I pressed b");
     }
     if (keypressed == "70") {
         new_image("dhoni_head.png");
         console.log("f");
     }

     if (keypressed == "82") {
         new_image("ronaldo_right_hand.png");
         console.log("r");
     }

     if (keypressed == "76") {
         new_image("ronaldo_left_hand.png");
         console.log("l");
     }
     if (keypressed == "68") {
         new_image("dhoni_leg.png");
         console.log("d");
     }
 }

 function Up(){
    if(player_y >= 0){
        player_y = player_y - image_height ;
       console.log("image_height = " + image_height );
       console.log("when up arrow key is pressed , x =  "+ player_x +",y= "+ player_y);
       canvas.remove(player_object);
       player_update();
    }
}

function down(){
   if(player_y <= 500){
       player_y = player_y + image_height ;
      console.log("image_height = " + image_height );
      console.log("when down arrow key is pressed , x =  "+ player_x +",y= "+ player_y);
      canvas.remove(player_object);
      player_update();
   }
}

function left(){
   if(player_x > 0){
       player_x = player_x - image_width ;
      console.log("image_width = " + image_width );
      console.log("when left arrow key is pressed , x =  "+ player_x +",y= "+ player_y);
      canvas.remove(player_object);
      player_update();
   }
}

function right(){
   if(player_x <= 850){
       player_x = player_x + image_width ;
      console.log("image_width = " + image_width );
      console.log("when left arrow key is pressed , x =  "+ player_x +",y= "+ player_y);
      canvas.remove(player_object);
      player_update();
   }
}