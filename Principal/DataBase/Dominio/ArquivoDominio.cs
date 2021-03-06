﻿namespace Drive.DataBase.Dominio
{
    internal class ArquivoDominio : DominioDriveBase
    {
        #region Constantes

        public const int INT_TIPO_GERAL = 0;
        public const int INT_TIPO_IMAGEM_JPG = 3;
        public const int INT_TIPO_IMAGEM_PNG = 2;
        public const int INT_TIPO_TXT = 1;

        #endregion Constantes

        #region Atributos

        private bool _booPasta;
        private string _dir;
        private long _intTamanho;
        private int _intTipo = INT_TIPO_GERAL;

        public bool booPasta
        {
            get
            {
                return _booPasta;
            }

            set
            {
                _booPasta = value;
            }
        }

        public string dir
        {
            get
            {
                return _dir;
            }

            set
            {
                _dir = value;
            }
        }

        public long intTamanho
        {
            get
            {
                return _intTamanho;
            }

            set
            {
                _intTamanho = value;
            }
        }

        public int intTipo
        {
            get
            {
                return _intTipo;
            }

            set
            {
                _intTipo = value;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}