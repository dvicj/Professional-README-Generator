# Professional-README-Generator

Hello, and welcome to my README! This is for my Week 9 Challenge, which was to create a Professional README Generator using Node.js. I learned a lot while doing this, and I am happy to be able to share my experience with you. 

[Video demo of application](https://drive.google.com/file/d/16AiOsAvXU_XNQcv_Ha3UVVpMu30WUXwu/view?usp=sharing)

It was my job to ensure my Professional README Generator had the following features: 

- a command-line application that accepts user input 

- a professional README is generated based on questions asked to the user. 
  
- user is to enter a description, installation instructions, usage information, issues, and contact information which are added to the appropriate sections of the README.
  
- when the user chooses a license for their project, a badge for that license is added to the top of the README and a link to that license is under the "License:" seciton.
  
- when the user enters their GitHub username, it is added to the "Questions" section as a clickable link. 
  
- when the user enters their email, it is added to the "Questions" section as a clickable "mailto" link
  
- when the user clicks on the links in the "Table of Contents" they are brought to that section in the README.


I was to create this README Generator, and meet all of the requirements listed above, by using: 

- the command-line
- Node.js
- NPMs
- JavaScript
- Markdown
  
I completed this project as I wanted a simple and succint way to create a README for a project.

It is important that I am able to showcase what I can do in an interactive and meaningful way. 

Features: 


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Learning](#learning)
* [License](#license)


## Installation

The user must have [Node.js](https://nodejs.org/en/download/) installed on their computer. Once Node is installed, the user must open the command-line (I used [GitBash](https://git-scm.com/downloads)), and enter "npm install "[inquirer](https://www.npmjs.com/package/inquirer#installation)"". This will allow the user to enter answers to prompts on the command-line.

The user must then clone all files from this repo. 

Then, the user simply then has to enter "node index.js" on the command line and they will be asked a series of questions. Once complete, they will be alerted that their file was created. The README.md document will be saved in the "dist" file and it is ready to use!

## Usage

Here are some user experience highlights from my page: 

   - if the user does not answer one of the required questions, they will be prompted until they answer
    
   - if the user does not answer one of the optional questions, an empty string will be logged in the README, not "undefined"
    
   - the README has a nice badge for the license at the top of the page so whoever sees the README will know the license type right away
    
## Credits

These are some sources I used to help me along:

- [inquirer NPM](https://www.npmjs.com/package/inquirer)

- [License badges](https://shields.io/)

- [Node.js](https://nodejs.org/en/download/)

- [License links](https://opensource.org/licenses)

- [Professional README guide](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md)

## Learning

Here are the highlights of what I learned and issues I had while writing this code.

1. I had a hard time making the .gitignore work, I couldnt seem to get my JSON files NOT to be added to GitHub. I know I did something wrong, so I will have to work on that in the future.

2. I really liked the idea of answering some questions and getting a completed product out of it, but I like adding photos and gifs to my READMEs, which I obviously couldn't from the command-line. I know they can be added later, but it would have been nice to finish the whole thing in one shot. I will have to look into other options for this. 

3. I like the ES6 JavaScript, I really got a hang of the arrow functions. I will say, I do have a hard time wrapping my head around promises and asynchronous functions. I will have to work harder on those. 

## License

MIT License

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet)

Copyright (c) 2020 Devin Jones 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
