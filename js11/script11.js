let mobilePhone = {
    brand: "Xiaomi",
    model: "Note 10",
    call: function(number) {
       console.log("подзвонити за номером " + number);
    },
    sendMessage: function(number, message) {
       console.log("відправлено повідомлення на номер " + number + ": " + message);
    }
 };
mobilePhone.call("098-111-11-11");
mobilePhone.sendMessage("098-111-11-11", "JavaScript"); 