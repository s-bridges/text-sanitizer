# Sanitize It!

**Sanitize It!** is a Visual Studio Code extension that allows developers to quickly transform selected text into a randomized string of the same length. Ideal for obfuscating sensitive information or adding a playful twist to your coding experience, this extension makes it easy to enhance your text editing workflow.

## Features

- **Randomized Replacement**: Highlight any text and replace it with a unique string composed of uppercase letters, lowercase letters, digits, and special characters.
- **Simple Context Menu Integration**: Easily access the sanitization feature via the right-click context menu.
- **Customization**: Modify the character set and length based on your preferences (if needed in future updates).

## Installation

1. Open the Extensions view in VS Code (`Ctrl+Shift+X`).
2. Search for **Sanitize It!** and click **Install**.
3. Alternatively, download the latest `.vsix` package from the [Releases](#) section and install it manually.

## Usage

1. Highlight the text you want to sanitize.
2. Right-click and select **Sanitize Selected Text** from the context menu.
3. The highlighted text will be replaced with a randomized string of the same length.

## Example

Before sanitization:

```
SensitivePassword123!
```

After selecting and applying **Sanitize It!**:

```
@1bXy$!qzP9fW3&
```

## Compatibility

- **VS Code Version**: 1.93.0 or higher

## Development

To contribute to **Sanitize It!**, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sanitize-it.git
   cd sanitize-it
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open the project in VS Code and run the extension using `F5`.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need for quick text sanitization in development environments.
- Thanks to the VS Code team for providing a robust extension API.
