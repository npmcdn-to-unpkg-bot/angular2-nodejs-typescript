/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
export declare class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    confirm(message?: string): Promise<boolean>;
}
