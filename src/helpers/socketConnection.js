


export default function socketPlugin(socket) {
    return store => {
        socket.on('message new', data => {
            store.commit('ADD_MESSAGE', {sender: data.message.user.username, message: data.message.text})
            console.log('new mssages' + data)
        })

        socket.on('users update', data => {
            if(data!=undefined){
                if(data.type =="join"){
                    store.commit('ADD_USER', {username: data.user.username, avatar: '', all: data.users})
                }else{
                    store.commit('DISCONNECT_USER', data.user[0].username)
                }
            }
            console.log(data);
        })

        socket.on('connect', data => {
            //store.commit('ADD_MESSAGE', {sender: data.message.user, message: data.message.text})
            console.log(data)
        })

        socket.on('user registered', data => {
            console.log('congrats you are authentificated!!')
        })

        socket.on('chat error', data => {
            console.log('error')
            console.log(data)
        })

        store.subscribe(mutation => {
            if (mutation.type === 'SEND_MESSAGE') {
              socket.emit('message new', mutation.payload.message)
              console.log(mutation.payload)
            }
        })

        store.subscribe(mutation => {
            if (mutation.type === 'SET_PSEUDO') {
                const username = mutation.payload
              socket.emit('user register', { username } )
              console.log(mutation.payload)
            }
        })
    }
}