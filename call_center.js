class Actor {
    constructor(role) {
        this.role = role;
        this._availability = true;
    }
}

class Call {
    constructor(count, status) {
        this.id = this.generateId(count);
        this.status = status;
        this.answerdBy = null;
    }
    generateId(count) {
        // create unique identifier for every call
        const id = new Date().toDateString() + ' - ' + count;
        return id;
    }
}

class CallCenter {
    constructor() {
        this.actors = [];
        this.incomingCalls = {};
        this._callQueue = [];
    }

    call(count) {
        // incoming call in callcentre
        let call = new Call(count, 'Waiting');
        call = this._dispatchCall(call);
        return call;
    }

    createActor(role) {
        // create actors
        const actor = new Actor(role);
        this.actors.push(actor);
        return actor;
    }

    _assignCall() {
        let currentCall = null;
        if(this._callQueue.length === 0) {
            
        } else {
            currentCall = this._callQueue.shift();
            this._dispatchCall(currentCall);
        }
    } 

    _dispatchCall(call) {
        // dispatch call based on first available respondent => manager => director => queue
        if(this.actors[0]._availability) {
            call.status = 'ongoing';
            call.answerdBy = this.actors[0];
            this.incomingCalls[call.id] = this.actors[0];
            this.actors[0]._availability = false;
        } else if (this.actors[1]._availability) {
            call.status = 'ongoing';
            call.answerdBy = this.actors[1];
            this.incomingCalls[call.id] = this.actors[1];
            this.actors[1]._availability = false;
        } else if (this.actors[2]._availability) {
            call.status = 'ongoing';
            call.answerdBy = this.actors[2];
            this.incomingCalls[call.id] = this.actors[2];
            this.actors[2]._availability = false;
        } else {
            call.status = 'queued';
            this._callQueue.push(call);
        }
        return call;
        
    }

    endCall(call) {
        // call has ended
        const id = call.id;
        if(this.incomingCalls[id]) {
            const actor = this.incomingCalls[id];
            this.incomingCalls[id] = false;
            call.status = 'done';
            this.actors.map(key => {
                if(key.role===actor.role){
                    key._availability = true;
                }
                return key;
            });
            this._assignCall();
            return call;
        } else return false;
        
    }
}

const callCenter = new CallCenter();
callCenter.createActor('Respondent');
callCenter.createActor('Manager');
callCenter.createActor('Director');
console.log(callCenter);
const call1  = callCenter.call(1);
console.log(call1);
console.log(callCenter.incomingCalls);
console.log(callCenter.endCall(call1));
console.log(callCenter);
const call2  = callCenter.call(2);
console.log(call2);
console.log(callCenter.incomingCalls);
const call3  = callCenter.call(3);
console.log(call3);
console.log(callCenter.incomingCalls);
const call4  = callCenter.call(4);
console.log(call4);
console.log(callCenter.incomingCalls);

console.log(callCenter.endCall(call4));
console.log(callCenter);