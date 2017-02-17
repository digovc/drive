/// <reference path="../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

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

    export class BarraEndereco extends ComponenteHtml implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arrDivBarraEnderecoItem: Array<BarraEnderecoItem>;
        private _dir: string;
        private _dirTemp: string;
        private _divConteudo: Div;
        private _divHome: Div;

        private _arqHome: ArquivoDominio;

        private get arqHome(): ArquivoDominio
        {
            if (this._arqHome != null)
            {
                return this._arqHome;
            }

            this._arqHome = this.getArqHome();

            return this._arqHome;
        }

        private get arrDivBarraEnderecoItem(): Array<BarraEnderecoItem>
        {
            return this._arrDivBarraEnderecoItem;
        }

        private set arrDivBarraEnderecoItem(arrDivBarraEnderecoItem: Array<BarraEnderecoItem>)
        {
            this._arrDivBarraEnderecoItem = arrDivBarraEnderecoItem;
        }

        private get dir(): string
        {
            return this._dir;
        }

        private set dir(dir: string)
        {
            this._dir = dir;
        }

        private get dirTemp(): string
        {
            return this._dirTemp;
        }

        private set dirTemp(dirTemp: string)
        {
            this._dirTemp = dirTemp;
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

        private get divHome(): Div
        {
            if (this._divHome != null)
            {
                return this._divHome;
            }

            this._divHome = new Div(this.strId + "_divHome");

            return this._divHome;
        }

        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(BarraEndereco.name);
        }

        // #endregion Construtores

        // #region Métodos

        private abrirHome(): void
        {
            PagPrincipalDrive.i.abrirConteudo(this.arqHome);
        }

        public carregarDiretorio(dir: string): void
        {
            this.limparConteudo();

            if (Utils.getBooStrVazia(dir))
            {
                return;
            }

            this.arrDivBarraEnderecoItem = new Array<BarraEnderecoItem>();
            this.dir = dir;
            this.dirTemp = Utils.STR_VAZIA;

            var arrDir = dir.split("/");

            if (arrDir == null)
            {
                return;
            }

            if (arrDir.length < 2)
            {
                return;
            }

            for (var i = 0; i < arrDir.length; i++)
            {
                this.carregarArquivoItem(arrDir[i]);
            }
        }

        private carregarArquivoItem(dir: string): void
        {
            if (Utils.getBooStrVazia(dir))
            {
                return;
            }

            this.dirTemp = (this.dirTemp + "/" + dir)

            var divBarraEnderecoItem = new BarraEnderecoItem((this.arrDivBarraEnderecoItem.length + 1), this.dirTemp);

            this.divConteudo.jq.append(divBarraEnderecoItem.strLayoutFixo);

            this.arrDivBarraEnderecoItem.push(divBarraEnderecoItem);

            divBarraEnderecoItem.iniciar();
        }

        private getArqHome(): ArquivoDominio
        {
            var arqHomeResultado = new ArquivoDominio();

            arqHomeResultado.booPasta = true;
            arqHomeResultado.dir = "/";

            return arqHomeResultado;
        }

        public limparConteudo(): void
        {
            if (this.arrDivBarraEnderecoItem != null)
            {
                this.arrDivBarraEnderecoItem.forEach((divBarraEnderecoItem) => { divBarraEnderecoItem.dispose() });
            }

            this.arrDivBarraEnderecoItem = null;
        }

        protected setEventos(): void
        {
            super.setEventos();

            this.divHome.addEvtOnClickListener(this);
        }

        // #endregion Métodos

        // #region Eventos

        public onClick(objSender: Object, arg: JQueryEventObject): void
        {
            try
            {
                switch (objSender)
                {
                    case this.divHome:
                        this.abrirHome();
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