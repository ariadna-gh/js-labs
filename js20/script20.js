const product = {
    name: "Laptop",
    model: ["Lenovo", "Dell", "HP"],
    showModels: function() {
        this.model.forEach(function(flagman) {
            console.log(this.name + " " + flagman);
        }, this);
    }
};
product.showModels();

