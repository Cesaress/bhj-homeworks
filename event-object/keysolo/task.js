class Game {
  constructor(container) {

    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.status__timer');

    this.reset();

    this.registerEvents();

  }

  reset() {

    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;

  }

  registerEvents() {

    setInterval(() => {

      --this.timer.textContent;

      if (this.timer.textContent == 0) {

        this.fail();

      }

    }, 1000); 

    document.addEventListener('keypress', (event) => {

      let char = event.key.toLowerCase();

      let charWord = this.currentSymbol.textContent;

      if (char == charWord) {

        this.success();

      } else {

        this.fail();

      }

    });

  }

  success() {

    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {

      return;

    }

    if (++this.winsElement.textContent === 10) {

      alert('Победа!');
      this.reset();

    }

    this.setNewWord();

  }

  fail() {

    if (++this.lossElement.textContent === 5) {

      alert('Вы проиграли!');
      this.reset();

    }

    this.setNewWord();

  }

  setNewWord() {

    const word = this.getWord();
    this.timer.textContent = word.length;

    this.renderWord(word);

  }

  getWord() {

    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ], index = Math.floor(Math.random() * words.length);

    return words[index];

  }

  renderWord(word) {

    const html = [...word].map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      ).join('');

    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    
  }
  
}

new Game(document.getElementById('game'));

