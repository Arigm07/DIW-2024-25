// Code to append a click to copy button
var snippets = document.getElementsByTagName("pre");
var numberOfSnippets = snippets.length;

for (var i = 0; i < numberOfSnippets; i++) {
  code = snippets[i].getElementsByTagName("code")[0].innerText;
  snippets[i].classList.add("hljs"); // append copy button to pre tag
  snippets[i].innerHTML = '<button class="hljs-copy">Copiar</button>' + snippets[i].innerHTML; // append copy button
  snippets[i].getElementsByClassName("hljs-copy")[0].addEventListener("click", function () {
    this.innerText = "Copiando...";
    if (!navigator.userAgent.toLowerCase().includes("safari")) {
      navigator.clipboard.writeText(code);
    } else {
      prompt("Clipboard (Select: ⌘+a > Copy:⌘+c)", code);
    }
    this.innerText = "¡Copiado!";
    button = this;
    setTimeout(function () {
      button.innerText = "Copiar";
    }, 1000);
  });
}
