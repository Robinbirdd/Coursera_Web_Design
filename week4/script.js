var names = ["Robin", "John", "JackyLove", "Faker", "Guma", "Keria", "Joe"];
for(var i=0; i<names.length; i++) {
    if(names[i][0] == 'j' || names[i][0] == 'J') {
        console.log("Goodbye " + names[i]);
    }
    else {
        console.log("Hello " + names[i]);
    }
}