import Dispatcher from './Dispatcher';
import Log from '../Log';

/**
 * @class Action - класс преобразует данные для Dispatcher
 * упрощает передачу данных в Dispatcher
*/
class Action {
    /**
     * Отправка данных в Dispatcher
     * @param {String} data
    */
    addData(data) {
        Log.write('4. Action форматирует данные в нужном формате и отправляет в Dispatcher');
        Dispatcher.dispatch({
            type: 'ADD_DATA',
            content: data,
        });
    }

    /**
     * Отправка данных в Dispatcher
    */
    deleteData() {
        Log.write('4. Action форматирует данные в нужном формате и отправляет в Dispatcher');
        Dispatcher.dispatch({
            type: 'DELETE_DATA',
        });
    }
}

export default new Action();
