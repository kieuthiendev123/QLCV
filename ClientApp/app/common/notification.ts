import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export enum NotificationType {
    INFO, SUCCESS, WARNING, DANGER
}

@Injectable()
export class Notification {
    constructor(private translate: TranslateService) { }
    editSuccess() {
        this.success('notify.EDIT_SUCCESS');
    }
    editError(err?: any) {
        if (!err) {
            this.error('notify.SERVER_ERROR');
        } else if (typeof err === 'string') {
            this.error(err, 'notify.EDIT_ERROR');
        } else if (typeof err === 'object') {
            this.error('errors.' + err.message, 'notify.EDIT_ERROR');
        } else {
            this.error('notify.EDIT_ERROR');
        }
    }
    addSuccess() {
        this.success('notify.ADD_SUCCESS');
    }
    addError(err?: any) {
        if (!err) {
            this.error('notify.SERVER_ERROR');
        } else if (typeof err === 'string') {
            this.error(err, 'notify.ADD_ERROR');
        } else if (typeof err === 'object') {
            this.error('errors.' + err.message, 'notify.ADD_ERROR');
        } else {
            this.error('notify.ADD_ERROR');
        }
    }
    deleteSuccess() {
        this.success('notify.DELETE_SUCCESS');
    }
    deleteError(err?: any) {
        if (!err) {
            this.error('notify.SERVER_ERROR');
        } else if (typeof err === 'string') {
            this.error(err, 'notify.DELETE_ERROR');
        } else if (typeof err === 'object') {
            this.error('errors.' + err.message, 'notify.DELETE_ERROR');
        } else {
            this.error('notify.DELETE_ERROR');
        }
    }
    info(message: string) {
        this.show(NotificationType.INFO, message);
    }
    warning(message: string) {
        this.show(NotificationType.WARNING, message);
    }
    success(message: string) {
        this.show(NotificationType.SUCCESS, message);
    }
    error(err: any, title?: string, messageDefault?: string) {
        let message = err || 'notify.SERVER_ERROR';
        if (typeof err === 'object' && err) {
            message = 'errors.' + err.message;
        }
        if (!messageDefault) {
            messageDefault = 'notify.ERROR_UNDEFINED';
        }
        this.translate.get([message, messageDefault || '']).subscribe((data: any) => {
            if (message === data[message] && messageDefault) {
                this.show(NotificationType.DANGER, data[messageDefault]);
            } else {
                this.show(NotificationType.DANGER, data[message]);
            }
        });
    }
    show(type: NotificationType, message: string, title?: string) {
        var types = ['info', 'success', 'warning', 'danger'];
        $.notify({
            icon: 'notifications',
            message: message,
            title: title
        }, {
                type: types[type],
                timer: 500,
                delay: 3000,
                placement: {
                    from: 'top',
                    align: 'center'
                }
            });
    }
}