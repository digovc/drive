/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ArquivoViewer extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrArq: Array<ArquivoDominio>;

        private get arrArq(): Array<ArquivoDominio>
        {
            return this._arrArq;
        }

        private set arrArq(arrArq: Array<ArquivoDominio>)
        {
            this._arrArq = arrArq;
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

            this.jq.append(divArq.strLayoutFixo);

            divArq.iniciar();
        }

        private atualizarConteudo(): void
        {
            this.strConteudo = null;

            if (this.arrArq == null)
            {
                return;
            }

            if (this.arrArq.length < 1)
            {
                return;
            }

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

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}