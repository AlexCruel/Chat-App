const socket = io()

socket.on('countUpdated', (count) => {
    console.log('Has been updated!', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked')
    socket.emit('increment')
})