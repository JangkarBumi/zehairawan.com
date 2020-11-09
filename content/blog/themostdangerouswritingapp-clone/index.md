---
title: Building themostdangerouswritingapp Clone
date: "2020-11-09"
description: "How to build themostdangerouswritingapp Clone"
---
Writer's block is a real problem that has been bothering writer's for a long time. One of the many approach to solve it is to just keep writing everyday and not thinking too much about the quality. The reasoning behind it if you have already wrote 10 pages, chances are a few of them is actually quite good. For example Tim Ferris quota is just [two crappy pages per day](https://tim.blog/2013/12/09/the-ugly-new-york-times-bestseller-the-creative-process-in-action/).

themostdangerouswritingapp has a unique solution to this problem. The approach is to delete all of the user writings if they stops typing for more than 5 seconds, or they can download the writing as txt file if they passed the word or time goal they set before. Fear of losing motivates the user to keep writing.

The following is my approach to build themostdangerouswritingapp.
I do this without looking at the source code and just observing the features. Now the domain [http://themostdangerouswritingapp.com/](http://themostdangerouswritingapp.com/) is acquired by Squibler as part of their marketing strategy to promote their app.
You can find the original source code made by Manuel Ebert [here](https://github.com/maebert/themostdangerouswritingapp).


Here are the basics features
1. set word goal at the homepage and share it with Editor component.
2. Count the words.
3. Enable download button & download feature after pass the world goal.
4. Delete words if after 5 secs the user stops writing.


## Solutions

1. Use React Context Hooks

In order to pass wordGoal from Landing to Editor component, we have two options. Lift up the state to the parent component and communicate there, or make it global.

In this instance i chose to make it global by using useContext hooks, we can also use redux but i think it's an overkill for this use case.

2. text.split(' ').length to count word by spaces.

3. handleDownload
The following code snippet will allow us to download user input value as txt file, which is the `text` variable.

`
const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'risky-writing-app.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
`

4. useEffect

`
useEffect(() => {
    const timer = setTimeout(() => {
      alert('Destroyed!');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);
`

I'm using react-router-dom package to manage the routing in this app.



[Live Version](https://jangkarbumi.github.io/risky-writing-app/)

[Source Code on Github](https://github.com/JangkarBumi/risky-writing-app)