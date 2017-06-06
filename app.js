
function addlist(){
  var input = document.getElementById('addInput').value
  if(addInput.value === "" || addInput.value === " "){
      alert("Please Write Something!")
  }
  else{
       var li = document.createElement('li');
        var img = document.createElement('img');

        img.src = "images.png"; 
        img.onclick = function() {
            var dli = this.parentNode;
            var dol = dli.parentNode;
            dol.removeChild(dli);


        };
        var inputnode = document.createTextNode(input);
        li.appendChild(inputnode);
        li.appendChild(img);
        list.appendChild(li);
        document.getElementById('addInput').value = '';

    

    // var newLi = document.createElement('LI')
    // var newText = document.createTextNode(input)
    // newLi.appendChild(newText)
    // document.getElementById('list').appendChild(newLi)
    // console.log(input)
}
  }



function deletelist(){


       list.innerHTML = '';
}