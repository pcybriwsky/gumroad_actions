function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function formatTime(date) {
    return date.toTimeString().split(' ')[0];
}

function generatePurchaseHistory(name, email) {
    const products = [
        "Getting Started with P5.js",
        "How to make money as a digital artist",
        "Data and Art",
        "Marketing your art business",
        "Advanced React Techniques"
    ];

    const referrers = ["direct", "google.com", "facebook.com", "twitter.com", "linkedin.com"];
    const paymentTypes = ["PayPal", "Credit Card"];
    const reviews = ["Good content.", "Extremely valuable!", "Highly recommended.", "Informative and well-presented.", "Excellent material."];

    const history = [];
    const numPurchases = Math.floor(Math.random() * 5) + 1; // Between 1 and 5 purchases

    for (let i = 0; i < numPurchases; i++) {
        const purchaseDate = generateRandomDate(new Date(2023, 0, 1), new Date(2024, 7, 31));
        const product = products[Math.floor(Math.random() * products.length)];
        const price = Math.floor(Math.random() * 200) + 50; // Between $50 and $250
        const tax = price * 0.1;
        const fee = price * 0.05;
        const netTotal = price - fee;
        const review = reviews[Math.floor(Math.random() * reviews.length)];
        const paymentType = paymentTypes[Math.floor(Math.random() * paymentTypes.length)];

        history.push({
            purchaseId: generateRandomString(6),
            itemName: product,
            buyerName: name,
            purchaseEmail: email,
            buyerEmail: email,
            doNotContact: Math.random() > 0.9 ? 1 : 0, // 10% chance to opt out
            purchaseDate: formatDate(purchaseDate),
            purchaseTime: formatTime(purchaseDate),
            subtotal: `$${price}`,
            taxes: `$${tax.toFixed(2)}`,
            shipping: "$0",
            salePrice: `$${(price + tax).toFixed(2)}`,
            fees: `$${fee.toFixed(2)}`,
            netTotal: `$${netTotal.toFixed(2)}`,
            taxIncluded: Math.random() > 0.8 ? 1 : 0, // 20% chance tax included
            streetAddress: `${Math.floor(Math.random() * 9999)} Main St`,
            city: "Sample City",
            zipCode: "12345",
            state: "CA",
            country: "USA",
            referrer: referrers[Math.floor(Math.random() * referrers.length)],
            inAppPurchase: 0,
            refunded: Math.random() > 0.95 ? 1 : 0, // 5% chance of refund
            partialRefund: "$0",
            fullyRefunded: 0,
            disputed: 0,
            disputeWon: 0,
            variants: "",
            discountCode: Math.random() > 0.7 ? "SAVE10" : "",
            recurringCharge: 0,
            freeTrialPurchase: 0,
            preOrderAuthorization: 0,
            productId: generateRandomString(4),
            orderNumber: `${1000 + i}`,
            customFields: "",
            itemPrice: `$${price}`,
            variantsPrice: "$0",
            importedCustomer: 0,
            gifteeEmail: "",
            skuId: "",
            quantity: 1,
            recurrence: "",
            affiliate: "",
            affiliateCommission: "$0",
            discover: Math.random() > 0.8 ? 1 : 0, // 20% chance of discover purchase
            subscriptionEndedDate: "",
            rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
            review: review,
            licenseKey: generateRandomString(6),
            paymentType: paymentType,
            paypalTransactionId: paymentType === "PayPal" ? `PAY-${generateRandomString(6)}` : "",
            paypalFeeAmount: paymentType === "PayPal" ? `$${(fee * 0.5).toFixed(2)}` : "$0",
            paypalFeeCurrency: "USD",
            stripeTransactionId: paymentType === "Credit Card" ? `txn_${generateRandomString(6)}` : "",
            stripeFeeAmount: paymentType === "Credit Card" ? `$${(fee * 0.5).toFixed(2)}` : "$0",
            stripeFeeCurrency: "USD",
            pppDiscounted: Math.random() > 0.9 ? 1 : 0, // 10% chance for PPP discount
            upsold: Math.random() > 0.6 ? 1 : 0, // 40% chance of upsell
            sentAbandonedCartEmail: Math.random() > 0.7 ? 1 : 0, // 30% chance of abandoned cart email
        });
    }

    return history;
}

function generateMockCustomers(numCustomers) {
    const firstNames = ["John", "Jane", "Sarah", "Michael", "Emily", "David", "Jessica", "Daniel", "Laura", "Robert"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "White"];

    const customers = [];

    for (let i = 0; i < numCustomers; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const name = `${firstName} ${lastName}`;
        const email = `${firstName.toLowerCase()}${lastName.toLowerCase()}@gmail.com`;
        const lifetimeValue = `$${(Math.floor(Math.random() * 5000) + 1000).toLocaleString()}`;

        customers.push({
            name: name,
            email: email,
            lifetimeValue: lifetimeValue,
            history: generatePurchaseHistory(name, email),
        });
    }

    return customers;
}

// Generate 100 mock customers
const mockCustomers = generateMockCustomers(100);

console.log(JSON.stringify(mockCustomers, null, 2));
