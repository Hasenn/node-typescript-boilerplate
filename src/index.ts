import "./config"
import config from "./config"

function greeting(name: string): string {
  return `hello ${name}! How are you?`;
}

console.log(greeting("Joe"));
