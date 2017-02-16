module Drive
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ArquivoDominio extends DominioDriveBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _booPasta: boolean;
        private _dir: string;

        public get booPasta(): boolean
        {
            return this._booPasta;
        }

        public set booPasta(booPasta: boolean)
        {
            this._booPasta = booPasta;
        }

        public get dir(): string
        {
            return this._dir;
        }

        public set dir(dir: string)
        {
            this._dir = dir;
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