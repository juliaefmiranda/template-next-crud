import { HardDrive, KeyRound, Server } from "lucide-react";

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key exposta.',
        color: '#0091ff',
        Icon: KeyRound,
    },

    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: '#0091ff',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries consumida no SessionStorage',
        color: '#0091ff',
        Icon: HardDrive,
    }
];

export const crud = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key exposta.',
        color: '#0091ff',
        Icon: KeyRound,
    }
]