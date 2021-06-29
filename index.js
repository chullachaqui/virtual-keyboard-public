const KEY_MAP = {
    tilde: {
        lang: {
            default: {
                primary: '\`',
                secondary: '\~',
            },
            ru: {
                primary: '\'',
                secondary: '₴',
            },
        },
        code: 'Backquote',
        size: 1,
        type: 'symbol'
    },

    one: {
        lang: {
            default: {
                primary: '1',
                secondary: '!'
            },
            ru: {
                primary: '1',
                secondary: '!'
            },
        },
        code: 'Digit1',
        size: 1,
        type: 'digit'
    },

    two: {
        lang: {
            default: {
                primary: '2',
                secondary: '@'
            },
            ru: {
                primary: '2',
                secondary: '@'
            },
        },
        code: 'Digit2',
        size: 1,
        type: 'digit'
    },

    three: {
        lang: {
            default: {
                primary: '3',
                secondary: '#'
            },
            ru: {
                primary: '3',
                secondary: '#'
            },
        },
        code: 'Digit3',
        size: 1,
        type: 'digit'
    },

    four: {
        lang: {
            default: {
                primary: '4',
                secondary: '$'
            },
            ru: {
                primary: '4',
                secondary: '$'
            },
        },
        code: 'Digit4',
        size: 1,
        type: 'digit'
    },

    five: {
        lang: {
            default: {
                primary: '5',
                secondary: '%'
            },
            ru: {
                primary: '5',
                secondary: '%'
            },
        },
        code: 'Digit5',
        size: 1,
        type: 'digit'
    },

    six: {
        lang: {
            default: {
                primary: '6',
                secondary: '^'
            },
            ru: {
                primary: '6',
                secondary: '^'
            },
        },
        code: 'Digit6',
        size: 1,
        type: 'digit'
    },

    seven: {
        lang: {
            default: {
                primary: '7',
                secondary: '&'
            },
            ru: {
                primary: '7',
                secondary: '&'
            },
        },
        code: 'Digit7',
        size: 1,
        type: 'digit'
    },

    eight: {
        lang: {
            default: {
                primary: '8',
                secondary: '*'
            },
            ru: {
                primary: '8',
                secondary: '*'
            },
        },
        code: 'Digit8',
        size: 1,
        type: 'digit'
    },

    nine: {
        lang: {
            default: {
                primary: '9',
                secondary: '('
            },
            ru: {
                primary: '9',
                secondary: '('
            },            
        },
        code: 'Digit9',
        size: 1,
        type: 'digit'
    },

    zero: {
        lang: {
            default: {
                primary: '0',
                secondary: ')'
            },
            ru: {
                primary: '0',
                secondary: ')'
            },
        },
        code: 'Digit0',
        size: 1,
        type: 'digit'
    },

    minus: {
        lang: {
            default: {
                primary: '-',
                secondary: '_'
            },
            ru: {
                primary: '-',
                secondary: '_'
            },
        },
        code: 'Minus',
        size: 1,
        type: 'symbol'
    },

    equal: {
        lang: {
            default: {
                primary: '=',
                secondary: '+'
            },
            ru: {
                primary: '=',
                secondary: '+'
            },
        },
        code: 'Equal',
        size: 1,
        type: 'symbol'
    },

    Backspace: {
        code: 'Backspace',
        size: 2,
        type: 'special',
        label: 'Backspace'
    },

    Tab: {
        lang: {
            default: {
                primary: '\t',
                secondary: ''
            },
        },
        code: 'Tab',
        size: 2,
        type: 'special',
        label: 'Tab'
    },

    Q: {
        lang: {
            default: {
                primary: 'q',
                secondary: 'Q',
            },
            ru: {
                primary: 'й',
                secondary: 'Й',
            }
        },
        code: 'KeyQ',
        size: 1,
        type: 'letter'
    },

    W: {
        lang: {
            default: {
                primary: 'w',
                secondary: 'W',
            },
            ru: {
                primary: 'ц',
                secondary: 'Ц',
            }
        },
        code: 'KeyW',
        size: 1,
        type: 'letter'
    },

    E: {
        lang: {
            default: {
                primary: 'e',
                secondary: 'E',
            },
            ru: {
                primary: 'у',
                secondary: 'У',
            }
        },
        code: 'KeyE',
        size: 1,
        type: 'letter'
    },

    R: {
        lang: {
            default: {
                primary: 'r',
                secondary: 'R',
            },
            ru: {
                primary: 'к',
                secondary: 'К',
            }
        },
        code: 'KeyR',
        size: 1,
        type: 'letter'
    },

    T: {
        lang: {
            default: {
                primary: 't',
                secondary: 'T',
            },
            ru: {
                primary: 'н',
                secondary: 'Н',
            }
        },
        code: 'KeyT',
        size: 1,
        type: 'letter'
    },

    Y: {
        lang: {
            default: {
                primary: 'y',
                secondary: 'Y',
            },
            ru: {
                primary: 'н',
                secondary: 'Н',
            }
        },
        code: 'KeyY',
        size: 1,
        type: 'letter'
    },

    U: {
        lang: {
            default: {
                primary: 'u',
                secondary: 'U',
            },
            ru: {
                primary: 'г',
                secondary: 'Г',
            }
        },
        code: 'KeyU',
        size: 1,
        type: 'letter'
    },

    I: {
        lang: {
            default: {
                primary: 'i',
                secondary: 'I',
            },
            ru: {
                primary: 'ш',
                secondary: 'Ш',
            }
        },
        code: 'KeyI',
        size: 1,
        type: 'letter'
    },

    O: {
        lang: {
            default: {
                primary: 'o',
                secondary: 'O',
            },
            ru: {
                primary: 'щ',
                secondary: 'Щ',
            }
        },
        code: 'KeyO',
        size: 1,
        type: 'letter'
    },

    P: {
        lang: {
            default: {
                primary: 'p',
                secondary: 'P',
            },
            ru: {
                primary: 'з',
                secondary: 'З',
            }
        },
        code: 'KeyP',
        size: 1,
        type: 'letter'
    },

    bracketLeft: {
        lang: {
            default: {
                primary: '[',
                secondary: '{',
            },
            ru: {
                primary: 'х',
                secondary: 'Х',
                type: 'letter'
            }
        },
        code: 'BracketLeft',
        size: 1,
        type: 'symbol'
    },

    bracketRight: {
        lang: {
            default: {
                primary: ']',
                secondary: '}',
            },
            ru: {
                primary: 'ї',
                secondary: 'Ї',
                type: 'letter'
            }
        },
        code: 'BracketRight',
        size: 1,
        type: 'symbol'
    },

    slashes: {
        lang: {
            default: {
                primary: '\\',
                secondary: '|',
            },
            ru: {
                primary: '\\',
                secondary: '/',
            },
        },
        code: 'Backslash',
        size: 1,
        type: 'symbol'
    },

    Delete: {
        code: 'Delete',
        size: 1,
        type: 'special',
        label: 'Del'
    },

    Capslock: {
        code: 'CapsLock',
        size: 2,
        type: 'special',
        label: 'Caps Lock'
    },

    A: {
        lang: {
            default: {
                primary: 'a',
                secondary: 'A',
            },
            ru: {
                primary: 'ф',
                secondary: 'Ф',
            }
        },
        code: 'KeyA',
        size: 1,
        type: 'letter'
    },

    S: {
        lang: {
            default: {
                primary: 's',
                secondary: 'S',
            },
            ru: {
                primary: 'і',
                secondary: 'І',
            }
        },
        code: 'KeyS',
        size: 1,
        type: 'letter'
    },

    D: {
        lang: {
            default: {
                primary: 'd',
                secondary: 'D',
            },
            ru: {
                primary: 'в',
                secondary: 'В',
            }
        },
        code: 'KeyD',
        size: 1,
        type: 'letter'
    },

    F: {
        lang: {
            default: {
                primary: 'f',
                secondary: 'F',
            },
            ru: {
                primary: 'а',
                secondary: 'А',
            }
        },
        code: 'KeyF',
        size: 1,
        type: 'letter'
    },

    G: {
        lang: {
            default: {
                primary: 'g',
                secondary: 'G',
            },
            ru: {
                primary: 'п',
                secondary: 'П',
            }
        },
        code: 'KeyG',
        size: 1,
        type: 'letter'
    },

    H: {
        lang: {
            default: {
                primary: 'h',
                secondary: 'H',
            },
            ru: {
                primary: 'р',
                secondary: 'Р',
            }
        },
        code: 'KeyH',
        size: 1,
        type: 'letter'
    },

    J: {
        lang: {
            default: {
                primary: 'j',
                secondary: 'J',
            },
            ru: {
                primary: 'о',
                secondary: 'О',
            }
        },
        code: 'KeyJ',
        size: 1,
        type: 'letter'
    },

    K: {
        lang: {
            default: {
                primary: 'k',
                secondary: 'K',
            },
            ru: {
                primary: 'л',
                secondary: 'Л',
            }
        },
        code: 'KeyK',
        size: 1,
        type: 'letter'
    },

    L: {
        lang: {
            default: {
                primary: 'l',
                secondary: 'L',
            },
            ru: {
                primary: 'д',
                secondary: 'Д',
            }
        },
        code: 'KeyL',
        size: 1,
        type: 'letter'
    },

    colon: {
        lang: {
            default: {
                primary: ';',
                secondary: ':',
            },
            ru: {
                primary: 'ж',
                secondary: 'Ж',
                type: 'letter'
            }
        },
        code: 'Semicolon',
        size: 1,
        type: 'symbol'
    },

    quote: {
        lang: {
            default: {
                primary: '\'',
                secondary: '\"',
            },
            ru: {
                primary: 'є',
                secondary: 'Є',
                type: 'letter'
            }
        },
        code: 'Quote',
        size: 1,
        type: 'symbol'
    },

    Enter: {
        lang: {
            default: {
                primary: '\n',
                secondary: '\n',
            },
        },
        code: 'Enter',
        size: 2,
        type: 'special',
        label: 'Enter'
    },

    ShiftLeft: {
        code: 'ShiftLeft',
        size: 2,
        type: 'special',
        label: 'Shift'
    },

    Z: {
        lang: {
            default: {
                primary: 'z',
                secondary: 'Z',
            },
            ru: {
                primary: 'я',
                secondary: 'Я',
            }
        },
        code: 'KeyZ',
        size: 1,
        type: 'letter'
    },

    X: {
        lang: {
            default: {
                primary: 'x',
                secondary: 'X',
            },
            ru: {
                primary: 'ч',
                secondary: 'Ч',
            }
        },
        code: 'KeyX',
        size: 1,
        type: 'letter'
    },

    C: {
        lang: {
            default: {
                primary: 'c',
                secondary: 'C',
            },
            ru: {
                primary: 'с',
                secondary: 'С',
            }
        },
        code: 'KeyC',
        size: 1,
        type: 'letter'
    },

    V: {
        lang: {
            default: {
                primary: 'v',
                secondary: 'V',
            },
            ru: {
                primary: 'м',
                secondary: 'М',
            }
        },
        code: 'KeyV',
        size: 1,
        type: 'letter'
    },

    B: {
        lang: {
            default: {
                primary: 'b',
                secondary: 'B',
            },
            ru: {
                primary: 'и',
                secondary: 'И',
            }
        },
        code: 'KeyB',
        size: 1,
        type: 'letter'
    },

    N: {
        lang: {
            default: {
                primary: 'n',
                secondary: 'N',
            },
            ru: {
                primary: 'т',
                secondary: 'Т',
            }
        },
        code: 'KeyN',
        size: 1,
        type: 'letter'
    },

    M: {
        lang: {
            default: {
                primary: 'm',
                secondary: 'M',
            },
            ru: {
                primary: 'ь',
                secondary: 'Ь',
            }
        },
        code: 'KeyM',
        size: 1,
        type: 'letter'
    },

    comma: {
        lang: {
            default: {
                primary: ',',
                secondary: '<',
            },
            ru: {
                primary: 'б',
                secondary: 'Б',
                type: 'letter'
            }
        },
        code: 'Comma',
        size: 1,
        type: 'symbol'
    },

    period: {
        lang: {
            default: {
                primary: '.',
                secondary: '>',
            },
            ru: {
                primary: 'ю',
                secondary: 'Ю',
                type: 'letter'                
            }
        },
        code: 'Period',
        size: 1,
        type: 'symbol'
    },

    slash: {
        lang: {
            default: {
                primary: '/',
                secondary: '?',
            },
            ru: {
                primary: '.',
                secondary: ',',
                
            }
        },
        code: 'Slash',
        size: 1,
        type: 'symbol'
    },

    up: {
        icon: "\u2191",
        code: 'ArrowUp',
        size: 1,
        type: 'arrow'
    },

    ShiftRight: {
        code: 'ShiftRight',
        size: 2,
        type: 'special',
        label: 'Shift'
    },

    CtrlLeft: {
        code: 'ControlLeft',
        size: 1,
        type: 'special',
        label: 'Ctrl'
    },

    Win: {
        code: 'MetaLeft',
        size: 1,
        type: 'special',
        label: 'Win'
    },

    AltLeft: {
        code: 'AltLeft',
        size: 1,
        type: 'special',
        label: 'Alt'
    },

    Space: {
        lang: {
            default: {
                primary: ' ',
                secondary: ' ',
            },
        },
        code: 'Space',
        size: 5,
        type: 'space',
        label: ''
    },

    AltRight: {
        code: 'AltRight',
        size: 1,
        type: 'special',
        label: 'Alt'
    },

    CtrlRight: {
        code: 'ControlRight',
        size: 1,
        type: 'special',
        label: 'Ctrl'
    },

    left: {
        icon: "\u2190",
        code: 'ArrowLeft',
        size: 1,
        type: 'arrow'
    },

    down: {
        icon: "\u2193",
        code: 'ArrowDown',
        size: 1,
        type: 'arrow'
    },

    right: {
        icon: "\u2192",
        code: 'ArrowRight',
        size: 1,
        type: 'arrow'
    },
};

