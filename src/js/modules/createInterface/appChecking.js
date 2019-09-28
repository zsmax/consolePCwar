import { createInterface } from "./createInterface";

// checking for an #app

export function appCheck() {
    const app = document.querySelector('#app');

    if (!app) {
        let app = document.createElement('div');
        app.id = 'app';
        document.body.appendChild(app);
    }
    createInterface();
}