class chain {
    onstructor(bodyA,bodyB,offsetX,offsetY){
        	this.offsetX = offsetX
        	this.offsetY = offsetY
            
        	var options={
            
        	  bodyA:bodyA,
        	  bodyB:bodyB,
        		pointB:{x:this.offsetX,y:this.offsetY}
        	}
            
                 
        	this.chain = Constraint.create(options);
        	World.add(world, this.chain);
            
        
        
        	this.chain.bodyA = null;
        	}
            
        	display () {
            
        		
            
            
        	if(this.bodyA){
        		var pointA = this.bodyA.position;
        		var pointB = this.pointB;
        		strokeWeight(4);
        		line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        	}
            
        
        }

}