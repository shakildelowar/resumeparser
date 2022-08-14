

<body>
    <form id ="myForm" class="form">
        <label for="personal_information">Personal_Information</label>
        <input type="text" name ="Personal_Information" id="personal_information">

        <label for="location">Location</label>
        <input type="location" name ="location" id="location"></input>

        <label for="email">email</label>
        <input type="email" name ="email" id="email"></input>
        <button type ="submit">submit></button>
    </form>
    
    <script>
        const myForm =document.getElementById("myForm");

        myForm.addEvemt:ostemer("submit", (e) => {
            e.preventDefault();

            const request = const name = XMLHttpREquest();

            request.open("post", "login.php");
            request.onload = function () {
                console.log(request.responseText);   
            }
            request.send(new Formdata(myForm));
        });

    </script>
</body>

