module Drive
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class TransferenciaDominio extends DominioDriveBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _dirArquivo: string;
        private _intParte: number;
        private _strData: string;

        public get dirArquivo(): string
        {
            return this._dirArquivo;
        }

        public set dirArquivo(dirArquivo: string)
        {
            this._dirArquivo = dirArquivo;
        }

        public get intParte(): number
        {
            return this._intParte;
        }

        public set intParte(intParte: number)
        {
            this._intParte = intParte;
        }

        public get strData(): string
        {
            return this._strData;
        }

        public set strData(strData: string)
        {
            this._strData = strData;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}