namespace Drive.DataBase.Dominio
{
    internal class TransferenciaDominio : DominioDriveBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private string _dirArquivo;
        private int _intParte;
        private string _strData;

        public string dirArquivo
        {
            get
            {
                return _dirArquivo;
            }

            set
            {
                _dirArquivo = value;
            }
        }

        public int intParte
        {
            get
            {
                return _intParte;
            }

            set
            {
                _intParte = value;
            }
        }

        public string strData
        {
            get
            {
                return _strData;
            }

            set
            {
                _strData = value;
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