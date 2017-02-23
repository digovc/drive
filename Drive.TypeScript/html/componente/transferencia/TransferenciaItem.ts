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

    export class TransferenciaItem extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divImagem: Div;
        private _divProgresso: Div;
        private _divTitulo: Div;

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
        // #endregion Construtores

        // #region Métodos

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            strLayoutFixo = strLayoutFixo.replace("_transferencia_item_id", this.strId);
            strLayoutFixo = strLayoutFixo.replace("_imagem_id", this.divImagem.strId);
            strLayoutFixo = strLayoutFixo.replace("_progresso_id", this.divProgresso.strId);
            strLayoutFixo = strLayoutFixo.replace("_titulo_id", this.divTitulo.strId);

            return strLayoutFixo;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}