var selectedLang = localStorage.getItem('language') || 'eng';

const KEYBOARD = [
    [KEY_MAP.tilde, KEY_MAP.one, KEY_MAP.two, KEY_MAP.three, KEY_MAP.four, KEY_MAP.five, KEY_MAP.six, KEY_MAP.seven, KEY_MAP.eight, KEY_MAP.nine, KEY_MAP.zero, KEY_MAP.minus, KEY_MAP.equal, KEY_MAP.Backspace],
    [KEY_MAP.Tab, KEY_MAP.Q, KEY_MAP.W, KEY_MAP.E, KEY_MAP.R, KEY_MAP.T, KEY_MAP.Y, KEY_MAP.U, KEY_MAP.I, KEY_MAP.O, KEY_MAP.P, KEY_MAP.bracketLeft, KEY_MAP.bracketRight, KEY_MAP.slashes, KEY_MAP.Delete],
    [KEY_MAP.Capslock, KEY_MAP.A, KEY_MAP.S, KEY_MAP.D, KEY_MAP.F, KEY_MAP.G, KEY_MAP.H, KEY_MAP.J, KEY_MAP.K, KEY_MAP.L, KEY_MAP.colon, KEY_MAP.quote, KEY_MAP.Enter],
    [KEY_MAP.ShiftLeft, KEY_MAP.Z, KEY_MAP.X, KEY_MAP.C, KEY_MAP.V, KEY_MAP.B, KEY_MAP.N, KEY_MAP.M, KEY_MAP.comma, KEY_MAP.period, KEY_MAP.slash, KEY_MAP.up, KEY_MAP.ShiftRight], 
    [KEY_MAP.CtrlLeft, KEY_MAP.Win, KEY_MAP.AltLeft, KEY_MAP.Space, KEY_MAP.AltRight, KEY_MAP.left, KEY_MAP.down, KEY_MAP.right, KEY_MAP.CtrlRight]
];

