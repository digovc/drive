/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ArquivoViewer extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrArq: Array<ArquivoDominio>;
        private _divConteudo: Div;
        private _divVazio: Div;

        private get arrArq(): Array<ArquivoDominio>
        {
            return this._arrArq;
        }

        private set arrArq(arrArq: Array<ArquivoDominio>)
        {
            this._arrArq = arrArq;
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

        private get divVazio(): Div
        {
            if (this._divVazio != null)
            {
                return this._divVazio;
            }

            this._divVazio = new Div(this.strId + "_divVazio");

            return this._divVazio;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(ArquivoViewer.name);
        }

        // #endregion Construtores

        // #region Métodos

        private addArquivo(arq: ArquivoDominio): void
        {
            if (arq == null)
            {
                return;
            }

            var divArq = new ArquivoTile(this.arrArq.indexOf(arq), arq);

            this.divConteudo.jq.append(divArq.strLayoutFixo);

            divArq.iniciar();
        }

        private atualizarConteudo(): void
        {
            this.divConteudo.strConteudo = null;

            if (this.arrArq == null)
            {
                this.divVazio.mostrar();
                return;
            }

            if (this.arrArq.length < 1)
            {
                this.divVazio.mostrar();
                return;
            }

            this.divVazio.esconder();

            this.arrArq.forEach((arq) => { this.addArquivo(arq) });
        }

        public carregarConteudo(arrArq: Array<ArquivoDominio>): void
        {
            if (arrArq == null)
            {
                return;
            }

            if (arrArq.length < 1)
            {
                return;
            }

            this.arrArq = arrArq;

            this.atualizarConteudo();
        }

        public carregarConteudoVazio(): void
        {
            this.arrArq = null;

            this.atualizarConteudo();
        }

        public limparConteudo(): void
        {
            this.arrArq == null;
            this.divConteudo.strConteudo = null;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}