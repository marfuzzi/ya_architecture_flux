// Получение элементов
const logContainer = document.querySelector('.view-stub__log');
/**
 * @class Log - класс, логирующий все действия на экран и в консоль
*/
class Log {
    /**
     * Вывод действия в консоль и на экран
     * @param {String} описание, происходящего действия
     */
    write(message) {
        console.log(message);
        const div = document.createElement('div');
        div.innerHTML = message;
        logContainer.appendChild(div);
    }
    delete() {
        logContainer.innerHTML ='';
    }
}

const log = new Log();

export default log;
