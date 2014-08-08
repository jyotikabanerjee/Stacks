/**
 * Created by jyotikabanerjee on 07/08/14.
 */

function Stack(){
    this.data = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek  = peek;
    this.height = height; //height/length of stack
    this.clr = clear;
    this.print = print;
    this.isEmpty = isEmpty;
    this.toString = toString;
}

function push(elem){
    this.data[this.top] = elem;
    this.top++;
}

function pop(){
    if(this.top < 0){
        console.log("Stack underflow...");
        return "err";
    }
    else {
        this.top--;
        return this.data.pop();
    }
}

function peek(){
    return this.data[this.top-1];
}

function height(){
    return this.data.length;
}

function clear(){
    this.data= [];
    this.top = 0;
}

function print(){
    console.log(this.data);
}

function isEmpty(){
    if(this.top === 0){
        return true;
    }
    else
    {
        return false;
    }
}

function toString(){
    return this.data.toString();
}