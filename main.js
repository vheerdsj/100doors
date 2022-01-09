class HundredDoors {
    maxDoors = 100;
    doors = [];
    openDoors = [];
 
    stringOfDoors(doorsToReturn) {
        return this.doors.slice(0, doorsToReturn).join("");
    }

    flipDoors() {
        this.doors = new Array(this.maxDoors).fill("#");
        for(let fullRun = 1; fullRun <= this.maxDoors; fullRun++){
            for(let pass = 1; pass <= this.maxDoors; pass++){
    
                if(pass % fullRun === 0){
                    (this.doors[pass - 1] === "#") 
                        ? this.doors[pass - 1] = "@" 
                        : this.doors[pass - 1] = "#"; 
                }

                if(fullRun === 100 && this.doors[pass - 1] === "@")
                    this.openDoors.push(pass);
            }
        }

        
    };
}

module.exports = HundredDoors;