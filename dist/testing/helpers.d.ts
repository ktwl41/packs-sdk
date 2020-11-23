import type { PackDefinition } from '../types';
export declare function getManifestFromModule(module: any): PackDefinition;
export declare const print: (message?: any, ...optionalParams: any[]) => void;
export declare function printAndExit(msg: string, exitCode?: number): never;
export declare function promptForInput(prompt: string, { mask }?: {
    mask?: boolean;
}): string;
