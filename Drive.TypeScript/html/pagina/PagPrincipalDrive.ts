/// <reference path="../../../Web.TypeScript/html/pagina/PagMobile.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module Drive
{
    // #region Importações

    import PagMobile = Web.PagMobile;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class PagPrincipalDrive extends PagMobile
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        protected static _i: PagPrincipalDrive;

        public static get i(): PagPrincipalDrive
        {
            if (PagPrincipalDrive._i != null)
            {
                return PagPrincipalDrive._i;
            }

            PagPrincipalDrive._i = new PagPrincipalDrive();

            return PagPrincipalDrive._i;
        }

        private _divActionBarDrive: ActionBarDrive;
        private _divArquivoViewer: ArquivoViewer;
        private _divBarraEndereco: BarraEndereco;
        private _divMenuDrive: MenuDrive;

        public get divActionBarDrive(): ActionBarDrive
        {
            if (this._divActionBarDrive != null)
            {
                return this._divActionBarDrive;
            }

            this._divActionBarDrive = new ActionBarDrive();

            return this._divActionBarDrive;
        }

        private get divArquivoViewer(): ArquivoViewer
        {
            if (this._divArquivoViewer != null)
            {
                return this._divArquivoViewer;
            }

            this._divArquivoViewer = new ArquivoViewer();

            return this._divArquivoViewer;
        }

        private get divBarraEndereco(): BarraEndereco
        {
            if (this._divBarraEndereco != null)
            {
                return this._divBarraEndereco;
            }

            this._divBarraEndereco = new BarraEndereco();

            return this._divBarraEndereco;
        }

        private get divMenuDrive(): MenuDrive
        {
            if (this._divMenuDrive != null)
            {
                return this._divMenuDrive;
            }

            this._divMenuDrive = new MenuDrive();

            return this._divMenuDrive;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        public abrirConteudo(arq: ArquivoDominio): void
        {
            this.divArquivoViewer.limparConteudo();
            this.divBarraEndereco.limparConteudo();

            SrvWsDrive.i.abrirConteudo(arq);
        }

        public carregarConteudo(arrArq: Array<ArquivoDominio>): void
        {
            if (arrArq == null)
            {
                this.carregarConteudoVazio("/");
                return;
            }

            this.divArquivoViewer.carregarConteudo(arrArq);

            this.carregarConteudoDivBarraEndereco(arrArq);
        }

        private carregarConteudoDivBarraEndereco(arrArq: Array<ArquivoDominio>): void
        {
            if (arrArq.length < 1)
            {
                return;
            }

            if (Utils.getBooStrVazia(arrArq[0].dir))
            {
                return;
            }

            var dirTemp = arrArq[0].dir.substring(0, arrArq[0].dir.lastIndexOf("/"));

            if (Utils.getBooStrVazia(dirTemp))
            {
                return;
            }

            this.divBarraEndereco.carregarDiretorio(dirTemp);
        }

        public carregarConteudoVazio(dir: string): void
        {
            this.divArquivoViewer.carregarConteudoVazio();
            this.divBarraEndereco.carregarDiretorio(dir);
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.divActionBarDrive.iniciar();
            this.divArquivoViewer.iniciar();
            this.divBarraEndereco.iniciar();
            this.divMenuDrive.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }

    // #region Inicialização

    $(document).ready(() => { PagPrincipalDrive.i.iniciar(); });

    // #endregion Inicialização
}