import { HardDrive, KeyRound, List, PlusCircle, Search, Server, SquarePen, Trash2 } from 'lucide-react';

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: 'cyan',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: 'lightblue',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries consumida no sessionStorage.',
        color: 'cyan',
        Icon: HardDrive,
    }
];

export const crud = [
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista todas as séries',
        color: 'lightblue',
        Icon: List,
    },
];