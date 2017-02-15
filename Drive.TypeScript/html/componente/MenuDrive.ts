/// <reference path="../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/mobile/MenuMobileBase.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/mobile/MenuMobileItem.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/mobile/OnMenuClickListener.ts"/>

module Drive
{
    // #region Importações

    import Erro = Web.Erro;
    import MenuMobileBase = Web.MenuMobileBase;
    import MenuMobileItem = Web.MenuMobileItem;
    import OnMenuClickListener = Web.OnMenuClickListener;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class MenuDrive extends MenuMobileBase implements OnMenuClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(MenuDrive.name);
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializarItem(arrMmi: Array<MenuMobileItem>): void
        {
        }

        protected setEventos(): void
        {
            super.setEventos();

            PagPrincipalDrive.i.divActionBarDrive.addEvtOnMenuClickListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onMenuClick(objSender: Object, arg: JQueryEventObject): void
        {
            try
            {
                this.abrir();
            }
            catch (ex)
            {
                new Erro("Erro desconhecido.", ex);
            }
        }

        // #endregion Eventos
    }
}