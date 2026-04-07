function addRow() {
    var table = document.getElementById("dataTable");
    var newRow = table.insertRow(-1); 
    var cells = [];
    for (var i = 0; i < 13; i++) {
        cells.push(newRow.insertCell(i)); 
    }
   
    cells[0].innerHTML = prompt("Enter Owner Name:");
    cells[1].innerHTML = prompt("Enter Name Of Pet:");
    cells[2].innerHTML = prompt("Enter Email:");
    cells[3].innerHTML = prompt("Enter Address:");
    cells[4].innerHTML = prompt("Enter Contact Number:");
    cells[5].innerHTML = prompt("Enter Age of Pet:");
    cells[6].innerHTML = prompt("Enter Pet Species Type:");
    cells[7].innerHTML = prompt("Enter Pet Breed Type:");
    cells[8].innerHTML = prompt("Enter Color of Pet:");
    cells[9].innerHTML = prompt("Enter Marking of Pet:");
    cells[10].innerHTML = prompt("Enter Gender of Pet:");
    cells[11].innerHTML = prompt("Enter Reason for Visiting:");
    cells[12].innerHTML = '<button id="deletebtn" onclick="deleteRow(this)">Delete</button>'; 
}

function deleteRow(btn) {
    
    var confirmation = confirm("Are you sure you want to delete?");
    
    if (confirmation) {
        
        var row = btn.parentNode.parentNode;
        
        row.parentNode.removeChild(row);
    }else {
            
        return false;
    }
}


function confirmLogout() {
        var confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
           
            window.location.href = "homepage.html"; 
        } else {
            
            return false;
        }
    }

