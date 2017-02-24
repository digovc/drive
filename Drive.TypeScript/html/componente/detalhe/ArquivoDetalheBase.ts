/// <reference path="../../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import Erro = Web.Erro;
    import OnClickListener = Web.OnClickListener;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class ArquivoDetalheBase extends ComponenteHtml implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arq: ArquivoDominio;
        private _divMenuApagar: ArqDetalheMenuItem;
        private _divMenuBaixar: ArqDetalheMenuItem;
        private _divMenuLink: ArqDetalheMenuItem;
        private _divTitulo: Div;

        private get arq(): ArquivoDominio
        {
            return this._arq;
        }

        private set arq(arq: ArquivoDominio)
        {
            this._arq = arq;
        }

        private get divMenuApagar(): ArqDetalheMenuItem
        {
            if (this._divMenuApagar != null)
            {
                return this._divMenuApagar;
            }

            this._divMenuApagar = new ArqDetalheMenuItem(this.strId + "_divMenuApagar");

            return this._divMenuApagar;
        }

        private get divMenuBaixar(): ArqDetalheMenuItem
        {
            if (this._divMenuBaixar != null)
            {
                return this._divMenuBaixar;
            }

            this._divMenuBaixar = new ArqDetalheMenuItem(this.strId + "_divMenuBaixar");

            return this._divMenuBaixar;
        }

        private get divMenuLink(): ArqDetalheMenuItem
        {
            if (this._divMenuLink != null)
            {
                return this._divMenuLink;
            }

            this._divMenuLink = new ArqDetalheMenuItem(this.strId + "_divMenuLink");

            return this._divMenuLink;
        }

        private get divTitulo(): Div
        {
            if (this._divTitulo != null)
            {
                return this._divTitulo;
            }

            this._divTitulo = new Div(this.strId + "_divTitulo");

            return this._divTitulo;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(arq: ArquivoDominio)
        {
            super(ArquivoDetalheBase.name.replace("Base", Utils.STR_VAZIA));

            this.arq = arq;
        }

        // #endregion Construtores

        // #region Métodos

        private apagarArquivo(): void
        {
        }

        private baixarArquivo(): void
        {
            if (this.arq == null)
            {
                return;
            }

            PagPrincipalDrive.i.baixarArquivo(this.arq);
        }

        private copiarLink(): void
        {
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.divMenuApagar.iniciar();
            this.divMenuBaixar.iniciar();
            this.divMenuLink.iniciar();

            this.inicializarArq();

            this.mostrar();
        }

        private inicializarArq(): void
        {
            if (this.arq == null)
            {
                return;
            }

            this.divTitulo.strConteudo = this.arq.strNome;
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.addEvtOnClickListener(this);

            this.divMenuApagar.addEvtOnClickListener(this);
            this.divMenuBaixar.addEvtOnClickListener(this);
            this.divMenuLink.addEvtOnClickListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Object, arg: JQueryEventObject): void
        {
            try
            {
                switch (objSender)
                {
                    case this:
                        this.esconder();
                        return;

                    case this.divMenuApagar:
                        this.apagarArquivo();
                        return;

                    case this.divMenuBaixar:
                        this.baixarArquivo();
                        return;

                    case this.divMenuLink:
                        this.copiarLink();
                        return;
                }
            }
            catch (ex)
            {
                new Erro("Erro desconhecido.", ex);
            }
        }

        // #endregion Eventos
    }
}