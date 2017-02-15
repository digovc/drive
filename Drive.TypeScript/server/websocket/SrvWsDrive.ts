/// <reference path="../../../Web.TypeScript/ConstanteManager.ts"/>
/// <reference path="../../../Web.TypeScript/server/websocket/SrvWsBase.ts"/>

module Drive
{
    // #region Importações

    import ConstanteManager = Web.ConstanteManager;
    import SrvWsBase = Web.SrvWsBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class SrvWsDrive extends SrvWsBase
    {
        // #region Constantes
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

        protected getIntPorta(): number
        {
            return ConstanteManager.i.getIntConstante(SrvWsDrive.name + "_intPorta");
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}