const video = document.getElementById('camera');

async function startCamera() {
    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: {
                    ideal: "environment"
                }
            },
            audio: false
        });

        video.srcObject = stream;

        if ('wakeLock' in navigator) {
            try {
                await navigator.wakeLock.request('screen');
            } catch (err) {
                console.log(err);
            }
        }

    } catch (error) {
        alert('No se pudo abrir la cámara');
        console.error(error);
    }
}

startCamera();