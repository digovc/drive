/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Div.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class TransferenciaViewer extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divConteudo: Div;
        private _divImagem: Div;
        private _divProgresso: Div;

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div(this.strId + "_divConteudo");

            return this._divConteudo;
        }

        private get divImagem(): Div
        {
            if (this._divImagem != null)
            {
                return this._divImagem;
            }

            this._divImagem = new Div(this.strId + "_divImagem");

            return this._divImagem;
        }

        private get divProgresso(): Div
        {
            if (this._divProgresso != null)
            {
                return this._divProgresso;
            }

            this._divProgresso = new Div(this.strId + "_divProgresso");

            return this._divProgresso;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}