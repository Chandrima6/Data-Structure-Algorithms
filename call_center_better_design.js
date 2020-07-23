
/*
Assumptions: 
- only 3 employee in a call center - Respondant, Manager, Director
- while calling call id and caller details are sent
- while ending call, call id is sent
*/
class Call {
    constructor(id, status, operator, caller) {
        //id,status, operator, caller
        this.id = this.generateId(id);
        this.status = status;
        this.operator = operator;
        this.caller = caller;
    }

    generateId(id) {
        const identifier = new Date().toDateString() + ' - ' + id;
        return identifier;
    }

    changeStatus(status) {
        this.status = status;
    }
    changeOperator(operator) {
        this.operator = operator;
    }
}

class Operator {
    constructor(role) {
        //id, role, availaibility
        this.role = role;
        this._availability = true;
        this.currentCall = null;
    }

    receiveCall(call) {
        this.currentCall = call;
        this.updateAvailability();
    }

    reassignCall() {

    }

    getAvailability() {
        return this._availability;
    }

    endCall() {
        this.currentCall = null;
    }
    updateAvailability() {
        this._availability = !this._availability;
    }
}

class CallCenter {
    constructor(operators) {
        //calls, operators
        this.operators = this.createOperator(operators);
        this.calls = {};
        this._callQueue = [];
        this._callCount = 0;
    }
    createOperator(operators) {
        const operatorsArr = [];
        operators.forEach(role => {
            let operator = new Operator(role);
            operatorsArr.push(operator);
        });
        
        return operatorsArr;
    }
    deleteOperator() {}
    _dispatchCall(call) {
        if(this.operators[0].getAvailability()) {
            call.changeStatus('ongoing');
            call.changeOperator(this.operators[0]);
            this.calls[call.id] = call;
            this.operators[0].receiveCall(call);
        } else if (this.operators[1].getAvailability()) {
            call.changeStatus('ongoing');
            call.changeOperator(this.operators[1]);
            this.calls[call.id] = call;
            this.operators[1].receiveCall(call);
        } else if (this.operators[2].getAvailability()) {
            call.changeStatus('ongoing');
            call.changeOperator(this.operators[2]);
            this.calls[call.id] = call;
            this.operators[2].receiveCall(call);
        } else {
            call.changeStatus('queued');
            this._callQueue.push(call);
        }
        return call.id;
    }
    _assignCall() {}
    _createCall(caller) {
        let call = new Call(this._callCount, 'acknowledged', null, caller);
        this.calls[call.id] = call;
        this._callCount++;
        return call;
    }
    handleCall(caller, type) {
        let data;
        switch(type) {
            case 'receive':
                let call = this._createCall(caller);
                data = this._dispatchCall(call);
                break;
            case 'end':
                break;
            case 'reassign':
                break;
            default:
                break;
        }
        return data;
        
    }
    
}


const operators  = ['Respondant', 'Manager', 'Director']
const myCallCenter = new CallCenter(operators);
// create operators using myCallCenter.creteOperator
// call the callCenter using myCallCenter.handleCall parameters => caller, callId
console.log(myCallCenter);
const callId1 = myCallCenter.handleCall('chan','receive');
console.log(callId1);
console.log(myCallCenter);
myCallCenter.handleCall(callId1,'end');
