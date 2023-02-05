/*!
 * ______     _          ______          _ _         
 * | ___ \   (_)         | ___ \        (_) |        
 * | |_/ / __ _ _ __ ___ | |_/ /_ _ _ __ _| |_ _   _ 
 * |  __/ '__| | '_ ` _ \|  __/ _` | '__| | __| | | |
 * | |  | |  | | | | | | | | | (_| | |  | | |_| |_| |
 * \_|  |_|  |_|_| |_| |_\_|  \__,_|_|  |_|\__|\__, |
 *                            By wQ             __/ |
 *                                 Version 1.0 |___/ 
 * 
 * Copyright (c) 2023, wQ.
 * Released under the MIT License.
 */

'use strict';
const checkParity = {
    odd: function(num) {
        if (num > Number.MAX_SAFE_INTEGER) {
            throw new Error(`Input number must not exceed ${Number.MAX_SAFE_INTEGER}`);
        }

        return num % 2 !== 0;
    },
    even: function(num) {
        if (num > Number.MAX_SAFE_INTEGER) {
            throw new Error(`Input number must not exceed ${Number.MAX_SAFE_INTEGER}`);
        }

        return num % 2 === 0;
    }
}

const checkPrimality = {
    prime: function(num) {
        if (num <= 1) {
            return false;
        } else if (num > Number.MAX_SAFE_INTEGER) {
            throw new Error(`Input number must not exceed ${Number.MAX_SAFE_INTEGER}`);
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    },
    composite: function(num) {
        if (num <= 1) {
            return false;
        } else if (num > Number.MAX_SAFE_INTEGER) {
            throw new Error(`Input number must not exceed ${Number.MAX_SAFE_INTEGER}`);
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return true;
            }
        }

        return false;
    }
}

module.exports = {
    checkParity,
    checkPrimality
};