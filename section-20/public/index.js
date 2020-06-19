document.addEventListener('DOMContentLoaded', function() {
  // var url = "http://localhost:8080/data";
  var db = firebase.firestore();
  var todoList, responseData;

  var input = document.getElementById("new-item");

  var addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", addItem);

  var showList = document.getElementById("todo-list");
  showList.addEventListener("click", handleDelete);

  function loadData() {
    db.collection("todos").get().then(function(snap) {
      todoList = snap.docs;
      render();
    });
  }

  loadData();
  
  if(!todoList) {
    todoList = [];
  };

  function handleDelete(event) {
    var button = event.target;
    var itemIndex = button.dataset.id;
    todoList.splice(itemIndex,1);
    // db.collection("todos").doc("").delete()
    // .then(function(docRef) {
    //   return docRef.get();
    // });
    render();
  } 
  
   function addItem() {
    var item = input.value;
    db.collection("todos").add({ action: item })
    .then(function(docRef) {
      return docRef.get();
    })
    .then(function(snap) {
      todoList.push(snap);
      render();
      input.value = "";
    })
  }
  
  function render() {
    var content = todoList.map(function(item,idx) {
      var data = item.data();
      return '<li>' + data.action + `<button data-id=${idx}>delete</button></li>`
    });
    showList.innerHTML = content.join("");
  }
  
  // render(todoList);   
});