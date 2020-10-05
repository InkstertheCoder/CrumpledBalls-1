class Ground {
    constructor(x,y,width,height)
     { 
         var options={ isStatic:true } 
     this.body=Bodies.rectangle(x, y, width, height , options);
      this.width=width; this.height=height; 
      World.add(world, this.body);
     }
      display() 
      { 
          var Pos=this.body.position;
           fill("brown");
         rect(Pos.x,Pos.y,this.width, this.height);
         } 
        
        }
