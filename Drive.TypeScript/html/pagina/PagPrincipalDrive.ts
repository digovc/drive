/// <reference path="../../../Web.TypeScript/html/pagina/PagMobile.ts"/>

module Drive
{
    // #region Importações

    import PagMobile = Web.PagMobile;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagPrincipalDrive extends PagMobile
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        protected static _i: PagPrincipalDrive;

        public static get i(): PagPrincipalDrive
        {
            if (PagPrincipalDrive._i != null)
            {
                return PagPrincipalDrive._i;
            }

            PagPrincipalDrive._i = new PagPrincipalDrive();

            return PagPrincipalDrive._i;
        }

        private _divActionBarDrive: ActionBarDrive;
        private _divMenuDrive: MenuDrive;

        public get divActionBarDrive(): ActionBarDrive
        {
            if (this._divActionBarDrive != null)
            {
                return this._divActionBarDrive;
            }

            this._divActionBarDrive = new ActionBarDrive();

            return this._divActionBarDrive;
        }

        private get divMenuDrive(): MenuDrive
        {
            if (this._divMenuDrive != null)
            {
                return this._divMenuDrive;
            }

            this._divMenuDrive = new MenuDrive();

            return this._divMenuDrive;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.divActionBarDrive.iniciar();
            this.divMenuDrive.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }

    // #region Inicialização

    $(document).ready(() => { PagPrincipalDrive.i.iniciar(); });

    // #endregion Inicialização
}