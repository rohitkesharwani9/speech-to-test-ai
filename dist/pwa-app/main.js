// main.js

// Register the service worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://speech.coderobo.org/sw.js', {
        scope: 'https://speech.coderobo.org/' // Explicit scope
    }).then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}

