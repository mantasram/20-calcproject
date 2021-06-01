class Calc {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.buttonsData = [
            { title: 'C', color: 'grey' },
            { title: '+/-', color: 'grey' },
            { title: '%', color: 'grey' },
            { title: '/', color: 'dark' },
            { title: '1', color: 'white' },
            { title: '2', color: 'white' },
            { title: '3', color: 'white' },
            { title: '*', color: 'dark' },
            { title: '4', color: 'white' },
            { title: '5', color: 'white' },
            { title: '6', color: 'white' },
            { title: '-', color: 'dark' },
            { title: '7', color: 'white' },
            { title: '8', color: 'white' },
            { title: '9', color: 'white' },
            { title: '+', color: 'dark' },
            { title: '0', color: 'white' },
            { title: '.', color: 'white' },
            { title: '<', color: 'white' },
            { title: '=', color: 'red' },
        ];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }


    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    render() {
        let HTML = `
        <div class="calc">
        <div class="screen">
            <div class="answer">
                <p>0</p>
            </div>
             <div class="equation"></div>
        </div>
        <div class="keyboard">
            <div class="button grey">C</div>
            <div class="button white">1</div>
            <div class="button white">4</div>
            <div class="button white">7</div>
            <div class="button white">0</div>
            <div class="button grey">+/-</div>
            <div class="button white">2</div>
            <div class="button white">5</div>
            <div class="button white">8</div>
            <div class="button white">.</div>
            <div class="button grey">%</div>
            <div class="button white">3</div>
            <div class="button white">6</div>
            <div class="button white">9</div>
            <div class="button white">&lt;</div>
            <div class="button dark">/</div>
            <div class="button dark">*</div>
            <div class="button dark">-</div>
            <div class="button dark">+</div>
            <div class="button red">=</div>
        </div>
    </div>`

        this.DOM.insertAdjacentHTML('beforeend', HTML);


        this.DOM.innerHTML = HTML;
    }
}

export { Calculator }