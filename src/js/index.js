import './../sass/styles.scss';

import Action from './flux/Actions';
import Store from './flux/Store';
import Log from './Log';

// Получение элементов
const buttonServer = document.querySelector('.button_server');
const buttonStore = document.querySelector('.button_store');
const buttonLog = document.querySelector('.button_log');
const input = document.querySelector('.view-stub__input');
const label = document.querySelector('.view-stub__label');

/**
 * @class Класс, отвечающий за представление состояний
 */
class View {
    /**
     * Первоначальная инициализация
    */
    initialize(){
        // навешиваем обработчики
        // введение данных от пользователя
        buttonServer.addEventListener('click', () => {
            Log.write('2. Данные введены пользователем');
            this.sendData(input.value);
            input.value = '';
        });
        // удаление данных пользователем
        buttonStore.addEventListener('click', () => {
            Log.write('2. Пользователь удаляет Store');
            this.deleteData();
        });
        // удаление логов
        buttonLog.addEventListener('click', () => {
            Log.delete();
        });

        // подписываемся на изменение состояния Store
        Store.subscribe(this.onChangeStore);
    }

    /**
     * Отправка данных в Action
     * @param {String} data
    */
    sendData(data) {
        Log.write('3. Данные отправлены в Action');
        Action.addData(data);
    };

    /**
     * Пользовательское действие отправлено в Action
     * @param {String} data
    */
    deleteData() {
        Log.write('3. Пользовательское действие отправлено в Action');
        Action.deleteData();
    };

    /**
     * Состояние store изменено. Срабатывает callback. Происходит перерисовка данных
     * @param {Array} newData
    */
    onChangeStore(newData) {
        Log.write('9. Происходит перерисовка данных');
        Log.write('________________________________');
        label.innerHTML = newData.join('<br/>');
    }

}

const app = new View();
app.initialize();
