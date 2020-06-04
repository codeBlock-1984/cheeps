class Cheeps {
  constructor() {
  }

  init() {
    let cheeper = document.getElementById('cheeper');
    cheeper.addEventListener('click', this.chirp);
  }

  chirp() {
    let textBox = document.getElementById('cheepTextBox');
    textBox.classList.add('cheep-text');
    textBox.innerText = 'hello there';
  }
}

export default Cheeps;
