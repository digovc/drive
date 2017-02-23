/// <reference path="../../../Web.TypeScript/erro/Erro.ts"/>
/// <reference path="../../../Web.TypeScript/html/componente/mobile/TileBase.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/OnClickListener.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module Drive
{
    // #region Importações

    import Div = Web.Div;
    import Erro = Web.Erro;
    import OnClickListener = Web.OnClickListener;
    import TileBase = Web.TileBase;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ArquivoTile extends TileBase implements OnClickListener
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arq: ArquivoDominio;
        private _divDttAlteracao: Div;
        private _divIcone: Div;
        private _divTitulo: Div;

        private get arq(): ArquivoDominio
        {
            return this._arq;
        }

        private set arq(arq: ArquivoDominio)
        {
            this._arq = arq;
        }

        private get divDttAlteracao(): Div
        {
            if (this._divDttAlteracao != null)
            {
                return this._divDttAlteracao;
            }

            this._divDttAlteracao = new Div(this.strId + "_divDttAlteracao");

            return this._divDttAlteracao;
        }

        private get divIcone(): Div
        {
            if (this._divIcone != null)
            {
                return this._divIcone;
            }

            this._divIcone = new Div(this.strId + "_divIcone");

            return this._divIcone;
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

        constructor(intIndex: number, arq: ArquivoDominio)
        {
            super(ArquivoTile.name + "_" + intIndex.toString());

            this.arq = arq;
        }

        // #endregion Construtores

        // #region Métodos

        private abrir(): void
        {
            if (this.arq == null)
            {
                return;
            }

            if (this.arq.booPasta)
            {
                this.abrirConteudo();
            }
            else
            {
                this.abrirDetalhe();
            }
        }

        private abrirConteudo(): void
        {
            PagPrincipalDrive.i.abrirConteudo(this.arq);
        }

        private abrirDetalhe(): void
        {
            PagPrincipalDrive.i.abrirDetalhe(this.arq);
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarDivIcone();

            this.mostrar();
        }

        private inicializarDivIcone(): void
        {
            if (this.arq == null)
            {
                return;
            }

            if (this.arq.booPasta)
            {
                this.divIcone.jq.css("background-image", "url(https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/128/Folder_-_Google_Docs.png)");
            }
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            if (Utils.getBooStrVazia(strLayoutFixo))
            {
                return null;
            }

            strLayoutFixo = strLayoutFixo.replace("_tile_id", this.strId);

            strLayoutFixo = strLayoutFixo.replace("_dtt_alteracao_conteudo", Utils.getStrDttAmigavel(this.arq.dttAlteracao));
            strLayoutFixo = strLayoutFixo.replace("_dtt_alteracao_id", this.divDttAlteracao.strId);

            strLayoutFixo = strLayoutFixo.replace("_icone_id", this.divIcone.strId);

            strLayoutFixo = strLayoutFixo.replace("_arquivo_titulo", this.arq.strNome);
            strLayoutFixo = strLayoutFixo.replace("_titulo_id", this.divTitulo.strId);

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
                        this.abrir();
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