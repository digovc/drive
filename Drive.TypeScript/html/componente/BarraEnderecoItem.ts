/// <reference path="../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module Drive
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Erro = Web.Erro;
    import OnClickListener = Web.OnClickListener;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class BarraEnderecoItem extends ComponenteHtml implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arq: ArquivoDominio;
        private _dir: string;

        private get arq(): ArquivoDominio
        {
            if (this._arq != null)
            {
                return this._arq;
            }

            this._arq = this.getArq();

            return this._arq;
        }

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

        private carregarConteudo(): void
        {
            PagPrincipalDrive.i.abrirConteudo(this.arq);
        }

        private getArq(): ArquivoDominio
        {
            var arqResultado = new ArquivoDominio();

            arqResultado.booPasta = true;
            arqResultado.dir = this.dir;

            return arqResultado;
        }

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

        protected setEventos(): void
        {
            super.setEventos();

            this.addEvtOnClickListener(this);
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
                        this.carregarConteudo();
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