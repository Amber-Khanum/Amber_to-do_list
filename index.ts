#!/usr/bin/env node

import inquirer from "inquirer";

let todo_list: string[] = [];
let condition: boolean = true;
while (condition === true) {
  let option = await inquirer.prompt([
    {
      name: "user_input",
      message: "Welcome to To-Do List!\n What do you want to do?",
      type: "list",
      choices: ["Add", "Remove"],
    },
  ]);

  if (option.user_input === "Add") {
    let ansAdd = await inquirer.prompt([
      {
        name: "add_item",
        message: "Add something on your Task List",
        type: "input",
      },
    ]);
    if (ansAdd.user_answer === " ") {
      console.log("add something");
    } else {
      todo_list.push(ansAdd.add_item);
      console.log(todo_list);
    }
  } else if (option.user_input === "Remove") {
    let ansRemove = await inquirer.prompt([
      {
        name: "remove_item",
        message: "Select the tasks to remove",
        type: "list",
        choices: todo_list,
      },
    ]);
    let index_remove = todo_list.indexOf(ansRemove.remove_item);
    if(index_remove >= 0){
        todo_list.splice(index_remove, 1);
        console.log('You removed', ansRemove.remove_item)
        console.log(todo_list);
    }
  }
  let user_answer = await inquirer.prompt([{
    type: 'confirm',
    name: 'selection',
    message: 'Do you want to continue?',
    default: true
  }])
  if(user_answer.selection === false){
    condition = false;
  }
}
