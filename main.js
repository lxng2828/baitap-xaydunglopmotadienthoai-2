let mobileA = new Mobile();
let mobileB = new Mobile();
showBattery()
document.getElementById("send-btn-a").addEventListener("click", function () {
    sendMessage("a")
})
document.getElementById("send-btn-b").addEventListener("click", function () {
    sendMessage("b")
})
document.getElementById("charge-btn-a").addEventListener("click", function () {
    chargeBattery("a")
})
document.getElementById("charge-btn-b").addEventListener("click", function () {
    chargeBattery("b")
})
function sendMessage(sender) {
    let senderMobile;
    let receiverMobile;
    let message;
    let receiver;
    if (sender == "a") {
        senderMobile = mobileA;
        receiverMobile = mobileB;
        receiver = "b";
    } else {
        senderMobile = mobileB;
        receiverMobile = mobileA;
        receiver = "a";
    }
    message = document.getElementById(`drafting-message-${sender}`).value;
    senderMobile.draftMessage(message);
    senderMobile.sendMessage(receiverMobile);
    showInbox(receiver);
    showBattery()
    message = document.getElementById(`drafting-message-${sender}`).value = "";
}
function showInbox(selector) {
    let mobile;
    if (selector == "a") {
        mobile = mobileA;
    } else {
        mobile = mobileB;
    }
    let inbox = document.getElementById(`inbox-${selector}`)
    let result = ""
    for (const element of mobile.inbox) {
        result = result + `<h4>${element}</h4>`
    }
    inbox.innerHTML = result;
}
function showBattery() {
    document.getElementById("batery-a").innerText = mobileA.battery;
    document.getElementById("batery-b").innerText = mobileB.battery;
}
function chargeBattery(selector) {
    let mobile;
    if (selector == "a") {
        mobile = mobileA;
    } else {
        mobile = mobileB;
    }
    mobile.chargeBattery();
    showBattery();
}