import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.sanitize', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        const length = selectedText.length;

        if (length === 0) {
            vscode.window.showInformationMessage('No text selected.');
            return;
        }

        const sanitizedString = generateRandomString(length);
        editor.edit(editBuilder => {
            editBuilder.replace(selection, sanitizedString);
        });
    });

    context.subscriptions.push(disposable);

    // Register the command in the context menu
    const sanitizeCommand = {
        command: 'extension.sanitize',
        title: 'Sanitize',
        when: 'editorHasSelection'
    };

    context.subscriptions.push(vscode.commands.registerCommand(sanitizeCommand.command, () => {}));
}

export function deactivate() {}

function generateRandomString(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
    }
    return randomString;
}
