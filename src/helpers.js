function createElement(tag, props, ...children) {
    const element = document.createElement(tag);
    
    Object.keys(props).forEach(key => element[key] = props[key]);
    
    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        } 
            
        element.appendChild(child);
    });

    return element;
}

class EventEmitter {
    constructor() {
        this.events = {};
    }

    // subcribe on event
    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    // make all callbacks work
    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(callback => callback(arg));
        }
    }
}

export { createElement, EventEmitter };