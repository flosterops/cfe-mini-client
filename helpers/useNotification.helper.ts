import { colors } from './colors';

class ErrorNotification {
    private body: HTMLElement | null = null;
    private notification: HTMLElement | null = null;

    public init() {
        this.body = document.getElementsByTagName('body')[0];
        this.notification = document.createElement('div');
        this.defaultStyles();
    }

    private defaultStyles() {
        if (!this.notification) {
            return;
        }
        this.notification.style.display = 'none';
        this.notification.style.position = 'absolute';
        this.notification.style.width = '300px';
        this.notification.style.top = '-20px';
        this.notification.style.left = 'calc(50% - 150px)';
        this.notification.style.background = colors.yellow;
        this.notification.style.padding = '10px 20px';
        this.notification.style.transitionProperty = 'all';
        this.notification.style.transformStyle = 'ease';
        this.notification.style.transitionDuration = '0.3s';
        this.notification.style.opacity = '0';
        this.notification.style.fontSize = '14px';
        this.notification.style.boxSizing = 'border-box';
    }

    private onPushStyles() {
        if (!this.notification) {
            return;
        }
        this.notification.style.display = 'flex';
        this.notification.style.top = '10px';
        this.notification.style.opacity = '1';
    }

    private onRemoveStyles() {
        if (!this.notification) {
            return;
        }
        this.notification.style.top = '-20px';
        this.notification.style.opacity = '0';
        setTimeout(() => {
            if (!this.notification) {
                return;
            }
            this.notification.style.display = 'none';
            this.body?.removeChild(this.notification);
        }, 1000);
    }

    private createNotificationHTML() {
        this.notification = document.createElement('div');
        this.defaultStyles();
    }

    public pushNotification(message: string) {
        this.createNotificationHTML();
        if (!this.notification) {
            return null;
        }
        this.notification.innerText = message;
        this.body?.appendChild(this.notification);
        this.onPushStyles();
        setTimeout((): void => {
            this.onRemoveStyles();
        }, 3000);
    }
}

const errorNotification = new ErrorNotification();

export { errorNotification as ErrorNotification };
