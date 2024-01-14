const eventsBlock = document.querySelector('.eventsBlock')
const data = [
    {
        id: 1,
        name: 'Йога',
        time: '10:00 - 11:00',
        maxParticipants: 15,
        currentParticipants: 8,
        signed: false
    },
    {
        id: 2,
        name: 'Пилатес',
        time: '11:30 - 12:30',
        maxParticipants: 10,
        currentParticipants: 5,
        signed: false
    },
    {
        id: 3,
        name: 'Кроссфит',
        time: '13:00 - 14:00',
        maxParticipants: 20,
        currentParticipants: 20,
        signed: false
    },
    {
        id: 4,
        name: 'Танцы',
        time: '14:30 - 15:30',
        maxParticipants: 12,
        currentParticipants: 10,
        signed: false
    },
    {
        id: 5,
        name: 'Бокс',
        time: '16:00 - 17:00',
        maxParticipants: 8,
        currentParticipants: 7,
        signed: false
    }
]

function load() {
    eventsBlock.innerHTML = ''
    data.forEach(item => {
        const newElem = document.createElement('div')
        newElem.classList.add('event')
        if (item.currentParticipants === item.maxParticipants && !item.signed) {
            newElem.classList.add('eventFull')
        } else if (item.signed) {
            newElem.classList.add('eventSigned')
        }
        newElem.setAttribute('id', item.id)
        newElem.innerHTML = `
            <p>Мероприятие: ${item.name}</p>
            <p>Время проведения: ${item.time}</p>
            <p>Текущее количество участников: ${item.currentParticipants}</p>
            <p>Максимальное количество участников: ${item.maxParticipants}</p>
            <button class='${signBtn(item.signed)}'>Записаться</button>
            <button class='${cancelBtn(item.signed)}'>Отменить запись</button>
        `
        eventsBlock.appendChild(newElem)
    });
}

load()

eventsBlock.addEventListener('click', event => {
    if(event.target.classList.contains('signBtn')) {
        const id = event.target.closest('div').id
        data.forEach(item => {
            if (item.id == id && item.currentParticipants < item.maxParticipants && item.signed == false) {
                item.currentParticipants++
                item.signed = true
            }
        });
        load()
    }
})

eventsBlock.addEventListener('click', event => {
    if(event.target.classList.contains('cancelBtn')) {
        const id = event.target.closest('div').id
        data.forEach(item => {
            if (item.id == id && item.signed == true) {
                item.currentParticipants--
                item.signed = false
            }
        });
        load()
    }
})

function signBtn(bool) {
    if (bool) {
        return 'signed'
    } else {
        return 'signBtn'
    }
}

function cancelBtn(bool) {
    if (bool) {
        return 'cancelBtn'
    } else {
        return 'canceled'
    }
}