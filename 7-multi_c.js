const script = "C is fun";
const count = parseInt(process.argv[2]);

if (!isNaN(count)) {
    for (let i = 0; i < count; i++) {
        console.log(script);
    }
} else {
    console.log("Missing number of occurrences");
}