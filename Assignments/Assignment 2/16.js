const placeOrder = (callback) => {
    setTimeout(() => {
        console.log("Order Placed");
        callback();
    }, 1000);
};

const cookfood = (callback) => {
    placeOrder(() => {
        setTimeout(() => {
            console.log("Food is Cooking....");
            callback();
        }, 1000);
    });
};

const deliverfood = () => {
    cookfood(() => {
        setTimeout(() => {
            console.log("Food is Delivered");
        }, 2000);
    });
};

deliverfood();
