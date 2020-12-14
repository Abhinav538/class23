//creating a class, box
class Box{
    //creating properties of box
    constructor(x,y,width,height){
        //what box has to do
        var box_options ={
            restitution: 1.0, 
            friction:0.3,
            density:1.0
        }
    //mentioning shape of the box and giving box options
        this.body = Bodies.rectangle(x,y,width,height, box_options);
       //getting width and height 
        this.width=width;
        this.height=height;
        //adding box to the world
        World.add(world,this.body);
       
    }
    //display the box
    display(){
        //tells position and angle
        var pos = this.body.position;
        var angle = this.body.angle;
        //adding up a new box into the container
        push();
        //make box move when it topples
        translate(pos.x,pos.y);
        //rotating the box
        rotate(angle);
        //placing the box in the center
        rectMode(CENTER);
        //box was white
        fill(255);
        //gives default posistion of the box
        rect(0,0,this.width,this.height);
        //takes away boxes from the container
        pop();
    }
}