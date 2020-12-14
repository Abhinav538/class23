//creating class, ground
class Ground{
    //giving properties of ground
    constructor(x,y,width, height){
        var ground_options ={
            isStatic: true
        }
    //shape of the ground
        this.body = Bodies.rectangle(x,y,width, height, ground_options);
        //width and height of the ground
        this.width=width;
        this.height=height;
        //adding the ground
        World.add(world,this.body);       
    }
    //display the ground
    display(){
        //placing the ground in the center
        rectMode(CENTER);
        //ground is white
        fill(255);
        //position of the ground
        rect(this.body.position.x,this.body.position.y,this.width,this.height);  
    }
}