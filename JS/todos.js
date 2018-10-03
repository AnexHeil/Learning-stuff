var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
while(input !== "quit")
{
    if (input === "new")
    {
        input = prompt("Enter the todo");
        todos.push(input);
    }
    else if (input = "list")
    {
        console.log("***********");
        todos.forEach(function(todo, i)
        {
            console.log(i + " " + todo);
        })
        console.log("***********");
    }
    else if (input === "delete")
    {
        var input = prompt("Enter idex of todo");
        todos.splice(input, 1);
    }
    input = prompt("What would you like to do?");
}