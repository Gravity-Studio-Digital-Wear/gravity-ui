import {Buffer} from 'buffer'
import nodeProcess from 'process';

(window as any).global = window;
global.Buffer = global.Buffer || Buffer;
global.process = nodeProcess;