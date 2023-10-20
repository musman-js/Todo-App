function add()
{
   var input = document.getElementById("input");
    if(input.value === ""){
        alert("You must write something!")
    }   
    else{
        var liElement = document.createElement("li");
        var listText = document.createTextNode(input.value);
        liElement.appendChild(listText);
        liElement.setAttribute("class" , "list")
        
    }
   
   //    ======Delete Button======
   var delbtn = document.createElement("button");
   var delbtnText = document.createTextNode("Delete");
   delbtn.appendChild(delbtnText);
   delbtn.setAttribute("onclick" , "del(this)");
   delbtn.setAttribute("class" , "btn3")
   liElement.appendChild(delbtn)

//    =======Edit Button=======
   var editbtn = document.createElement("button");
   var editbtnText = document.createTextNode("Edit");
   editbtn.appendChild(editbtnText);
   editbtn.setAttribute("onclick" , "edit(this)");
   editbtn.setAttribute("class" , "btn4")
   liElement.appendChild(editbtn);


//    ======Generate the list on document======
   var ulList = document.getElementById("unorderList");
   ulList.appendChild(liElement);
   input.value = ""

}

// ==========Function for Delete All===========
function deleteAll()
{
    var ulList = document.getElementById("unorderList");
    ulList.innerHTML = ""

}

// ==========Function for Delete one List=========
function del(list)
{
   list.parentNode.remove()
}


// ========Function to Edit the List==========
function edit(Edit)
{
 var userInput = prompt("Enter The Text you want to Edit.");
 Edit.parentNode.firstChild.nodeValue = userInput
}





















// function addtodo() {
//     var input = document.getElementById("inputField");
//     //   console.log(input.value);
  
//     // ***************************Create list*********************************
  
//     var liElement = document.createElement("li");
  
//     var liText = document.createTextNode(input.value);
  
//     liElement.appendChild(liText);
//       // ***********************Delete button**********************************

//   var delbtn = document.createElement("button");

//   var delbtnText = document.createTextNode("Delete");

//   delbtn.appendChild(delbtnText);

//   delbtn.setAttribute("onclick", "deleteItem(this)");

//   liElement.appendChild(delbtn);

//   // ***********************Edit button**********************************

//   var editbtn = document.createElement("button");

//   var editbtnText = document.createTextNode("Edit");

//   editbtn.appendChild(editbtnText);

//   liElement.appendChild(editbtn);

//   editbtn.setAttribute("onclick", "editItem(this)");

//   var list = document.getElementById("list");

//   list.appendChild(liElement);

//   console.log(liElement);

//   input.value = "";
// }

// function deleteAll() {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
// }

// function deleteItem(x) {
//   console.log(x.parentNode.remove());
// }

// function editItem(e) {
//   var input = prompt("Enter updated value...");

//   e.parentNode.firstChild.nodeValue = input;
// }