const generateEl = ({parent, elementName, className, name}) => {
    const el = document.createElement(elementName);
    el.classList.add(className);
    parent.appendChild(el);
    el.setAttribute('name', `${name}`);
    return el;
}

const textField = generateEl({
    parent: document.body,
    elementName: 'textarea',
    className: 'textField',
})

textField.setAttribute('placeholder', "Press Ctrl + Alt to switch languages");
textField.setAttribute('rows', '15');
textField.setAttribute('cols', '100');

// Please uncomment the following line if you want to preserve typed text after switching languages:
// textField.textContent = localStorage.getItem('typedText') || '';

const containerEl = generateEl({
    parent: document.body,
    elementName: 'div',
    className: 'keyboard-container',
});


const getLabel = (buttonData) => {
    if (buttonData.type === 'special') {
        return buttonData.label;
    }
    var engPath = buttonData.lang.default;
    var ruPath = buttonData.lang.ru;    

    if (buttonData.type === 'arrow') {
        return buttonData.icon;
    }

    if (selectedLang === 'eng') {
        if (buttonData.type === 'letter') { return engPath.secondary; }
        if (buttonData.type === 'symbol' || buttonData.type === 'digit') {
            const labelDiv = document.createElement('div');
            const primary = document.createElement('div');
            primary.append(`${engPath.secondary}`)
            const secondary = document.createElement('div');
            secondary.append(`${engPath.primary}`)
            labelDiv.append(primary);
            labelDiv.append(secondary);
            return labelDiv;
        }
    }

    if (selectedLang === 'ru') {
        if (!ruPath) { return engPath.primary; }
        if (buttonData.type === 'letter' || ruPath.type === 'letter') { return ruPath.secondary; }
        if (buttonData.type === 'symbol' || buttonData.type === 'digit') {
            const labelDiv = document.createElement('div');
            const primary = document.createElement('div');
            primary.append(`${ruPath.secondary}`)
            const secondary = document.createElement('div');
            secondary.append(`${ruPath.primary}`)
            labelDiv.append(primary);
            labelDiv.append(secondary);
            return labelDiv;
        }        
    }
    return buttonData.lang.default.primary;
}

