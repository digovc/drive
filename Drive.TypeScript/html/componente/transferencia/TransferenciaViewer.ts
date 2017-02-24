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

    export class TransferenciaViewer extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrDivTransferenciaItemDownload: Array<TransferenciaItem>;
        private _divConteudo: Div;
        private _divFilaDownload: Div;
        private _divFilaUpload: Div;
        private _divImagem: Div;
        private _divProgresso: Div;

        private get arrDivTransferenciaItemDownload(): Array<TransferenciaItem>
        {
            if (this._arrDivTransferenciaItemDownload != null)
            {
                return this._arrDivTransferenciaItemDownload;
            }

            this._arrDivTransferenciaItemDownload = new Array<TransferenciaItem>();

            return this._arrDivTransferenciaItemDownload;
        }

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div(this.strId + "_divConteudo");

            return this._divConteudo;
        }

        private get divFilaDownload(): Div
        {
            if (this._divFilaDownload != null)
            {
                return this._divFilaDownload;
            }

            this._divFilaDownload = new Div(this.strId + "_divFilaDownload");

            return this._divFilaDownload;
        }

        private get divFilaUpload(): Div
        {
            if (this._divFilaUpload != null)
            {
                return this._divFilaUpload;
            }

            this._divFilaUpload = new Div(this.strId + "_divFilaUpload");

            return this._divFilaUpload;
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

        constructor()
        {
            super(TransferenciaViewer.name);
        }

        // #endregion Construtores

        // #region Métodos

        public baixarArquivo(arq: ArquivoDominio): void
        {
            if (arq == null)
            {
                return;
            }

            if (Utils.getBooStrVazia(arq.dir))
            {
                return;
            }

            for (var i = 0; i < this.arrDivTransferenciaItemDownload.length; i++)
            {
                if (arq.dir.toLowerCase() == this.arrDivTransferenciaItemDownload[i].arq.dir.toLowerCase())
                {
                    return;
                }
            }

            var divTransferenciaItem = new TransferenciaItem(arq, this.arrDivTransferenciaItemDownload.length);

            divTransferenciaItem.booDownload = true;

            this.divFilaDownload.jq.append(divTransferenciaItem.strLayoutFixo);

            this.arrDivTransferenciaItemDownload.push(divTransferenciaItem);

            divTransferenciaItem.iniciar();

            this.mostrar();
        }

        public downloadParte(objTransferencia: TransferenciaDominio): void
        {
            for (var i = 0; i < this.arrDivTransferenciaItemDownload.length; i++)
            {
                if (this.arrDivTransferenciaItemDownload[i].downloadParte(objTransferencia))
                {
                    return;
                }
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}