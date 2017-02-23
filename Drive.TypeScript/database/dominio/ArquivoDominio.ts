module Drive
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ArquivoDominio extends DominioDriveBase
    {
        // #region Constantes

        public static get INT_TIPO_GERAL(): number { return 0 };
        public static get INT_TIPO_IMAGEM_JPG(): number { return 3 };
        public static get INT_TIPO_IMAGEM_PNG(): number { return 2 };
        public static get INT_TIPO_TXT(): number { return 1 };

        // #endregion Constantes

        // #region Atributos

        private _booPasta: boolean;
        private _dir: string;
        private _intTipo: number = ArquivoDominio.INT_TIPO_GERAL;

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

        public get intTipo(): number
        {
            return this._intTipo;
        }

        public set intTipo(intTipo: number)
        {
            this._intTipo = intTipo;
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