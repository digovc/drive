/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class BarraEnderecoItem extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _dir: string;

        private get dir(): string
        {
            return this._dir;
        }

        private set dir(dir: string)
        {
            this._dir = dir;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(intIndex: number, dir: string)
        {
            super(BarraEnderecoItem.name + "_" + intIndex.toString());

            this.dir = dir;
        }

        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarStrConteudo();

            this.mostrar();
        }

        private inicializarStrConteudo(): void
        {
            if (Utils.getBooStrVazia(this.dir))
            {
                return;
            }

            var dirTemp = this.dir.substring(this.dir.lastIndexOf("/"));

            if (dirTemp.startsWith("/"))
            {
                dirTemp = dirTemp.substring(1);
            }

            this.strConteudo = dirTemp;
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            strLayoutFixo = strLayoutFixo.replace("_barra_item_id", this.strId);

            return strLayoutFixo;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}