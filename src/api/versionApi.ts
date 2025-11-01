import api from './api';
import type { VersionDto } from 'dto/version.dto';

export const VersionApi = {
    getVersion: async (): Promise<VersionDto> => {
        const res = await api.get<VersionDto>('/version');
        return res.data;
    },
};