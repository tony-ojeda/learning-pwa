// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => {
            // setTimeout(() => {
            //     reg.sync.register('posteo-gatitos');
            //     console.log('se enviaron fotos de gatitos al server');
            // }, 10000);

            // aplica notificacioens
            // Notification.requestPermission().then(result => {
            //     console.log(result);
            //     reg.showNotification(`Hellooo Papurriii!!!`);
            // });
        });
}

// if(window.SyncManager) {}

// fetch('https://reqres.in/api/users')
//     .then(resp => resp.text())
//     .then(console.log);