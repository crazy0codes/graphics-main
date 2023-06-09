hljs.highlightAll()

let copybtn = document.querySelector('.copy');
const elements = document.querySelectorAll('.container');

elements.forEach(element => {
  const copyButton = document.createElement("button");
  copyButton.className = "copy";
  copyButton.innerText = "copy";
  element.querySelector("pre").appendChild(copyButton);

  copyButton.addEventListener("click", copyCode);
});

function copyCode(event) {
  const codeElement = event.target.parentNode.querySelector("code");
  const codeText = codeElement.innerText;

  navigator.clipboard.writeText(codeText)
    .then(() => {
      this.innerText = "copied";
      setTimeout(() => {
        this.innerText = "copy";
      }, 2000);
    })
    .catch((error) => {
      console.error("Failed to copy code: ", error);
    });
}


const questions = document.querySelectorAll('.question');
const dl = document.querySelector('dl');

let count = 0;
let question_number = 0
questions.forEach(
  question => {
    question.id = `q${question_number}`;
    question_number++;
})