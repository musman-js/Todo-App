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




















