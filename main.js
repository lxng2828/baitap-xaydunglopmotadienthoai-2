const mobileA = new Mobile();
const mobileB = new Mobile();

document.getElementById("send-btn-a").addEventListener("click", function () {
    sendMessage("a");
});
document.getElementById("send-btn-b").addEventListener("click", function () {
    sendMessage("b");
});
document.getElementById("charge-btn-a").addEventListener("click", function () {
    chargeBattery("a");
});
document.getElementById("charge-btn-b").addEventListener("click", function () {
    chargeBattery("b");
});

function sendMessage(sender) {
    let senderMobile;
    let receiverMobile;
    let receiver;

    if (sender === "a") {
        senderMobile = mobileA;
        receiverMobile = mobileB;
        receiver = "b";
    } else {
        senderMobile = mobileB;
        receiverMobile = mobileA;
        receiver = "a";
    }

    const messageElement = document.getElementById(`drafting-message-${sender}`);
    const message = messageElement.value;

    senderMobile.draftMessage(message);
    senderMobile.sendMessage(receiverMobile);
    showInbox(receiver);
    showBattery();

    messageElement.value = "";
}

function showInbox(selector) {
    let mobile;

    if (selector === "a") {
        mobile = mobileA;
    } else {
        mobile = mobileB;
    }

    const inboxElement = document.getElementById(`inbox-${selector}`);
    inboxElement.innerHTML = mobile.inbox.map(element => `<h4>${element}</h4>`).join('');
}

function showBattery() {
    document.getElementById("batery-a").innerText = `${mobileA.battery}%`;
    document.getElementById("batery-b").innerText = `${mobileB.battery}%`;
}

function chargeBattery(selector) {
    let mobile;

    if (selector === "a") {
        mobile = mobileA;
    } else {
        mobile = mobileB;
    }

    mobile.chargeBattery();
    showBattery();
}

showBattery();

