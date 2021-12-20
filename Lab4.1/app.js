let car = [
    {
        id:1,
        number: 3728,
        mark: "Toyota",
        color: "white",
        date: "20.03.2008",
        volume: 4
    },
    {
        id:2,
        number: 7777,
        mark: "BMW",
        color: "black",
        date: "20.05.2020",
        volume: 2
    },
    {
        id:3,
        number: 0001,
        mark: "Audi",
        color: "red",
        date: "10.11.2018",
        volume: 3
    }
]

//клас для виводу таблиці на основі списку
class RenderCart {
    constructor(car) {
        this.car = car;
        this.DOMElement = null;
    }

    //Створює рядок таблиці з даними
    rowTemlate(data) {  

        return `<tr id="${data.id}"><td> ${data.number} </td><td> ${data.mark} </td><td> ${data.color} </td><td> ${data.date} </td><td> ${data.volume} </td>`
    }

    // генерує таблицю з рядками 
    render(parrent) {
        var j = 0; 
        let table = document.createElement("table");
        table.id = "t";
        let rows = "";
        // Створює загловок кожного стовбця таблиці 
        table.innerHTML = '<tr><th> Номера </th><th> Марка машини </th><th> Колір </th><th> Рік виготовлення </th><th> Обєм двигуна </th></tr>'
            // Генерує та виводить всі рядки з даними й кнопками
                for (let item of this.car){
                    rows += this.rowTemlate(item)+'<td><button onclick="t1.delItem('+ item.id +')">X</button><button onclick="t1.editItem('+ item.id +')">Edit</button></td></tr>';
                    j++;
                }
                table.innerHTML += rows;
                this.DOMElement = table;
                parrent.appendChild(table);
                //викликає функцію підсвічювання рядків за умовою
                this.rowLight();
    }

    //функція додавання нового запису
    addItem (){
        var t = document.getElementById("t");
        // очищає всю таблицю
        t.parentNode.removeChild(t);
        
        // отримуємо необхідні дані з інпутів 
        let color =  document.getElementById("color").value;
        let number = document.getElementById("number").value;
        let mark = document.getElementById("mark").value;
        let date =  document.getElementById("date").value;
        let volume = document.getElementById("volume").value;
        
        //створюємо новий індекс, щоб добавити новий об'єкт в ліст
        var maxIndex = parseInt(this.list.length)-1;
        var newId = this.list[maxIndex]["id"]+1;
        
        let item = {
            id: newId,
            number: number,
            mark: mark,
            color: color,
            date: date,
            volume: volume
        }
        //добавляємо новий об'єкт в ліст
        this.car.push(item);
        //генеруємо всю таблицю з добавленим об'єктом
        this.render(document.body)    
    }

     //функція видаленння об'єкта 
     delItem(id){
        var t = document.getElementById("t");
        //очищаємо всю таблицю зі сторінки
        t.parentNode.removeChild(t);
        //отримуємо id елемента таблиці
        var k = id;
        // знаходимо індекс об'єкта в лісті
        var index = this.car.findIndex(function(objId) {
            return objId.id == k;
          });
          // видаляжмо об'єкт з ліста
        list.splice(index,1);
          // генеруємо нову таблицю 
        this.render(document.body);
    }

    // функція для редагування стовбця
    editItem(id){
        var t = document.getElementById("t");
        //очищаємо всю таблицю зі сторінки
        t.parentNode.removeChild(t);
        //отримуємо id елемента таблиці
        var k = id;
        // знаходимо індекс об'єкта в car
        var index = this.car.findIndex(function(objId) {
            return objId.id == k;
          });
          //отримуємо відредаговані дані з інпута
          let color =  document.getElementById("color").value;
          let number = document.getElementById("number").value;
          let mark = document.getElementById("mark").value;
          let date =  document.getElementById("date").value;
          let volume = document.getElementById("volume").value;

        //заповняємо об'єкт відредагованими даними
        this.car[index]["id"]=id;
        this.car[index]["colort"]=color;
        this.car[index]["number"]=number;
        this.car[index]["dmark"]=mark;
        this.car[index]["date"]=date;
        this.car[index]["volume"]=volume;

        //генеруємо нову таблицю
        this.render(document.body);
    }

    //функція для підсвічування рядків
    rowLight(){

        // цикл який перевіряє ід кожного рядка і якщо його ід парний то красити його в зелений
        for (let i = 0; i < this.car.length; i++) {
            if (this.car[i]["id"]%2==0) {
                var row = document.getElementById(car[i]["id"]);
                row.style="background:green";
            }
            
        }

    }

}

let t1 = new RenderList(car);
t1.render(document.body);