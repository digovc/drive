/// <reference path="../Web.TypeScript/AppWebBase.ts"/>
/// <reference path="../Web.TypeScript/server/ServerBase.ts"/>

module Drive
{
    // #region Importações

    import AppWebBase = Web.AppWebBase;
    import ServerBase = Web.ServerBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppDrive extends AppWebBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        protected static _i: AppDrive;

        public static get i(): AppDrive
        {
            if (AppDrive._i != null)
            {
                return AppDrive._i;
            }

            AppDrive._i = new AppDrive();

            return AppDrive._i;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializarArrSrv(arrSrv: Array<ServerBase>): void
        {
            super.inicializarArrSrv(arrSrv);

            arrSrv.push(SrvWsDrive.i);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }

    // #region Inicialização

    $(document).ready(() => { AppDrive.i.iniciar(); });

    // #endregion Inicialização
}