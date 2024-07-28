# PDF Tool CLI 👨‍💻

PDF Tool CLI is a command-line interface application for manipulating PDF files. It provides functionality to merge multiple PDFs, split a PDF into separate pages, and extract specific pages from a PDF.

## Features

- Merge multiple PDF files into a single PDF
- Split a PDF into individual pages
- Extract specific pages from a PDF

## Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

You can install PDF Tool CLI globally using npm:
```
npm i pdf-manipulator-cli
```
## Usage

After installation, you can use the `pdf-tool` command from anywhere in your terminal.

### Merge PDFs
```
pdf-tool merge <input1.pdf> <input2.pdf> ... -o <output.pdf>
```
### Split PDF
```
pdf-tool split <input.pdf> -o <output_pattern.pdf>
```
### Extract Pages
```
pdf-tool extract <input.pdf> -p <pages> -o <output.pdf>
```
Replace `<pages>` with page numbers or ranges (e.g., 1,3,5-7).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
- Free Tool, Hell Yeah 🔥
