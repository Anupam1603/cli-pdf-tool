#!/usr/bin/env node
import { Command } from 'commander';
import { merge } from './commands/merge';
import { split } from './commands/split';
import { extract } from './commands/extract';

const program = new Command();

program
  .name('pdf-tool')
  .description('CLI to manipulate PDF files')
  .version('1.0.0');

program
  .command('merge')
  .description('Merge multiple PDF files into one')
  .argument('<files...>', 'Input PDF files')
  .option('-o, --output <output>', 'Output PDF file', 'output.pdf')
  .action(merge);

program
  .command('split')
  .description('Split a PDF file into multiple files')
  .argument('<input>', 'Input PDF file')
  .option('-o, --output <output>', 'Output PDF file pattern', 'page_%d.pdf')
  .action(split);

program
  .command('extract')
  .description('Extract specific pages from a PDF file')
  .argument('<input>', 'Input PDF file')
  .option('-p, --pages <pages>', 'Pages to extract (e.g., 1,3,5-7)')
  .option('-o, --output <output>', 'Output PDF file', 'extracted.pdf')
  .action(extract);

program.parse();