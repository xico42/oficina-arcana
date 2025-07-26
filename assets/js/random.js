function dx(x) {
    return Math.floor(Math.random() * x) + 1;
}

function xd6(x) {
    let sum = 0
    for (let i = 0; i < x; i++) {
        sum += dx(6);
    }
    return sum;
}

function shouldRecreateAttributes(attributes) {
    let total = 0;
    let threshold = 9;
    for (let key in attributes) {
        if (attributes[key] < threshold) {
            total += 1;
        }
    }

    let highest = highestAttribute(attributes);

    return total > 2 || highest.value < 13;
}

function highestAttribute(attributes) {
    const highest = Object.entries(attributes).reduce((max, [key, value]) => {
        return value > max.value ? { key, value } : max;
    }, { key: null, value: -Infinity });

    return {
        name: highest.key,
        value: highest.value,
    }
}

function generateAttributes() {
    while (true) {
        let attributes = {
            'for': xd6(3),
            'des': xd6(3),
            'con': xd6(3),
            'int': xd6(3),
            'sab': xd6(3),
            'car': xd6(3),
        };

        if (!shouldRecreateAttributes(attributes)) {
            return attributes;
        }
    }
}

function randomClass() {
    let classes = [
        'legionario',
        'barbaro',
        'gladiador',
        'lanceiro',
        'paladino',
        'arqueiro',
        'ladrao',
        'assassino',
        'desbravador',
        'espiao',
        'monge',
        'mago',
        'ilusionista',
        'necromante',
        'psionico',
        'clerigo',
        'druida',
        'bardo',
    ]

    return classes[Math.floor(Math.random() * classes.length)];
}

function getClassDetails(className) {
    const classDetails = {
        'legionario': {
            mainAttribute: 'for',
            hitDice: 8,
        },
        'barbaro': {
            mainAttribute: 'for',
            hitDice: 8,
        },
        'gladiador': {
            mainAttribute: 'for',
            hitDice: 8,
        },
        'lanceiro': {
            mainAttribute: 'for',
            hitDice: 8,
        },
        'paladino': {
            mainAttribute: 'for',
            hitDice: 8,
        },
        'arqueiro': {
            mainAttribute: 'des',
            hitDice: 8,
        },
        'ladrao': {
            mainAttribute: 'des',
            hitDice: 4,
        },
        'assassino': {
            mainAttribute: 'des',
            hitDice: 4,
        },
        'desbravador': {
            mainAttribute: 'des',
            hitDice: 6,
        },
        'espiao': {
            mainAttribute: 'des',
            hitDice: 4,
        },
        'monge': {
            mainAttribute: 'int',
            hitDice: 6,
        },
        'mago': {
            mainAttribute: 'int',
            hitDice: 4,
        },
        'ilusionista': {
            mainAttribute: 'int',
            hitDice: 4,
        },
        'necromante': {
            mainAttribute: 'int',
            hitDice: 4,
        },
        'psionico': {
            mainAttribute: 'int',
            hitDice: 4,
        },
        'clerigo': {
            mainAttribute: 'sab',
            hitDice: 6,
        },
        'druida': {
            mainAttribute: 'sab',
            hitDice: 6,
        },
        'bardo': {
            mainAttribute: 'car',
            hitDice: 4,
        },
    }

    return classDetails[className]
}

function generateCharacter() {
    let initialAttributes = generateAttributes()
    let className = randomClass()
    let classDetails = getClassDetails(className);

    const attributeMod = {
        3: -3,
        4: -2,
        5: -2,
        6: -1,
        7: -1,
        8: -1,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 1,
        14: 1,
        15: 1,
        16: 2,
        17: 2,
        18: 3,
    }

    let highest = highestAttribute(initialAttributes);

    let mainAttributeName = classDetails.mainAttribute;
    let mainAttributeValue = initialAttributes[mainAttributeName];

    let attributes = {
        ...initialAttributes,
    }

    attributes[highest.name] = mainAttributeValue;
    attributes[mainAttributeName] = highest.value;

    return {
        class: {
            name: className,
            details: classDetails,
        },
        attributes: {
            'for': {
                'value': attributes.for,
                'mod': attributeMod[attributes.for],
            },
            'des': {
                'value': attributes.des,
                'mod': attributeMod[attributes.des],
            },
            'con': {
                'value': attributes.con,
                'mod': attributeMod[attributes.con],
            },
            'int': {
                'value': attributes.int,
                'mod': attributeMod[attributes.int],
            },
            'sab': {
                'value': attributes.sab,
                'mod': attributeMod[attributes.sab],
            },
            'car': {
                'value': attributes.car,
                'mod': attributeMod[attributes.car],
            },
        },
        hp: dx(classDetails.hitDice),
    }
}

let character = generateCharacter();

console.log(character);
