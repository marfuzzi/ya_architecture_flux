import Log from '../Log';

/**
 * @class Dispatcher принимает actions и отправляет их в Store
*/
class Dispatcher {
    constructor() {
        this.callbacks = {};
        this.id = 1;
    }

    /**
     * Dispatcher регистрирует callback
     * @param {Function} callback
     */
    register(callback) {
        Log.write('1.1. Этап инициализации: Store регистрирует callback в Dispatcher.');
        this.callbacks[`id_${this.id++}`] = callback;
    }

    /**
     * Dispatcher отправляет действие и данные в Store
     * @param {Object} data
     */
    dispatch(data) {
        Log.write('5. Dispatcher отправляет тип действия и данные в Store');
        Object.keys(this.callbacks).forEach(id => {
            this.callbacks[id](data);
        });
    }
}

export default new Dispatcher();
