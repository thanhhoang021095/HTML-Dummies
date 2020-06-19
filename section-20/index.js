document.addEventListener('DOMContentLoaded', function() {
  // var url = "http://localhost:8080/data";
  var db = firebase.firestore();
  var todoList, responseData;

  function loadData() {
    db.collection("todos").get().then(function(snap) {
      // todoList = snap.data;
      console.log(snap)
      // render(todoList);
    });
  }
  loadData();
  
  var input = document.getElementById("new-item");
  var addBtn = document.getElementById("add-btn");
  var showList = document.getElementById("todo-list");
  
  // var data = localStorage.getItem("todoList");
  
  if(!todoList) {
    todoList = [];
  } 

  addBtn.addEventListener("click", addItem);
  
  async function addItem() {
    var item = input.value;
    try {
      var postRequest = await axios.post(url, {
        id: ++todoList[todoList.length - 1].id,
        action: item
      }); 
    }
    catch(error) {
      console.log(error);
    }
    input.value = "";
    loadData();
    // store data
    
  }
  
  function render(items) {
    var content = items.map(function(item) {
      return '<li>' + item.action + '</li>'
    });
    showList.innerHTML = content.join("");
  }
  
  // render(todoList);   
});
