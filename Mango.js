
  class Mango extends BaseClass {
    constructor(x, y,width,height){
      var options={
        isStatic:true
      }
      super(x,y,width,height,options);
      this.image = loadImage("images/mango.png");
     this.Visiblity = 255;
    }
  
   display(){
    // console.log(this.body.depth);
     if(this.body.speed < 5){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
      // this.Visiblity = this.Visiblity - 2;
      // tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       pop();
     }
     
   }
  
 score(){
    if(this.Visiblity<0 && this.Visiblity>-1005){
      score++;
    }
  }
  
  };