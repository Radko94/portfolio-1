import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

export enum AlertType {
    Success,
    Failure
}

const DEFAULT_DURATION_PERIOD_MS = 3000;
export class AlertContext {
    constructor(
        public Type: AlertType,
        public Message: string,
        public Action: string = null,
        public Duration: number = DEFAULT_DURATION_PERIOD_MS
    ) {
    }
}

@Injectable()
export class AlertService {
    constructor(
        private snackBar: MatSnackBar
    ) {
    }

    public show(alertContext: AlertContext): void {
        const snackBarRef = this.snackBar
            .open(alertContext.Message,
                alertContext.Action,
                {
                    duration: alertContext.Duration,
                    panelClass: this.getPanelClass(alertContext.Type)
                });
    }

    private getPanelClass(alertType: AlertType) {
        switch (alertType) {
            case AlertType.Success: return 'alert--success';
            case AlertType.Failure: return 'alert--failure';
            default: return 'alert--default';
        }
    }
}
