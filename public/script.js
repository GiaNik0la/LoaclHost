function warning(){
    alert("Only English Text!!!");
}

function LogInAdmin() {
    var Name = document.getElementById('name').value;
    var Pass = document.getElementById('pass').value;
    if (Name === "Ad123!@#" && Pass === "MYFriendADMIN$$$") {
    window.open('admin.html');
    }
}

var count = 0;

//მასივების შექმნა
var Usernames = [];
var Passwords = [];

//შემოწმება
console.log("running");


//შემოწმების სამუდამო ციკლის დაწყება
while (true) {
    try {
        //ფაილის წაკითხვა
        const data = fs.readFileSync('rame.txt', 'UTF-8');

        //ხაზების გამოყოფა
        const lines = data.split(/\r?\n/);

        //ხაზების განცალკევება
        lines.forEach((line) => {
            //თვლა თუ მერამდენე ხაზია
            count++;

            //პაროლის და სახელის იდენტიფიზირება
            if(count % 2 == 0) {
                //პაროლის მასივში გაგზავნა
                Passwords.push(line);
            } else {
                //სახელის მასივში გაგზავნა
                Usernames.push(line);
            }
        });
    } catch (err) {
        console.error(err);
    }
}