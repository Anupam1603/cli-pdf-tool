# PDF Tool CLI

PDF Tool CLI is a command-line interface application for manipulating PDF files. It provides functionality to merge multiple PDFs, split a PDF into separate pages, and extract specific pages from a PDF.

## Features

- Merge multiple PDF files into a single PDF
- Split a PDF into individual pages
- Extract specific pages from a PDF

## Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/pdf-tool-cli.git
cd pdf-tool-cli
```
2. Install dependencies:
```
npm install
```
3. Build the project:
```
npm run build
```
4. Link the package globally:
```
npm link
```
## Usage

After installation, you can use the `pdf-tool` command from anywhere in your terminal.

### Merge PDFs
```
pdf-tool split <input.pdf> -o <output_pattern.pdf>
```
### Extract Pages
```
pdf-tool extract <input.pdf> -p <pages> -o <output.pdf>
```
Replace `<pages>` with page numbers or ranges (e.g., 1,3,5-7).

## Configuration

The project uses TypeScript. The configuration is in `tsconfig.json`. 

Key configurations:
- Output directory: `./dist`
- Source directory: `./src`

## Project Structure
```
pdf-tool-cli/
├── src/
│   ├── commands/
│   │   ├── merge.ts
│   │   ├── split.ts
│   │   └── extract.ts
│   ├── utils/
│   │   └── pdfUtils.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```
## Development

1. Make changes in the `src` directory
2. Rebuild the project: `npm run build`
3. Test your changes: `pdf-tool <command>`

## Troubleshooting

If the `pdf-tool` command is not recognized, ensure that the npm global bin directory is in your PATH.

For Windows:
1. Run `npm config get prefix`
2. Add `<npm_prefix>\node_modules\pdf-tool-cli` to your PATH

For Unix-like systems:
The symlink should work automatically. You can check with `which pdf-tool`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.