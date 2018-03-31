import Observer from './Observer';
import Dispatcher from './Dispatcher';
import Log from '../Log';

/**
 * @class Store класс, который хранит данные и способы получения этих данных
*/
class Store extends Observer {
    constructor() {
        super();
        this.state = [];
    }

    /**
     * Эмит события
    */
    emitChange() {
        Log.write('7. Состояние Store изменилось. Уведомляются все подписчики.');
        this.broadcast(this.state);
    }

    /**
     * Получение актуального состояния Store
     * @return {String} data
    */
    getState() {
        Log.write('Получение актуального состояния Store');
        return this.state;
    }
}

const store = new Store();

// Store дает знать Dispatcher, что оно хочет быть уведомлено о произошедшем действии
Dispatcher.register(data => {
    switch (data.type) {
        case 'ADD_DATA': {
            Log.write('6. Store меняет свое состояние');
            store.state = [...store.state, data.content];
            store.emitChange();
        }
        // case 'DELETE_DATA': {
        //     Log.write('6. Store меняет свое состояние');
        //     store.state = [];
        //     store.emitChange();
        // }
        break;
    }
});
export default store;
