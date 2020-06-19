var url = "http://localhost:8080/data";
var todoList, responseData;

function loadData() {
  axios.get(url).then(function(res) {
    todoList = res.data;
    render(todoList);
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
// else {
//   todoList = [];
// } 

// var todoList = [
//   "di cho",
//   "nau com",
//   "don ghe"
// ]

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

render(todoList);