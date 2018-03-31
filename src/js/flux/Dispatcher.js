import Log from '../Log';

/**
 * @class Dispatcher принимает actions и отправляет их в Store
*/
class Dispatcher {
    /**
     * Dispatcher регистрирует callback
     * @param {Function} callback
     */
    register(callback) {
        Log.write('1.1. Этап инициализации: Store регистрирует callback в Dispatcher.');
        this._callback = callback;
    }

    /**
     * Dispatcher удаляет callback
     * @param {Function} callback
     * @return {Number}
     */
    unregister() {
        Log.write('Callback удален');
        this._callback = null;
    }

    /**
     * Dispatcher отправляет действие и данные в Store
     * @param {Function} callback
     * @return {Number}
     */
    dispatch(data) {
        Log.write('5. Dispatcher отправляет тип действия и данные в Store');
        this._callback(data);
    }
}

export default new Dispatcher();
