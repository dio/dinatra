import { args } from 'deno';
import { parse } from 'https://deno.land/x/flags/index.ts';

export const parsedArgs: {
  p?: string;
  port?: string;
  [key: string]: any;
} = parse(args) || {};

export const defaultPort = parsedArgs.p || parsedArgs.port || '8080';
