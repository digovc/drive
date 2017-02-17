/// <reference path="../../../Web.TypeScript/ConstanteManager.ts"/>
/// <reference path="../../../Web.TypeScript/server/Interlocutor.ts"/>
/// <reference path="../../../Web.TypeScript/server/websocket/SrvWsBase.ts"/>

module Drive
{
    // #region Importações

    import ConstanteManager = Web.ConstanteManager;
    import Interlocutor = Web.Interlocutor;
    import SrvWsBase = Web.SrvWsBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class SrvWsDrive extends SrvWsBase
    {
        // #region Constantes

        private static get STR_METODO_PASTA_CONTEUDO(): string { return "STR_METODO_PASTA_CONTEUDO" };
        private static get STR_METODO_PASTA_CONTEUDO_VAZIO(): string { return "STR_METODO_PASTA_CONTEUDO_VAZIO" };

        // #endregion Constantes

        // #region Atributos

        protected static _i: SrvWsDrive;

        public static get i(): SrvWsDrive
        {
            if (SrvWsDrive._i != null)
            {
                return SrvWsDrive._i;
            }

            SrvWsDrive._i = new SrvWsDrive();

            return SrvWsDrive._i;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(ConstanteManager.i.getStrConstante(SrvWsDrive.name + "_strNome"));
        }

        // #endregion Construtores

        // #region Métodos

        public abrirConteudo(arq: ArquivoDominio): void
        {
            if (arq == null)
            {
                return;
            }

            if (!arq.booPasta)
            {
                return;
            }

            this.enviar(new Interlocutor(SrvWsDrive.STR_METODO_PASTA_CONTEUDO, arq));
        }

        private carregarConteudo(objInterlocutor: Interlocutor): void
        {
            var arrArqAny = objInterlocutor.getObjJson<Array<any>>();

            if (arrArqAny == null)
            {
                return;
            }

            if (arrArqAny.length < 1)
            {
                return;
            }

            var arrArq = new Array<ArquivoDominio>();

            arrArqAny.forEach((arqAny) => { arrArq.push(new ArquivoDominio().copiarDados(arqAny) as ArquivoDominio) });

            PagPrincipalDrive.i.carregarConteudo(arrArq);
        }

        private carregarConteudoVazio(objInterlocutor: Interlocutor): void
        {
            if (objInterlocutor == null)
            {
                return;
            }

            if (objInterlocutor.objData == null)
            {
                return;
            }

            PagPrincipalDrive.i.carregarConteudoVazio(objInterlocutor.objData.toString());
        }

        protected getIntPorta(): number
        {
            return ConstanteManager.i.getIntConstante(SrvWsDrive.name + "_intPorta");
        }

        protected processarOnOpenLocal(arg: Event): void
        {
            super.processarOnOpenLocal(arg);

            this.enviar(new Interlocutor(SrvWsDrive.STR_METODO_PASTA_CONTEUDO));
        }

        protected processarMessage(objInterlocutor: Interlocutor): boolean
        {
            if (super.processarMessage(objInterlocutor))
            {
                return true;
            }

            if (objInterlocutor == null)
            {
                return false;
            }

            switch (objInterlocutor.strMetodo)
            {
                case SrvWsDrive.STR_METODO_PASTA_CONTEUDO:
                    this.carregarConteudo(objInterlocutor);
                    return true;

                case SrvWsDrive.STR_METODO_PASTA_CONTEUDO_VAZIO:
                    this.carregarConteudoVazio(objInterlocutor);
                    return true;
            }

            return false;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}