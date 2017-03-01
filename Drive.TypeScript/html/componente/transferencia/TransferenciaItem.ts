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

    export class TransferenciaItem extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _arq: ArquivoDominio;
        private _arrBufferData: ArrayBuffer;
        private _booDownload: boolean;
        private _divImagem: Div;
        private _divProgresso: Div;
        private _divTitulo: Div;
        private _dttUltimoRecebimento: Date;
        private _intRecebido: number = 0;

        public get arq(): ArquivoDominio
        {
            return this._arq;
        }

        public set arq(arq: ArquivoDominio)
        {
            this._arq = arq;
        }

        private get arrBufferData(): ArrayBuffer
        {
            return this._arrBufferData;
        }

        private set arrBufferData(arrBufferData: ArrayBuffer)
        {
            this._arrBufferData = arrBufferData;
        }

        public get booDownload(): boolean
        {
            return this._booDownload;
        }

        public set booDownload(booDownload: boolean)
        {
            this._booDownload = booDownload;
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

        private get divTitulo(): Div
        {
            if (this._divTitulo != null)
            {
                return this._divTitulo;
            }

            this._divTitulo = new Div(this.strId + "_divTitulo");

            return this._divTitulo;
        }

        private get dttUltimoRecebimento(): Date
        {
            return this._dttUltimoRecebimento;
        }

        private set dttUltimoRecebimento(dttUltimoRecebimento: Date)
        {
            this._dttUltimoRecebimento = dttUltimoRecebimento;
        }

        private get intRecebido(): number
        {
            return this._intRecebido;
        }

        private set intRecebido(intRecebido: number)
        {
            this._intRecebido = intRecebido;
        }

        // #endregion Atributos

        // #region Construtores

        constructor(arq: ArquivoDominio, intIndex: number)
        {
            super(TransferenciaItem.name + "_" + intIndex.toString());

            this.arq = arq;
        }

        // #endregion Construtores

        // #region Métodos

        private atualizarLayout(): void
        {
            this.divProgresso.jq.stop();

            if (this.arq == null)
            {
                return;
            }

            if (this.intRecebido == this.arq.intTamanho)
            {
                this.divProgresso.jq.animate({ "width": "100%" }, 200);
                return;
            }

            var intTempo = 500;

            if (this.dttUltimoRecebimento != null)
            {
                intTempo = (Date.now() - this.dttUltimoRecebimento.getTime());
            }

            var i = Math.trunc(this.intRecebido / this.arq.intTamanho * 100);

            this.divProgresso.jq.animate({ "width": (i.toString() + "%") }, intTempo);
        }

        private download(): void
        {
            if (!this.booDownload)
            {
                return;
            }

            if (this.arq == null)
            {
                return;
            }

            SrvWsDrive.i.download(this.arq);
        }

        public downloadParte(objTransferencia: TransferenciaDominio): boolean
        {
            if (objTransferencia == null)
            {
                return false;
            }

            if (Utils.getBooStrVazia(objTransferencia.dirArquivo))
            {
                return false;
            }

            if (this.arq.dir.toLowerCase() != objTransferencia.dirArquivo.toLowerCase())
            {
                return false;
            }

            var arrBufferParte = Utils.base64ToArrayBuffer(objTransferencia.strData);

            if (arrBufferParte == null)
            {
                return;
            }

            this.intRecebido += arrBufferParte.byteLength;

            if (this.arrBufferData == null)
            {
                this.arrBufferData = new ArrayBuffer(0);
            }

            this.arrBufferData = Utils.appendBuffer(this.arrBufferData, arrBufferParte);

            this.atualizarLayout();

            this.downloadParteProxima(objTransferencia);

            this.finalizarDownload();

            this.dttUltimoRecebimento = new Date();

            return true;
        }

        private downloadParteProxima(objTransferencia: TransferenciaDominio): void
        {
            if (objTransferencia.strData == null)
            {
                return;
            }

            if (this.intRecebido == this.arq.intTamanho)
            {
                return;
            }

            SrvWsDrive.i.downloadParteProxima(objTransferencia);
        }

        private finalizarDownload(): void
        {
            if (this.arrBufferData == null)
            {
                return;
            }

            if (this.intRecebido < this.arq.intTamanho)
            {
                return;
            }

            this.salvarArquivo();
        }

        protected inicializar(): void
        {
            super.inicializar();

            this.inicializarArq();

            this.mostrar();

            this.download();
        }

        private inicializarArq(): void
        {
            if (this.arq == null)
            {
                return;
            }

            this.divTitulo.strConteudo = this.arq.strNome;
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            strLayoutFixo = strLayoutFixo.replace("_transferencia_item_id", this.strId);
            strLayoutFixo = strLayoutFixo.replace("_imagem_id", this.divImagem.strId);
            strLayoutFixo = strLayoutFixo.replace("_progresso_id", this.divProgresso.strId);
            strLayoutFixo = strLayoutFixo.replace("_titulo_id", this.divTitulo.strId);

            return strLayoutFixo;
        }

        private salvarArquivo(): void
        {
            if (this.arrBufferData == null)
            {
                return;
            }

            if (this.arrBufferData.byteLength != this.arq.intTamanho)
            {
                return;
            }

            var tagA = <any>document.createElement("a");

            var objBlob = new Blob([this.arrBufferData], { type: "octet/stream" })
            var url = window.URL.createObjectURL(objBlob);

            tagA.download = this.arq.strNome;
            tagA.href = url;
            tagA.style = "display: none";

            document.body.appendChild(tagA);

            tagA.click();

            window.URL.revokeObjectURL(url);

            document.body.removeChild(tagA);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}