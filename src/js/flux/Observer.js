import Log from '../Log';

/**
 * @class Observer - класс, который позволяет организовать подписку на события
*/
class Observer {
    constructor() {
        this.observers = [];
    }
    /**
     * Подписка на изменение
     * @param {Function} fn
    */
    subscribe(fn) {
        Log.write('1.2. Этап инициализации: Осуществляется подписка на изменения в Store.');
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    /**
     * Уведомление подписчиков об изменении
     * @param {Array} data
    */
    broadcast(data) {
        Log.write('8. Срабатывает callback, который передали на этапе инициализации, с переданными данными.');
        this.observers.forEach(subscriber => subscriber(data));
    }
  }

  export default Observer;
