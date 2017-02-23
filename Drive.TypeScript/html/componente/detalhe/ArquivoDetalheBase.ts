/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../../Web.TypeScript/Utils.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export abstract class ArquivoDetalheBase extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arq: ArquivoDominio;
        private _divTitulo: Div;

        private get arq(): ArquivoDominio
        {
            return this._arq;
        }

        private set arq(arq: ArquivoDominio)
        {
            this._arq = arq;
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

        protected inicializar(): void
        {
            super.inicializar();

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

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}