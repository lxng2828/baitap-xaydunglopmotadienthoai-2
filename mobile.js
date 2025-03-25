class Mobile {
    constructor() {
        this.battery = 60;
        this.isOn = false;
        this.draftingMessage = "";
        this.inbox = [];
        this.sentMessage = [];
    }

    checkStatus() {
        if (this.isOn) {
            return "On";
        } else {
            return "Off";
        }
    }

    turnOn() {
        this.isOn = true;
    }


    turnOff() {
        this.isOn = false;
    }

    chargeBattery() {
        this.battery = 100;
    }

    draftMessage(message) {
        this.draftingMessage = message;
    }

    sendMessage(receiver) {
        if (this.battery > 0) {
            receiver.receiveMessage(this.draftingMessage);
            this.draftingMessage = "";
            this.battery = this.battery - 10;
        }
    }

    receiveMessage(message) {
        this.inbox.push(message);
    }

    viewInbox() {
        return this.inbox;
    }
    viewSentMessage() {
        return this.sentMessage;
    }
}