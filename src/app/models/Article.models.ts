import { Sousfamillearticle } from './Sousfamillearticle.models';
import { Tva } from './Tva.models';
import { ArticleXCommande } from './ArticleXCommande.models';

export class Article {
    idArticle: number;
    idTva: number | null;
    idFamilleArticle: number | null;
    refArticle: string;
    designation: string;
    description: string;
    dateCreation: string | null;
    dateModification: string | null;
    prixVenteArticleHt: number | null;
    supprime: boolean | null;
    unite: string;
    idFournisseur: number | null;
    prixAchat: number | null;
    dateDebut: string | null;
    dateFin: string | null;
    stockMin: number | null;
    stockMax: number | null;
    pmp: number | null;
    prixMin: number | null;
    image: string;
    nomImage: string;
    typeImage: string;
    prixVenteArticleTtc: number | null;
    prixMinTtc: number | null;
    prixAchatTtc: number | null;
    codeAbarre: string;
    encodageType: string;
    codeFrs: string;
    nbreParColis: number | null;
    qteParColis: number | null;
    codeF: string;
    codeSf: string;
    colis: number | null;
    qteParClois: number | null;
    isPlinthe: number | null;
    stock: number | null;
    prixHamria: number | null;
    prixZitoune: number | null;
    dernierPrixAchat: number | null;
    dernierPrixVente: number | null;
    pmpachat: number | null;
    pmpvente: number | null;
    isMouvemente: boolean | null;
    prixAchatHamria: number | null;
    prixAchatZitoune: number | null;
    idFamilleArticleNavigation: Sousfamillearticle;
    idTvaNavigation: Tva;
    articleXCommande: ArticleXCommande[];
}
