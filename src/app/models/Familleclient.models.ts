import { Client } from "./Client.models";

export interface Familleclient {
    idFamilleClient: number;
    libelleFamilleClt: string;
    dateCreation: string | null;
    dateModification: string | null;
    supprime: boolean | null;
    client: Client[];
}