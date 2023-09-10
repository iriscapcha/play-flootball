// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}
function down ()
{
    if(ball_y <=450)
    {
        ball_y = ball_y+image_image_height;
        console.log("block image height =" + block_image_height);
        console.log("when down arrow key is pressed, X = " + ball_x)
    }
}