KEYBOARD.forEach((row) => {
    const rowEl = generateEl({
        parent: containerEl,
        elementName: 'div',
        className: 'keyboard-row',
    });

    row.forEach((button) => {
        const buttonEl = generateEl({
            parent: rowEl,
            elementName: 'div',
            className: 'keyboard-button' + `${button.size}`,
            name: `${button.code}`
        });

        if (button.type === 'special' || button.type === 'arrow') { buttonEl.classList.add('special'); }
        
        if (button.lang || button.type === 'special') {
            const labelEl = generateEl({
                parent: buttonEl,
                elementName: 'div',
                className: 'label',
            });
            const label = getLabel(button);
            labelEl.append(label);
        } else if (button.type === 'arrow') {
            buttonEl.classList.add('arrow');
            buttonEl.append(button.icon)
        }

        const highlight = (pressed) => {
            const CapsLock = document.getElementsByName('CapsLock')[0];
            if (pressed.code === button.code || pressed.toElement === buttonEl) {
                if (pressed.code === 'CapsLock'|| pressed.toElement === CapsLock) {
                    CapsLock.classList.toggle('keypressed');
                } else {
                buttonEl.classList.add('keypressed');
                }
            }
        }

        const unhighlight = (pressed) => {
            const CapsLock = document.getElementsByName('CapsLock')[0];
            if (pressed.code === button.code && pressed.code !== 'CapsLock' || pressed.toElement === buttonEl  && pressed.toElement !== CapsLock) {
                buttonEl.classList.remove('keypressed');
            }
        }

        const write = (pressed) => {
            var text = textField.innerHTML;
            var start = textField.selectionStart;
            var end = textField.selectionEnd;

            const Delete = document.getElementsByName('Delete')[0];
            const Backspace = document.getElementsByName('Backspace')[0];
                        
            if (pressed.code === button.code || pressed.toElement === buttonEl) {
                
                if (pressed.code === 'Backspace' || pressed.toElement === Backspace) {
                
                    if (start === end && start !== 0) {
                        textField.innerHTML = text.slice(0, start - 1) + text.slice(end);
                        textField.setSelectionRange(start - 1, end - 1);
                        return textField.innerHTML;
                    }
                        
                    if (start !== end) {
                        textField.innerHTML = text.slice(0, start) + text.slice(end);
                        textField.setSelectionRange(start, start);
                        return textField.innerHTML;
                    }
                        
                    if (start === end) {
                        return textField.innerHTML;
                    }

                } else if (pressed.code === 'Delete' || pressed.toElement === Delete) {

                    if (start === end) {
                
                        if (start === text.length) {
                            return textField.innerHTML;
                        } else if (start !== 0) {
                            textField.innerHTML = text.slice(0, start) + text.slice(end + 1);
                            textField.setSelectionRange(start, end);
                            return textField.innerHTML;
                        } else {
                            textField.innerHTML = text.slice(1);
                            return textField.innerHTML;
                        }                            
                    } else if (start != end) {
                        textField.innerHTML = text.slice(0, start) + text.slice(end);
                        textField.setSelectionRange(start, start);
                        return textField.innerHTML;
                    }
                } else if (button.type === 'arrow') {
                    switch (button.code) {
                        case 'ArrowLeft': textField.setSelectionRange(start - 1, end - 1);
                        break;
                        case 'ArrowRight': textField.setSelectionRange(start + 1, end + 1);
                        break;
                        case 'ArrowUp': textField.setSelectionRange(start - (textField.cols + 5), end - (textField.cols + 5));
                        break;
                        case 'ArrowDown': textField.setSelectionRange(start + (textField.cols + 5), end + (textField.cols + 5));
                        break;
                    }
                } else if (!button.lang) {
                    return textField.innerHTML; 
                }
                
                 else {
                    let alphabet = selectedLang === 'eng' ? button.lang.default : button.lang.ru;         

                    let insertedSymbol;

                    const shifts = [document.getElementsByClassName('keyboard-row')[3].firstChild].concat(document.getElementsByClassName('keyboard-row')[3].lastChild);
                    const CapsLock = document.getElementsByName('CapsLock')[0];

                    if (shifts.some((shift) => shift.classList.contains('keypressed')) || CapsLock.classList.contains('keypressed')) {
                        insertedSymbol = alphabet.secondary;
                    } else if (!alphabet) {
                        insertedSymbol = button.lang.default.primary;
                    } else {
                        insertedSymbol = alphabet.primary;
                    }

                    textField.innerHTML = text.slice(0, start) + insertedSymbol + text.slice(end);

                    if (button.type !== 'arrow') {
                        if (start === end) {
                            textField.setSelectionRange(start + 1, end + 1)
                        } else {
                            textField.setSelectionRange(start + 1, start + 1)
                        }
                    }

                    return textField.innerHTML;
                }
            }
        }

        document.addEventListener("keydown", highlight);
        document.addEventListener("keydown", write);
        document.addEventListener("keyup", unhighlight);   
        
        document.addEventListener("mousedown", write);
        document.addEventListener("mousedown", highlight);
        document.addEventListener("mouseup", unhighlight);
    })
})

var changeLang = (pressed) => {
    pressed.preventDefault();

    if (pressed.ctrlKey && pressed.altKey) {
        selectedLang = selectedLang === 'eng' ? 'ru' : 'eng';
        localStorage.setItem('language', `${selectedLang}`);
        localStorage.setItem('typedText', `${textField.textContent}`);        
        document.location.reload();
    }
}

document.addEventListener("keydown", changeLang);

textField.addEventListener("blur", () => textField.focus());
