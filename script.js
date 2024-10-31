//1. Create an array of people's names called myArray. This will be the default original list of names.

let myArray = ["lawrence", "Mike", "John", "Larry", "Maaike"];
//console.log(myArray);

//2. Select the page elements as JavaScript objects so they can easily be selected within the code.

voteInput = document.getElementById("addFriend");
//console.log(voteInput);

addButton = document.getElementById("addNew");
//console.log(addButton);

myTable = document.getElementById("output");
console.log(myTable);


/* 3. Add event listener to the Add Friend button. Once clicked, this will get the value from the input field and pass the values to a function that will add the friend list to the page. Additionally, add the new friend's name into the
people's names array you created. Get the current value in the input field and push that value into the array so the array matches the values on the page.*/

addButton.addEventListener("click", addToFriendList);

function addToFriendList(){
    myTable.innerText = inputValue();
    //console.log(inputValue());
    myArray.push(myTable.innerText);
    //console.log(myArray);

    myTable.innerText = myArray;
}

function inputValue (){
    return voteInput.value;
    //console.log(voteInput.value);
}



